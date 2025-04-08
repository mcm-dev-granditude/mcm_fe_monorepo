import { gql, GraphQLClient } from "graphql-request";
import { fragmentMap } from "./queries/fragments";
import { ContentPageBlocksItem, getSdk } from "./generated/graphql";
import { BlockCollectionResponse, ContentfulPage } from "./types";


// GraphQL client setup
const headers = {
  Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  "Content-Type": "application/json"
};

const graphqlClient = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  {headers}
);

export const sdk = getSdk(graphqlClient);

// Get all page slugs for static generation
export async function getAllContentfulPageSlugs(): Promise<string[]> {
  try {
    const response = await sdk.GetAllPageSlugs();
    return response.contentPageCollection?.items.map(page => page?.slug || "")
    .filter(slug => slug !== "") || [];
  } catch (error) {
    console.error("Error fetching page slugs:", error);
    return [];
  }
}

// Main function to get page content with blocks
export async function getContentfulPage(slug: string): Promise<ContentfulPage | null> {
  try {
    // Step 1: Get basic page data with block references
    const pageResponse = await sdk.GetPageBySlug({slug});

    const pageItems = pageResponse.contentPageCollection?.items;
    if (!pageItems || pageItems.length === 0) {
      return null;
    }

    const page = pageItems[0];
    if (!page) {
      return null;
    }

    // If there are no blocks, return the page as is
    if (!page.blocksCollection?.items?.length) {
      return {
        ...page,
        blocks: []
      };
    }

    // Step 2: Group block IDs by type
    const blocksByType: Record<string, string[]> = {};
    page.blocksCollection.items.forEach((blockRef) => {
      if (!blockRef?.__typename || !blockRef.sys?.id) return;

      if (!blocksByType[blockRef.__typename]) {
        blocksByType[blockRef.__typename] = [];
      }

      blocksByType[blockRef.__typename]?.push(blockRef.sys.id);
    });

    // Step 3: Create queries for each block type
    type BlockQueryInfo = {
      type: string;
      ids: string[];
      queryString: string;
      promise: Promise<BlockCollectionResponse>;
    };

    const blockQueries: BlockQueryInfo[] = Object.entries(blocksByType)
    .map(([blockType, ids]) => {
      const queryString = generateBlockQuery(blockType, ids);
      if (!queryString) return null;

      return {
        type: blockType,
        ids,
        queryString,
        promise: graphqlClient.request<BlockCollectionResponse>(queryString, {ids})
      };
    })
    .filter((query): query is BlockQueryInfo => query !== null);

    // Step 4: Execute all block queries in parallel using Promise.allSettled instead of Promise.all
    const blockResults = await Promise.allSettled(blockQueries.map(query => query.promise));

    // Step 5: Create a map of blocks by ID
    const blocksById: Record<string, ContentPageBlocksItem> = {};

    blockResults.forEach((result, index) => {
      const query = blockQueries[index];

      if (!query) return;

      if (result.status === "fulfilled") {
        const collectionName = `${query.type.charAt(0).toLowerCase() + query.type.slice(1)}Collection`;
        const collection = result.value?.[collectionName];

        if (collection?.items) {
          collection.items.forEach((block: ContentPageBlocksItem) => {
            if (block?.sys?.id) {
              blocksById[block.sys.id] = block;
            }
          });
        }
      } else {
        console.error(`Error fetching blocks of type ${query.type}:`, result.reason);
        console.error(`Failed query for block type ${query.type} with IDs:`, query.ids);
        console.error(`Failed query string:`, query.queryString);
      }
    });

    // Step 6: Set blocks in original order
    const blocks = page.blocksCollection.items.map((blockRef) => {
      if (!blockRef?.sys?.id) return blockRef;

      return blocksById[blockRef.sys.id] || blockRef;
    }) as ContentPageBlocksItem[];

    // Step 7: Return the page with full block data
    return {
      ...page,
      blocks
    };
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
}

export function generateBlockQuery(blockType: string, ids: string[]) {
  if (ids.length === 0) {
    return null;
  }

  const fragmentKey = `${blockType}Fragment`;
  const fragment = fragmentMap[fragmentKey as keyof typeof fragmentMap];

  if (!fragment) {
    console.warn(`Fragment not found for block type: ${blockType}`);
    return null;
  }

  const collectionName = `${blockType.charAt(0).toLowerCase() + blockType.slice(1)}Collection`;

  return gql`
    ${fragment}
    query Get${blockType}ById($ids: [String!]) {
      ${collectionName}(where: { sys: { id_in: $ids } }) {
        items {
          ...${blockType}
        }
      }
    }
  `;
}

export async function fetchPageBySlug(slug: string) {
  let page = null;

  try {
    page = await getContentfulPage(slug);
    return page;
  } catch (e) {
    console.error("Error fetching page:", e);
  }

  return null;
}