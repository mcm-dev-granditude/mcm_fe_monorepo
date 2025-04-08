import { ContentPageBlocksItem } from "./generated/graphql";

export interface ContentfulPage {
  title?: string | null;
  slug?: string | null;
  description?: string | null;
  keywords?: string | null;
  excludeFromSiteBuild?: boolean | null;
  excludePageFromInternalSearch?: boolean | null;
  excludePageFromExternalSearch?: boolean | null;
  sys: {
    id: string;
  };
  isMcmNewsPage?: boolean | null;
  showScrollToTopButton?: boolean | null;
  blocks?: ContentPageBlocksItem[];
}

export interface BlockCollectionResponse {
  [key: string]: {
    items: Array<ContentPageBlocksItem>;
  };
}