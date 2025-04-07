// codegen.js
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: path.resolve(process.cwd(), "./.env.local")
  });
}

module.exports = {
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT ||
                                                                                                           "master"}`]: {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
        }
      }
    }
  ],
  documents: "./src/lib/contentful/**/*.{ts,tsx}",
  generates: {
    "./src/lib/contentful/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request"
      ],
      config: {
        avoidOptionals: true,
        maybeValue: "T | null",
        skipTypename: false,
        withHooks: false,
        dedupeFragments: true,
        scalars: {
          JSON: "any",
          DateTime: "string"
        },
        // Add explicit operation naming to ensure types are generated
        namingConvention: {
          enumValues: "change-case-all#upperCase"
        },
        // Force generation of query operations
        operationResultSuffix: "Response",
        // Add debug output
        emitLegacyCommonJSImports: false
      }
    }
  },
  verbose: false,
  debug: false,
  config: {
    namingConvention: "keep"
  }
};