import { strict as assert } from "assert";
import { createClient } from "contentful-management";
import * as path from "path";
import * as dotenv from "dotenv";
import * as fs from "fs";
import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);

dotenv.config({path: path.resolve(__dirname, "../../../../../.env.local")});

const {
  CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT
} = process.env;

assert(CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN, "CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN is required");
assert(CONTENTFUL_SPACE_ID, "CONTENTFUL_SPACE_ID is required");
assert(CONTENTFUL_ENVIRONMENT, "CONTENTFUL_ENVIRONMENT is required");

/**
 * Fetches content types from Contentful, exports them to a JSON file,
 * and generates TypeScript types from the JSON
 */
const generateContentfulTypes = async () => {
  try {
    const contentfulClient = createClient({
      accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN
    });

    const space = await contentfulClient.getSpace(CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment(CONTENTFUL_ENVIRONMENT);

    const contentTypesCollection = await environment.getContentTypes();
    const contentTypes = contentTypesCollection.items;

    const jsonOutputDir = path.resolve(__dirname, "./");
    const typesOutputDir = path.resolve(__dirname, "./generated-types");

    if (!fs.existsSync(jsonOutputDir)) {
      fs.mkdirSync(jsonOutputDir, {recursive: true});
    }

    if (!fs.existsSync(typesOutputDir)) {
      fs.mkdirSync(typesOutputDir, {recursive: true});
    }

    const formattedContentTypes = {
      contentTypes: contentTypes.map(contentType => ({
        sys: contentType.sys,
        name: contentType.name,
        description: contentType.description,
        displayField: contentType.displayField,
        fields: contentType.fields
      }))
    };

    const formattedOutputFilePath = path.resolve(jsonOutputDir, "content-types-formatted.json");

    fs.writeFileSync(
      formattedOutputFilePath,
      JSON.stringify(formattedContentTypes, null, 2),
      "utf8"
    );

    const command = `npx cf-content-types-generator ${formattedOutputFilePath} --out ${typesOutputDir} --v10 --jsdoc --response`;

    const {stdout, stderr} = await execPromise(command);

    if (stderr && !stderr.includes("ExperimentalWarning")) {
      console.error("Error generating TypeScript types:", stderr);
      throw new Error(stderr);
    }

    const typeFiles = fs.readdirSync(typesOutputDir)
    .filter(file => file.endsWith(".ts") && file !== "index.ts");

    let indexContent = "// Auto-generated index file for Contentful types\n\n";
    typeFiles.forEach(file => {
      const typeName = file.replace(".ts", "");
      indexContent += `export * from './${typeName}';\n`;
    });

    fs.writeFileSync(
      path.resolve(typesOutputDir, "index.ts"),
      indexContent,
      "utf8"
    );

    const helpersContent = `// Helper types and utilities for Contentful
import { Entry, EntryCollection, EntrySkeletonType } from "contentful";

/**
 * Helper type to get strongly typed Entry objects
 * Use with Contentful Entry objects to ensure type safety
 *
 * @example
 * import { IBookingAgency } from './types';
 * import { ContentfulEntry, ContentfulEntryCollection } from './helpers';
 *
 * // Strongly typed entry
 * const entry: ContentfulEntry<IBookingAgency> = response.items[0];
 *
 * // Strongly typed collection
 * const entries: ContentfulEntryCollection<IBookingAgency> = response;
 */
export type ContentfulEntry<T extends EntrySkeletonType> = Entry<T>;

/**
 * Helper type for entry collections
 */
export type ContentfulEntryCollection<T extends EntrySkeletonType> = EntryCollection<T>;
`;

    fs.writeFileSync(
      path.resolve(typesOutputDir, "helpers.ts"),
      helpersContent,
      "utf8"
    );

    fs.unlinkSync(formattedOutputFilePath);

    console.log("TypeScript type generation completed successfully! ✅");

  } catch (error) {
    console.error("Error generating Contentful types:", error);
    console.log("Generation failed. JSON file was kept for debugging.");
    process.exit(1);
  }
};

void generateContentfulTypes();