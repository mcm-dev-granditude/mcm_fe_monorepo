// src/lib/contentful/queries.ts
import { gql } from "graphql-request";

export const GET_ALL_PAGE_SLUGS = gql`
  query GetAllPageSlugs {
    contentPageCollection(where: { excludeFromSiteBuild_not: true }) {
      items {
        slug
      }
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: String!) {
    contentPageCollection(where: {slug: $slug}, limit: 1) {
      items {
        title
        slug
        description
        keywords
        excludeFromSiteBuild
        excludePageFromInternalSearch
        sys {
          id
        }
        isMcmNewsPage
        showScrollToTopButton
        blocksCollection {
          items {
            __typename
            ... on LandingBlock {
              sys {
                id
              }
            }
            ... on HeroBlock {
              sys {
                id
              }
            }
            ... on CardBlock {
              sys {
                id
              }
            }
            ... on TextBlock {
              sys {
                id
              }
            }
            ... on CardListBlock {
              sys {
                id
              }
            }
            ... on LoginBlock {
              sys {
                id
              }
            }
            ... on WidgetBlock {
              sys {
                id
              }
            }
            ... on LiveScoreBlock {
              sys {
                id
              }
            }
            ... on BetSuggestionBlock {
              sys {
                id
              }
            }
            ... on TournamentStandingsBlock {
              sys {
                id
              }
            }
            ... on CardLinkBlock {
              sys {
                id
              }
            }
            ... on NewsBlock {
              sys {
                id
              }
            }
            ... on McmNewsBlock {
              sys {
                id
              }
            }
            ... on OddsComparsionBlock {
              sys {
                id
              }
            }
          }
        }
      }
    }
  }
`;
