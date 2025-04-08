import { gql } from "graphql-request";

// Base fragments (no dependencies)
export const CardBlockFragment = gql`
  fragment CardBlock on CardBlock {
   __typename
    sys {
      id
    }
    backgroundImage {
      url
    }
    title
    richText {
      json
    }
    isImageLeft
    buttonText
    buttonLink {
      slug
    }
    smallVersion
  }
`;

export const LandingBlockFragment = gql`
  fragment LandingBlock on LandingBlock {
   __typename
    sys {
      id
    }
    title
    backgroundImage {
      url
    }
    buttonText
    internalLink {
      slug
    }
  }
`;

export const HeroBlockFragment = gql`
  fragment HeroBlock on HeroBlock {
   __typename
    sys {
      id
    }
    image {
      url
      title
      description
    }
    paragraph
    opacity
  }
`;

export const TextBlockFragment = gql`
  fragment TextBlock on TextBlock {
   __typename
    sys {
      id
    }
    title
    text
    preamble
    optionalBackgroundImage {
      url
      title
      description
    }
    centerText
  }
`;

export const LoginBlockFragment = gql`
  fragment LoginBlock on LoginBlock {
   __typename
    sys {
      id
    }
  }
`;

export const WidgetBlockFragment = gql`
  fragment WidgetBlock on WidgetBlock {
   __typename
    sys {
      id
    }
    title
    text
    image {
      url
      title
      description
    }
    addRedBoxToTitle
  }
`;

// Fragments with dependencies
export const CardListBlockFragment = gql`
  ${CardBlockFragment}
  fragment CardListBlock on CardListBlock {
   __typename
    sys {
      id
    }
    cardListCollection(limit: 20, where:{sys:{id_exists:true}}) {
      items {
        ...CardBlock
      }
    }
  }
`;

export const LiveScoreBlockFragment = gql`
  fragment LiveScoreBlock on LiveScoreBlock {
   __typename
    sys {
      id
    }
    title
    sportsCollection(limit: 20) {
      items {
        sportId
        icon {
          url
          title
        }
      }
    }
    noLiveMatchesAvailable
    closedMatches
    tournamentSortOrderCollection(limit: 20, where:{sys:{id_exists:true}}) {
      items {
        tournamentId
        tournamentName
        flagIcon {
          url
          title
        }
        country
      }
    }
  }
`;

export const BetSuggestionBlockFragment = gql`
  fragment BetSuggestionBlock on BetSuggestionBlock {
   __typename
    sys {
      id
    }
    title
    sportsCollection(limit: 20, where:{sys:{id_exists:true}}) {
      items {
        sportId
        icon {
          url
          title
        }
      }
    }
  }
`;

export const TournamentStandingsBlockFragment = gql`
  fragment TournamentStandingsBlock on TournamentStandingsBlock {
   __typename
    sys {
      id
    }
    sport {
      sportId
      tournamentsCollection(limit: 20, where:{sys:{id_exists:true}}) {
        items {
          tournamentName
          tournamentId
          inActivate
        }
      }
      image {
        url
        title
      }
    }
  }
`;

export const CardLinkBlockFragment = gql`
  fragment CardLinkBlock on CardLinkBlock {
   __typename
    sys {
      id
    }
    backgroundImage {
      url
      title
    }
    link {
      slug
    }
    label
  }
`;

export const NewsBlockFragment = gql`
  fragment NewsBlock on NewsBlock {
   __typename
    sys {
      id
    }
    newsSource
    mcmNewsList {
      mcmNewsListCollection(limit: 10, where:{sys:{id_exists:true}}) {
        items {
          title
          image {
            url
            title
          }
          description
          text
          pubDate
          logoImage {
            url
            title
          }
          linkToNewsPage {
            slug
          }
        }
      }
    }
  }
`;

export const McmNewsBlockFragment = gql`
  fragment McmNewsBlock on McmNewsBlock {
   __typename
    sys {
      id
    }
    title
    image {
      url
      title
    }
    description
    text
    pubDate
    logoImage {
      url
      title
    }
    linkToNewsPage {
      slug
    }
  }
`;

export const OddsComparsionBlockFragment = gql`
  fragment OddsComparsionBlock on OddsComparsionBlock {
   __typename
    sys {
      id
    }
    sport {
      sportId
      tournamentsCollection(limit: 20, where:{sys:{id_exists:true}}) {
        items {
          tournamentName
          tournamentId
          inActivate
        }
      }
      image {
        url
        title
      }
    }
  }
`;

export const fragmentMap = {
  LandingBlockFragment,
  HeroBlockFragment,
  CardBlockFragment,
  TextBlockFragment,
  CardListBlockFragment,
  LoginBlockFragment,
  WidgetBlockFragment,
  LiveScoreBlockFragment,
  BetSuggestionBlockFragment,
  TournamentStandingsBlockFragment,
  CardLinkBlockFragment,
  NewsBlockFragment,
  McmNewsBlockFragment,
  OddsComparsionBlockFragment
};