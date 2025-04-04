import { GraphQLClient } from "graphql-request";

const headers = {
  Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  "Content-Type": "application/json"
};

const graphqlClient = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  {
    headers
  }
);


export async function fetchAllPageSlugs() {
  const query = `
    query GetContenfulPageBySlug {
  contentPageCollection(where: { excludeFromSiteBuild_not: true }) {
    items {
      slug
    }
  }
}
  `;

  const response = await graphqlClient.request(query);
  return response.pageCollection.items.map((page: {slug: string}) => page.slug);
}

export async function getContentfulPage(slug: string) {
  const query = `
query GetContentfulPage($slug: String!) {
  contentPageCollection(where: {slug: $slug}, limit: 1) {
    items {
      title
      slug
      description
      keywords
      excludeFromSiteBuild
      excludePageFromInternalSearch
      _id
      isMcmNewsPage
      blocksCollection {
        items {
          __typename
        }
      }
    }
  }
}
`;

  await graphqlClient.request(query, {slug});

  // const page = response.pageCollection.items[0];
  //
  // if (!page) {
  //   return null;
  // }
  //
  // console.log('Page: ', page);
  //
  // return {
  //   title: page.title,
  //   slug: page.slug,
  //   // contentBlocks: page.contentBlocksCollection.items.map((block: any) => {
  //   //   if (block.__typename === "FeatureList") {
  //   //     return {
  //   //       ...block,
  //   //       features: block.featuresCollection.items
  //   //     };
  //   //   }
  //   //   return block;
  //   // })
  // };
}