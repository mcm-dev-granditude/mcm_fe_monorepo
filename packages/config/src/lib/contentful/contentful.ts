// lib/contentful.ts
import { createClient } from "contentful";

const clientConf = {
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master"
};

const client = createClient(clientConf);

// Interface for a content block
export interface ContentfulBlock {
  id: string;
  contentType: string;
  rawData: any;
}

// Interface for a content page
export interface ContentfulPage {
  id: string;
  slug: string;
  title: string;
  description?: string;
  keywords?: string;
  excludePageFromExternalSearch?: boolean;
  showScrollToTopButton?: boolean;
  blocks: ContentfulBlock[];
}

// Function to get a page by slug
export async function getContentfulPage(slug: string): Promise<ContentfulPage | null> {
  try {
    const entries = await client.getEntries({
      content_type: "contentPage",
      "fields.slug": slug,
      include: 10
    });

    if (entries.items.length === 0) {
      return null;
    }

    const page = entries.items[0];

    if (!page) return null;

    // Transform blocks to our format
    const blocks = page.fields.blocks
      ? (page.fields.blocks as any[]).map(block => ({
        id: block.sys.id,
        contentType: block.sys.contentType.sys.id,
        rawData: block
      }))
      : [];

    return {
      id: page.sys.id,
      slug: page.fields.slug as string,
      title: page.fields.title as string,
      description: page.fields.description as string || undefined,
      keywords: page.fields.keywords as string || undefined,
      excludePageFromExternalSearch: page.fields.excludePageFromExternalSearch as boolean || false,
      showScrollToTopButton: page.fields.showScrollToTopButton as boolean || false,
      blocks
    };
  } catch (error) {
    console.error("Error fetching page from Contentful:", error);
    return null;
  }
}

// Function to get all page slugs for static generation
export async function getAllContentfulSlugs(): Promise<string[]> {
  try {
    const entries = await client.getEntries({
      content_type: "contentPage",
      select: ["fields.slug"]
    });

    return entries.items.map(item => {
      return item.fields.slug as string;
    });
  } catch (error) {
    console.error("Error fetching slugs from Contentful:", error);
    return [];
  }
}