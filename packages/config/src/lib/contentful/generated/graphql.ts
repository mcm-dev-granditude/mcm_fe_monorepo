import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']['output']>;
  fileName: Maybe<Scalars['String']['output']>;
  height: Maybe<Scalars['Int']['output']>;
  linkedFrom: Maybe<AssetLinkingCollections>;
  size: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  transform: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType: InputMaybe<Scalars['String']['input']>;
  contentType_contains: InputMaybe<Scalars['String']['input']>;
  contentType_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains: InputMaybe<Scalars['String']['input']>;
  contentType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName: InputMaybe<Scalars['String']['input']>;
  fileName_contains: InputMaybe<Scalars['String']['input']>;
  fileName_exists: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains: InputMaybe<Scalars['String']['input']>;
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height: InputMaybe<Scalars['Int']['input']>;
  height_exists: InputMaybe<Scalars['Boolean']['input']>;
  height_gt: InputMaybe<Scalars['Int']['input']>;
  height_gte: InputMaybe<Scalars['Int']['input']>;
  height_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt: InputMaybe<Scalars['Int']['input']>;
  height_lte: InputMaybe<Scalars['Int']['input']>;
  height_not: InputMaybe<Scalars['Int']['input']>;
  height_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size: InputMaybe<Scalars['Int']['input']>;
  size_exists: InputMaybe<Scalars['Boolean']['input']>;
  size_gt: InputMaybe<Scalars['Int']['input']>;
  size_gte: InputMaybe<Scalars['Int']['input']>;
  size_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt: InputMaybe<Scalars['Int']['input']>;
  size_lte: InputMaybe<Scalars['Int']['input']>;
  size_not: InputMaybe<Scalars['Int']['input']>;
  size_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url: InputMaybe<Scalars['String']['input']>;
  url_contains: InputMaybe<Scalars['String']['input']>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not: InputMaybe<Scalars['String']['input']>;
  url_not_contains: InputMaybe<Scalars['String']['input']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width: InputMaybe<Scalars['Int']['input']>;
  width_exists: InputMaybe<Scalars['Boolean']['input']>;
  width_gt: InputMaybe<Scalars['Int']['input']>;
  width_gte: InputMaybe<Scalars['Int']['input']>;
  width_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt: InputMaybe<Scalars['Int']['input']>;
  width_lte: InputMaybe<Scalars['Int']['input']>;
  width_not: InputMaybe<Scalars['Int']['input']>;
  width_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  bookingAgencyCollection: Maybe<BookingAgencyCollection>;
  cardBlockCollection: Maybe<CardBlockCollection>;
  cardLinkBlockCollection: Maybe<CardLinkBlockCollection>;
  contentPageCollection: Maybe<ContentPageCollection>;
  documentPageCollection: Maybe<DocumentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
  footerCollection: Maybe<FooterCollection>;
  heroBlockCollection: Maybe<HeroBlockCollection>;
  imageCollection: Maybe<ImageCollection>;
  landingBlockCollection: Maybe<LandingBlockCollection>;
  mainNavigationCollection: Maybe<MainNavigationCollection>;
  matchCollection: Maybe<MatchCollection>;
  matchEventItemCollection: Maybe<MatchEventItemCollection>;
  mcmNewsBlockCollection: Maybe<McmNewsBlockCollection>;
  siteConfigurationCollection: Maybe<SiteConfigurationCollection>;
  sportCollection: Maybe<SportCollection>;
  subNavItemCollection: Maybe<SubNavItemCollection>;
  teamCollection: Maybe<TeamCollection>;
  textBlockCollection: Maybe<TextBlockCollection>;
  tournamentCollection: Maybe<TournamentCollection>;
  widgetBlockCollection: Maybe<WidgetBlockCollection>;
};


export type AssetLinkingCollectionsBookingAgencyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsCardBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsCardLinkBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsDocumentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsHeroBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsLandingBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsMainNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsMatchCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsMatchEventItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsMcmNewsBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSiteConfigurationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSportCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSubNavItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsTeamCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsTextBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsTournamentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsWidgetBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  CONTENTTYPE_ASC = 'contentType_ASC',
  CONTENTTYPE_DESC = 'contentType_DESC',
  FILENAME_ASC = 'fileName_ASC',
  FILENAME_DESC = 'fileName_DESC',
  HEIGHT_ASC = 'height_ASC',
  HEIGHT_DESC = 'height_DESC',
  SIZE_ASC = 'size_ASC',
  SIZE_DESC = 'size_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC',
  WIDTH_ASC = 'width_ASC',
  WIDTH_DESC = 'width_DESC'
}

/** A block for bet suggestion, retrieves all matches and displays only matches with bet suggestion ordered by date [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/betSuggestionBlock) */
export type BetSuggestionBlock = Entry & _Node & {
  __typename?: 'BetSuggestionBlock';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<BetSuggestionBlockLinkingCollections>;
  sportsCollection: Maybe<BetSuggestionBlockSportsCollection>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
  translations: Maybe<Translations>;
};


/** A block for bet suggestion, retrieves all matches and displays only matches with bet suggestion ordered by date [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/betSuggestionBlock) */
export type BetSuggestionBlockInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A block for bet suggestion, retrieves all matches and displays only matches with bet suggestion ordered by date [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/betSuggestionBlock) */
export type BetSuggestionBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A block for bet suggestion, retrieves all matches and displays only matches with bet suggestion ordered by date [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/betSuggestionBlock) */
export type BetSuggestionBlockSportsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<BetSuggestionBlockSportsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SportFilter>;
};


/** A block for bet suggestion, retrieves all matches and displays only matches with bet suggestion ordered by date [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/betSuggestionBlock) */
export type BetSuggestionBlockTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A block for bet suggestion, retrieves all matches and displays only matches with bet suggestion ordered by date [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/betSuggestionBlock) */
export type BetSuggestionBlockTranslationsArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<TranslationsFilter>;
};

export type BetSuggestionBlockCollection = {
  __typename?: 'BetSuggestionBlockCollection';
  items: Array<Maybe<BetSuggestionBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BetSuggestionBlockFilter = {
  AND: InputMaybe<Array<InputMaybe<BetSuggestionBlockFilter>>>;
  OR: InputMaybe<Array<InputMaybe<BetSuggestionBlockFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sports: InputMaybe<CfSportNestedFilter>;
  sportsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  translations: InputMaybe<CfTranslationsNestedFilter>;
  translations_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type BetSuggestionBlockLinkingCollections = {
  __typename?: 'BetSuggestionBlockLinkingCollections';
  contentPageCollection: Maybe<ContentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};


export type BetSuggestionBlockLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<BetSuggestionBlockLinkingCollectionsContentPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type BetSuggestionBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BetSuggestionBlockLinkingCollectionsContentPageCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export enum BetSuggestionBlockOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export type BetSuggestionBlockSportsCollection = {
  __typename?: 'BetSuggestionBlockSportsCollection';
  items: Array<Maybe<Sport>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum BetSuggestionBlockSportsCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SPORTID_ASC = 'sportId_ASC',
  SPORTID_DESC = 'sportId_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/bookingAgency) */
export type BookingAgency = Entry & _Node & {
  __typename?: 'BookingAgency';
  _id: Scalars['ID']['output'];
  alias: Maybe<Scalars['String']['output']>;
  bookingAgency: Maybe<Scalars['JSON']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<BookingAgencyLinkingCollections>;
  logo: Maybe<Asset>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/bookingAgency) */
export type BookingAgencyAliasArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/bookingAgency) */
export type BookingAgencyBookingAgencyArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/bookingAgency) */
export type BookingAgencyInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/bookingAgency) */
export type BookingAgencyLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/bookingAgency) */
export type BookingAgencyLogoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookingAgencyCollection = {
  __typename?: 'BookingAgencyCollection';
  items: Array<Maybe<BookingAgency>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BookingAgencyFilter = {
  AND: InputMaybe<Array<InputMaybe<BookingAgencyFilter>>>;
  OR: InputMaybe<Array<InputMaybe<BookingAgencyFilter>>>;
  alias: InputMaybe<Scalars['String']['input']>;
  alias_contains: InputMaybe<Scalars['String']['input']>;
  alias_exists: InputMaybe<Scalars['Boolean']['input']>;
  alias_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alias_not: InputMaybe<Scalars['String']['input']>;
  alias_not_contains: InputMaybe<Scalars['String']['input']>;
  alias_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bookingAgency_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type BookingAgencyLinkingCollections = {
  __typename?: 'BookingAgencyLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type BookingAgencyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BookingAgencyOrder {
  ALIAS_ASC = 'alias_ASC',
  ALIAS_DESC = 'alias_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

/** Block containing background image and text in a card. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardBlock) */
export type CardBlock = Entry & _Node & {
  __typename?: 'CardBlock';
  _id: Scalars['ID']['output'];
  backgroundImage: Maybe<Asset>;
  buttonLink: Maybe<ContentPage>;
  buttonText: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  isImageLeft: Maybe<Scalars['Boolean']['output']>;
  linkedFrom: Maybe<CardBlockLinkingCollections>;
  richText: Maybe<CardBlockRichText>;
  smallVersion: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** Block containing background image and text in a card. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardBlock) */
export type CardBlockBackgroundImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block containing background image and text in a card. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardBlock) */
export type CardBlockButtonLinkArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ContentPageFilter>;
};


/** Block containing background image and text in a card. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardBlock) */
export type CardBlockButtonTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Block containing background image and text in a card. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardBlock) */
export type CardBlockInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Block containing background image and text in a card. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardBlock) */
export type CardBlockIsImageLeftArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Block containing background image and text in a card. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardBlock) */
export type CardBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Block containing background image and text in a card. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardBlock) */
export type CardBlockRichTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Block containing background image and text in a card. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardBlock) */
export type CardBlockSmallVersionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Block containing background image and text in a card. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardBlock) */
export type CardBlockTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type CardBlockCollection = {
  __typename?: 'CardBlockCollection';
  items: Array<Maybe<CardBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CardBlockFilter = {
  AND: InputMaybe<Array<InputMaybe<CardBlockFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CardBlockFilter>>>;
  backgroundImage_exists: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink: InputMaybe<CfContentPageNestedFilter>;
  buttonLink_exists: InputMaybe<Scalars['Boolean']['input']>;
  buttonText: InputMaybe<Scalars['String']['input']>;
  buttonText_contains: InputMaybe<Scalars['String']['input']>;
  buttonText_exists: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isImageLeft: InputMaybe<Scalars['Boolean']['input']>;
  isImageLeft_exists: InputMaybe<Scalars['Boolean']['input']>;
  isImageLeft_not: InputMaybe<Scalars['Boolean']['input']>;
  richText_contains: InputMaybe<Scalars['String']['input']>;
  richText_exists: InputMaybe<Scalars['Boolean']['input']>;
  richText_not_contains: InputMaybe<Scalars['String']['input']>;
  smallVersion: InputMaybe<Scalars['Boolean']['input']>;
  smallVersion_exists: InputMaybe<Scalars['Boolean']['input']>;
  smallVersion_not: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CardBlockLinkingCollections = {
  __typename?: 'CardBlockLinkingCollections';
  cardListBlockCollection: Maybe<CardListBlockCollection>;
  contentPageCollection: Maybe<ContentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};


export type CardBlockLinkingCollectionsCardListBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<CardBlockLinkingCollectionsCardListBlockCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CardBlockLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<CardBlockLinkingCollectionsContentPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CardBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CardBlockLinkingCollectionsCardListBlockCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export enum CardBlockLinkingCollectionsContentPageCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export enum CardBlockOrder {
  BUTTONTEXT_ASC = 'buttonText_ASC',
  BUTTONTEXT_DESC = 'buttonText_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISIMAGELEFT_ASC = 'isImageLeft_ASC',
  ISIMAGELEFT_DESC = 'isImageLeft_DESC',
  SMALLVERSION_ASC = 'smallVersion_ASC',
  SMALLVERSION_DESC = 'smallVersion_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export type CardBlockRichText = {
  __typename?: 'CardBlockRichText';
  json: Scalars['JSON']['output'];
  links: CardBlockRichTextLinks;
};

export type CardBlockRichTextAssets = {
  __typename?: 'CardBlockRichTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CardBlockRichTextEntries = {
  __typename?: 'CardBlockRichTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CardBlockRichTextLinks = {
  __typename?: 'CardBlockRichTextLinks';
  assets: CardBlockRichTextAssets;
  entries: CardBlockRichTextEntries;
  resources: CardBlockRichTextResources;
};

export type CardBlockRichTextResources = {
  __typename?: 'CardBlockRichTextResources';
  block: Array<CardBlockRichTextResourcesBlock>;
  hyperlink: Array<CardBlockRichTextResourcesHyperlink>;
  inline: Array<CardBlockRichTextResourcesInline>;
};

export type CardBlockRichTextResourcesBlock = ResourceLink & {
  __typename?: 'CardBlockRichTextResourcesBlock';
  sys: ResourceSys;
};

export type CardBlockRichTextResourcesHyperlink = ResourceLink & {
  __typename?: 'CardBlockRichTextResourcesHyperlink';
  sys: ResourceSys;
};

export type CardBlockRichTextResourcesInline = ResourceLink & {
  __typename?: 'CardBlockRichTextResourcesInline';
  sys: ResourceSys;
};

/** A block for making internal links represented as a card with label and background image [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardLinkBlock) */
export type CardLinkBlock = Entry & _Node & {
  __typename?: 'CardLinkBlock';
  _id: Scalars['ID']['output'];
  backgroundImage: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  label: Maybe<Scalars['String']['output']>;
  link: Maybe<ContentPage>;
  linkedFrom: Maybe<CardLinkBlockLinkingCollections>;
  sys: Sys;
};


/** A block for making internal links represented as a card with label and background image [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardLinkBlock) */
export type CardLinkBlockBackgroundImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** A block for making internal links represented as a card with label and background image [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardLinkBlock) */
export type CardLinkBlockInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A block for making internal links represented as a card with label and background image [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardLinkBlock) */
export type CardLinkBlockLabelArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A block for making internal links represented as a card with label and background image [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardLinkBlock) */
export type CardLinkBlockLinkArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ContentPageFilter>;
};


/** A block for making internal links represented as a card with label and background image [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardLinkBlock) */
export type CardLinkBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CardLinkBlockCollection = {
  __typename?: 'CardLinkBlockCollection';
  items: Array<Maybe<CardLinkBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CardLinkBlockFilter = {
  AND: InputMaybe<Array<InputMaybe<CardLinkBlockFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CardLinkBlockFilter>>>;
  backgroundImage_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label: InputMaybe<Scalars['String']['input']>;
  label_contains: InputMaybe<Scalars['String']['input']>;
  label_exists: InputMaybe<Scalars['Boolean']['input']>;
  label_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not: InputMaybe<Scalars['String']['input']>;
  label_not_contains: InputMaybe<Scalars['String']['input']>;
  label_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link: InputMaybe<CfContentPageNestedFilter>;
  link_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type CardLinkBlockLinkingCollections = {
  __typename?: 'CardLinkBlockLinkingCollections';
  contentPageCollection: Maybe<ContentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};


export type CardLinkBlockLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<CardLinkBlockLinkingCollectionsContentPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CardLinkBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CardLinkBlockLinkingCollectionsContentPageCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export enum CardLinkBlockOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  LABEL_ASC = 'label_ASC',
  LABEL_DESC = 'label_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

/** List a bunch of cards [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardListBlock) */
export type CardListBlock = Entry & _Node & {
  __typename?: 'CardListBlock';
  _id: Scalars['ID']['output'];
  cardListCollection: Maybe<CardListBlockCardListCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<CardListBlockLinkingCollections>;
  sys: Sys;
};


/** List a bunch of cards [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardListBlock) */
export type CardListBlockCardListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<CardListBlockCardListCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CardBlockFilter>;
};


/** List a bunch of cards [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardListBlock) */
export type CardListBlockInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** List a bunch of cards [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/cardListBlock) */
export type CardListBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CardListBlockCardListCollection = {
  __typename?: 'CardListBlockCardListCollection';
  items: Array<Maybe<CardBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CardListBlockCardListCollectionOrder {
  BUTTONTEXT_ASC = 'buttonText_ASC',
  BUTTONTEXT_DESC = 'buttonText_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISIMAGELEFT_ASC = 'isImageLeft_ASC',
  ISIMAGELEFT_DESC = 'isImageLeft_DESC',
  SMALLVERSION_ASC = 'smallVersion_ASC',
  SMALLVERSION_DESC = 'smallVersion_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export type CardListBlockCollection = {
  __typename?: 'CardListBlockCollection';
  items: Array<Maybe<CardListBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CardListBlockFilter = {
  AND: InputMaybe<Array<InputMaybe<CardListBlockFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CardListBlockFilter>>>;
  cardList: InputMaybe<CfCardBlockNestedFilter>;
  cardListCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type CardListBlockLinkingCollections = {
  __typename?: 'CardListBlockLinkingCollections';
  contentPageCollection: Maybe<ContentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};


export type CardListBlockLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<CardListBlockLinkingCollectionsContentPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CardListBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CardListBlockLinkingCollectionsContentPageCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export enum CardListBlockOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPage = Entry & _Node & {
  __typename?: 'ContentPage';
  _id: Scalars['ID']['output'];
  blocksCollection: Maybe<ContentPageBlocksCollection>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']['output']>;
  document: Maybe<Asset>;
  excludeFromSiteBuild: Maybe<Scalars['Boolean']['output']>;
  excludePageFromExternalSearch: Maybe<Scalars['Boolean']['output']>;
  excludePageFromInternalSearch: Maybe<Scalars['Boolean']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  internalTitle: Maybe<Scalars['String']['output']>;
  isMcmNewsPage: Maybe<Scalars['Boolean']['output']>;
  keywords: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ContentPageLinkingCollections>;
  parentPage: Maybe<ContentPage>;
  showScrollToTopButton: Maybe<Scalars['Boolean']['output']>;
  slug: Maybe<Scalars['String']['output']>;
  subNav: Maybe<SubNav>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageBlocksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ContentPageBlocksFilter>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageDocumentArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageExcludeFromSiteBuildArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageExcludePageFromExternalSearchArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageExcludePageFromInternalSearchArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageIdArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageIsMcmNewsPageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageKeywordsArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageParentPageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ContentPageFilter>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageShowScrollToTopButtonArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageSlugArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageSubNavArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<SubNavFilter>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A site page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/contentPage) */
export type ContentPageUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ContentPageBlocksCollection = {
  __typename?: 'ContentPageBlocksCollection';
  items: Array<Maybe<ContentPageBlocksItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentPageBlocksFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentPageBlocksFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentPageBlocksFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  sys: InputMaybe<SysFilter>;
};

export type ContentPageBlocksItem = BetSuggestionBlock | CardBlock | CardLinkBlock | CardListBlock | HeroBlock | LandingBlock | LiveScoreBlock | LoginBlock | McmNewsBlock | NewsBlock | OddsComparsionBlock | TextBlock | TournamentStandingsBlock | WidgetBlock;

export type ContentPageCollection = {
  __typename?: 'ContentPageCollection';
  items: Array<Maybe<ContentPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentPageFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentPageFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentPageFilter>>>;
  blocks: InputMaybe<CfblocksMultiTypeNestedFilter>;
  blocksCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  document_exists: InputMaybe<Scalars['Boolean']['input']>;
  excludeFromSiteBuild: InputMaybe<Scalars['Boolean']['input']>;
  excludeFromSiteBuild_exists: InputMaybe<Scalars['Boolean']['input']>;
  excludeFromSiteBuild_not: InputMaybe<Scalars['Boolean']['input']>;
  excludePageFromExternalSearch: InputMaybe<Scalars['Boolean']['input']>;
  excludePageFromExternalSearch_exists: InputMaybe<Scalars['Boolean']['input']>;
  excludePageFromExternalSearch_not: InputMaybe<Scalars['Boolean']['input']>;
  excludePageFromInternalSearch: InputMaybe<Scalars['Boolean']['input']>;
  excludePageFromInternalSearch_exists: InputMaybe<Scalars['Boolean']['input']>;
  excludePageFromInternalSearch_not: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Scalars['Int']['input']>;
  id_exists: InputMaybe<Scalars['Boolean']['input']>;
  id_gt: InputMaybe<Scalars['Int']['input']>;
  id_gte: InputMaybe<Scalars['Int']['input']>;
  id_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_lt: InputMaybe<Scalars['Int']['input']>;
  id_lte: InputMaybe<Scalars['Int']['input']>;
  id_not: InputMaybe<Scalars['Int']['input']>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isMcmNewsPage: InputMaybe<Scalars['Boolean']['input']>;
  isMcmNewsPage_exists: InputMaybe<Scalars['Boolean']['input']>;
  isMcmNewsPage_not: InputMaybe<Scalars['Boolean']['input']>;
  keywords: InputMaybe<Scalars['String']['input']>;
  keywords_contains: InputMaybe<Scalars['String']['input']>;
  keywords_exists: InputMaybe<Scalars['Boolean']['input']>;
  keywords_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_not: InputMaybe<Scalars['String']['input']>;
  keywords_not_contains: InputMaybe<Scalars['String']['input']>;
  keywords_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  parentPage: InputMaybe<CfContentPageNestedFilter>;
  parentPage_exists: InputMaybe<Scalars['Boolean']['input']>;
  showScrollToTopButton: InputMaybe<Scalars['Boolean']['input']>;
  showScrollToTopButton_exists: InputMaybe<Scalars['Boolean']['input']>;
  showScrollToTopButton_not: InputMaybe<Scalars['Boolean']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subNav: InputMaybe<CfSubNavNestedFilter>;
  subNav_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url: InputMaybe<Scalars['String']['input']>;
  url_contains: InputMaybe<Scalars['String']['input']>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not: InputMaybe<Scalars['String']['input']>;
  url_not_contains: InputMaybe<Scalars['String']['input']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentPageLinkingCollections = {
  __typename?: 'ContentPageLinkingCollections';
  cardBlockCollection: Maybe<CardBlockCollection>;
  cardLinkBlockCollection: Maybe<CardLinkBlockCollection>;
  contentPageCollection: Maybe<ContentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
  footerCollection: Maybe<FooterCollection>;
  landingBlockCollection: Maybe<LandingBlockCollection>;
  mainNavigationCollection: Maybe<MainNavigationCollection>;
  mcmNewsBlockCollection: Maybe<McmNewsBlockCollection>;
  navigationItemCollection: Maybe<NavigationItemCollection>;
  subNavItemCollection: Maybe<SubNavItemCollection>;
};


export type ContentPageLinkingCollectionsCardBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ContentPageLinkingCollectionsCardBlockCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentPageLinkingCollectionsCardLinkBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ContentPageLinkingCollectionsCardLinkBlockCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentPageLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ContentPageLinkingCollectionsContentPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentPageLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ContentPageLinkingCollectionsFooterCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentPageLinkingCollectionsLandingBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ContentPageLinkingCollectionsLandingBlockCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentPageLinkingCollectionsMainNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ContentPageLinkingCollectionsMainNavigationCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentPageLinkingCollectionsMcmNewsBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ContentPageLinkingCollectionsMcmNewsBlockCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentPageLinkingCollectionsNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ContentPageLinkingCollectionsNavigationItemCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentPageLinkingCollectionsSubNavItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ContentPageLinkingCollectionsSubNavItemCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentPageLinkingCollectionsCardBlockCollectionOrder {
  BUTTONTEXT_ASC = 'buttonText_ASC',
  BUTTONTEXT_DESC = 'buttonText_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISIMAGELEFT_ASC = 'isImageLeft_ASC',
  ISIMAGELEFT_DESC = 'isImageLeft_DESC',
  SMALLVERSION_ASC = 'smallVersion_ASC',
  SMALLVERSION_DESC = 'smallVersion_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum ContentPageLinkingCollectionsCardLinkBlockCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  LABEL_ASC = 'label_ASC',
  LABEL_DESC = 'label_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export enum ContentPageLinkingCollectionsContentPageCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export enum ContentPageLinkingCollectionsFooterCollectionOrder {
  FOOTERSECTION1TITLE_ASC = 'footerSection1Title_ASC',
  FOOTERSECTION1TITLE_DESC = 'footerSection1Title_DESC',
  FOOTERSECTION2TITLE_ASC = 'footerSection2Title_ASC',
  FOOTERSECTION2TITLE_DESC = 'footerSection2Title_DESC',
  FOOTERSECTION3TITLE_ASC = 'footerSection3Title_ASC',
  FOOTERSECTION3TITLE_DESC = 'footerSection3Title_DESC',
  LINKTOEMAIL_ASC = 'linkToEmail_ASC',
  LINKTOEMAIL_DESC = 'linkToEmail_DESC',
  LINKTOFACEBOOK_ASC = 'linkToFacebook_ASC',
  LINKTOFACEBOOK_DESC = 'linkToFacebook_DESC',
  LINKTOINSTAGRAM_ASC = 'linkToInstagram_ASC',
  LINKTOINSTAGRAM_DESC = 'linkToInstagram_DESC',
  LINKTOTWITTER_ASC = 'linkToTwitter_ASC',
  LINKTOTWITTER_DESC = 'linkToTwitter_DESC',
  SECTIONONETITLETWO_ASC = 'sectionOneTitleTwo_ASC',
  SECTIONONETITLETWO_DESC = 'sectionOneTitleTwo_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum ContentPageLinkingCollectionsLandingBlockCollectionOrder {
  BUTTONTEXTFORPROTOTYPE_ASC = 'buttonTextForPrototype_ASC',
  BUTTONTEXTFORPROTOTYPE_DESC = 'buttonTextForPrototype_DESC',
  BUTTONTEXT_ASC = 'buttonText_ASC',
  BUTTONTEXT_DESC = 'buttonText_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum ContentPageLinkingCollectionsMainNavigationCollectionOrder {
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum ContentPageLinkingCollectionsMcmNewsBlockCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  PUBDATE_ASC = 'pubDate_ASC',
  PUBDATE_DESC = 'pubDate_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum ContentPageLinkingCollectionsNavigationItemCollectionOrder {
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum ContentPageLinkingCollectionsSubNavItemCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum ContentPageOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists: InputMaybe<Scalars['Boolean']['input']>;
  tags: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/documentPage) */
export type DocumentPage = Entry & _Node & {
  __typename?: 'DocumentPage';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  document: Maybe<Asset>;
  linkedFrom: Maybe<DocumentPageLinkingCollections>;
  sys: Sys;
  url: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/documentPage) */
export type DocumentPageDocumentArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/documentPage) */
export type DocumentPageLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/documentPage) */
export type DocumentPageUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type DocumentPageCollection = {
  __typename?: 'DocumentPageCollection';
  items: Array<Maybe<DocumentPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type DocumentPageFilter = {
  AND: InputMaybe<Array<InputMaybe<DocumentPageFilter>>>;
  OR: InputMaybe<Array<InputMaybe<DocumentPageFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  document_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  url: InputMaybe<Scalars['String']['input']>;
  url_contains: InputMaybe<Scalars['String']['input']>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not: InputMaybe<Scalars['String']['input']>;
  url_not_contains: InputMaybe<Scalars['String']['input']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DocumentPageLinkingCollections = {
  __typename?: 'DocumentPageLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type DocumentPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum DocumentPageOrder {
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  sys: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type Footer = Entry & _Node & {
  __typename?: 'Footer';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  emailIcon: Maybe<Asset>;
  facebookIcon: Maybe<Asset>;
  footerSection1Title: Maybe<Scalars['String']['output']>;
  footerSection2Title: Maybe<Scalars['String']['output']>;
  footerSection3Title: Maybe<Scalars['String']['output']>;
  instagramIcon: Maybe<Asset>;
  linkToDataPolicy: Maybe<ContentPage>;
  linkToEmail: Maybe<Scalars['String']['output']>;
  linkToFacebook: Maybe<Scalars['String']['output']>;
  linkToInstagram: Maybe<Scalars['String']['output']>;
  linkToLandingPage: Maybe<ContentPage>;
  linkToTwitter: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<FooterLinkingCollections>;
  logotype: Maybe<Asset>;
  navigationItemsListCollection: Maybe<FooterNavigationItemsListCollection>;
  partnerLogo: Maybe<Asset>;
  responsibleBetting: Maybe<FooterResponsibleBetting>;
  sectionOneTitleTwo: Maybe<Scalars['String']['output']>;
  sys: Sys;
  textBlock: Maybe<FooterTextBlock>;
  textBlockTwo: Maybe<FooterTextBlockTwo>;
  title: Maybe<Scalars['String']['output']>;
  twitterIcon: Maybe<Asset>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterEmailIconArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterFacebookIconArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterFooterSection1TitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterFooterSection2TitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterFooterSection3TitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterInstagramIconArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterLinkToDataPolicyArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ContentPageFilter>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterLinkToEmailArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterLinkToFacebookArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterLinkToInstagramArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterLinkToLandingPageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ContentPageFilter>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterLinkToTwitterArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterLogotypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterNavigationItemsListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<FooterNavigationItemsListCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationItemFilter>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterPartnerLogoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterResponsibleBettingArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterSectionOneTitleTwoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterTextBlockArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterTextBlockTwoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Footer for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/footer) */
export type FooterTwitterIconArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterCollection = {
  __typename?: 'FooterCollection';
  items: Array<Maybe<Footer>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FooterFilter = {
  AND: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  OR: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  emailIcon_exists: InputMaybe<Scalars['Boolean']['input']>;
  facebookIcon_exists: InputMaybe<Scalars['Boolean']['input']>;
  footerSection1Title: InputMaybe<Scalars['String']['input']>;
  footerSection1Title_contains: InputMaybe<Scalars['String']['input']>;
  footerSection1Title_exists: InputMaybe<Scalars['Boolean']['input']>;
  footerSection1Title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerSection1Title_not: InputMaybe<Scalars['String']['input']>;
  footerSection1Title_not_contains: InputMaybe<Scalars['String']['input']>;
  footerSection1Title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerSection2Title: InputMaybe<Scalars['String']['input']>;
  footerSection2Title_contains: InputMaybe<Scalars['String']['input']>;
  footerSection2Title_exists: InputMaybe<Scalars['Boolean']['input']>;
  footerSection2Title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerSection2Title_not: InputMaybe<Scalars['String']['input']>;
  footerSection2Title_not_contains: InputMaybe<Scalars['String']['input']>;
  footerSection2Title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerSection3Title: InputMaybe<Scalars['String']['input']>;
  footerSection3Title_contains: InputMaybe<Scalars['String']['input']>;
  footerSection3Title_exists: InputMaybe<Scalars['Boolean']['input']>;
  footerSection3Title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerSection3Title_not: InputMaybe<Scalars['String']['input']>;
  footerSection3Title_not_contains: InputMaybe<Scalars['String']['input']>;
  footerSection3Title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instagramIcon_exists: InputMaybe<Scalars['Boolean']['input']>;
  linkToDataPolicy: InputMaybe<CfContentPageNestedFilter>;
  linkToDataPolicy_exists: InputMaybe<Scalars['Boolean']['input']>;
  linkToEmail: InputMaybe<Scalars['String']['input']>;
  linkToEmail_contains: InputMaybe<Scalars['String']['input']>;
  linkToEmail_exists: InputMaybe<Scalars['Boolean']['input']>;
  linkToEmail_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkToEmail_not: InputMaybe<Scalars['String']['input']>;
  linkToEmail_not_contains: InputMaybe<Scalars['String']['input']>;
  linkToEmail_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkToFacebook: InputMaybe<Scalars['String']['input']>;
  linkToFacebook_contains: InputMaybe<Scalars['String']['input']>;
  linkToFacebook_exists: InputMaybe<Scalars['Boolean']['input']>;
  linkToFacebook_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkToFacebook_not: InputMaybe<Scalars['String']['input']>;
  linkToFacebook_not_contains: InputMaybe<Scalars['String']['input']>;
  linkToFacebook_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkToInstagram: InputMaybe<Scalars['String']['input']>;
  linkToInstagram_contains: InputMaybe<Scalars['String']['input']>;
  linkToInstagram_exists: InputMaybe<Scalars['Boolean']['input']>;
  linkToInstagram_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkToInstagram_not: InputMaybe<Scalars['String']['input']>;
  linkToInstagram_not_contains: InputMaybe<Scalars['String']['input']>;
  linkToInstagram_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkToLandingPage: InputMaybe<CfContentPageNestedFilter>;
  linkToLandingPage_exists: InputMaybe<Scalars['Boolean']['input']>;
  linkToTwitter: InputMaybe<Scalars['String']['input']>;
  linkToTwitter_contains: InputMaybe<Scalars['String']['input']>;
  linkToTwitter_exists: InputMaybe<Scalars['Boolean']['input']>;
  linkToTwitter_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkToTwitter_not: InputMaybe<Scalars['String']['input']>;
  linkToTwitter_not_contains: InputMaybe<Scalars['String']['input']>;
  linkToTwitter_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logotype_exists: InputMaybe<Scalars['Boolean']['input']>;
  navigationItemsList: InputMaybe<CfNavigationItemNestedFilter>;
  navigationItemsListCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  partnerLogo_exists: InputMaybe<Scalars['Boolean']['input']>;
  responsibleBetting_contains: InputMaybe<Scalars['String']['input']>;
  responsibleBetting_exists: InputMaybe<Scalars['Boolean']['input']>;
  responsibleBetting_not_contains: InputMaybe<Scalars['String']['input']>;
  sectionOneTitleTwo: InputMaybe<Scalars['String']['input']>;
  sectionOneTitleTwo_contains: InputMaybe<Scalars['String']['input']>;
  sectionOneTitleTwo_exists: InputMaybe<Scalars['Boolean']['input']>;
  sectionOneTitleTwo_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionOneTitleTwo_not: InputMaybe<Scalars['String']['input']>;
  sectionOneTitleTwo_not_contains: InputMaybe<Scalars['String']['input']>;
  sectionOneTitleTwo_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  textBlockTwo_contains: InputMaybe<Scalars['String']['input']>;
  textBlockTwo_exists: InputMaybe<Scalars['Boolean']['input']>;
  textBlockTwo_not_contains: InputMaybe<Scalars['String']['input']>;
  textBlock_contains: InputMaybe<Scalars['String']['input']>;
  textBlock_exists: InputMaybe<Scalars['Boolean']['input']>;
  textBlock_not_contains: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterIcon_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterLinkingCollections = {
  __typename?: 'FooterLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  siteConfigurationCollection: Maybe<SiteConfigurationCollection>;
};


export type FooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterLinkingCollectionsSiteConfigurationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<FooterLinkingCollectionsSiteConfigurationCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FooterLinkingCollectionsSiteConfigurationCollectionOrder {
  DAYSAHEADFORMATCHIMPORT_ASC = 'daysAheadForMatchImport_ASC',
  DAYSAHEADFORMATCHIMPORT_DESC = 'daysAheadForMatchImport_DESC',
  DAYSLIMITFORMATCHREMOVAL_ASC = 'daysLimitForMatchRemoval_ASC',
  DAYSLIMITFORMATCHREMOVAL_DESC = 'daysLimitForMatchRemoval_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export type FooterNavigationItemsListCollection = {
  __typename?: 'FooterNavigationItemsListCollection';
  items: Array<Maybe<NavigationItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FooterNavigationItemsListCollectionOrder {
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum FooterOrder {
  FOOTERSECTION1TITLE_ASC = 'footerSection1Title_ASC',
  FOOTERSECTION1TITLE_DESC = 'footerSection1Title_DESC',
  FOOTERSECTION2TITLE_ASC = 'footerSection2Title_ASC',
  FOOTERSECTION2TITLE_DESC = 'footerSection2Title_DESC',
  FOOTERSECTION3TITLE_ASC = 'footerSection3Title_ASC',
  FOOTERSECTION3TITLE_DESC = 'footerSection3Title_DESC',
  LINKTOEMAIL_ASC = 'linkToEmail_ASC',
  LINKTOEMAIL_DESC = 'linkToEmail_DESC',
  LINKTOFACEBOOK_ASC = 'linkToFacebook_ASC',
  LINKTOFACEBOOK_DESC = 'linkToFacebook_DESC',
  LINKTOINSTAGRAM_ASC = 'linkToInstagram_ASC',
  LINKTOINSTAGRAM_DESC = 'linkToInstagram_DESC',
  LINKTOTWITTER_ASC = 'linkToTwitter_ASC',
  LINKTOTWITTER_DESC = 'linkToTwitter_DESC',
  SECTIONONETITLETWO_ASC = 'sectionOneTitleTwo_ASC',
  SECTIONONETITLETWO_DESC = 'sectionOneTitleTwo_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export type FooterResponsibleBetting = {
  __typename?: 'FooterResponsibleBetting';
  json: Scalars['JSON']['output'];
  links: FooterResponsibleBettingLinks;
};

export type FooterResponsibleBettingAssets = {
  __typename?: 'FooterResponsibleBettingAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FooterResponsibleBettingEntries = {
  __typename?: 'FooterResponsibleBettingEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FooterResponsibleBettingLinks = {
  __typename?: 'FooterResponsibleBettingLinks';
  assets: FooterResponsibleBettingAssets;
  entries: FooterResponsibleBettingEntries;
  resources: FooterResponsibleBettingResources;
};

export type FooterResponsibleBettingResources = {
  __typename?: 'FooterResponsibleBettingResources';
  block: Array<FooterResponsibleBettingResourcesBlock>;
  hyperlink: Array<FooterResponsibleBettingResourcesHyperlink>;
  inline: Array<FooterResponsibleBettingResourcesInline>;
};

export type FooterResponsibleBettingResourcesBlock = ResourceLink & {
  __typename?: 'FooterResponsibleBettingResourcesBlock';
  sys: ResourceSys;
};

export type FooterResponsibleBettingResourcesHyperlink = ResourceLink & {
  __typename?: 'FooterResponsibleBettingResourcesHyperlink';
  sys: ResourceSys;
};

export type FooterResponsibleBettingResourcesInline = ResourceLink & {
  __typename?: 'FooterResponsibleBettingResourcesInline';
  sys: ResourceSys;
};

export type FooterTextBlock = {
  __typename?: 'FooterTextBlock';
  json: Scalars['JSON']['output'];
  links: FooterTextBlockLinks;
};

export type FooterTextBlockAssets = {
  __typename?: 'FooterTextBlockAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FooterTextBlockEntries = {
  __typename?: 'FooterTextBlockEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FooterTextBlockLinks = {
  __typename?: 'FooterTextBlockLinks';
  assets: FooterTextBlockAssets;
  entries: FooterTextBlockEntries;
  resources: FooterTextBlockResources;
};

export type FooterTextBlockResources = {
  __typename?: 'FooterTextBlockResources';
  block: Array<FooterTextBlockResourcesBlock>;
  hyperlink: Array<FooterTextBlockResourcesHyperlink>;
  inline: Array<FooterTextBlockResourcesInline>;
};

export type FooterTextBlockResourcesBlock = ResourceLink & {
  __typename?: 'FooterTextBlockResourcesBlock';
  sys: ResourceSys;
};

export type FooterTextBlockResourcesHyperlink = ResourceLink & {
  __typename?: 'FooterTextBlockResourcesHyperlink';
  sys: ResourceSys;
};

export type FooterTextBlockResourcesInline = ResourceLink & {
  __typename?: 'FooterTextBlockResourcesInline';
  sys: ResourceSys;
};

export type FooterTextBlockTwo = {
  __typename?: 'FooterTextBlockTwo';
  json: Scalars['JSON']['output'];
  links: FooterTextBlockTwoLinks;
};

export type FooterTextBlockTwoAssets = {
  __typename?: 'FooterTextBlockTwoAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FooterTextBlockTwoEntries = {
  __typename?: 'FooterTextBlockTwoEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FooterTextBlockTwoLinks = {
  __typename?: 'FooterTextBlockTwoLinks';
  assets: FooterTextBlockTwoAssets;
  entries: FooterTextBlockTwoEntries;
  resources: FooterTextBlockTwoResources;
};

export type FooterTextBlockTwoResources = {
  __typename?: 'FooterTextBlockTwoResources';
  block: Array<FooterTextBlockTwoResourcesBlock>;
  hyperlink: Array<FooterTextBlockTwoResourcesHyperlink>;
  inline: Array<FooterTextBlockTwoResourcesInline>;
};

export type FooterTextBlockTwoResourcesBlock = ResourceLink & {
  __typename?: 'FooterTextBlockTwoResourcesBlock';
  sys: ResourceSys;
};

export type FooterTextBlockTwoResourcesHyperlink = ResourceLink & {
  __typename?: 'FooterTextBlockTwoResourcesHyperlink';
  sys: ResourceSys;
};

export type FooterTextBlockTwoResourcesInline = ResourceLink & {
  __typename?: 'FooterTextBlockTwoResourcesInline';
  sys: ResourceSys;
};

/** Hero block for Content Page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/heroBlock) */
export type HeroBlock = Entry & _Node & {
  __typename?: 'HeroBlock';
  _id: Scalars['ID']['output'];
  buttonLabel: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  image: Maybe<Asset>;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<HeroBlockLinkingCollections>;
  opacity: Maybe<Scalars['Int']['output']>;
  paragraph: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** Hero block for Content Page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/heroBlock) */
export type HeroBlockButtonLabelArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Hero block for Content Page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/heroBlock) */
export type HeroBlockImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Hero block for Content Page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/heroBlock) */
export type HeroBlockInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Hero block for Content Page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/heroBlock) */
export type HeroBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Hero block for Content Page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/heroBlock) */
export type HeroBlockOpacityArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Hero block for Content Page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/heroBlock) */
export type HeroBlockParagraphArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Hero block for Content Page [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/heroBlock) */
export type HeroBlockTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type HeroBlockCollection = {
  __typename?: 'HeroBlockCollection';
  items: Array<Maybe<HeroBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeroBlockFilter = {
  AND: InputMaybe<Array<InputMaybe<HeroBlockFilter>>>;
  OR: InputMaybe<Array<InputMaybe<HeroBlockFilter>>>;
  buttonLabel: InputMaybe<Scalars['String']['input']>;
  buttonLabel_contains: InputMaybe<Scalars['String']['input']>;
  buttonLabel_exists: InputMaybe<Scalars['Boolean']['input']>;
  buttonLabel_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLabel_not: InputMaybe<Scalars['String']['input']>;
  buttonLabel_not_contains: InputMaybe<Scalars['String']['input']>;
  buttonLabel_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  opacity: InputMaybe<Scalars['Int']['input']>;
  opacity_exists: InputMaybe<Scalars['Boolean']['input']>;
  opacity_gt: InputMaybe<Scalars['Int']['input']>;
  opacity_gte: InputMaybe<Scalars['Int']['input']>;
  opacity_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  opacity_lt: InputMaybe<Scalars['Int']['input']>;
  opacity_lte: InputMaybe<Scalars['Int']['input']>;
  opacity_not: InputMaybe<Scalars['Int']['input']>;
  opacity_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  paragraph: InputMaybe<Scalars['String']['input']>;
  paragraph_contains: InputMaybe<Scalars['String']['input']>;
  paragraph_exists: InputMaybe<Scalars['Boolean']['input']>;
  paragraph_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paragraph_not: InputMaybe<Scalars['String']['input']>;
  paragraph_not_contains: InputMaybe<Scalars['String']['input']>;
  paragraph_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeroBlockLinkingCollections = {
  __typename?: 'HeroBlockLinkingCollections';
  contentPageCollection: Maybe<ContentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};


export type HeroBlockLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<HeroBlockLinkingCollectionsContentPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeroBlockLinkingCollectionsContentPageCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export enum HeroBlockOrder {
  BUTTONLABEL_ASC = 'buttonLabel_ASC',
  BUTTONLABEL_DESC = 'buttonLabel_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  OPACITY_ASC = 'opacity_ASC',
  OPACITY_DESC = 'opacity_DESC',
  PARAGRAPH_ASC = 'paragraph_ASC',
  PARAGRAPH_DESC = 'paragraph_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/image) */
export type Image = Entry & _Node & {
  __typename?: 'Image';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  image: Maybe<Asset>;
  internalTitle: Maybe<Scalars['String']['output']>;
  label: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ImageLinkingCollections>;
  sys: Sys;
  value: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/image) */
export type ImageImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/image) */
export type ImageInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/image) */
export type ImageLabelArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/image) */
export type ImageLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/image) */
export type ImageValueArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ImageCollection = {
  __typename?: 'ImageCollection';
  items: Array<Maybe<Image>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ImageFilter = {
  AND: InputMaybe<Array<InputMaybe<ImageFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ImageFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label: InputMaybe<Scalars['String']['input']>;
  label_contains: InputMaybe<Scalars['String']['input']>;
  label_exists: InputMaybe<Scalars['Boolean']['input']>;
  label_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not: InputMaybe<Scalars['String']['input']>;
  label_not_contains: InputMaybe<Scalars['String']['input']>;
  label_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  value: InputMaybe<Scalars['String']['input']>;
  value_contains: InputMaybe<Scalars['String']['input']>;
  value_exists: InputMaybe<Scalars['Boolean']['input']>;
  value_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not: InputMaybe<Scalars['String']['input']>;
  value_not_contains: InputMaybe<Scalars['String']['input']>;
  value_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum ImageFormat {
  AVIF = 'AVIF',
  /** JPG image format. */
  JPG = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JPG_PROGRESSIVE = 'JPG_PROGRESSIVE',
  /** PNG image format */
  PNG = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  PNG8 = 'PNG8',
  /** WebP image format. */
  WEBP = 'WEBP'
}

export type ImageLinkingCollections = {
  __typename?: 'ImageLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  imagesCollection: Maybe<ImagesCollection>;
};


export type ImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageLinkingCollectionsImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ImageLinkingCollectionsImagesCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ImageLinkingCollectionsImagesCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export enum ImageOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  LABEL_ASC = 'label_ASC',
  LABEL_DESC = 'label_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  VALUE_ASC = 'value_ASC',
  VALUE_DESC = 'value_DESC'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  BOTTOM = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  CENTER = 'CENTER',
  /** Focus the resizing on the largest face. */
  FACE = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  FACES = 'FACES',
  /** Focus the resizing on the left. */
  LEFT = 'LEFT',
  /** Focus the resizing on the right. */
  RIGHT = 'RIGHT',
  /** Focus the resizing on the top. */
  TOP = 'TOP',
  /** Focus the resizing on the top left. */
  TOP_LEFT = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TOP_RIGHT = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  CROP = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  FILL = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  FIT = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  PAD = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  SCALE = 'SCALE',
  /** Creates a thumbnail from the image. */
  THUMB = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/images) */
export type Images = Entry & _Node & {
  __typename?: 'Images';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  imagesCollection: Maybe<ImagesImagesCollection>;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ImagesLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/images) */
export type ImagesImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ImagesImagesCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ImageFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/images) */
export type ImagesInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/images) */
export type ImagesLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImagesCollection = {
  __typename?: 'ImagesCollection';
  items: Array<Maybe<Images>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ImagesFilter = {
  AND: InputMaybe<Array<InputMaybe<ImagesFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ImagesFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  images: InputMaybe<CfImageNestedFilter>;
  imagesCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type ImagesImagesCollection = {
  __typename?: 'ImagesImagesCollection';
  items: Array<Maybe<Image>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ImagesImagesCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  LABEL_ASC = 'label_ASC',
  LABEL_DESC = 'label_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  VALUE_ASC = 'value_ASC',
  VALUE_DESC = 'value_DESC'
}

export type ImagesLinkingCollections = {
  __typename?: 'ImagesLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  siteImagesCollection: Maybe<SiteImagesCollection>;
};


export type ImagesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ImagesLinkingCollectionsSiteImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ImagesLinkingCollectionsSiteImagesCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ImagesLinkingCollectionsSiteImagesCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISACTIVE_ASC = 'isActive_ASC',
  ISACTIVE_DESC = 'isActive_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export enum ImagesOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

/** Block on Landing Page containing background image and red button in the middle. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/landingBlock) */
export type LandingBlock = Entry & _Node & {
  __typename?: 'LandingBlock';
  _id: Scalars['ID']['output'];
  backgroundForPrototype: Maybe<Asset>;
  backgroundImage: Maybe<Asset>;
  buttonText: Maybe<Scalars['String']['output']>;
  buttonTextForPrototype: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  infoTextForPrototype: Maybe<Scalars['String']['output']>;
  internalLink: Maybe<ContentPage>;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<LandingBlockLinkingCollections>;
  logoForPrototype: Maybe<Asset>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** Block on Landing Page containing background image and red button in the middle. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/landingBlock) */
export type LandingBlockBackgroundForPrototypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block on Landing Page containing background image and red button in the middle. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/landingBlock) */
export type LandingBlockBackgroundImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block on Landing Page containing background image and red button in the middle. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/landingBlock) */
export type LandingBlockButtonTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Block on Landing Page containing background image and red button in the middle. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/landingBlock) */
export type LandingBlockButtonTextForPrototypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Block on Landing Page containing background image and red button in the middle. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/landingBlock) */
export type LandingBlockInfoTextForPrototypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Block on Landing Page containing background image and red button in the middle. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/landingBlock) */
export type LandingBlockInternalLinkArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ContentPageFilter>;
};


/** Block on Landing Page containing background image and red button in the middle. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/landingBlock) */
export type LandingBlockInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Block on Landing Page containing background image and red button in the middle. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/landingBlock) */
export type LandingBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Block on Landing Page containing background image and red button in the middle. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/landingBlock) */
export type LandingBlockLogoForPrototypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block on Landing Page containing background image and red button in the middle. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/landingBlock) */
export type LandingBlockTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type LandingBlockCollection = {
  __typename?: 'LandingBlockCollection';
  items: Array<Maybe<LandingBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LandingBlockFilter = {
  AND: InputMaybe<Array<InputMaybe<LandingBlockFilter>>>;
  OR: InputMaybe<Array<InputMaybe<LandingBlockFilter>>>;
  backgroundForPrototype_exists: InputMaybe<Scalars['Boolean']['input']>;
  backgroundImage_exists: InputMaybe<Scalars['Boolean']['input']>;
  buttonText: InputMaybe<Scalars['String']['input']>;
  buttonTextForPrototype: InputMaybe<Scalars['String']['input']>;
  buttonTextForPrototype_contains: InputMaybe<Scalars['String']['input']>;
  buttonTextForPrototype_exists: InputMaybe<Scalars['Boolean']['input']>;
  buttonTextForPrototype_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonTextForPrototype_not: InputMaybe<Scalars['String']['input']>;
  buttonTextForPrototype_not_contains: InputMaybe<Scalars['String']['input']>;
  buttonTextForPrototype_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_contains: InputMaybe<Scalars['String']['input']>;
  buttonText_exists: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  infoTextForPrototype: InputMaybe<Scalars['String']['input']>;
  infoTextForPrototype_contains: InputMaybe<Scalars['String']['input']>;
  infoTextForPrototype_exists: InputMaybe<Scalars['Boolean']['input']>;
  infoTextForPrototype_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  infoTextForPrototype_not: InputMaybe<Scalars['String']['input']>;
  infoTextForPrototype_not_contains: InputMaybe<Scalars['String']['input']>;
  infoTextForPrototype_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalLink: InputMaybe<CfContentPageNestedFilter>;
  internalLink_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logoForPrototype_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LandingBlockLinkingCollections = {
  __typename?: 'LandingBlockLinkingCollections';
  contentPageCollection: Maybe<ContentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};


export type LandingBlockLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LandingBlockLinkingCollectionsContentPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LandingBlockLinkingCollectionsContentPageCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export enum LandingBlockOrder {
  BUTTONTEXTFORPROTOTYPE_ASC = 'buttonTextForPrototype_ASC',
  BUTTONTEXTFORPROTOTYPE_DESC = 'buttonTextForPrototype_DESC',
  BUTTONTEXT_ASC = 'buttonText_ASC',
  BUTTONTEXT_DESC = 'buttonText_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

/** Displays matches that are live [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/liveScoreBlock) */
export type LiveScoreBlock = Entry & _Node & {
  __typename?: 'LiveScoreBlock';
  _id: Scalars['ID']['output'];
  closedMatches: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<LiveScoreBlockLinkingCollections>;
  noLiveMatchesAvailable: Maybe<Scalars['String']['output']>;
  sportsCollection: Maybe<LiveScoreBlockSportsCollection>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
  tournamentSortOrderCollection: Maybe<LiveScoreBlockTournamentSortOrderCollection>;
};


/** Displays matches that are live [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/liveScoreBlock) */
export type LiveScoreBlockClosedMatchesArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Displays matches that are live [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/liveScoreBlock) */
export type LiveScoreBlockInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Displays matches that are live [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/liveScoreBlock) */
export type LiveScoreBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Displays matches that are live [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/liveScoreBlock) */
export type LiveScoreBlockNoLiveMatchesAvailableArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Displays matches that are live [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/liveScoreBlock) */
export type LiveScoreBlockSportsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LiveScoreBlockSportsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SportFilter>;
};


/** Displays matches that are live [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/liveScoreBlock) */
export type LiveScoreBlockTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Displays matches that are live [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/liveScoreBlock) */
export type LiveScoreBlockTournamentSortOrderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LiveScoreBlockTournamentSortOrderCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TournamentFilter>;
};

export type LiveScoreBlockCollection = {
  __typename?: 'LiveScoreBlockCollection';
  items: Array<Maybe<LiveScoreBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LiveScoreBlockFilter = {
  AND: InputMaybe<Array<InputMaybe<LiveScoreBlockFilter>>>;
  OR: InputMaybe<Array<InputMaybe<LiveScoreBlockFilter>>>;
  closedMatches: InputMaybe<Scalars['String']['input']>;
  closedMatches_contains: InputMaybe<Scalars['String']['input']>;
  closedMatches_exists: InputMaybe<Scalars['Boolean']['input']>;
  closedMatches_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  closedMatches_not: InputMaybe<Scalars['String']['input']>;
  closedMatches_not_contains: InputMaybe<Scalars['String']['input']>;
  closedMatches_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  noLiveMatchesAvailable: InputMaybe<Scalars['String']['input']>;
  noLiveMatchesAvailable_contains: InputMaybe<Scalars['String']['input']>;
  noLiveMatchesAvailable_exists: InputMaybe<Scalars['Boolean']['input']>;
  noLiveMatchesAvailable_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  noLiveMatchesAvailable_not: InputMaybe<Scalars['String']['input']>;
  noLiveMatchesAvailable_not_contains: InputMaybe<Scalars['String']['input']>;
  noLiveMatchesAvailable_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sports: InputMaybe<CfSportNestedFilter>;
  sportsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tournamentSortOrder: InputMaybe<CfTournamentNestedFilter>;
  tournamentSortOrderCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type LiveScoreBlockLinkingCollections = {
  __typename?: 'LiveScoreBlockLinkingCollections';
  contentPageCollection: Maybe<ContentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};


export type LiveScoreBlockLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LiveScoreBlockLinkingCollectionsContentPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LiveScoreBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LiveScoreBlockLinkingCollectionsContentPageCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export enum LiveScoreBlockOrder {
  CLOSEDMATCHES_ASC = 'closedMatches_ASC',
  CLOSEDMATCHES_DESC = 'closedMatches_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  NOLIVEMATCHESAVAILABLE_ASC = 'noLiveMatchesAvailable_ASC',
  NOLIVEMATCHESAVAILABLE_DESC = 'noLiveMatchesAvailable_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export type LiveScoreBlockSportsCollection = {
  __typename?: 'LiveScoreBlockSportsCollection';
  items: Array<Maybe<Sport>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum LiveScoreBlockSportsCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SPORTID_ASC = 'sportId_ASC',
  SPORTID_DESC = 'sportId_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export type LiveScoreBlockTournamentSortOrderCollection = {
  __typename?: 'LiveScoreBlockTournamentSortOrderCollection';
  items: Array<Maybe<Tournament>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum LiveScoreBlockTournamentSortOrderCollectionOrder {
  COUNTRY_ASC = 'country_ASC',
  COUNTRY_DESC = 'country_DESC',
  INACTIVATE_ASC = 'inActivate_ASC',
  INACTIVATE_DESC = 'inActivate_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TOURNAMENTID_ASC = 'tournamentId_ASC',
  TOURNAMENTID_DESC = 'tournamentId_DESC',
  TOURNAMENTNAME_ASC = 'tournamentName_ASC',
  TOURNAMENTNAME_DESC = 'tournamentName_DESC'
}

/** A block for login users [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/loginBlock) */
export type LoginBlock = Entry & _Node & {
  __typename?: 'LoginBlock';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<LoginBlockLinkingCollections>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** A block for login users [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/loginBlock) */
export type LoginBlockInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A block for login users [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/loginBlock) */
export type LoginBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A block for login users [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/loginBlock) */
export type LoginBlockTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type LoginBlockCollection = {
  __typename?: 'LoginBlockCollection';
  items: Array<Maybe<LoginBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LoginBlockFilter = {
  AND: InputMaybe<Array<InputMaybe<LoginBlockFilter>>>;
  OR: InputMaybe<Array<InputMaybe<LoginBlockFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LoginBlockLinkingCollections = {
  __typename?: 'LoginBlockLinkingCollections';
  contentPageCollection: Maybe<ContentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};


export type LoginBlockLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LoginBlockLinkingCollectionsContentPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LoginBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LoginBlockLinkingCollectionsContentPageCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export enum LoginBlockOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

/** Main navigation. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mainNavigation) */
export type MainNavigation = Entry & _Node & {
  __typename?: 'MainNavigation';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkToLandingPage: Maybe<ContentPage>;
  linkedFrom: Maybe<MainNavigationLinkingCollections>;
  logotype: Maybe<Asset>;
  navigationItemsListCollection: Maybe<MainNavigationNavigationItemsListCollection>;
  navigationItemsListForPrototypeCollection: Maybe<MainNavigationNavigationItemsListForPrototypeCollection>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** Main navigation. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mainNavigation) */
export type MainNavigationLinkToLandingPageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ContentPageFilter>;
};


/** Main navigation. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mainNavigation) */
export type MainNavigationLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Main navigation. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mainNavigation) */
export type MainNavigationLogotypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Main navigation. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mainNavigation) */
export type MainNavigationNavigationItemsListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Main navigation. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mainNavigation) */
export type MainNavigationNavigationItemsListForPrototypeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MainNavigationNavigationItemsListForPrototypeCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationItemFilter>;
};


/** Main navigation. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mainNavigation) */
export type MainNavigationTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type MainNavigationCollection = {
  __typename?: 'MainNavigationCollection';
  items: Array<Maybe<MainNavigation>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MainNavigationFilter = {
  AND: InputMaybe<Array<InputMaybe<MainNavigationFilter>>>;
  OR: InputMaybe<Array<InputMaybe<MainNavigationFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  linkToLandingPage: InputMaybe<CfContentPageNestedFilter>;
  linkToLandingPage_exists: InputMaybe<Scalars['Boolean']['input']>;
  logotype_exists: InputMaybe<Scalars['Boolean']['input']>;
  navigationItemsListCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  navigationItemsListForPrototype: InputMaybe<CfNavigationItemNestedFilter>;
  navigationItemsListForPrototypeCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MainNavigationLinkingCollections = {
  __typename?: 'MainNavigationLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  siteConfigurationCollection: Maybe<SiteConfigurationCollection>;
};


export type MainNavigationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MainNavigationLinkingCollectionsSiteConfigurationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MainNavigationLinkingCollectionsSiteConfigurationCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MainNavigationLinkingCollectionsSiteConfigurationCollectionOrder {
  DAYSAHEADFORMATCHIMPORT_ASC = 'daysAheadForMatchImport_ASC',
  DAYSAHEADFORMATCHIMPORT_DESC = 'daysAheadForMatchImport_DESC',
  DAYSLIMITFORMATCHREMOVAL_ASC = 'daysLimitForMatchRemoval_ASC',
  DAYSLIMITFORMATCHREMOVAL_DESC = 'daysLimitForMatchRemoval_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export type MainNavigationNavigationItemsListCollection = {
  __typename?: 'MainNavigationNavigationItemsListCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MainNavigationNavigationItemsListForPrototypeCollection = {
  __typename?: 'MainNavigationNavigationItemsListForPrototypeCollection';
  items: Array<Maybe<NavigationItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum MainNavigationNavigationItemsListForPrototypeCollectionOrder {
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum MainNavigationOrder {
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type Match = Entry & _Node & {
  __typename?: 'Match';
  _id: Scalars['ID']['output'];
  awayTeamDisplayName: Maybe<Scalars['String']['output']>;
  awayTeamLogo: Maybe<Asset>;
  beforeMatchText: Maybe<Scalars['String']['output']>;
  betAnalysisText: Maybe<Scalars['String']['output']>;
  betLevel: Maybe<Scalars['String']['output']>;
  betSuggestionText: Maybe<Scalars['String']['output']>;
  betType: Maybe<Scalars['String']['output']>;
  betValue: Maybe<Scalars['String']['output']>;
  buzzAboutText: Maybe<Scalars['String']['output']>;
  city: Maybe<Scalars['String']['output']>;
  competitorIdAway: Maybe<Scalars['String']['output']>;
  competitorIdHome: Maybe<Scalars['String']['output']>;
  competitorNameAway: Maybe<Scalars['String']['output']>;
  competitorNameHome: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  country: Maybe<Scalars['String']['output']>;
  estimationInPercent: Maybe<Scalars['String']['output']>;
  groupName: Maybe<Scalars['String']['output']>;
  homeTeamDisplayName: Maybe<Scalars['String']['output']>;
  homeTeamLogo: Maybe<Asset>;
  injuredPlayersAwayTeamCollection: Maybe<MatchInjuredPlayersAwayTeamCollection>;
  injuredPlayersHomeTeamCollection: Maybe<MatchInjuredPlayersHomeTeamCollection>;
  isHidden: Maybe<Scalars['Boolean']['output']>;
  linkedFrom: Maybe<MatchLinkingCollections>;
  matchId: Maybe<Scalars['String']['output']>;
  mcmPlayTo: Maybe<Scalars['String']['output']>;
  missingPlayers: Maybe<Scalars['JSON']['output']>;
  name: Maybe<Scalars['String']['output']>;
  playableFrom: Maybe<Scalars['Float']['output']>;
  scheduled: Maybe<Scalars['String']['output']>;
  scheduledSwe: Maybe<Scalars['String']['output']>;
  seasonId: Maybe<Scalars['String']['output']>;
  showBetSuggestion: Maybe<Scalars['Boolean']['output']>;
  sport: Maybe<Scalars['String']['output']>;
  sportId: Maybe<Scalars['String']['output']>;
  suggestedTeam: Maybe<Scalars['String']['output']>;
  sys: Sys;
  thinkAboutText: Maybe<Scalars['String']['output']>;
  tournamentId: Maybe<Scalars['String']['output']>;
  tournamentName: Maybe<Scalars['String']['output']>;
  tvLogo: Maybe<Asset>;
  venueId: Maybe<Scalars['String']['output']>;
  venueName: Maybe<Scalars['String']['output']>;
  winnerPredict: Maybe<Scalars['JSON']['output']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchAwayTeamDisplayNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchAwayTeamLogoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchBeforeMatchTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchBetAnalysisTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchBetLevelArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchBetSuggestionTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchBetTypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchBetValueArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchBuzzAboutTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchCityArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchCompetitorIdAwayArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchCompetitorIdHomeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchCompetitorNameAwayArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchCompetitorNameHomeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchCountryArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchEstimationInPercentArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchGroupNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchHomeTeamDisplayNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchHomeTeamLogoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchInjuredPlayersAwayTeamCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MatchInjuredPlayersAwayTeamCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PlayerFilter>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchInjuredPlayersHomeTeamCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MatchInjuredPlayersHomeTeamCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PlayerFilter>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchIsHiddenArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchMatchIdArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchMcmPlayToArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchMissingPlayersArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchPlayableFromArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchScheduledArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchScheduledSweArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchSeasonIdArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchShowBetSuggestionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchSportArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchSportIdArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchSuggestedTeamArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchThinkAboutTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchTournamentIdArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchTournamentNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchTvLogoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchVenueIdArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchVenueNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Place to store a SportEvent [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/match) */
export type MatchWinnerPredictArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type MatchCollection = {
  __typename?: 'MatchCollection';
  items: Array<Maybe<Match>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

/** Sets one event item to hide in match events list or push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventItem) */
export type MatchEventItem = Entry & _Node & {
  __typename?: 'MatchEventItem';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  eventType: Maybe<Scalars['String']['output']>;
  hideInEventsList: Maybe<Scalars['Boolean']['output']>;
  icon: Maybe<Asset>;
  iconOverrideSport1: Maybe<Asset>;
  iconOverrideSport5: Maybe<Asset>;
  iconOverrideSport6: Maybe<Asset>;
  iconOverrideSport7: Maybe<Asset>;
  iconOverrideSport15: Maybe<Asset>;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<MatchEventItemLinkingCollections>;
  periodNames: Maybe<Scalars['String']['output']>;
  pushNotification: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};


/** Sets one event item to hide in match events list or push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventItem) */
export type MatchEventItemEventTypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Sets one event item to hide in match events list or push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventItem) */
export type MatchEventItemHideInEventsListArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Sets one event item to hide in match events list or push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventItem) */
export type MatchEventItemIconArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Sets one event item to hide in match events list or push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventItem) */
export type MatchEventItemIconOverrideSport1Args = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Sets one event item to hide in match events list or push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventItem) */
export type MatchEventItemIconOverrideSport5Args = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Sets one event item to hide in match events list or push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventItem) */
export type MatchEventItemIconOverrideSport6Args = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Sets one event item to hide in match events list or push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventItem) */
export type MatchEventItemIconOverrideSport7Args = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Sets one event item to hide in match events list or push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventItem) */
export type MatchEventItemIconOverrideSport15Args = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Sets one event item to hide in match events list or push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventItem) */
export type MatchEventItemInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Sets one event item to hide in match events list or push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventItem) */
export type MatchEventItemLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Sets one event item to hide in match events list or push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventItem) */
export type MatchEventItemPeriodNamesArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Sets one event item to hide in match events list or push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventItem) */
export type MatchEventItemPushNotificationArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Sets one event item to hide in match events list or push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventItem) */
export type MatchEventItemTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Sets one event item to hide in match events list or push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventItem) */
export type MatchEventItemTypeArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type MatchEventItemCollection = {
  __typename?: 'MatchEventItemCollection';
  items: Array<Maybe<MatchEventItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MatchEventItemFilter = {
  AND: InputMaybe<Array<InputMaybe<MatchEventItemFilter>>>;
  OR: InputMaybe<Array<InputMaybe<MatchEventItemFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  eventType: InputMaybe<Scalars['String']['input']>;
  eventType_contains: InputMaybe<Scalars['String']['input']>;
  eventType_exists: InputMaybe<Scalars['Boolean']['input']>;
  eventType_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eventType_not: InputMaybe<Scalars['String']['input']>;
  eventType_not_contains: InputMaybe<Scalars['String']['input']>;
  eventType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hideInEventsList: InputMaybe<Scalars['Boolean']['input']>;
  hideInEventsList_exists: InputMaybe<Scalars['Boolean']['input']>;
  hideInEventsList_not: InputMaybe<Scalars['Boolean']['input']>;
  iconOverrideSport_1_exists: InputMaybe<Scalars['Boolean']['input']>;
  iconOverrideSport_5_exists: InputMaybe<Scalars['Boolean']['input']>;
  iconOverrideSport_6_exists: InputMaybe<Scalars['Boolean']['input']>;
  iconOverrideSport_7_exists: InputMaybe<Scalars['Boolean']['input']>;
  iconOverrideSport_15_exists: InputMaybe<Scalars['Boolean']['input']>;
  icon_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  periodNames: InputMaybe<Scalars['String']['input']>;
  periodNames_contains: InputMaybe<Scalars['String']['input']>;
  periodNames_exists: InputMaybe<Scalars['Boolean']['input']>;
  periodNames_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  periodNames_not: InputMaybe<Scalars['String']['input']>;
  periodNames_not_contains: InputMaybe<Scalars['String']['input']>;
  periodNames_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pushNotification: InputMaybe<Scalars['Boolean']['input']>;
  pushNotification_exists: InputMaybe<Scalars['Boolean']['input']>;
  pushNotification_not: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type: InputMaybe<Scalars['String']['input']>;
  type_contains: InputMaybe<Scalars['String']['input']>;
  type_exists: InputMaybe<Scalars['Boolean']['input']>;
  type_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not: InputMaybe<Scalars['String']['input']>;
  type_not_contains: InputMaybe<Scalars['String']['input']>;
  type_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MatchEventItemLinkingCollections = {
  __typename?: 'MatchEventItemLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  matchEventsConfigurationCollection: Maybe<MatchEventsConfigurationCollection>;
};


export type MatchEventItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MatchEventItemLinkingCollectionsMatchEventsConfigurationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MatchEventItemLinkingCollectionsMatchEventsConfigurationCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MatchEventItemLinkingCollectionsMatchEventsConfigurationCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export enum MatchEventItemOrder {
  EVENTTYPE_ASC = 'eventType_ASC',
  EVENTTYPE_DESC = 'eventType_DESC',
  HIDEINEVENTSLIST_ASC = 'hideInEventsList_ASC',
  HIDEINEVENTSLIST_DESC = 'hideInEventsList_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  PERIODNAMES_ASC = 'periodNames_ASC',
  PERIODNAMES_DESC = 'periodNames_DESC',
  PUSHNOTIFICATION_ASC = 'pushNotification_ASC',
  PUSHNOTIFICATION_DESC = 'pushNotification_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  TYPE_ASC = 'type_ASC',
  TYPE_DESC = 'type_DESC'
}

/** Configure which match events that should be hidden in the events list and which should push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventsConfiguration) */
export type MatchEventsConfiguration = Entry & _Node & {
  __typename?: 'MatchEventsConfiguration';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  eventsListCollection: Maybe<MatchEventsConfigurationEventsListCollection>;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<MatchEventsConfigurationLinkingCollections>;
  sys: Sys;
};


/** Configure which match events that should be hidden in the events list and which should push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventsConfiguration) */
export type MatchEventsConfigurationEventsListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MatchEventsConfigurationEventsListCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MatchEventItemFilter>;
};


/** Configure which match events that should be hidden in the events list and which should push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventsConfiguration) */
export type MatchEventsConfigurationInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Configure which match events that should be hidden in the events list and which should push notifications. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchEventsConfiguration) */
export type MatchEventsConfigurationLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MatchEventsConfigurationCollection = {
  __typename?: 'MatchEventsConfigurationCollection';
  items: Array<Maybe<MatchEventsConfiguration>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MatchEventsConfigurationEventsListCollection = {
  __typename?: 'MatchEventsConfigurationEventsListCollection';
  items: Array<Maybe<MatchEventItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum MatchEventsConfigurationEventsListCollectionOrder {
  EVENTTYPE_ASC = 'eventType_ASC',
  EVENTTYPE_DESC = 'eventType_DESC',
  HIDEINEVENTSLIST_ASC = 'hideInEventsList_ASC',
  HIDEINEVENTSLIST_DESC = 'hideInEventsList_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  PERIODNAMES_ASC = 'periodNames_ASC',
  PERIODNAMES_DESC = 'periodNames_DESC',
  PUSHNOTIFICATION_ASC = 'pushNotification_ASC',
  PUSHNOTIFICATION_DESC = 'pushNotification_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  TYPE_ASC = 'type_ASC',
  TYPE_DESC = 'type_DESC'
}

export type MatchEventsConfigurationFilter = {
  AND: InputMaybe<Array<InputMaybe<MatchEventsConfigurationFilter>>>;
  OR: InputMaybe<Array<InputMaybe<MatchEventsConfigurationFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  eventsList: InputMaybe<CfMatchEventItemNestedFilter>;
  eventsListCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type MatchEventsConfigurationLinkingCollections = {
  __typename?: 'MatchEventsConfigurationLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type MatchEventsConfigurationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MatchEventsConfigurationOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export type MatchFilter = {
  AND: InputMaybe<Array<InputMaybe<MatchFilter>>>;
  OR: InputMaybe<Array<InputMaybe<MatchFilter>>>;
  awayTeamDisplayName: InputMaybe<Scalars['String']['input']>;
  awayTeamDisplayName_contains: InputMaybe<Scalars['String']['input']>;
  awayTeamDisplayName_exists: InputMaybe<Scalars['Boolean']['input']>;
  awayTeamDisplayName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  awayTeamDisplayName_not: InputMaybe<Scalars['String']['input']>;
  awayTeamDisplayName_not_contains: InputMaybe<Scalars['String']['input']>;
  awayTeamDisplayName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  awayTeamLogo_exists: InputMaybe<Scalars['Boolean']['input']>;
  beforeMatchText: InputMaybe<Scalars['String']['input']>;
  beforeMatchText_contains: InputMaybe<Scalars['String']['input']>;
  beforeMatchText_exists: InputMaybe<Scalars['Boolean']['input']>;
  beforeMatchText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beforeMatchText_not: InputMaybe<Scalars['String']['input']>;
  beforeMatchText_not_contains: InputMaybe<Scalars['String']['input']>;
  beforeMatchText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betAnalysisText: InputMaybe<Scalars['String']['input']>;
  betAnalysisText_contains: InputMaybe<Scalars['String']['input']>;
  betAnalysisText_exists: InputMaybe<Scalars['Boolean']['input']>;
  betAnalysisText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betAnalysisText_not: InputMaybe<Scalars['String']['input']>;
  betAnalysisText_not_contains: InputMaybe<Scalars['String']['input']>;
  betAnalysisText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betLevel: InputMaybe<Scalars['String']['input']>;
  betLevel_contains: InputMaybe<Scalars['String']['input']>;
  betLevel_exists: InputMaybe<Scalars['Boolean']['input']>;
  betLevel_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betLevel_not: InputMaybe<Scalars['String']['input']>;
  betLevel_not_contains: InputMaybe<Scalars['String']['input']>;
  betLevel_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betSuggestionText: InputMaybe<Scalars['String']['input']>;
  betSuggestionText_contains: InputMaybe<Scalars['String']['input']>;
  betSuggestionText_exists: InputMaybe<Scalars['Boolean']['input']>;
  betSuggestionText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betSuggestionText_not: InputMaybe<Scalars['String']['input']>;
  betSuggestionText_not_contains: InputMaybe<Scalars['String']['input']>;
  betSuggestionText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betType: InputMaybe<Scalars['String']['input']>;
  betType_contains: InputMaybe<Scalars['String']['input']>;
  betType_exists: InputMaybe<Scalars['Boolean']['input']>;
  betType_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betType_not: InputMaybe<Scalars['String']['input']>;
  betType_not_contains: InputMaybe<Scalars['String']['input']>;
  betType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betValue: InputMaybe<Scalars['String']['input']>;
  betValue_contains: InputMaybe<Scalars['String']['input']>;
  betValue_exists: InputMaybe<Scalars['Boolean']['input']>;
  betValue_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betValue_not: InputMaybe<Scalars['String']['input']>;
  betValue_not_contains: InputMaybe<Scalars['String']['input']>;
  betValue_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buzzAboutText: InputMaybe<Scalars['String']['input']>;
  buzzAboutText_contains: InputMaybe<Scalars['String']['input']>;
  buzzAboutText_exists: InputMaybe<Scalars['Boolean']['input']>;
  buzzAboutText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buzzAboutText_not: InputMaybe<Scalars['String']['input']>;
  buzzAboutText_not_contains: InputMaybe<Scalars['String']['input']>;
  buzzAboutText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city: InputMaybe<Scalars['String']['input']>;
  city_contains: InputMaybe<Scalars['String']['input']>;
  city_exists: InputMaybe<Scalars['Boolean']['input']>;
  city_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city_not: InputMaybe<Scalars['String']['input']>;
  city_not_contains: InputMaybe<Scalars['String']['input']>;
  city_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  competitorIdAway: InputMaybe<Scalars['String']['input']>;
  competitorIdAway_contains: InputMaybe<Scalars['String']['input']>;
  competitorIdAway_exists: InputMaybe<Scalars['Boolean']['input']>;
  competitorIdAway_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  competitorIdAway_not: InputMaybe<Scalars['String']['input']>;
  competitorIdAway_not_contains: InputMaybe<Scalars['String']['input']>;
  competitorIdAway_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  competitorIdHome: InputMaybe<Scalars['String']['input']>;
  competitorIdHome_contains: InputMaybe<Scalars['String']['input']>;
  competitorIdHome_exists: InputMaybe<Scalars['Boolean']['input']>;
  competitorIdHome_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  competitorIdHome_not: InputMaybe<Scalars['String']['input']>;
  competitorIdHome_not_contains: InputMaybe<Scalars['String']['input']>;
  competitorIdHome_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  competitorNameAway: InputMaybe<Scalars['String']['input']>;
  competitorNameAway_contains: InputMaybe<Scalars['String']['input']>;
  competitorNameAway_exists: InputMaybe<Scalars['Boolean']['input']>;
  competitorNameAway_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  competitorNameAway_not: InputMaybe<Scalars['String']['input']>;
  competitorNameAway_not_contains: InputMaybe<Scalars['String']['input']>;
  competitorNameAway_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  competitorNameHome: InputMaybe<Scalars['String']['input']>;
  competitorNameHome_contains: InputMaybe<Scalars['String']['input']>;
  competitorNameHome_exists: InputMaybe<Scalars['Boolean']['input']>;
  competitorNameHome_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  competitorNameHome_not: InputMaybe<Scalars['String']['input']>;
  competitorNameHome_not_contains: InputMaybe<Scalars['String']['input']>;
  competitorNameHome_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  country: InputMaybe<Scalars['String']['input']>;
  country_contains: InputMaybe<Scalars['String']['input']>;
  country_exists: InputMaybe<Scalars['Boolean']['input']>;
  country_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  country_not: InputMaybe<Scalars['String']['input']>;
  country_not_contains: InputMaybe<Scalars['String']['input']>;
  country_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  estimationInPercent: InputMaybe<Scalars['String']['input']>;
  estimationInPercent_contains: InputMaybe<Scalars['String']['input']>;
  estimationInPercent_exists: InputMaybe<Scalars['Boolean']['input']>;
  estimationInPercent_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  estimationInPercent_not: InputMaybe<Scalars['String']['input']>;
  estimationInPercent_not_contains: InputMaybe<Scalars['String']['input']>;
  estimationInPercent_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupName: InputMaybe<Scalars['String']['input']>;
  groupName_contains: InputMaybe<Scalars['String']['input']>;
  groupName_exists: InputMaybe<Scalars['Boolean']['input']>;
  groupName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupName_not: InputMaybe<Scalars['String']['input']>;
  groupName_not_contains: InputMaybe<Scalars['String']['input']>;
  groupName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  homeTeamDisplayName: InputMaybe<Scalars['String']['input']>;
  homeTeamDisplayName_contains: InputMaybe<Scalars['String']['input']>;
  homeTeamDisplayName_exists: InputMaybe<Scalars['Boolean']['input']>;
  homeTeamDisplayName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  homeTeamDisplayName_not: InputMaybe<Scalars['String']['input']>;
  homeTeamDisplayName_not_contains: InputMaybe<Scalars['String']['input']>;
  homeTeamDisplayName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  homeTeamLogo_exists: InputMaybe<Scalars['Boolean']['input']>;
  injuredPlayersAwayTeam: InputMaybe<CfPlayerNestedFilter>;
  injuredPlayersAwayTeamCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  injuredPlayersHomeTeam: InputMaybe<CfPlayerNestedFilter>;
  injuredPlayersHomeTeamCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  isHidden: InputMaybe<Scalars['Boolean']['input']>;
  isHidden_exists: InputMaybe<Scalars['Boolean']['input']>;
  isHidden_not: InputMaybe<Scalars['Boolean']['input']>;
  matchId: InputMaybe<Scalars['String']['input']>;
  matchId_contains: InputMaybe<Scalars['String']['input']>;
  matchId_exists: InputMaybe<Scalars['Boolean']['input']>;
  matchId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  matchId_not: InputMaybe<Scalars['String']['input']>;
  matchId_not_contains: InputMaybe<Scalars['String']['input']>;
  matchId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mcmPlayTo: InputMaybe<Scalars['String']['input']>;
  mcmPlayTo_contains: InputMaybe<Scalars['String']['input']>;
  mcmPlayTo_exists: InputMaybe<Scalars['Boolean']['input']>;
  mcmPlayTo_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mcmPlayTo_not: InputMaybe<Scalars['String']['input']>;
  mcmPlayTo_not_contains: InputMaybe<Scalars['String']['input']>;
  mcmPlayTo_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  missingPlayers_exists: InputMaybe<Scalars['Boolean']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  name_contains: InputMaybe<Scalars['String']['input']>;
  name_exists: InputMaybe<Scalars['Boolean']['input']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not: InputMaybe<Scalars['String']['input']>;
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  playableFrom: InputMaybe<Scalars['Float']['input']>;
  playableFrom_exists: InputMaybe<Scalars['Boolean']['input']>;
  playableFrom_gt: InputMaybe<Scalars['Float']['input']>;
  playableFrom_gte: InputMaybe<Scalars['Float']['input']>;
  playableFrom_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  playableFrom_lt: InputMaybe<Scalars['Float']['input']>;
  playableFrom_lte: InputMaybe<Scalars['Float']['input']>;
  playableFrom_not: InputMaybe<Scalars['Float']['input']>;
  playableFrom_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  scheduled: InputMaybe<Scalars['String']['input']>;
  scheduledSwe: InputMaybe<Scalars['String']['input']>;
  scheduledSwe_contains: InputMaybe<Scalars['String']['input']>;
  scheduledSwe_exists: InputMaybe<Scalars['Boolean']['input']>;
  scheduledSwe_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  scheduledSwe_not: InputMaybe<Scalars['String']['input']>;
  scheduledSwe_not_contains: InputMaybe<Scalars['String']['input']>;
  scheduledSwe_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  scheduled_contains: InputMaybe<Scalars['String']['input']>;
  scheduled_exists: InputMaybe<Scalars['Boolean']['input']>;
  scheduled_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  scheduled_not: InputMaybe<Scalars['String']['input']>;
  scheduled_not_contains: InputMaybe<Scalars['String']['input']>;
  scheduled_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seasonId: InputMaybe<Scalars['String']['input']>;
  seasonId_contains: InputMaybe<Scalars['String']['input']>;
  seasonId_exists: InputMaybe<Scalars['Boolean']['input']>;
  seasonId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seasonId_not: InputMaybe<Scalars['String']['input']>;
  seasonId_not_contains: InputMaybe<Scalars['String']['input']>;
  seasonId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  showBetSuggestion: InputMaybe<Scalars['Boolean']['input']>;
  showBetSuggestion_exists: InputMaybe<Scalars['Boolean']['input']>;
  showBetSuggestion_not: InputMaybe<Scalars['Boolean']['input']>;
  sport: InputMaybe<Scalars['String']['input']>;
  sportId: InputMaybe<Scalars['String']['input']>;
  sportId_contains: InputMaybe<Scalars['String']['input']>;
  sportId_exists: InputMaybe<Scalars['Boolean']['input']>;
  sportId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sportId_not: InputMaybe<Scalars['String']['input']>;
  sportId_not_contains: InputMaybe<Scalars['String']['input']>;
  sportId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sport_contains: InputMaybe<Scalars['String']['input']>;
  sport_exists: InputMaybe<Scalars['Boolean']['input']>;
  sport_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sport_not: InputMaybe<Scalars['String']['input']>;
  sport_not_contains: InputMaybe<Scalars['String']['input']>;
  sport_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suggestedTeam: InputMaybe<Scalars['String']['input']>;
  suggestedTeam_contains: InputMaybe<Scalars['String']['input']>;
  suggestedTeam_exists: InputMaybe<Scalars['Boolean']['input']>;
  suggestedTeam_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suggestedTeam_not: InputMaybe<Scalars['String']['input']>;
  suggestedTeam_not_contains: InputMaybe<Scalars['String']['input']>;
  suggestedTeam_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  thinkAboutText: InputMaybe<Scalars['String']['input']>;
  thinkAboutText_contains: InputMaybe<Scalars['String']['input']>;
  thinkAboutText_exists: InputMaybe<Scalars['Boolean']['input']>;
  thinkAboutText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  thinkAboutText_not: InputMaybe<Scalars['String']['input']>;
  thinkAboutText_not_contains: InputMaybe<Scalars['String']['input']>;
  thinkAboutText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tournamentId: InputMaybe<Scalars['String']['input']>;
  tournamentId_contains: InputMaybe<Scalars['String']['input']>;
  tournamentId_exists: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tournamentId_not: InputMaybe<Scalars['String']['input']>;
  tournamentId_not_contains: InputMaybe<Scalars['String']['input']>;
  tournamentId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tournamentName: InputMaybe<Scalars['String']['input']>;
  tournamentName_contains: InputMaybe<Scalars['String']['input']>;
  tournamentName_exists: InputMaybe<Scalars['Boolean']['input']>;
  tournamentName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tournamentName_not: InputMaybe<Scalars['String']['input']>;
  tournamentName_not_contains: InputMaybe<Scalars['String']['input']>;
  tournamentName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tvLogo_exists: InputMaybe<Scalars['Boolean']['input']>;
  venueId: InputMaybe<Scalars['String']['input']>;
  venueId_contains: InputMaybe<Scalars['String']['input']>;
  venueId_exists: InputMaybe<Scalars['Boolean']['input']>;
  venueId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venueId_not: InputMaybe<Scalars['String']['input']>;
  venueId_not_contains: InputMaybe<Scalars['String']['input']>;
  venueId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venueName: InputMaybe<Scalars['String']['input']>;
  venueName_contains: InputMaybe<Scalars['String']['input']>;
  venueName_exists: InputMaybe<Scalars['Boolean']['input']>;
  venueName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venueName_not: InputMaybe<Scalars['String']['input']>;
  venueName_not_contains: InputMaybe<Scalars['String']['input']>;
  venueName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  winnerPredict_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type MatchInjuredPlayersAwayTeamCollection = {
  __typename?: 'MatchInjuredPlayersAwayTeamCollection';
  items: Array<Maybe<Player>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum MatchInjuredPlayersAwayTeamCollectionOrder {
  ABSENCEREASON_ASC = 'absenceReason_ASC',
  ABSENCEREASON_DESC = 'absenceReason_DESC',
  ARTISTNAME_ASC = 'artistName_ASC',
  ARTISTNAME_DESC = 'artistName_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  POSITION_ASC = 'position_ASC',
  POSITION_DESC = 'position_DESC',
  RATING_ASC = 'rating_ASC',
  RATING_DESC = 'rating_DESC',
  SHIRTNUMBER_ASC = 'shirtNumber_ASC',
  SHIRTNUMBER_DESC = 'shirtNumber_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TEAM_ASC = 'team_ASC',
  TEAM_DESC = 'team_DESC'
}

export type MatchInjuredPlayersHomeTeamCollection = {
  __typename?: 'MatchInjuredPlayersHomeTeamCollection';
  items: Array<Maybe<Player>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum MatchInjuredPlayersHomeTeamCollectionOrder {
  ABSENCEREASON_ASC = 'absenceReason_ASC',
  ABSENCEREASON_DESC = 'absenceReason_DESC',
  ARTISTNAME_ASC = 'artistName_ASC',
  ARTISTNAME_DESC = 'artistName_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  POSITION_ASC = 'position_ASC',
  POSITION_DESC = 'position_DESC',
  RATING_ASC = 'rating_ASC',
  RATING_DESC = 'rating_DESC',
  SHIRTNUMBER_ASC = 'shirtNumber_ASC',
  SHIRTNUMBER_DESC = 'shirtNumber_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TEAM_ASC = 'team_ASC',
  TEAM_DESC = 'team_DESC'
}

export type MatchLinkingCollections = {
  __typename?: 'MatchLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  matchListCollection: Maybe<MatchListCollection>;
};


export type MatchLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MatchLinkingCollectionsMatchListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MatchLinkingCollectionsMatchListCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MatchLinkingCollectionsMatchListCollectionOrder {
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchList) */
export type MatchList = Entry & _Node & {
  __typename?: 'MatchList';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<MatchListLinkingCollections>;
  matchesCollection: Maybe<MatchListMatchesCollection>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchList) */
export type MatchListLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchList) */
export type MatchListMatchesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MatchListMatchesCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MatchFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/matchList) */
export type MatchListTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type MatchListCollection = {
  __typename?: 'MatchListCollection';
  items: Array<Maybe<MatchList>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MatchListFilter = {
  AND: InputMaybe<Array<InputMaybe<MatchListFilter>>>;
  OR: InputMaybe<Array<InputMaybe<MatchListFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  matches: InputMaybe<CfMatchNestedFilter>;
  matchesCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MatchListLinkingCollections = {
  __typename?: 'MatchListLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type MatchListLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MatchListMatchesCollection = {
  __typename?: 'MatchListMatchesCollection';
  items: Array<Maybe<Match>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum MatchListMatchesCollectionOrder {
  AWAYTEAMDISPLAYNAME_ASC = 'awayTeamDisplayName_ASC',
  AWAYTEAMDISPLAYNAME_DESC = 'awayTeamDisplayName_DESC',
  BETLEVEL_ASC = 'betLevel_ASC',
  BETLEVEL_DESC = 'betLevel_DESC',
  BETTYPE_ASC = 'betType_ASC',
  BETTYPE_DESC = 'betType_DESC',
  BETVALUE_ASC = 'betValue_ASC',
  BETVALUE_DESC = 'betValue_DESC',
  CITY_ASC = 'city_ASC',
  CITY_DESC = 'city_DESC',
  COMPETITORIDAWAY_ASC = 'competitorIdAway_ASC',
  COMPETITORIDAWAY_DESC = 'competitorIdAway_DESC',
  COMPETITORIDHOME_ASC = 'competitorIdHome_ASC',
  COMPETITORIDHOME_DESC = 'competitorIdHome_DESC',
  COMPETITORNAMEAWAY_ASC = 'competitorNameAway_ASC',
  COMPETITORNAMEAWAY_DESC = 'competitorNameAway_DESC',
  COMPETITORNAMEHOME_ASC = 'competitorNameHome_ASC',
  COMPETITORNAMEHOME_DESC = 'competitorNameHome_DESC',
  COUNTRY_ASC = 'country_ASC',
  COUNTRY_DESC = 'country_DESC',
  ESTIMATIONINPERCENT_ASC = 'estimationInPercent_ASC',
  ESTIMATIONINPERCENT_DESC = 'estimationInPercent_DESC',
  GROUPNAME_ASC = 'groupName_ASC',
  GROUPNAME_DESC = 'groupName_DESC',
  HOMETEAMDISPLAYNAME_ASC = 'homeTeamDisplayName_ASC',
  HOMETEAMDISPLAYNAME_DESC = 'homeTeamDisplayName_DESC',
  ISHIDDEN_ASC = 'isHidden_ASC',
  ISHIDDEN_DESC = 'isHidden_DESC',
  MATCHID_ASC = 'matchId_ASC',
  MATCHID_DESC = 'matchId_DESC',
  MCMPLAYTO_ASC = 'mcmPlayTo_ASC',
  MCMPLAYTO_DESC = 'mcmPlayTo_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  PLAYABLEFROM_ASC = 'playableFrom_ASC',
  PLAYABLEFROM_DESC = 'playableFrom_DESC',
  SCHEDULEDSWE_ASC = 'scheduledSwe_ASC',
  SCHEDULEDSWE_DESC = 'scheduledSwe_DESC',
  SCHEDULED_ASC = 'scheduled_ASC',
  SCHEDULED_DESC = 'scheduled_DESC',
  SEASONID_ASC = 'seasonId_ASC',
  SEASONID_DESC = 'seasonId_DESC',
  SHOWBETSUGGESTION_ASC = 'showBetSuggestion_ASC',
  SHOWBETSUGGESTION_DESC = 'showBetSuggestion_DESC',
  SPORTID_ASC = 'sportId_ASC',
  SPORTID_DESC = 'sportId_DESC',
  SPORT_ASC = 'sport_ASC',
  SPORT_DESC = 'sport_DESC',
  SUGGESTEDTEAM_ASC = 'suggestedTeam_ASC',
  SUGGESTEDTEAM_DESC = 'suggestedTeam_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TOURNAMENTID_ASC = 'tournamentId_ASC',
  TOURNAMENTID_DESC = 'tournamentId_DESC',
  TOURNAMENTNAME_ASC = 'tournamentName_ASC',
  TOURNAMENTNAME_DESC = 'tournamentName_DESC',
  VENUEID_ASC = 'venueId_ASC',
  VENUEID_DESC = 'venueId_DESC',
  VENUENAME_ASC = 'venueName_ASC',
  VENUENAME_DESC = 'venueName_DESC'
}

export enum MatchListOrder {
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum MatchOrder {
  AWAYTEAMDISPLAYNAME_ASC = 'awayTeamDisplayName_ASC',
  AWAYTEAMDISPLAYNAME_DESC = 'awayTeamDisplayName_DESC',
  BETLEVEL_ASC = 'betLevel_ASC',
  BETLEVEL_DESC = 'betLevel_DESC',
  BETTYPE_ASC = 'betType_ASC',
  BETTYPE_DESC = 'betType_DESC',
  BETVALUE_ASC = 'betValue_ASC',
  BETVALUE_DESC = 'betValue_DESC',
  CITY_ASC = 'city_ASC',
  CITY_DESC = 'city_DESC',
  COMPETITORIDAWAY_ASC = 'competitorIdAway_ASC',
  COMPETITORIDAWAY_DESC = 'competitorIdAway_DESC',
  COMPETITORIDHOME_ASC = 'competitorIdHome_ASC',
  COMPETITORIDHOME_DESC = 'competitorIdHome_DESC',
  COMPETITORNAMEAWAY_ASC = 'competitorNameAway_ASC',
  COMPETITORNAMEAWAY_DESC = 'competitorNameAway_DESC',
  COMPETITORNAMEHOME_ASC = 'competitorNameHome_ASC',
  COMPETITORNAMEHOME_DESC = 'competitorNameHome_DESC',
  COUNTRY_ASC = 'country_ASC',
  COUNTRY_DESC = 'country_DESC',
  ESTIMATIONINPERCENT_ASC = 'estimationInPercent_ASC',
  ESTIMATIONINPERCENT_DESC = 'estimationInPercent_DESC',
  GROUPNAME_ASC = 'groupName_ASC',
  GROUPNAME_DESC = 'groupName_DESC',
  HOMETEAMDISPLAYNAME_ASC = 'homeTeamDisplayName_ASC',
  HOMETEAMDISPLAYNAME_DESC = 'homeTeamDisplayName_DESC',
  ISHIDDEN_ASC = 'isHidden_ASC',
  ISHIDDEN_DESC = 'isHidden_DESC',
  MATCHID_ASC = 'matchId_ASC',
  MATCHID_DESC = 'matchId_DESC',
  MCMPLAYTO_ASC = 'mcmPlayTo_ASC',
  MCMPLAYTO_DESC = 'mcmPlayTo_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  PLAYABLEFROM_ASC = 'playableFrom_ASC',
  PLAYABLEFROM_DESC = 'playableFrom_DESC',
  SCHEDULEDSWE_ASC = 'scheduledSwe_ASC',
  SCHEDULEDSWE_DESC = 'scheduledSwe_DESC',
  SCHEDULED_ASC = 'scheduled_ASC',
  SCHEDULED_DESC = 'scheduled_DESC',
  SEASONID_ASC = 'seasonId_ASC',
  SEASONID_DESC = 'seasonId_DESC',
  SHOWBETSUGGESTION_ASC = 'showBetSuggestion_ASC',
  SHOWBETSUGGESTION_DESC = 'showBetSuggestion_DESC',
  SPORTID_ASC = 'sportId_ASC',
  SPORTID_DESC = 'sportId_DESC',
  SPORT_ASC = 'sport_ASC',
  SPORT_DESC = 'sport_DESC',
  SUGGESTEDTEAM_ASC = 'suggestedTeam_ASC',
  SUGGESTEDTEAM_DESC = 'suggestedTeam_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TOURNAMENTID_ASC = 'tournamentId_ASC',
  TOURNAMENTID_DESC = 'tournamentId_DESC',
  TOURNAMENTNAME_ASC = 'tournamentName_ASC',
  TOURNAMENTNAME_DESC = 'tournamentName_DESC',
  VENUEID_ASC = 'venueId_ASC',
  VENUEID_DESC = 'venueId_DESC',
  VENUENAME_ASC = 'venueName_ASC',
  VENUENAME_DESC = 'venueName_DESC'
}

/** Used for displaying mcm news. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mcmNewsBlock) */
export type McmNewsBlock = Entry & _Node & {
  __typename?: 'McmNewsBlock';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']['output']>;
  image: Maybe<Asset>;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkToNewsPage: Maybe<ContentPage>;
  linkedFrom: Maybe<McmNewsBlockLinkingCollections>;
  logoImage: Maybe<Asset>;
  pubDate: Maybe<Scalars['DateTime']['output']>;
  sys: Sys;
  text: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


/** Used for displaying mcm news. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mcmNewsBlock) */
export type McmNewsBlockDescriptionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Used for displaying mcm news. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mcmNewsBlock) */
export type McmNewsBlockImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Used for displaying mcm news. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mcmNewsBlock) */
export type McmNewsBlockInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Used for displaying mcm news. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mcmNewsBlock) */
export type McmNewsBlockLinkToNewsPageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ContentPageFilter>;
};


/** Used for displaying mcm news. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mcmNewsBlock) */
export type McmNewsBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Used for displaying mcm news. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mcmNewsBlock) */
export type McmNewsBlockLogoImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Used for displaying mcm news. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mcmNewsBlock) */
export type McmNewsBlockPubDateArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Used for displaying mcm news. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mcmNewsBlock) */
export type McmNewsBlockTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Used for displaying mcm news. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mcmNewsBlock) */
export type McmNewsBlockTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type McmNewsBlockCollection = {
  __typename?: 'McmNewsBlockCollection';
  items: Array<Maybe<McmNewsBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type McmNewsBlockFilter = {
  AND: InputMaybe<Array<InputMaybe<McmNewsBlockFilter>>>;
  OR: InputMaybe<Array<InputMaybe<McmNewsBlockFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkToNewsPage: InputMaybe<CfContentPageNestedFilter>;
  linkToNewsPage_exists: InputMaybe<Scalars['Boolean']['input']>;
  logoImage_exists: InputMaybe<Scalars['Boolean']['input']>;
  pubDate: InputMaybe<Scalars['DateTime']['input']>;
  pubDate_exists: InputMaybe<Scalars['Boolean']['input']>;
  pubDate_gt: InputMaybe<Scalars['DateTime']['input']>;
  pubDate_gte: InputMaybe<Scalars['DateTime']['input']>;
  pubDate_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  pubDate_lt: InputMaybe<Scalars['DateTime']['input']>;
  pubDate_lte: InputMaybe<Scalars['DateTime']['input']>;
  pubDate_not: InputMaybe<Scalars['DateTime']['input']>;
  pubDate_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys: InputMaybe<SysFilter>;
  text: InputMaybe<Scalars['String']['input']>;
  text_contains: InputMaybe<Scalars['String']['input']>;
  text_exists: InputMaybe<Scalars['Boolean']['input']>;
  text_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not: InputMaybe<Scalars['String']['input']>;
  text_not_contains: InputMaybe<Scalars['String']['input']>;
  text_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type McmNewsBlockLinkingCollections = {
  __typename?: 'McmNewsBlockLinkingCollections';
  contentPageCollection: Maybe<ContentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
  mcmNewsListCollection: Maybe<McmNewsListCollection>;
};


export type McmNewsBlockLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<McmNewsBlockLinkingCollectionsContentPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type McmNewsBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type McmNewsBlockLinkingCollectionsMcmNewsListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<McmNewsBlockLinkingCollectionsMcmNewsListCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum McmNewsBlockLinkingCollectionsContentPageCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export enum McmNewsBlockLinkingCollectionsMcmNewsListCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export enum McmNewsBlockOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  PUBDATE_ASC = 'pubDate_ASC',
  PUBDATE_DESC = 'pubDate_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

/** List with all mcm news. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mcmNewsList) */
export type McmNewsList = Entry & _Node & {
  __typename?: 'McmNewsList';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<McmNewsListLinkingCollections>;
  mcmNewsListCollection: Maybe<McmNewsListMcmNewsListCollection>;
  sys: Sys;
};


/** List with all mcm news. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mcmNewsList) */
export type McmNewsListInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** List with all mcm news. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mcmNewsList) */
export type McmNewsListLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** List with all mcm news. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/mcmNewsList) */
export type McmNewsListMcmNewsListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<McmNewsListMcmNewsListCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<McmNewsBlockFilter>;
};

export type McmNewsListCollection = {
  __typename?: 'McmNewsListCollection';
  items: Array<Maybe<McmNewsList>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type McmNewsListFilter = {
  AND: InputMaybe<Array<InputMaybe<McmNewsListFilter>>>;
  OR: InputMaybe<Array<InputMaybe<McmNewsListFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mcmNewsList: InputMaybe<CfMcmNewsBlockNestedFilter>;
  mcmNewsListCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type McmNewsListLinkingCollections = {
  __typename?: 'McmNewsListLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  newsBlockCollection: Maybe<NewsBlockCollection>;
};


export type McmNewsListLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type McmNewsListLinkingCollectionsNewsBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<McmNewsListLinkingCollectionsNewsBlockCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum McmNewsListLinkingCollectionsNewsBlockCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  NEWSSOURCE_ASC = 'newsSource_ASC',
  NEWSSOURCE_DESC = 'newsSource_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export type McmNewsListMcmNewsListCollection = {
  __typename?: 'McmNewsListMcmNewsListCollection';
  items: Array<Maybe<McmNewsBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum McmNewsListMcmNewsListCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  PUBDATE_ASC = 'pubDate_ASC',
  PUBDATE_DESC = 'pubDate_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum McmNewsListOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

/** Will be removed [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/missingPlayers) */
export type MissingPlayers = Entry & _Node & {
  __typename?: 'MissingPlayers';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<MissingPlayersLinkingCollections>;
  matchId: Maybe<Scalars['String']['output']>;
  missingPlayers: Maybe<Scalars['JSON']['output']>;
  sys: Sys;
};


/** Will be removed [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/missingPlayers) */
export type MissingPlayersInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Will be removed [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/missingPlayers) */
export type MissingPlayersLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Will be removed [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/missingPlayers) */
export type MissingPlayersMatchIdArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Will be removed [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/missingPlayers) */
export type MissingPlayersMissingPlayersArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type MissingPlayersCollection = {
  __typename?: 'MissingPlayersCollection';
  items: Array<Maybe<MissingPlayers>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MissingPlayersFilter = {
  AND: InputMaybe<Array<InputMaybe<MissingPlayersFilter>>>;
  OR: InputMaybe<Array<InputMaybe<MissingPlayersFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  matchId: InputMaybe<Scalars['String']['input']>;
  matchId_contains: InputMaybe<Scalars['String']['input']>;
  matchId_exists: InputMaybe<Scalars['Boolean']['input']>;
  matchId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  matchId_not: InputMaybe<Scalars['String']['input']>;
  matchId_not_contains: InputMaybe<Scalars['String']['input']>;
  matchId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  missingPlayers_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type MissingPlayersLinkingCollections = {
  __typename?: 'MissingPlayersLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type MissingPlayersLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MissingPlayersOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  MATCHID_ASC = 'matchId_ASC',
  MATCHID_DESC = 'matchId_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

/** An item in the menu. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/navigationItem) */
export type NavigationItem = Entry & _Node & {
  __typename?: 'NavigationItem';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  footerDescriptionText: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<NavigationItemLinkingCollections>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<ContentPage>;
};


/** An item in the menu. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/navigationItem) */
export type NavigationItemFooterDescriptionTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** An item in the menu. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/navigationItem) */
export type NavigationItemLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** An item in the menu. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/navigationItem) */
export type NavigationItemTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** An item in the menu. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/navigationItem) */
export type NavigationItemUrlArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ContentPageFilter>;
};

export type NavigationItemCollection = {
  __typename?: 'NavigationItemCollection';
  items: Array<Maybe<NavigationItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationItemFilter = {
  AND: InputMaybe<Array<InputMaybe<NavigationItemFilter>>>;
  OR: InputMaybe<Array<InputMaybe<NavigationItemFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  footerDescriptionText: InputMaybe<Scalars['String']['input']>;
  footerDescriptionText_contains: InputMaybe<Scalars['String']['input']>;
  footerDescriptionText_exists: InputMaybe<Scalars['Boolean']['input']>;
  footerDescriptionText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerDescriptionText_not: InputMaybe<Scalars['String']['input']>;
  footerDescriptionText_not_contains: InputMaybe<Scalars['String']['input']>;
  footerDescriptionText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url: InputMaybe<CfContentPageNestedFilter>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavigationItemLinkingCollections = {
  __typename?: 'NavigationItemLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  footerCollection: Maybe<FooterCollection>;
  mainNavigationCollection: Maybe<MainNavigationCollection>;
};


export type NavigationItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationItemLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationItemLinkingCollectionsFooterCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationItemLinkingCollectionsMainNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationItemLinkingCollectionsMainNavigationCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NavigationItemLinkingCollectionsFooterCollectionOrder {
  FOOTERSECTION1TITLE_ASC = 'footerSection1Title_ASC',
  FOOTERSECTION1TITLE_DESC = 'footerSection1Title_DESC',
  FOOTERSECTION2TITLE_ASC = 'footerSection2Title_ASC',
  FOOTERSECTION2TITLE_DESC = 'footerSection2Title_DESC',
  FOOTERSECTION3TITLE_ASC = 'footerSection3Title_ASC',
  FOOTERSECTION3TITLE_DESC = 'footerSection3Title_DESC',
  LINKTOEMAIL_ASC = 'linkToEmail_ASC',
  LINKTOEMAIL_DESC = 'linkToEmail_DESC',
  LINKTOFACEBOOK_ASC = 'linkToFacebook_ASC',
  LINKTOFACEBOOK_DESC = 'linkToFacebook_DESC',
  LINKTOINSTAGRAM_ASC = 'linkToInstagram_ASC',
  LINKTOINSTAGRAM_DESC = 'linkToInstagram_DESC',
  LINKTOTWITTER_ASC = 'linkToTwitter_ASC',
  LINKTOTWITTER_DESC = 'linkToTwitter_DESC',
  SECTIONONETITLETWO_ASC = 'sectionOneTitleTwo_ASC',
  SECTIONONETITLETWO_DESC = 'sectionOneTitleTwo_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum NavigationItemLinkingCollectionsMainNavigationCollectionOrder {
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum NavigationItemOrder {
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

/** Nyhets block [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/newsBlock) */
export type NewsBlock = Entry & _Node & {
  __typename?: 'NewsBlock';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<NewsBlockLinkingCollections>;
  mcmNewsList: Maybe<McmNewsList>;
  newsSource: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Nyhets block [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/newsBlock) */
export type NewsBlockInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Nyhets block [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/newsBlock) */
export type NewsBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Nyhets block [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/newsBlock) */
export type NewsBlockMcmNewsListArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<McmNewsListFilter>;
};


/** Nyhets block [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/newsBlock) */
export type NewsBlockNewsSourceArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type NewsBlockCollection = {
  __typename?: 'NewsBlockCollection';
  items: Array<Maybe<NewsBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NewsBlockFilter = {
  AND: InputMaybe<Array<InputMaybe<NewsBlockFilter>>>;
  OR: InputMaybe<Array<InputMaybe<NewsBlockFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mcmNewsList: InputMaybe<CfMcmNewsListNestedFilter>;
  mcmNewsList_exists: InputMaybe<Scalars['Boolean']['input']>;
  newsSource: InputMaybe<Scalars['String']['input']>;
  newsSource_contains: InputMaybe<Scalars['String']['input']>;
  newsSource_exists: InputMaybe<Scalars['Boolean']['input']>;
  newsSource_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  newsSource_not: InputMaybe<Scalars['String']['input']>;
  newsSource_not_contains: InputMaybe<Scalars['String']['input']>;
  newsSource_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type NewsBlockLinkingCollections = {
  __typename?: 'NewsBlockLinkingCollections';
  contentPageCollection: Maybe<ContentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};


export type NewsBlockLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NewsBlockLinkingCollectionsContentPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NewsBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NewsBlockLinkingCollectionsContentPageCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export enum NewsBlockOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  NEWSSOURCE_ASC = 'newsSource_ASC',
  NEWSSOURCE_DESC = 'newsSource_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/oddsComparsionBlock) */
export type OddsComparsionBlock = Entry & _Node & {
  __typename?: 'OddsComparsionBlock';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<OddsComparsionBlockLinkingCollections>;
  sport: Maybe<Sport>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/oddsComparsionBlock) */
export type OddsComparsionBlockInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/oddsComparsionBlock) */
export type OddsComparsionBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/oddsComparsionBlock) */
export type OddsComparsionBlockSportArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<SportFilter>;
};

export type OddsComparsionBlockCollection = {
  __typename?: 'OddsComparsionBlockCollection';
  items: Array<Maybe<OddsComparsionBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type OddsComparsionBlockFilter = {
  AND: InputMaybe<Array<InputMaybe<OddsComparsionBlockFilter>>>;
  OR: InputMaybe<Array<InputMaybe<OddsComparsionBlockFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sport: InputMaybe<CfSportNestedFilter>;
  sport_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type OddsComparsionBlockLinkingCollections = {
  __typename?: 'OddsComparsionBlockLinkingCollections';
  contentPageCollection: Maybe<ContentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};


export type OddsComparsionBlockLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<OddsComparsionBlockLinkingCollectionsContentPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type OddsComparsionBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum OddsComparsionBlockLinkingCollectionsContentPageCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export enum OddsComparsionBlockOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

/** A model for representing a player, now used at: Injured players for match. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/player) */
export type Player = Entry & _Node & {
  __typename?: 'Player';
  _id: Scalars['ID']['output'];
  absenceReason: Maybe<Scalars['String']['output']>;
  artistName: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<PlayerLinkingCollections>;
  name: Maybe<Scalars['String']['output']>;
  position: Maybe<Scalars['String']['output']>;
  rating: Maybe<Scalars['String']['output']>;
  shirtNumber: Maybe<Scalars['String']['output']>;
  sys: Sys;
  team: Maybe<Scalars['String']['output']>;
};


/** A model for representing a player, now used at: Injured players for match. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/player) */
export type PlayerAbsenceReasonArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A model for representing a player, now used at: Injured players for match. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/player) */
export type PlayerArtistNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A model for representing a player, now used at: Injured players for match. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/player) */
export type PlayerInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A model for representing a player, now used at: Injured players for match. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/player) */
export type PlayerLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A model for representing a player, now used at: Injured players for match. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/player) */
export type PlayerNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A model for representing a player, now used at: Injured players for match. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/player) */
export type PlayerPositionArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A model for representing a player, now used at: Injured players for match. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/player) */
export type PlayerRatingArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A model for representing a player, now used at: Injured players for match. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/player) */
export type PlayerShirtNumberArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A model for representing a player, now used at: Injured players for match. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/player) */
export type PlayerTeamArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type PlayerCollection = {
  __typename?: 'PlayerCollection';
  items: Array<Maybe<Player>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PlayerFilter = {
  AND: InputMaybe<Array<InputMaybe<PlayerFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PlayerFilter>>>;
  absenceReason: InputMaybe<Scalars['String']['input']>;
  absenceReason_contains: InputMaybe<Scalars['String']['input']>;
  absenceReason_exists: InputMaybe<Scalars['Boolean']['input']>;
  absenceReason_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  absenceReason_not: InputMaybe<Scalars['String']['input']>;
  absenceReason_not_contains: InputMaybe<Scalars['String']['input']>;
  absenceReason_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistName: InputMaybe<Scalars['String']['input']>;
  artistName_contains: InputMaybe<Scalars['String']['input']>;
  artistName_exists: InputMaybe<Scalars['Boolean']['input']>;
  artistName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistName_not: InputMaybe<Scalars['String']['input']>;
  artistName_not_contains: InputMaybe<Scalars['String']['input']>;
  artistName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: InputMaybe<Scalars['String']['input']>;
  name_contains: InputMaybe<Scalars['String']['input']>;
  name_exists: InputMaybe<Scalars['Boolean']['input']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not: InputMaybe<Scalars['String']['input']>;
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  position: InputMaybe<Scalars['String']['input']>;
  position_contains: InputMaybe<Scalars['String']['input']>;
  position_exists: InputMaybe<Scalars['Boolean']['input']>;
  position_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  position_not: InputMaybe<Scalars['String']['input']>;
  position_not_contains: InputMaybe<Scalars['String']['input']>;
  position_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rating: InputMaybe<Scalars['String']['input']>;
  rating_contains: InputMaybe<Scalars['String']['input']>;
  rating_exists: InputMaybe<Scalars['Boolean']['input']>;
  rating_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rating_not: InputMaybe<Scalars['String']['input']>;
  rating_not_contains: InputMaybe<Scalars['String']['input']>;
  rating_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shirtNumber: InputMaybe<Scalars['String']['input']>;
  shirtNumber_contains: InputMaybe<Scalars['String']['input']>;
  shirtNumber_exists: InputMaybe<Scalars['Boolean']['input']>;
  shirtNumber_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shirtNumber_not: InputMaybe<Scalars['String']['input']>;
  shirtNumber_not_contains: InputMaybe<Scalars['String']['input']>;
  shirtNumber_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  team: InputMaybe<Scalars['String']['input']>;
  team_contains: InputMaybe<Scalars['String']['input']>;
  team_exists: InputMaybe<Scalars['Boolean']['input']>;
  team_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  team_not: InputMaybe<Scalars['String']['input']>;
  team_not_contains: InputMaybe<Scalars['String']['input']>;
  team_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PlayerLinkingCollections = {
  __typename?: 'PlayerLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  matchCollection: Maybe<MatchCollection>;
};


export type PlayerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PlayerLinkingCollectionsMatchCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PlayerLinkingCollectionsMatchCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PlayerLinkingCollectionsMatchCollectionOrder {
  AWAYTEAMDISPLAYNAME_ASC = 'awayTeamDisplayName_ASC',
  AWAYTEAMDISPLAYNAME_DESC = 'awayTeamDisplayName_DESC',
  BETLEVEL_ASC = 'betLevel_ASC',
  BETLEVEL_DESC = 'betLevel_DESC',
  BETTYPE_ASC = 'betType_ASC',
  BETTYPE_DESC = 'betType_DESC',
  BETVALUE_ASC = 'betValue_ASC',
  BETVALUE_DESC = 'betValue_DESC',
  CITY_ASC = 'city_ASC',
  CITY_DESC = 'city_DESC',
  COMPETITORIDAWAY_ASC = 'competitorIdAway_ASC',
  COMPETITORIDAWAY_DESC = 'competitorIdAway_DESC',
  COMPETITORIDHOME_ASC = 'competitorIdHome_ASC',
  COMPETITORIDHOME_DESC = 'competitorIdHome_DESC',
  COMPETITORNAMEAWAY_ASC = 'competitorNameAway_ASC',
  COMPETITORNAMEAWAY_DESC = 'competitorNameAway_DESC',
  COMPETITORNAMEHOME_ASC = 'competitorNameHome_ASC',
  COMPETITORNAMEHOME_DESC = 'competitorNameHome_DESC',
  COUNTRY_ASC = 'country_ASC',
  COUNTRY_DESC = 'country_DESC',
  ESTIMATIONINPERCENT_ASC = 'estimationInPercent_ASC',
  ESTIMATIONINPERCENT_DESC = 'estimationInPercent_DESC',
  GROUPNAME_ASC = 'groupName_ASC',
  GROUPNAME_DESC = 'groupName_DESC',
  HOMETEAMDISPLAYNAME_ASC = 'homeTeamDisplayName_ASC',
  HOMETEAMDISPLAYNAME_DESC = 'homeTeamDisplayName_DESC',
  ISHIDDEN_ASC = 'isHidden_ASC',
  ISHIDDEN_DESC = 'isHidden_DESC',
  MATCHID_ASC = 'matchId_ASC',
  MATCHID_DESC = 'matchId_DESC',
  MCMPLAYTO_ASC = 'mcmPlayTo_ASC',
  MCMPLAYTO_DESC = 'mcmPlayTo_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  PLAYABLEFROM_ASC = 'playableFrom_ASC',
  PLAYABLEFROM_DESC = 'playableFrom_DESC',
  SCHEDULEDSWE_ASC = 'scheduledSwe_ASC',
  SCHEDULEDSWE_DESC = 'scheduledSwe_DESC',
  SCHEDULED_ASC = 'scheduled_ASC',
  SCHEDULED_DESC = 'scheduled_DESC',
  SEASONID_ASC = 'seasonId_ASC',
  SEASONID_DESC = 'seasonId_DESC',
  SHOWBETSUGGESTION_ASC = 'showBetSuggestion_ASC',
  SHOWBETSUGGESTION_DESC = 'showBetSuggestion_DESC',
  SPORTID_ASC = 'sportId_ASC',
  SPORTID_DESC = 'sportId_DESC',
  SPORT_ASC = 'sport_ASC',
  SPORT_DESC = 'sport_DESC',
  SUGGESTEDTEAM_ASC = 'suggestedTeam_ASC',
  SUGGESTEDTEAM_DESC = 'suggestedTeam_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TOURNAMENTID_ASC = 'tournamentId_ASC',
  TOURNAMENTID_DESC = 'tournamentId_DESC',
  TOURNAMENTNAME_ASC = 'tournamentName_ASC',
  TOURNAMENTNAME_DESC = 'tournamentName_DESC',
  VENUEID_ASC = 'venueId_ASC',
  VENUEID_DESC = 'venueId_DESC',
  VENUENAME_ASC = 'venueName_ASC',
  VENUENAME_DESC = 'venueName_DESC'
}

export enum PlayerOrder {
  ABSENCEREASON_ASC = 'absenceReason_ASC',
  ABSENCEREASON_DESC = 'absenceReason_DESC',
  ARTISTNAME_ASC = 'artistName_ASC',
  ARTISTNAME_DESC = 'artistName_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  POSITION_ASC = 'position_ASC',
  POSITION_DESC = 'position_DESC',
  RATING_ASC = 'rating_ASC',
  RATING_DESC = 'rating_DESC',
  SHIRTNUMBER_ASC = 'shirtNumber_ASC',
  SHIRTNUMBER_DESC = 'shirtNumber_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TEAM_ASC = 'team_ASC',
  TEAM_DESC = 'team_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset: Maybe<Asset>;
  assetCollection: Maybe<AssetCollection>;
  betSuggestionBlock: Maybe<BetSuggestionBlock>;
  betSuggestionBlockCollection: Maybe<BetSuggestionBlockCollection>;
  bookingAgency: Maybe<BookingAgency>;
  bookingAgencyCollection: Maybe<BookingAgencyCollection>;
  cardBlock: Maybe<CardBlock>;
  cardBlockCollection: Maybe<CardBlockCollection>;
  cardLinkBlock: Maybe<CardLinkBlock>;
  cardLinkBlockCollection: Maybe<CardLinkBlockCollection>;
  cardListBlock: Maybe<CardListBlock>;
  cardListBlockCollection: Maybe<CardListBlockCollection>;
  contentPage: Maybe<ContentPage>;
  contentPageCollection: Maybe<ContentPageCollection>;
  documentPage: Maybe<DocumentPage>;
  documentPageCollection: Maybe<DocumentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
  footer: Maybe<Footer>;
  footerCollection: Maybe<FooterCollection>;
  heroBlock: Maybe<HeroBlock>;
  heroBlockCollection: Maybe<HeroBlockCollection>;
  image: Maybe<Image>;
  imageCollection: Maybe<ImageCollection>;
  images: Maybe<Images>;
  imagesCollection: Maybe<ImagesCollection>;
  landingBlock: Maybe<LandingBlock>;
  landingBlockCollection: Maybe<LandingBlockCollection>;
  liveScoreBlock: Maybe<LiveScoreBlock>;
  liveScoreBlockCollection: Maybe<LiveScoreBlockCollection>;
  loginBlock: Maybe<LoginBlock>;
  loginBlockCollection: Maybe<LoginBlockCollection>;
  mainNavigation: Maybe<MainNavigation>;
  mainNavigationCollection: Maybe<MainNavigationCollection>;
  match: Maybe<Match>;
  matchCollection: Maybe<MatchCollection>;
  matchEventItem: Maybe<MatchEventItem>;
  matchEventItemCollection: Maybe<MatchEventItemCollection>;
  matchEventsConfiguration: Maybe<MatchEventsConfiguration>;
  matchEventsConfigurationCollection: Maybe<MatchEventsConfigurationCollection>;
  matchList: Maybe<MatchList>;
  matchListCollection: Maybe<MatchListCollection>;
  mcmNewsBlock: Maybe<McmNewsBlock>;
  mcmNewsBlockCollection: Maybe<McmNewsBlockCollection>;
  mcmNewsList: Maybe<McmNewsList>;
  mcmNewsListCollection: Maybe<McmNewsListCollection>;
  missingPlayers: Maybe<MissingPlayers>;
  missingPlayersCollection: Maybe<MissingPlayersCollection>;
  navigationItem: Maybe<NavigationItem>;
  navigationItemCollection: Maybe<NavigationItemCollection>;
  newsBlock: Maybe<NewsBlock>;
  newsBlockCollection: Maybe<NewsBlockCollection>;
  oddsComparsionBlock: Maybe<OddsComparsionBlock>;
  oddsComparsionBlockCollection: Maybe<OddsComparsionBlockCollection>;
  player: Maybe<Player>;
  playerCollection: Maybe<PlayerCollection>;
  scrollToTopButton: Maybe<ScrollToTopButton>;
  scrollToTopButtonCollection: Maybe<ScrollToTopButtonCollection>;
  siteConfiguration: Maybe<SiteConfiguration>;
  siteConfigurationCollection: Maybe<SiteConfigurationCollection>;
  siteImages: Maybe<SiteImages>;
  siteImagesCollection: Maybe<SiteImagesCollection>;
  siteTranslations: Maybe<SiteTranslations>;
  siteTranslationsCollection: Maybe<SiteTranslationsCollection>;
  sport: Maybe<Sport>;
  sportCollection: Maybe<SportCollection>;
  subNav: Maybe<SubNav>;
  subNavCollection: Maybe<SubNavCollection>;
  subNavItem: Maybe<SubNavItem>;
  subNavItemCollection: Maybe<SubNavItemCollection>;
  team: Maybe<Team>;
  teamCollection: Maybe<TeamCollection>;
  textBlock: Maybe<TextBlock>;
  textBlockCollection: Maybe<TextBlockCollection>;
  timelineEvent: Maybe<TimelineEvent>;
  timelineEventCollection: Maybe<TimelineEventCollection>;
  tournament: Maybe<Tournament>;
  tournamentCollection: Maybe<TournamentCollection>;
  tournamentStandingsBlock: Maybe<TournamentStandingsBlock>;
  tournamentStandingsBlockCollection: Maybe<TournamentStandingsBlockCollection>;
  translation: Maybe<Translation>;
  translationCollection: Maybe<TranslationCollection>;
  translations: Maybe<Translations>;
  translationsCollection: Maybe<TranslationsCollection>;
  widgetBlock: Maybe<WidgetBlock>;
  widgetBlockCollection: Maybe<WidgetBlockCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<AssetFilter>;
};


export type QueryBetSuggestionBlockArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBetSuggestionBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<BetSuggestionBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<BetSuggestionBlockFilter>;
};


export type QueryBookingAgencyArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBookingAgencyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<BookingAgencyOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<BookingAgencyFilter>;
};


export type QueryCardBlockArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCardBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<CardBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CardBlockFilter>;
};


export type QueryCardLinkBlockArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCardLinkBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<CardLinkBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CardLinkBlockFilter>;
};


export type QueryCardListBlockArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCardListBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<CardListBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CardListBlockFilter>;
};


export type QueryContentPageArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ContentPageOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ContentPageFilter>;
};


export type QueryDocumentPageArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDocumentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<DocumentPageOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<DocumentPageFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<EntryFilter>;
};


export type QueryFooterArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<FooterOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<FooterFilter>;
};


export type QueryHeroBlockArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeroBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<HeroBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<HeroBlockFilter>;
};


export type QueryImageArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ImageOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ImageFilter>;
};


export type QueryImagesArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ImagesOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ImagesFilter>;
};


export type QueryLandingBlockArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLandingBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LandingBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<LandingBlockFilter>;
};


export type QueryLiveScoreBlockArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLiveScoreBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LiveScoreBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<LiveScoreBlockFilter>;
};


export type QueryLoginBlockArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLoginBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<LoginBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<LoginBlockFilter>;
};


export type QueryMainNavigationArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMainNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MainNavigationOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MainNavigationFilter>;
};


export type QueryMatchArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMatchCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MatchOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MatchFilter>;
};


export type QueryMatchEventItemArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMatchEventItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MatchEventItemOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MatchEventItemFilter>;
};


export type QueryMatchEventsConfigurationArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMatchEventsConfigurationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MatchEventsConfigurationOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MatchEventsConfigurationFilter>;
};


export type QueryMatchListArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMatchListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MatchListOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MatchListFilter>;
};


export type QueryMcmNewsBlockArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMcmNewsBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<McmNewsBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<McmNewsBlockFilter>;
};


export type QueryMcmNewsListArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMcmNewsListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<McmNewsListOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<McmNewsListFilter>;
};


export type QueryMissingPlayersArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMissingPlayersCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<MissingPlayersOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MissingPlayersFilter>;
};


export type QueryNavigationItemArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NavigationItemOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NavigationItemFilter>;
};


export type QueryNewsBlockArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNewsBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<NewsBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<NewsBlockFilter>;
};


export type QueryOddsComparsionBlockArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryOddsComparsionBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<OddsComparsionBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<OddsComparsionBlockFilter>;
};


export type QueryPlayerArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPlayerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<PlayerOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PlayerFilter>;
};


export type QueryScrollToTopButtonArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryScrollToTopButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<ScrollToTopButtonOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ScrollToTopButtonFilter>;
};


export type QuerySiteConfigurationArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySiteConfigurationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SiteConfigurationOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SiteConfigurationFilter>;
};


export type QuerySiteImagesArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySiteImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SiteImagesOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SiteImagesFilter>;
};


export type QuerySiteTranslationsArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySiteTranslationsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SiteTranslationsOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SiteTranslationsFilter>;
};


export type QuerySportArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySportCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SportOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SportFilter>;
};


export type QuerySubNavArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySubNavCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SubNavOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SubNavFilter>;
};


export type QuerySubNavItemArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySubNavItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SubNavItemOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SubNavItemFilter>;
};


export type QueryTeamArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTeamCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TeamOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TeamFilter>;
};


export type QueryTextBlockArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTextBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TextBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TextBlockFilter>;
};


export type QueryTimelineEventArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTimelineEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TimelineEventOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TimelineEventFilter>;
};


export type QueryTournamentArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTournamentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TournamentOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TournamentFilter>;
};


export type QueryTournamentStandingsBlockArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTournamentStandingsBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TournamentStandingsBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TournamentStandingsBlockFilter>;
};


export type QueryTranslationArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTranslationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TranslationOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TranslationFilter>;
};


export type QueryTranslationsArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTranslationsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TranslationsOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TranslationsFilter>;
};


export type QueryWidgetBlockArgs = {
  id: Scalars['String']['input'];
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryWidgetBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<WidgetBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<WidgetBlockFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** Green 'To top' button which appears at the bottom of every page. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/scrollToTopButton) */
export type ScrollToTopButton = Entry & _Node & {
  __typename?: 'ScrollToTopButton';
  _id: Scalars['ID']['output'];
  buttonText: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<ScrollToTopButtonLinkingCollections>;
  sys: Sys;
};


/** Green 'To top' button which appears at the bottom of every page. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/scrollToTopButton) */
export type ScrollToTopButtonButtonTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Green 'To top' button which appears at the bottom of every page. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/scrollToTopButton) */
export type ScrollToTopButtonInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Green 'To top' button which appears at the bottom of every page. [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/scrollToTopButton) */
export type ScrollToTopButtonLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ScrollToTopButtonCollection = {
  __typename?: 'ScrollToTopButtonCollection';
  items: Array<Maybe<ScrollToTopButton>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ScrollToTopButtonFilter = {
  AND: InputMaybe<Array<InputMaybe<ScrollToTopButtonFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ScrollToTopButtonFilter>>>;
  buttonText: InputMaybe<Scalars['String']['input']>;
  buttonText_contains: InputMaybe<Scalars['String']['input']>;
  buttonText_exists: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type ScrollToTopButtonLinkingCollections = {
  __typename?: 'ScrollToTopButtonLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type ScrollToTopButtonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ScrollToTopButtonOrder {
  BUTTONTEXT_ASC = 'buttonText_ASC',
  BUTTONTEXT_DESC = 'buttonText_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

/** Global configuration for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteConfiguration) */
export type SiteConfiguration = Entry & _Node & {
  __typename?: 'SiteConfiguration';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  daysAheadForMatchImport: Maybe<Scalars['Int']['output']>;
  daysLimitForMatchRemoval: Maybe<Scalars['Int']['output']>;
  defaultFooter: Maybe<Footer>;
  defaultMainNavigation: Maybe<MainNavigation>;
  defaultSubNav: Maybe<SubNav>;
  facebookFallbackImage: Maybe<Asset>;
  jerseyShadow: Maybe<Asset>;
  jerseyShadowOverlay: Maybe<Asset>;
  linkedFrom: Maybe<SiteConfigurationLinkingCollections>;
  siteLabels: Maybe<Scalars['JSON']['output']>;
  soccerField: Maybe<Asset>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** Global configuration for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteConfiguration) */
export type SiteConfigurationDaysAheadForMatchImportArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Global configuration for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteConfiguration) */
export type SiteConfigurationDaysLimitForMatchRemovalArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Global configuration for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteConfiguration) */
export type SiteConfigurationDefaultFooterArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<FooterFilter>;
};


/** Global configuration for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteConfiguration) */
export type SiteConfigurationDefaultMainNavigationArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<MainNavigationFilter>;
};


/** Global configuration for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteConfiguration) */
export type SiteConfigurationDefaultSubNavArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<SubNavFilter>;
};


/** Global configuration for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteConfiguration) */
export type SiteConfigurationFacebookFallbackImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Global configuration for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteConfiguration) */
export type SiteConfigurationJerseyShadowArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Global configuration for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteConfiguration) */
export type SiteConfigurationJerseyShadowOverlayArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Global configuration for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteConfiguration) */
export type SiteConfigurationLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Global configuration for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteConfiguration) */
export type SiteConfigurationSiteLabelsArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Global configuration for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteConfiguration) */
export type SiteConfigurationSoccerFieldArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Global configuration for the site [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteConfiguration) */
export type SiteConfigurationTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type SiteConfigurationCollection = {
  __typename?: 'SiteConfigurationCollection';
  items: Array<Maybe<SiteConfiguration>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SiteConfigurationFilter = {
  AND: InputMaybe<Array<InputMaybe<SiteConfigurationFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SiteConfigurationFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  daysAheadForMatchImport: InputMaybe<Scalars['Int']['input']>;
  daysAheadForMatchImport_exists: InputMaybe<Scalars['Boolean']['input']>;
  daysAheadForMatchImport_gt: InputMaybe<Scalars['Int']['input']>;
  daysAheadForMatchImport_gte: InputMaybe<Scalars['Int']['input']>;
  daysAheadForMatchImport_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  daysAheadForMatchImport_lt: InputMaybe<Scalars['Int']['input']>;
  daysAheadForMatchImport_lte: InputMaybe<Scalars['Int']['input']>;
  daysAheadForMatchImport_not: InputMaybe<Scalars['Int']['input']>;
  daysAheadForMatchImport_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  daysLimitForMatchRemoval: InputMaybe<Scalars['Int']['input']>;
  daysLimitForMatchRemoval_exists: InputMaybe<Scalars['Boolean']['input']>;
  daysLimitForMatchRemoval_gt: InputMaybe<Scalars['Int']['input']>;
  daysLimitForMatchRemoval_gte: InputMaybe<Scalars['Int']['input']>;
  daysLimitForMatchRemoval_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  daysLimitForMatchRemoval_lt: InputMaybe<Scalars['Int']['input']>;
  daysLimitForMatchRemoval_lte: InputMaybe<Scalars['Int']['input']>;
  daysLimitForMatchRemoval_not: InputMaybe<Scalars['Int']['input']>;
  daysLimitForMatchRemoval_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  defaultFooter: InputMaybe<CfFooterNestedFilter>;
  defaultFooter_exists: InputMaybe<Scalars['Boolean']['input']>;
  defaultMainNavigation: InputMaybe<CfMainNavigationNestedFilter>;
  defaultMainNavigation_exists: InputMaybe<Scalars['Boolean']['input']>;
  defaultSubNav: InputMaybe<CfSubNavNestedFilter>;
  defaultSubNav_exists: InputMaybe<Scalars['Boolean']['input']>;
  facebookFallbackImage_exists: InputMaybe<Scalars['Boolean']['input']>;
  jerseyShadowOverlay_exists: InputMaybe<Scalars['Boolean']['input']>;
  jerseyShadow_exists: InputMaybe<Scalars['Boolean']['input']>;
  siteLabels_exists: InputMaybe<Scalars['Boolean']['input']>;
  soccerField_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SiteConfigurationLinkingCollections = {
  __typename?: 'SiteConfigurationLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type SiteConfigurationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SiteConfigurationOrder {
  DAYSAHEADFORMATCHIMPORT_ASC = 'daysAheadForMatchImport_ASC',
  DAYSAHEADFORMATCHIMPORT_DESC = 'daysAheadForMatchImport_DESC',
  DAYSLIMITFORMATCHREMOVAL_ASC = 'daysLimitForMatchRemoval_ASC',
  DAYSLIMITFORMATCHREMOVAL_DESC = 'daysLimitForMatchRemoval_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteImages) */
export type SiteImages = Entry & _Node & {
  __typename?: 'SiteImages';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  imagesCollection: Maybe<SiteImagesImagesCollection>;
  internalTitle: Maybe<Scalars['String']['output']>;
  isActive: Maybe<Scalars['Boolean']['output']>;
  linkedFrom: Maybe<SiteImagesLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteImages) */
export type SiteImagesImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SiteImagesImagesCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ImagesFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteImages) */
export type SiteImagesInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteImages) */
export type SiteImagesIsActiveArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteImages) */
export type SiteImagesLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SiteImagesCollection = {
  __typename?: 'SiteImagesCollection';
  items: Array<Maybe<SiteImages>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SiteImagesFilter = {
  AND: InputMaybe<Array<InputMaybe<SiteImagesFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SiteImagesFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  images: InputMaybe<CfImagesNestedFilter>;
  imagesCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  isActive_exists: InputMaybe<Scalars['Boolean']['input']>;
  isActive_not: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type SiteImagesImagesCollection = {
  __typename?: 'SiteImagesImagesCollection';
  items: Array<Maybe<Images>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SiteImagesImagesCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export type SiteImagesLinkingCollections = {
  __typename?: 'SiteImagesLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type SiteImagesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SiteImagesOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISACTIVE_ASC = 'isActive_ASC',
  ISACTIVE_DESC = 'isActive_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteTranslations) */
export type SiteTranslations = Entry & _Node & {
  __typename?: 'SiteTranslations';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  isActive: Maybe<Scalars['Boolean']['output']>;
  linkedFrom: Maybe<SiteTranslationsLinkingCollections>;
  sys: Sys;
  translationsCollection: Maybe<SiteTranslationsTranslationsCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteTranslations) */
export type SiteTranslationsInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteTranslations) */
export type SiteTranslationsIsActiveArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteTranslations) */
export type SiteTranslationsLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/siteTranslations) */
export type SiteTranslationsTranslationsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SiteTranslationsTranslationsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TranslationsFilter>;
};

export type SiteTranslationsCollection = {
  __typename?: 'SiteTranslationsCollection';
  items: Array<Maybe<SiteTranslations>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SiteTranslationsFilter = {
  AND: InputMaybe<Array<InputMaybe<SiteTranslationsFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SiteTranslationsFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  isActive_exists: InputMaybe<Scalars['Boolean']['input']>;
  isActive_not: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  translations: InputMaybe<CfTranslationsNestedFilter>;
  translationsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type SiteTranslationsLinkingCollections = {
  __typename?: 'SiteTranslationsLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type SiteTranslationsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SiteTranslationsOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISACTIVE_ASC = 'isActive_ASC',
  ISACTIVE_DESC = 'isActive_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export type SiteTranslationsTranslationsCollection = {
  __typename?: 'SiteTranslationsTranslationsCollection';
  items: Array<Maybe<Translations>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SiteTranslationsTranslationsCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  LISTID_ASC = 'listId_ASC',
  LISTID_DESC = 'listId_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/sport) */
export type Sport = Entry & _Node & {
  __typename?: 'Sport';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  icon: Maybe<Asset>;
  image: Maybe<Asset>;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<SportLinkingCollections>;
  sportId: Maybe<Scalars['String']['output']>;
  sys: Sys;
  tournamentsCollection: Maybe<SportTournamentsCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/sport) */
export type SportIconArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/sport) */
export type SportImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/sport) */
export type SportInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/sport) */
export type SportLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/sport) */
export type SportSportIdArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/sport) */
export type SportTournamentsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SportTournamentsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TournamentFilter>;
};

export type SportCollection = {
  __typename?: 'SportCollection';
  items: Array<Maybe<Sport>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SportFilter = {
  AND: InputMaybe<Array<InputMaybe<SportFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SportFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  icon_exists: InputMaybe<Scalars['Boolean']['input']>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sportId: InputMaybe<Scalars['String']['input']>;
  sportId_contains: InputMaybe<Scalars['String']['input']>;
  sportId_exists: InputMaybe<Scalars['Boolean']['input']>;
  sportId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sportId_not: InputMaybe<Scalars['String']['input']>;
  sportId_not_contains: InputMaybe<Scalars['String']['input']>;
  sportId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  tournaments: InputMaybe<CfTournamentNestedFilter>;
  tournamentsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type SportLinkingCollections = {
  __typename?: 'SportLinkingCollections';
  betSuggestionBlockCollection: Maybe<BetSuggestionBlockCollection>;
  entryCollection: Maybe<EntryCollection>;
  liveScoreBlockCollection: Maybe<LiveScoreBlockCollection>;
  oddsComparsionBlockCollection: Maybe<OddsComparsionBlockCollection>;
  tournamentStandingsBlockCollection: Maybe<TournamentStandingsBlockCollection>;
};


export type SportLinkingCollectionsBetSuggestionBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SportLinkingCollectionsBetSuggestionBlockCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SportLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SportLinkingCollectionsLiveScoreBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SportLinkingCollectionsLiveScoreBlockCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SportLinkingCollectionsOddsComparsionBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SportLinkingCollectionsOddsComparsionBlockCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SportLinkingCollectionsTournamentStandingsBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SportLinkingCollectionsTournamentStandingsBlockCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SportLinkingCollectionsBetSuggestionBlockCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum SportLinkingCollectionsLiveScoreBlockCollectionOrder {
  CLOSEDMATCHES_ASC = 'closedMatches_ASC',
  CLOSEDMATCHES_DESC = 'closedMatches_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  NOLIVEMATCHESAVAILABLE_ASC = 'noLiveMatchesAvailable_ASC',
  NOLIVEMATCHESAVAILABLE_DESC = 'noLiveMatchesAvailable_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum SportLinkingCollectionsOddsComparsionBlockCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export enum SportLinkingCollectionsTournamentStandingsBlockCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export enum SportOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SPORTID_ASC = 'sportId_ASC',
  SPORTID_DESC = 'sportId_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export type SportTournamentsCollection = {
  __typename?: 'SportTournamentsCollection';
  items: Array<Maybe<Tournament>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SportTournamentsCollectionOrder {
  COUNTRY_ASC = 'country_ASC',
  COUNTRY_DESC = 'country_DESC',
  INACTIVATE_ASC = 'inActivate_ASC',
  INACTIVATE_DESC = 'inActivate_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TOURNAMENTID_ASC = 'tournamentId_ASC',
  TOURNAMENTID_DESC = 'tournamentId_DESC',
  TOURNAMENTNAME_ASC = 'tournamentName_ASC',
  TOURNAMENTNAME_DESC = 'tournamentName_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/subNav) */
export type SubNav = Entry & _Node & {
  __typename?: 'SubNav';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<SubNavLinkingCollections>;
  mobileBehaviour: Maybe<Scalars['String']['output']>;
  subNavItemsCollection: Maybe<SubNavSubNavItemsCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/subNav) */
export type SubNavInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/subNav) */
export type SubNavLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/subNav) */
export type SubNavMobileBehaviourArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/subNav) */
export type SubNavSubNavItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SubNavSubNavItemsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<SubNavItemFilter>;
};

export type SubNavCollection = {
  __typename?: 'SubNavCollection';
  items: Array<Maybe<SubNav>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SubNavFilter = {
  AND: InputMaybe<Array<InputMaybe<SubNavFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SubNavFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mobileBehaviour: InputMaybe<Scalars['String']['input']>;
  mobileBehaviour_contains: InputMaybe<Scalars['String']['input']>;
  mobileBehaviour_exists: InputMaybe<Scalars['Boolean']['input']>;
  mobileBehaviour_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mobileBehaviour_not: InputMaybe<Scalars['String']['input']>;
  mobileBehaviour_not_contains: InputMaybe<Scalars['String']['input']>;
  mobileBehaviour_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subNavItems: InputMaybe<CfSubNavItemNestedFilter>;
  subNavItemsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/subNavItem) */
export type SubNavItem = Entry & _Node & {
  __typename?: 'SubNavItem';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  icon: Maybe<Asset>;
  internalTitle: Maybe<Scalars['String']['output']>;
  link: Maybe<ContentPage>;
  linkedFrom: Maybe<SubNavItemLinkingCollections>;
  sys: Sys;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/subNavItem) */
export type SubNavItemIconArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/subNavItem) */
export type SubNavItemInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/subNavItem) */
export type SubNavItemLinkArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<ContentPageFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/subNavItem) */
export type SubNavItemLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/subNavItem) */
export type SubNavItemTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type SubNavItemCollection = {
  __typename?: 'SubNavItemCollection';
  items: Array<Maybe<SubNavItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SubNavItemFilter = {
  AND: InputMaybe<Array<InputMaybe<SubNavItemFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SubNavItemFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  icon_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link: InputMaybe<CfContentPageNestedFilter>;
  link_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SubNavItemLinkingCollections = {
  __typename?: 'SubNavItemLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  subNavCollection: Maybe<SubNavCollection>;
};


export type SubNavItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SubNavItemLinkingCollectionsSubNavCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SubNavItemLinkingCollectionsSubNavCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SubNavItemLinkingCollectionsSubNavCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  MOBILEBEHAVIOUR_ASC = 'mobileBehaviour_ASC',
  MOBILEBEHAVIOUR_DESC = 'mobileBehaviour_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export enum SubNavItemOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export type SubNavLinkingCollections = {
  __typename?: 'SubNavLinkingCollections';
  contentPageCollection: Maybe<ContentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
  siteConfigurationCollection: Maybe<SiteConfigurationCollection>;
};


export type SubNavLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SubNavLinkingCollectionsContentPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SubNavLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SubNavLinkingCollectionsSiteConfigurationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<SubNavLinkingCollectionsSiteConfigurationCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SubNavLinkingCollectionsContentPageCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export enum SubNavLinkingCollectionsSiteConfigurationCollectionOrder {
  DAYSAHEADFORMATCHIMPORT_ASC = 'daysAheadForMatchImport_ASC',
  DAYSAHEADFORMATCHIMPORT_DESC = 'daysAheadForMatchImport_DESC',
  DAYSLIMITFORMATCHREMOVAL_ASC = 'daysLimitForMatchRemoval_ASC',
  DAYSLIMITFORMATCHREMOVAL_DESC = 'daysLimitForMatchRemoval_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum SubNavOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  MOBILEBEHAVIOUR_ASC = 'mobileBehaviour_ASC',
  MOBILEBEHAVIOUR_DESC = 'mobileBehaviour_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export type SubNavSubNavItemsCollection = {
  __typename?: 'SubNavSubNavItemsCollection';
  items: Array<Maybe<SubNavItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SubNavSubNavItemsCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale: Maybe<Scalars['String']['output']>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  publishedVersion: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id: InputMaybe<Scalars['String']['input']>;
  id_contains: InputMaybe<Scalars['String']['input']>;
  id_exists: InputMaybe<Scalars['Boolean']['input']>;
  id_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not: InputMaybe<Scalars['String']['input']>;
  id_not_contains: InputMaybe<Scalars['String']['input']>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/team) */
export type Team = Entry & _Node & {
  __typename?: 'Team';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<TeamLinkingCollections>;
  logo: Maybe<Asset>;
  sys: Sys;
  team: Maybe<Scalars['JSON']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/team) */
export type TeamInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/team) */
export type TeamLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/team) */
export type TeamLogoArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/team) */
export type TeamTeamArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type TeamCollection = {
  __typename?: 'TeamCollection';
  items: Array<Maybe<Team>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TeamFilter = {
  AND: InputMaybe<Array<InputMaybe<TeamFilter>>>;
  OR: InputMaybe<Array<InputMaybe<TeamFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  team_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type TeamLinkingCollections = {
  __typename?: 'TeamLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type TeamLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TeamOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

/** Block for producing text utilizing markdown [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/textBlock) */
export type TextBlock = Entry & _Node & {
  __typename?: 'TextBlock';
  _id: Scalars['ID']['output'];
  centerText: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<TextBlockLinkingCollections>;
  optionalBackgroundImage: Maybe<Asset>;
  preamble: Maybe<Scalars['String']['output']>;
  sys: Sys;
  text: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


/** Block for producing text utilizing markdown [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/textBlock) */
export type TextBlockCenterTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Block for producing text utilizing markdown [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/textBlock) */
export type TextBlockInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Block for producing text utilizing markdown [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/textBlock) */
export type TextBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Block for producing text utilizing markdown [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/textBlock) */
export type TextBlockOptionalBackgroundImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block for producing text utilizing markdown [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/textBlock) */
export type TextBlockPreambleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Block for producing text utilizing markdown [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/textBlock) */
export type TextBlockTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** Block for producing text utilizing markdown [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/textBlock) */
export type TextBlockTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type TextBlockCollection = {
  __typename?: 'TextBlockCollection';
  items: Array<Maybe<TextBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TextBlockFilter = {
  AND: InputMaybe<Array<InputMaybe<TextBlockFilter>>>;
  OR: InputMaybe<Array<InputMaybe<TextBlockFilter>>>;
  centerText: InputMaybe<Scalars['Boolean']['input']>;
  centerText_exists: InputMaybe<Scalars['Boolean']['input']>;
  centerText_not: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  optionalBackgroundImage_exists: InputMaybe<Scalars['Boolean']['input']>;
  preamble: InputMaybe<Scalars['String']['input']>;
  preamble_contains: InputMaybe<Scalars['String']['input']>;
  preamble_exists: InputMaybe<Scalars['Boolean']['input']>;
  preamble_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preamble_not: InputMaybe<Scalars['String']['input']>;
  preamble_not_contains: InputMaybe<Scalars['String']['input']>;
  preamble_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  text: InputMaybe<Scalars['String']['input']>;
  text_contains: InputMaybe<Scalars['String']['input']>;
  text_exists: InputMaybe<Scalars['Boolean']['input']>;
  text_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not: InputMaybe<Scalars['String']['input']>;
  text_not_contains: InputMaybe<Scalars['String']['input']>;
  text_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TextBlockLinkingCollections = {
  __typename?: 'TextBlockLinkingCollections';
  contentPageCollection: Maybe<ContentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};


export type TextBlockLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TextBlockLinkingCollectionsContentPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TextBlockLinkingCollectionsContentPageCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export enum TextBlockOrder {
  CENTERTEXT_ASC = 'centerText_ASC',
  CENTERTEXT_DESC = 'centerText_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/timelineEvent) */
export type TimelineEvent = Entry & _Node & {
  __typename?: 'TimelineEvent';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  hide: Maybe<Scalars['Boolean']['output']>;
  key: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<TimelineEventLinkingCollections>;
  push: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  text: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/timelineEvent) */
export type TimelineEventHideArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/timelineEvent) */
export type TimelineEventKeyArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/timelineEvent) */
export type TimelineEventLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/timelineEvent) */
export type TimelineEventPushArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/timelineEvent) */
export type TimelineEventTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type TimelineEventCollection = {
  __typename?: 'TimelineEventCollection';
  items: Array<Maybe<TimelineEvent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TimelineEventFilter = {
  AND: InputMaybe<Array<InputMaybe<TimelineEventFilter>>>;
  OR: InputMaybe<Array<InputMaybe<TimelineEventFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  hide: InputMaybe<Scalars['Boolean']['input']>;
  hide_exists: InputMaybe<Scalars['Boolean']['input']>;
  hide_not: InputMaybe<Scalars['Boolean']['input']>;
  key: InputMaybe<Scalars['String']['input']>;
  key_contains: InputMaybe<Scalars['String']['input']>;
  key_exists: InputMaybe<Scalars['Boolean']['input']>;
  key_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  key_not: InputMaybe<Scalars['String']['input']>;
  key_not_contains: InputMaybe<Scalars['String']['input']>;
  key_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  push: InputMaybe<Scalars['Boolean']['input']>;
  push_exists: InputMaybe<Scalars['Boolean']['input']>;
  push_not: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  text: InputMaybe<Scalars['String']['input']>;
  text_contains: InputMaybe<Scalars['String']['input']>;
  text_exists: InputMaybe<Scalars['Boolean']['input']>;
  text_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not: InputMaybe<Scalars['String']['input']>;
  text_not_contains: InputMaybe<Scalars['String']['input']>;
  text_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TimelineEventLinkingCollections = {
  __typename?: 'TimelineEventLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type TimelineEventLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TimelineEventOrder {
  HIDE_ASC = 'hide_ASC',
  HIDE_DESC = 'hide_DESC',
  KEY_ASC = 'key_ASC',
  KEY_DESC = 'key_DESC',
  PUSH_ASC = 'push_ASC',
  PUSH_DESC = 'push_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TEXT_ASC = 'text_ASC',
  TEXT_DESC = 'text_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/tournament) */
export type Tournament = Entry & _Node & {
  __typename?: 'Tournament';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  country: Maybe<Scalars['String']['output']>;
  flagIcon: Maybe<Asset>;
  icon: Maybe<Asset>;
  inActivate: Maybe<Scalars['Boolean']['output']>;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<TournamentLinkingCollections>;
  sys: Sys;
  tournamentId: Maybe<Scalars['String']['output']>;
  tournamentName: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/tournament) */
export type TournamentCountryArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/tournament) */
export type TournamentFlagIconArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/tournament) */
export type TournamentIconArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/tournament) */
export type TournamentInActivateArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/tournament) */
export type TournamentInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/tournament) */
export type TournamentLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/tournament) */
export type TournamentTournamentIdArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/tournament) */
export type TournamentTournamentNameArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type TournamentCollection = {
  __typename?: 'TournamentCollection';
  items: Array<Maybe<Tournament>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TournamentFilter = {
  AND: InputMaybe<Array<InputMaybe<TournamentFilter>>>;
  OR: InputMaybe<Array<InputMaybe<TournamentFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  country: InputMaybe<Scalars['String']['input']>;
  country_contains: InputMaybe<Scalars['String']['input']>;
  country_exists: InputMaybe<Scalars['Boolean']['input']>;
  country_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  country_not: InputMaybe<Scalars['String']['input']>;
  country_not_contains: InputMaybe<Scalars['String']['input']>;
  country_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  flagIcon_exists: InputMaybe<Scalars['Boolean']['input']>;
  icon_exists: InputMaybe<Scalars['Boolean']['input']>;
  inActivate: InputMaybe<Scalars['Boolean']['input']>;
  inActivate_exists: InputMaybe<Scalars['Boolean']['input']>;
  inActivate_not: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  tournamentId: InputMaybe<Scalars['String']['input']>;
  tournamentId_contains: InputMaybe<Scalars['String']['input']>;
  tournamentId_exists: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tournamentId_not: InputMaybe<Scalars['String']['input']>;
  tournamentId_not_contains: InputMaybe<Scalars['String']['input']>;
  tournamentId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tournamentName: InputMaybe<Scalars['String']['input']>;
  tournamentName_contains: InputMaybe<Scalars['String']['input']>;
  tournamentName_exists: InputMaybe<Scalars['Boolean']['input']>;
  tournamentName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tournamentName_not: InputMaybe<Scalars['String']['input']>;
  tournamentName_not_contains: InputMaybe<Scalars['String']['input']>;
  tournamentName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TournamentLinkingCollections = {
  __typename?: 'TournamentLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  liveScoreBlockCollection: Maybe<LiveScoreBlockCollection>;
  sportCollection: Maybe<SportCollection>;
};


export type TournamentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TournamentLinkingCollectionsLiveScoreBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TournamentLinkingCollectionsLiveScoreBlockCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TournamentLinkingCollectionsSportCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TournamentLinkingCollectionsSportCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TournamentLinkingCollectionsLiveScoreBlockCollectionOrder {
  CLOSEDMATCHES_ASC = 'closedMatches_ASC',
  CLOSEDMATCHES_DESC = 'closedMatches_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  NOLIVEMATCHESAVAILABLE_ASC = 'noLiveMatchesAvailable_ASC',
  NOLIVEMATCHESAVAILABLE_DESC = 'noLiveMatchesAvailable_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum TournamentLinkingCollectionsSportCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SPORTID_ASC = 'sportId_ASC',
  SPORTID_DESC = 'sportId_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export enum TournamentOrder {
  COUNTRY_ASC = 'country_ASC',
  COUNTRY_DESC = 'country_DESC',
  INACTIVATE_ASC = 'inActivate_ASC',
  INACTIVATE_DESC = 'inActivate_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TOURNAMENTID_ASC = 'tournamentId_ASC',
  TOURNAMENTID_DESC = 'tournamentId_DESC',
  TOURNAMENTNAME_ASC = 'tournamentName_ASC',
  TOURNAMENTNAME_DESC = 'tournamentName_DESC'
}

/** A block to display tournament standings (Total, Home, Away, Goalscoring, Booking) [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/tournamentStandingsBlock) */
export type TournamentStandingsBlock = Entry & _Node & {
  __typename?: 'TournamentStandingsBlock';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<TournamentStandingsBlockLinkingCollections>;
  sport: Maybe<Sport>;
  sys: Sys;
};


/** A block to display tournament standings (Total, Home, Away, Goalscoring, Booking) [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/tournamentStandingsBlock) */
export type TournamentStandingsBlockInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** A block to display tournament standings (Total, Home, Away, Goalscoring, Booking) [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/tournamentStandingsBlock) */
export type TournamentStandingsBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A block to display tournament standings (Total, Home, Away, Goalscoring, Booking) [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/tournamentStandingsBlock) */
export type TournamentStandingsBlockSportArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  where: InputMaybe<SportFilter>;
};

export type TournamentStandingsBlockCollection = {
  __typename?: 'TournamentStandingsBlockCollection';
  items: Array<Maybe<TournamentStandingsBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TournamentStandingsBlockFilter = {
  AND: InputMaybe<Array<InputMaybe<TournamentStandingsBlockFilter>>>;
  OR: InputMaybe<Array<InputMaybe<TournamentStandingsBlockFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sport: InputMaybe<CfSportNestedFilter>;
  sport_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type TournamentStandingsBlockLinkingCollections = {
  __typename?: 'TournamentStandingsBlockLinkingCollections';
  contentPageCollection: Maybe<ContentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};


export type TournamentStandingsBlockLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TournamentStandingsBlockLinkingCollectionsContentPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TournamentStandingsBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TournamentStandingsBlockLinkingCollectionsContentPageCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export enum TournamentStandingsBlockOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/translation) */
export type Translation = Entry & _Node & {
  __typename?: 'Translation';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  label: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<TranslationLinkingCollections>;
  sys: Sys;
  value: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/translation) */
export type TranslationInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/translation) */
export type TranslationLabelArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/translation) */
export type TranslationLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/translation) */
export type TranslationValueArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type TranslationCollection = {
  __typename?: 'TranslationCollection';
  items: Array<Maybe<Translation>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TranslationFilter = {
  AND: InputMaybe<Array<InputMaybe<TranslationFilter>>>;
  OR: InputMaybe<Array<InputMaybe<TranslationFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label: InputMaybe<Scalars['String']['input']>;
  label_contains: InputMaybe<Scalars['String']['input']>;
  label_exists: InputMaybe<Scalars['Boolean']['input']>;
  label_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not: InputMaybe<Scalars['String']['input']>;
  label_not_contains: InputMaybe<Scalars['String']['input']>;
  label_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  value: InputMaybe<Scalars['String']['input']>;
  value_contains: InputMaybe<Scalars['String']['input']>;
  value_exists: InputMaybe<Scalars['Boolean']['input']>;
  value_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not: InputMaybe<Scalars['String']['input']>;
  value_not_contains: InputMaybe<Scalars['String']['input']>;
  value_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TranslationLinkingCollections = {
  __typename?: 'TranslationLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  translationsCollection: Maybe<TranslationsCollection>;
};


export type TranslationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TranslationLinkingCollectionsTranslationsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TranslationLinkingCollectionsTranslationsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TranslationLinkingCollectionsTranslationsCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  LISTID_ASC = 'listId_ASC',
  LISTID_DESC = 'listId_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export enum TranslationOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  LABEL_ASC = 'label_ASC',
  LABEL_DESC = 'label_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  VALUE_ASC = 'value_ASC',
  VALUE_DESC = 'value_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/translations) */
export type Translations = Entry & _Node & {
  __typename?: 'Translations';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<TranslationsLinkingCollections>;
  listId: Maybe<Scalars['String']['output']>;
  sys: Sys;
  translationsCollection: Maybe<TranslationsTranslationsCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/translations) */
export type TranslationsInternalTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/translations) */
export type TranslationsLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/translations) */
export type TranslationsListIdArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/translations) */
export type TranslationsTranslationsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TranslationsTranslationsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TranslationFilter>;
};

export type TranslationsCollection = {
  __typename?: 'TranslationsCollection';
  items: Array<Maybe<Translations>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TranslationsFilter = {
  AND: InputMaybe<Array<InputMaybe<TranslationsFilter>>>;
  OR: InputMaybe<Array<InputMaybe<TranslationsFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  listId: InputMaybe<Scalars['String']['input']>;
  listId_contains: InputMaybe<Scalars['String']['input']>;
  listId_exists: InputMaybe<Scalars['Boolean']['input']>;
  listId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  listId_not: InputMaybe<Scalars['String']['input']>;
  listId_not_contains: InputMaybe<Scalars['String']['input']>;
  listId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  translations: InputMaybe<CfTranslationNestedFilter>;
  translationsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type TranslationsLinkingCollections = {
  __typename?: 'TranslationsLinkingCollections';
  betSuggestionBlockCollection: Maybe<BetSuggestionBlockCollection>;
  entryCollection: Maybe<EntryCollection>;
  siteTranslationsCollection: Maybe<SiteTranslationsCollection>;
};


export type TranslationsLinkingCollectionsBetSuggestionBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TranslationsLinkingCollectionsBetSuggestionBlockCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TranslationsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TranslationsLinkingCollectionsSiteTranslationsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<TranslationsLinkingCollectionsSiteTranslationsCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TranslationsLinkingCollectionsBetSuggestionBlockCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export enum TranslationsLinkingCollectionsSiteTranslationsCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISACTIVE_ASC = 'isActive_ASC',
  ISACTIVE_DESC = 'isActive_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export enum TranslationsOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  LISTID_ASC = 'listId_ASC',
  LISTID_DESC = 'listId_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC'
}

export type TranslationsTranslationsCollection = {
  __typename?: 'TranslationsTranslationsCollection';
  items: Array<Maybe<Translation>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TranslationsTranslationsCollectionOrder {
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  LABEL_ASC = 'label_ASC',
  LABEL_DESC = 'label_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  VALUE_ASC = 'value_ASC',
  VALUE_DESC = 'value_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/widgetBlock) */
export type WidgetBlock = Entry & _Node & {
  __typename?: 'WidgetBlock';
  _id: Scalars['ID']['output'];
  addRedBoxToTitle: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  image: Maybe<Asset>;
  internalTItle: Maybe<Scalars['String']['output']>;
  linkedFrom: Maybe<WidgetBlockLinkingCollections>;
  sys: Sys;
  text: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/widgetBlock) */
export type WidgetBlockAddRedBoxToTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/widgetBlock) */
export type WidgetBlockImageArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/widgetBlock) */
export type WidgetBlockInternalTItleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/widgetBlock) */
export type WidgetBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/widgetBlock) */
export type WidgetBlockTextArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/n8amk6jsxvma/content_types/widgetBlock) */
export type WidgetBlockTitleArgs = {
  locale: InputMaybe<Scalars['String']['input']>;
};

export type WidgetBlockCollection = {
  __typename?: 'WidgetBlockCollection';
  items: Array<Maybe<WidgetBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type WidgetBlockFilter = {
  AND: InputMaybe<Array<InputMaybe<WidgetBlockFilter>>>;
  OR: InputMaybe<Array<InputMaybe<WidgetBlockFilter>>>;
  addRedBoxToTitle: InputMaybe<Scalars['Boolean']['input']>;
  addRedBoxToTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  addRedBoxToTitle_not: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTItle: InputMaybe<Scalars['String']['input']>;
  internalTItle_contains: InputMaybe<Scalars['String']['input']>;
  internalTItle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTItle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTItle_not: InputMaybe<Scalars['String']['input']>;
  internalTItle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTItle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  text: InputMaybe<Scalars['String']['input']>;
  text_contains: InputMaybe<Scalars['String']['input']>;
  text_exists: InputMaybe<Scalars['Boolean']['input']>;
  text_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not: InputMaybe<Scalars['String']['input']>;
  text_not_contains: InputMaybe<Scalars['String']['input']>;
  text_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WidgetBlockLinkingCollections = {
  __typename?: 'WidgetBlockLinkingCollections';
  contentPageCollection: Maybe<ContentPageCollection>;
  entryCollection: Maybe<EntryCollection>;
};


export type WidgetBlockLinkingCollectionsContentPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Array<InputMaybe<WidgetBlockLinkingCollectionsContentPageCollectionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WidgetBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
  preview: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum WidgetBlockLinkingCollectionsContentPageCollectionOrder {
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EXCLUDEFROMSITEBUILD_ASC = 'excludeFromSiteBuild_ASC',
  EXCLUDEFROMSITEBUILD_DESC = 'excludeFromSiteBuild_DESC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_ASC = 'excludePageFromExternalSearch_ASC',
  EXCLUDEPAGEFROMEXTERNALSEARCH_DESC = 'excludePageFromExternalSearch_DESC',
  EXCLUDEPAGEFROMINTERNALSEARCH_ASC = 'excludePageFromInternalSearch_ASC',
  EXCLUDEPAGEFROMINTERNALSEARCH_DESC = 'excludePageFromInternalSearch_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTERNALTITLE_ASC = 'internalTitle_ASC',
  INTERNALTITLE_DESC = 'internalTitle_DESC',
  ISMCMNEWSPAGE_ASC = 'isMcmNewsPage_ASC',
  ISMCMNEWSPAGE_DESC = 'isMcmNewsPage_DESC',
  KEYWORDS_ASC = 'keywords_ASC',
  KEYWORDS_DESC = 'keywords_DESC',
  SHOWSCROLLTOTOPBUTTON_ASC = 'showScrollToTopButton_ASC',
  SHOWSCROLLTOTOPBUTTON_DESC = 'showScrollToTopButton_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  URL_ASC = 'url_ASC',
  URL_DESC = 'url_DESC'
}

export enum WidgetBlockOrder {
  ADDREDBOXTOTITLE_ASC = 'addRedBoxToTitle_ASC',
  ADDREDBOXTOTITLE_DESC = 'addRedBoxToTitle_DESC',
  INTERNALTITLE_ASC = 'internalTItle_ASC',
  INTERNALTITLE_DESC = 'internalTItle_DESC',
  SYS_FIRSTPUBLISHEDAT_ASC = 'sys_firstPublishedAt_ASC',
  SYS_FIRSTPUBLISHEDAT_DESC = 'sys_firstPublishedAt_DESC',
  SYS_ID_ASC = 'sys_id_ASC',
  SYS_ID_DESC = 'sys_id_DESC',
  SYS_PUBLISHEDAT_ASC = 'sys_publishedAt_ASC',
  SYS_PUBLISHEDAT_DESC = 'sys_publishedAt_DESC',
  SYS_PUBLISHEDVERSION_ASC = 'sys_publishedVersion_ASC',
  SYS_PUBLISHEDVERSION_DESC = 'sys_publishedVersion_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfCardBlockNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfCardBlockNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfCardBlockNestedFilter>>>;
  backgroundImage_exists: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink_exists: InputMaybe<Scalars['Boolean']['input']>;
  buttonText: InputMaybe<Scalars['String']['input']>;
  buttonText_contains: InputMaybe<Scalars['String']['input']>;
  buttonText_exists: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isImageLeft: InputMaybe<Scalars['Boolean']['input']>;
  isImageLeft_exists: InputMaybe<Scalars['Boolean']['input']>;
  isImageLeft_not: InputMaybe<Scalars['Boolean']['input']>;
  richText_contains: InputMaybe<Scalars['String']['input']>;
  richText_exists: InputMaybe<Scalars['Boolean']['input']>;
  richText_not_contains: InputMaybe<Scalars['String']['input']>;
  smallVersion: InputMaybe<Scalars['Boolean']['input']>;
  smallVersion_exists: InputMaybe<Scalars['Boolean']['input']>;
  smallVersion_not: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfContentPageNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfContentPageNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfContentPageNestedFilter>>>;
  blocksCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  document_exists: InputMaybe<Scalars['Boolean']['input']>;
  excludeFromSiteBuild: InputMaybe<Scalars['Boolean']['input']>;
  excludeFromSiteBuild_exists: InputMaybe<Scalars['Boolean']['input']>;
  excludeFromSiteBuild_not: InputMaybe<Scalars['Boolean']['input']>;
  excludePageFromExternalSearch: InputMaybe<Scalars['Boolean']['input']>;
  excludePageFromExternalSearch_exists: InputMaybe<Scalars['Boolean']['input']>;
  excludePageFromExternalSearch_not: InputMaybe<Scalars['Boolean']['input']>;
  excludePageFromInternalSearch: InputMaybe<Scalars['Boolean']['input']>;
  excludePageFromInternalSearch_exists: InputMaybe<Scalars['Boolean']['input']>;
  excludePageFromInternalSearch_not: InputMaybe<Scalars['Boolean']['input']>;
  id: InputMaybe<Scalars['Int']['input']>;
  id_exists: InputMaybe<Scalars['Boolean']['input']>;
  id_gt: InputMaybe<Scalars['Int']['input']>;
  id_gte: InputMaybe<Scalars['Int']['input']>;
  id_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_lt: InputMaybe<Scalars['Int']['input']>;
  id_lte: InputMaybe<Scalars['Int']['input']>;
  id_not: InputMaybe<Scalars['Int']['input']>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isMcmNewsPage: InputMaybe<Scalars['Boolean']['input']>;
  isMcmNewsPage_exists: InputMaybe<Scalars['Boolean']['input']>;
  isMcmNewsPage_not: InputMaybe<Scalars['Boolean']['input']>;
  keywords: InputMaybe<Scalars['String']['input']>;
  keywords_contains: InputMaybe<Scalars['String']['input']>;
  keywords_exists: InputMaybe<Scalars['Boolean']['input']>;
  keywords_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_not: InputMaybe<Scalars['String']['input']>;
  keywords_not_contains: InputMaybe<Scalars['String']['input']>;
  keywords_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  parentPage_exists: InputMaybe<Scalars['Boolean']['input']>;
  showScrollToTopButton: InputMaybe<Scalars['Boolean']['input']>;
  showScrollToTopButton_exists: InputMaybe<Scalars['Boolean']['input']>;
  showScrollToTopButton_not: InputMaybe<Scalars['Boolean']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  slug_contains: InputMaybe<Scalars['String']['input']>;
  slug_exists: InputMaybe<Scalars['Boolean']['input']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not: InputMaybe<Scalars['String']['input']>;
  slug_not_contains: InputMaybe<Scalars['String']['input']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subNav_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url: InputMaybe<Scalars['String']['input']>;
  url_contains: InputMaybe<Scalars['String']['input']>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not: InputMaybe<Scalars['String']['input']>;
  url_not_contains: InputMaybe<Scalars['String']['input']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfFooterNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfFooterNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfFooterNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  emailIcon_exists: InputMaybe<Scalars['Boolean']['input']>;
  facebookIcon_exists: InputMaybe<Scalars['Boolean']['input']>;
  footerSection1Title: InputMaybe<Scalars['String']['input']>;
  footerSection1Title_contains: InputMaybe<Scalars['String']['input']>;
  footerSection1Title_exists: InputMaybe<Scalars['Boolean']['input']>;
  footerSection1Title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerSection1Title_not: InputMaybe<Scalars['String']['input']>;
  footerSection1Title_not_contains: InputMaybe<Scalars['String']['input']>;
  footerSection1Title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerSection2Title: InputMaybe<Scalars['String']['input']>;
  footerSection2Title_contains: InputMaybe<Scalars['String']['input']>;
  footerSection2Title_exists: InputMaybe<Scalars['Boolean']['input']>;
  footerSection2Title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerSection2Title_not: InputMaybe<Scalars['String']['input']>;
  footerSection2Title_not_contains: InputMaybe<Scalars['String']['input']>;
  footerSection2Title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerSection3Title: InputMaybe<Scalars['String']['input']>;
  footerSection3Title_contains: InputMaybe<Scalars['String']['input']>;
  footerSection3Title_exists: InputMaybe<Scalars['Boolean']['input']>;
  footerSection3Title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerSection3Title_not: InputMaybe<Scalars['String']['input']>;
  footerSection3Title_not_contains: InputMaybe<Scalars['String']['input']>;
  footerSection3Title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instagramIcon_exists: InputMaybe<Scalars['Boolean']['input']>;
  linkToDataPolicy_exists: InputMaybe<Scalars['Boolean']['input']>;
  linkToEmail: InputMaybe<Scalars['String']['input']>;
  linkToEmail_contains: InputMaybe<Scalars['String']['input']>;
  linkToEmail_exists: InputMaybe<Scalars['Boolean']['input']>;
  linkToEmail_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkToEmail_not: InputMaybe<Scalars['String']['input']>;
  linkToEmail_not_contains: InputMaybe<Scalars['String']['input']>;
  linkToEmail_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkToFacebook: InputMaybe<Scalars['String']['input']>;
  linkToFacebook_contains: InputMaybe<Scalars['String']['input']>;
  linkToFacebook_exists: InputMaybe<Scalars['Boolean']['input']>;
  linkToFacebook_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkToFacebook_not: InputMaybe<Scalars['String']['input']>;
  linkToFacebook_not_contains: InputMaybe<Scalars['String']['input']>;
  linkToFacebook_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkToInstagram: InputMaybe<Scalars['String']['input']>;
  linkToInstagram_contains: InputMaybe<Scalars['String']['input']>;
  linkToInstagram_exists: InputMaybe<Scalars['Boolean']['input']>;
  linkToInstagram_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkToInstagram_not: InputMaybe<Scalars['String']['input']>;
  linkToInstagram_not_contains: InputMaybe<Scalars['String']['input']>;
  linkToInstagram_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkToLandingPage_exists: InputMaybe<Scalars['Boolean']['input']>;
  linkToTwitter: InputMaybe<Scalars['String']['input']>;
  linkToTwitter_contains: InputMaybe<Scalars['String']['input']>;
  linkToTwitter_exists: InputMaybe<Scalars['Boolean']['input']>;
  linkToTwitter_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkToTwitter_not: InputMaybe<Scalars['String']['input']>;
  linkToTwitter_not_contains: InputMaybe<Scalars['String']['input']>;
  linkToTwitter_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logotype_exists: InputMaybe<Scalars['Boolean']['input']>;
  navigationItemsListCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  partnerLogo_exists: InputMaybe<Scalars['Boolean']['input']>;
  responsibleBetting_contains: InputMaybe<Scalars['String']['input']>;
  responsibleBetting_exists: InputMaybe<Scalars['Boolean']['input']>;
  responsibleBetting_not_contains: InputMaybe<Scalars['String']['input']>;
  sectionOneTitleTwo: InputMaybe<Scalars['String']['input']>;
  sectionOneTitleTwo_contains: InputMaybe<Scalars['String']['input']>;
  sectionOneTitleTwo_exists: InputMaybe<Scalars['Boolean']['input']>;
  sectionOneTitleTwo_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionOneTitleTwo_not: InputMaybe<Scalars['String']['input']>;
  sectionOneTitleTwo_not_contains: InputMaybe<Scalars['String']['input']>;
  sectionOneTitleTwo_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  textBlockTwo_contains: InputMaybe<Scalars['String']['input']>;
  textBlockTwo_exists: InputMaybe<Scalars['Boolean']['input']>;
  textBlockTwo_not_contains: InputMaybe<Scalars['String']['input']>;
  textBlock_contains: InputMaybe<Scalars['String']['input']>;
  textBlock_exists: InputMaybe<Scalars['Boolean']['input']>;
  textBlock_not_contains: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterIcon_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfImageNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfImageNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfImageNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label: InputMaybe<Scalars['String']['input']>;
  label_contains: InputMaybe<Scalars['String']['input']>;
  label_exists: InputMaybe<Scalars['Boolean']['input']>;
  label_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not: InputMaybe<Scalars['String']['input']>;
  label_not_contains: InputMaybe<Scalars['String']['input']>;
  label_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  value: InputMaybe<Scalars['String']['input']>;
  value_contains: InputMaybe<Scalars['String']['input']>;
  value_exists: InputMaybe<Scalars['Boolean']['input']>;
  value_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not: InputMaybe<Scalars['String']['input']>;
  value_not_contains: InputMaybe<Scalars['String']['input']>;
  value_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfImagesNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfImagesNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfImagesNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  imagesCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
};

export type CfMainNavigationNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfMainNavigationNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfMainNavigationNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  linkToLandingPage_exists: InputMaybe<Scalars['Boolean']['input']>;
  logotype_exists: InputMaybe<Scalars['Boolean']['input']>;
  navigationItemsListCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  navigationItemsListForPrototypeCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfMatchEventItemNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfMatchEventItemNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfMatchEventItemNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  eventType: InputMaybe<Scalars['String']['input']>;
  eventType_contains: InputMaybe<Scalars['String']['input']>;
  eventType_exists: InputMaybe<Scalars['Boolean']['input']>;
  eventType_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eventType_not: InputMaybe<Scalars['String']['input']>;
  eventType_not_contains: InputMaybe<Scalars['String']['input']>;
  eventType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hideInEventsList: InputMaybe<Scalars['Boolean']['input']>;
  hideInEventsList_exists: InputMaybe<Scalars['Boolean']['input']>;
  hideInEventsList_not: InputMaybe<Scalars['Boolean']['input']>;
  iconOverrideSport_1_exists: InputMaybe<Scalars['Boolean']['input']>;
  iconOverrideSport_5_exists: InputMaybe<Scalars['Boolean']['input']>;
  iconOverrideSport_6_exists: InputMaybe<Scalars['Boolean']['input']>;
  iconOverrideSport_7_exists: InputMaybe<Scalars['Boolean']['input']>;
  iconOverrideSport_15_exists: InputMaybe<Scalars['Boolean']['input']>;
  icon_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  periodNames: InputMaybe<Scalars['String']['input']>;
  periodNames_contains: InputMaybe<Scalars['String']['input']>;
  periodNames_exists: InputMaybe<Scalars['Boolean']['input']>;
  periodNames_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  periodNames_not: InputMaybe<Scalars['String']['input']>;
  periodNames_not_contains: InputMaybe<Scalars['String']['input']>;
  periodNames_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pushNotification: InputMaybe<Scalars['Boolean']['input']>;
  pushNotification_exists: InputMaybe<Scalars['Boolean']['input']>;
  pushNotification_not: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type: InputMaybe<Scalars['String']['input']>;
  type_contains: InputMaybe<Scalars['String']['input']>;
  type_exists: InputMaybe<Scalars['Boolean']['input']>;
  type_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not: InputMaybe<Scalars['String']['input']>;
  type_not_contains: InputMaybe<Scalars['String']['input']>;
  type_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfMatchNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfMatchNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfMatchNestedFilter>>>;
  awayTeamDisplayName: InputMaybe<Scalars['String']['input']>;
  awayTeamDisplayName_contains: InputMaybe<Scalars['String']['input']>;
  awayTeamDisplayName_exists: InputMaybe<Scalars['Boolean']['input']>;
  awayTeamDisplayName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  awayTeamDisplayName_not: InputMaybe<Scalars['String']['input']>;
  awayTeamDisplayName_not_contains: InputMaybe<Scalars['String']['input']>;
  awayTeamDisplayName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  awayTeamLogo_exists: InputMaybe<Scalars['Boolean']['input']>;
  beforeMatchText: InputMaybe<Scalars['String']['input']>;
  beforeMatchText_contains: InputMaybe<Scalars['String']['input']>;
  beforeMatchText_exists: InputMaybe<Scalars['Boolean']['input']>;
  beforeMatchText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beforeMatchText_not: InputMaybe<Scalars['String']['input']>;
  beforeMatchText_not_contains: InputMaybe<Scalars['String']['input']>;
  beforeMatchText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betAnalysisText: InputMaybe<Scalars['String']['input']>;
  betAnalysisText_contains: InputMaybe<Scalars['String']['input']>;
  betAnalysisText_exists: InputMaybe<Scalars['Boolean']['input']>;
  betAnalysisText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betAnalysisText_not: InputMaybe<Scalars['String']['input']>;
  betAnalysisText_not_contains: InputMaybe<Scalars['String']['input']>;
  betAnalysisText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betLevel: InputMaybe<Scalars['String']['input']>;
  betLevel_contains: InputMaybe<Scalars['String']['input']>;
  betLevel_exists: InputMaybe<Scalars['Boolean']['input']>;
  betLevel_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betLevel_not: InputMaybe<Scalars['String']['input']>;
  betLevel_not_contains: InputMaybe<Scalars['String']['input']>;
  betLevel_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betSuggestionText: InputMaybe<Scalars['String']['input']>;
  betSuggestionText_contains: InputMaybe<Scalars['String']['input']>;
  betSuggestionText_exists: InputMaybe<Scalars['Boolean']['input']>;
  betSuggestionText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betSuggestionText_not: InputMaybe<Scalars['String']['input']>;
  betSuggestionText_not_contains: InputMaybe<Scalars['String']['input']>;
  betSuggestionText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betType: InputMaybe<Scalars['String']['input']>;
  betType_contains: InputMaybe<Scalars['String']['input']>;
  betType_exists: InputMaybe<Scalars['Boolean']['input']>;
  betType_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betType_not: InputMaybe<Scalars['String']['input']>;
  betType_not_contains: InputMaybe<Scalars['String']['input']>;
  betType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betValue: InputMaybe<Scalars['String']['input']>;
  betValue_contains: InputMaybe<Scalars['String']['input']>;
  betValue_exists: InputMaybe<Scalars['Boolean']['input']>;
  betValue_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  betValue_not: InputMaybe<Scalars['String']['input']>;
  betValue_not_contains: InputMaybe<Scalars['String']['input']>;
  betValue_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buzzAboutText: InputMaybe<Scalars['String']['input']>;
  buzzAboutText_contains: InputMaybe<Scalars['String']['input']>;
  buzzAboutText_exists: InputMaybe<Scalars['Boolean']['input']>;
  buzzAboutText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buzzAboutText_not: InputMaybe<Scalars['String']['input']>;
  buzzAboutText_not_contains: InputMaybe<Scalars['String']['input']>;
  buzzAboutText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city: InputMaybe<Scalars['String']['input']>;
  city_contains: InputMaybe<Scalars['String']['input']>;
  city_exists: InputMaybe<Scalars['Boolean']['input']>;
  city_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city_not: InputMaybe<Scalars['String']['input']>;
  city_not_contains: InputMaybe<Scalars['String']['input']>;
  city_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  competitorIdAway: InputMaybe<Scalars['String']['input']>;
  competitorIdAway_contains: InputMaybe<Scalars['String']['input']>;
  competitorIdAway_exists: InputMaybe<Scalars['Boolean']['input']>;
  competitorIdAway_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  competitorIdAway_not: InputMaybe<Scalars['String']['input']>;
  competitorIdAway_not_contains: InputMaybe<Scalars['String']['input']>;
  competitorIdAway_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  competitorIdHome: InputMaybe<Scalars['String']['input']>;
  competitorIdHome_contains: InputMaybe<Scalars['String']['input']>;
  competitorIdHome_exists: InputMaybe<Scalars['Boolean']['input']>;
  competitorIdHome_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  competitorIdHome_not: InputMaybe<Scalars['String']['input']>;
  competitorIdHome_not_contains: InputMaybe<Scalars['String']['input']>;
  competitorIdHome_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  competitorNameAway: InputMaybe<Scalars['String']['input']>;
  competitorNameAway_contains: InputMaybe<Scalars['String']['input']>;
  competitorNameAway_exists: InputMaybe<Scalars['Boolean']['input']>;
  competitorNameAway_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  competitorNameAway_not: InputMaybe<Scalars['String']['input']>;
  competitorNameAway_not_contains: InputMaybe<Scalars['String']['input']>;
  competitorNameAway_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  competitorNameHome: InputMaybe<Scalars['String']['input']>;
  competitorNameHome_contains: InputMaybe<Scalars['String']['input']>;
  competitorNameHome_exists: InputMaybe<Scalars['Boolean']['input']>;
  competitorNameHome_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  competitorNameHome_not: InputMaybe<Scalars['String']['input']>;
  competitorNameHome_not_contains: InputMaybe<Scalars['String']['input']>;
  competitorNameHome_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  country: InputMaybe<Scalars['String']['input']>;
  country_contains: InputMaybe<Scalars['String']['input']>;
  country_exists: InputMaybe<Scalars['Boolean']['input']>;
  country_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  country_not: InputMaybe<Scalars['String']['input']>;
  country_not_contains: InputMaybe<Scalars['String']['input']>;
  country_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  estimationInPercent: InputMaybe<Scalars['String']['input']>;
  estimationInPercent_contains: InputMaybe<Scalars['String']['input']>;
  estimationInPercent_exists: InputMaybe<Scalars['Boolean']['input']>;
  estimationInPercent_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  estimationInPercent_not: InputMaybe<Scalars['String']['input']>;
  estimationInPercent_not_contains: InputMaybe<Scalars['String']['input']>;
  estimationInPercent_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupName: InputMaybe<Scalars['String']['input']>;
  groupName_contains: InputMaybe<Scalars['String']['input']>;
  groupName_exists: InputMaybe<Scalars['Boolean']['input']>;
  groupName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupName_not: InputMaybe<Scalars['String']['input']>;
  groupName_not_contains: InputMaybe<Scalars['String']['input']>;
  groupName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  homeTeamDisplayName: InputMaybe<Scalars['String']['input']>;
  homeTeamDisplayName_contains: InputMaybe<Scalars['String']['input']>;
  homeTeamDisplayName_exists: InputMaybe<Scalars['Boolean']['input']>;
  homeTeamDisplayName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  homeTeamDisplayName_not: InputMaybe<Scalars['String']['input']>;
  homeTeamDisplayName_not_contains: InputMaybe<Scalars['String']['input']>;
  homeTeamDisplayName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  homeTeamLogo_exists: InputMaybe<Scalars['Boolean']['input']>;
  injuredPlayersAwayTeamCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  injuredPlayersHomeTeamCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  isHidden: InputMaybe<Scalars['Boolean']['input']>;
  isHidden_exists: InputMaybe<Scalars['Boolean']['input']>;
  isHidden_not: InputMaybe<Scalars['Boolean']['input']>;
  matchId: InputMaybe<Scalars['String']['input']>;
  matchId_contains: InputMaybe<Scalars['String']['input']>;
  matchId_exists: InputMaybe<Scalars['Boolean']['input']>;
  matchId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  matchId_not: InputMaybe<Scalars['String']['input']>;
  matchId_not_contains: InputMaybe<Scalars['String']['input']>;
  matchId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mcmPlayTo: InputMaybe<Scalars['String']['input']>;
  mcmPlayTo_contains: InputMaybe<Scalars['String']['input']>;
  mcmPlayTo_exists: InputMaybe<Scalars['Boolean']['input']>;
  mcmPlayTo_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mcmPlayTo_not: InputMaybe<Scalars['String']['input']>;
  mcmPlayTo_not_contains: InputMaybe<Scalars['String']['input']>;
  mcmPlayTo_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  missingPlayers_exists: InputMaybe<Scalars['Boolean']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  name_contains: InputMaybe<Scalars['String']['input']>;
  name_exists: InputMaybe<Scalars['Boolean']['input']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not: InputMaybe<Scalars['String']['input']>;
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  playableFrom: InputMaybe<Scalars['Float']['input']>;
  playableFrom_exists: InputMaybe<Scalars['Boolean']['input']>;
  playableFrom_gt: InputMaybe<Scalars['Float']['input']>;
  playableFrom_gte: InputMaybe<Scalars['Float']['input']>;
  playableFrom_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  playableFrom_lt: InputMaybe<Scalars['Float']['input']>;
  playableFrom_lte: InputMaybe<Scalars['Float']['input']>;
  playableFrom_not: InputMaybe<Scalars['Float']['input']>;
  playableFrom_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  scheduled: InputMaybe<Scalars['String']['input']>;
  scheduledSwe: InputMaybe<Scalars['String']['input']>;
  scheduledSwe_contains: InputMaybe<Scalars['String']['input']>;
  scheduledSwe_exists: InputMaybe<Scalars['Boolean']['input']>;
  scheduledSwe_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  scheduledSwe_not: InputMaybe<Scalars['String']['input']>;
  scheduledSwe_not_contains: InputMaybe<Scalars['String']['input']>;
  scheduledSwe_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  scheduled_contains: InputMaybe<Scalars['String']['input']>;
  scheduled_exists: InputMaybe<Scalars['Boolean']['input']>;
  scheduled_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  scheduled_not: InputMaybe<Scalars['String']['input']>;
  scheduled_not_contains: InputMaybe<Scalars['String']['input']>;
  scheduled_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seasonId: InputMaybe<Scalars['String']['input']>;
  seasonId_contains: InputMaybe<Scalars['String']['input']>;
  seasonId_exists: InputMaybe<Scalars['Boolean']['input']>;
  seasonId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seasonId_not: InputMaybe<Scalars['String']['input']>;
  seasonId_not_contains: InputMaybe<Scalars['String']['input']>;
  seasonId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  showBetSuggestion: InputMaybe<Scalars['Boolean']['input']>;
  showBetSuggestion_exists: InputMaybe<Scalars['Boolean']['input']>;
  showBetSuggestion_not: InputMaybe<Scalars['Boolean']['input']>;
  sport: InputMaybe<Scalars['String']['input']>;
  sportId: InputMaybe<Scalars['String']['input']>;
  sportId_contains: InputMaybe<Scalars['String']['input']>;
  sportId_exists: InputMaybe<Scalars['Boolean']['input']>;
  sportId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sportId_not: InputMaybe<Scalars['String']['input']>;
  sportId_not_contains: InputMaybe<Scalars['String']['input']>;
  sportId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sport_contains: InputMaybe<Scalars['String']['input']>;
  sport_exists: InputMaybe<Scalars['Boolean']['input']>;
  sport_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sport_not: InputMaybe<Scalars['String']['input']>;
  sport_not_contains: InputMaybe<Scalars['String']['input']>;
  sport_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suggestedTeam: InputMaybe<Scalars['String']['input']>;
  suggestedTeam_contains: InputMaybe<Scalars['String']['input']>;
  suggestedTeam_exists: InputMaybe<Scalars['Boolean']['input']>;
  suggestedTeam_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suggestedTeam_not: InputMaybe<Scalars['String']['input']>;
  suggestedTeam_not_contains: InputMaybe<Scalars['String']['input']>;
  suggestedTeam_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  thinkAboutText: InputMaybe<Scalars['String']['input']>;
  thinkAboutText_contains: InputMaybe<Scalars['String']['input']>;
  thinkAboutText_exists: InputMaybe<Scalars['Boolean']['input']>;
  thinkAboutText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  thinkAboutText_not: InputMaybe<Scalars['String']['input']>;
  thinkAboutText_not_contains: InputMaybe<Scalars['String']['input']>;
  thinkAboutText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tournamentId: InputMaybe<Scalars['String']['input']>;
  tournamentId_contains: InputMaybe<Scalars['String']['input']>;
  tournamentId_exists: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tournamentId_not: InputMaybe<Scalars['String']['input']>;
  tournamentId_not_contains: InputMaybe<Scalars['String']['input']>;
  tournamentId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tournamentName: InputMaybe<Scalars['String']['input']>;
  tournamentName_contains: InputMaybe<Scalars['String']['input']>;
  tournamentName_exists: InputMaybe<Scalars['Boolean']['input']>;
  tournamentName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tournamentName_not: InputMaybe<Scalars['String']['input']>;
  tournamentName_not_contains: InputMaybe<Scalars['String']['input']>;
  tournamentName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tvLogo_exists: InputMaybe<Scalars['Boolean']['input']>;
  venueId: InputMaybe<Scalars['String']['input']>;
  venueId_contains: InputMaybe<Scalars['String']['input']>;
  venueId_exists: InputMaybe<Scalars['Boolean']['input']>;
  venueId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venueId_not: InputMaybe<Scalars['String']['input']>;
  venueId_not_contains: InputMaybe<Scalars['String']['input']>;
  venueId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venueName: InputMaybe<Scalars['String']['input']>;
  venueName_contains: InputMaybe<Scalars['String']['input']>;
  venueName_exists: InputMaybe<Scalars['Boolean']['input']>;
  venueName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venueName_not: InputMaybe<Scalars['String']['input']>;
  venueName_not_contains: InputMaybe<Scalars['String']['input']>;
  venueName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  winnerPredict_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfMcmNewsBlockNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfMcmNewsBlockNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfMcmNewsBlockNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']['input']>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_exists: InputMaybe<Scalars['Boolean']['input']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not: InputMaybe<Scalars['String']['input']>;
  description_not_contains: InputMaybe<Scalars['String']['input']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkToNewsPage_exists: InputMaybe<Scalars['Boolean']['input']>;
  logoImage_exists: InputMaybe<Scalars['Boolean']['input']>;
  pubDate: InputMaybe<Scalars['DateTime']['input']>;
  pubDate_exists: InputMaybe<Scalars['Boolean']['input']>;
  pubDate_gt: InputMaybe<Scalars['DateTime']['input']>;
  pubDate_gte: InputMaybe<Scalars['DateTime']['input']>;
  pubDate_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  pubDate_lt: InputMaybe<Scalars['DateTime']['input']>;
  pubDate_lte: InputMaybe<Scalars['DateTime']['input']>;
  pubDate_not: InputMaybe<Scalars['DateTime']['input']>;
  pubDate_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys: InputMaybe<SysFilter>;
  text: InputMaybe<Scalars['String']['input']>;
  text_contains: InputMaybe<Scalars['String']['input']>;
  text_exists: InputMaybe<Scalars['Boolean']['input']>;
  text_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not: InputMaybe<Scalars['String']['input']>;
  text_not_contains: InputMaybe<Scalars['String']['input']>;
  text_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfMcmNewsListNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfMcmNewsListNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfMcmNewsListNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mcmNewsListCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type CfNavigationItemNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfNavigationItemNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfNavigationItemNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  footerDescriptionText: InputMaybe<Scalars['String']['input']>;
  footerDescriptionText_contains: InputMaybe<Scalars['String']['input']>;
  footerDescriptionText_exists: InputMaybe<Scalars['Boolean']['input']>;
  footerDescriptionText_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerDescriptionText_not: InputMaybe<Scalars['String']['input']>;
  footerDescriptionText_not_contains: InputMaybe<Scalars['String']['input']>;
  footerDescriptionText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfPlayerNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfPlayerNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfPlayerNestedFilter>>>;
  absenceReason: InputMaybe<Scalars['String']['input']>;
  absenceReason_contains: InputMaybe<Scalars['String']['input']>;
  absenceReason_exists: InputMaybe<Scalars['Boolean']['input']>;
  absenceReason_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  absenceReason_not: InputMaybe<Scalars['String']['input']>;
  absenceReason_not_contains: InputMaybe<Scalars['String']['input']>;
  absenceReason_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistName: InputMaybe<Scalars['String']['input']>;
  artistName_contains: InputMaybe<Scalars['String']['input']>;
  artistName_exists: InputMaybe<Scalars['Boolean']['input']>;
  artistName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  artistName_not: InputMaybe<Scalars['String']['input']>;
  artistName_not_contains: InputMaybe<Scalars['String']['input']>;
  artistName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: InputMaybe<Scalars['String']['input']>;
  name_contains: InputMaybe<Scalars['String']['input']>;
  name_exists: InputMaybe<Scalars['Boolean']['input']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not: InputMaybe<Scalars['String']['input']>;
  name_not_contains: InputMaybe<Scalars['String']['input']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  position: InputMaybe<Scalars['String']['input']>;
  position_contains: InputMaybe<Scalars['String']['input']>;
  position_exists: InputMaybe<Scalars['Boolean']['input']>;
  position_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  position_not: InputMaybe<Scalars['String']['input']>;
  position_not_contains: InputMaybe<Scalars['String']['input']>;
  position_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rating: InputMaybe<Scalars['String']['input']>;
  rating_contains: InputMaybe<Scalars['String']['input']>;
  rating_exists: InputMaybe<Scalars['Boolean']['input']>;
  rating_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rating_not: InputMaybe<Scalars['String']['input']>;
  rating_not_contains: InputMaybe<Scalars['String']['input']>;
  rating_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shirtNumber: InputMaybe<Scalars['String']['input']>;
  shirtNumber_contains: InputMaybe<Scalars['String']['input']>;
  shirtNumber_exists: InputMaybe<Scalars['Boolean']['input']>;
  shirtNumber_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shirtNumber_not: InputMaybe<Scalars['String']['input']>;
  shirtNumber_not_contains: InputMaybe<Scalars['String']['input']>;
  shirtNumber_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  team: InputMaybe<Scalars['String']['input']>;
  team_contains: InputMaybe<Scalars['String']['input']>;
  team_exists: InputMaybe<Scalars['Boolean']['input']>;
  team_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  team_not: InputMaybe<Scalars['String']['input']>;
  team_not_contains: InputMaybe<Scalars['String']['input']>;
  team_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfSportNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfSportNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfSportNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  icon_exists: InputMaybe<Scalars['Boolean']['input']>;
  image_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sportId: InputMaybe<Scalars['String']['input']>;
  sportId_contains: InputMaybe<Scalars['String']['input']>;
  sportId_exists: InputMaybe<Scalars['Boolean']['input']>;
  sportId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sportId_not: InputMaybe<Scalars['String']['input']>;
  sportId_not_contains: InputMaybe<Scalars['String']['input']>;
  sportId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  tournamentsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfSubNavItemNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfSubNavItemNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfSubNavItemNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  icon_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']['input']>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_exists: InputMaybe<Scalars['Boolean']['input']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not: InputMaybe<Scalars['String']['input']>;
  title_not_contains: InputMaybe<Scalars['String']['input']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfSubNavNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfSubNavNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfSubNavNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mobileBehaviour: InputMaybe<Scalars['String']['input']>;
  mobileBehaviour_contains: InputMaybe<Scalars['String']['input']>;
  mobileBehaviour_exists: InputMaybe<Scalars['Boolean']['input']>;
  mobileBehaviour_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mobileBehaviour_not: InputMaybe<Scalars['String']['input']>;
  mobileBehaviour_not_contains: InputMaybe<Scalars['String']['input']>;
  mobileBehaviour_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subNavItemsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
  sys: InputMaybe<SysFilter>;
};

export type CfTournamentNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfTournamentNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfTournamentNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  country: InputMaybe<Scalars['String']['input']>;
  country_contains: InputMaybe<Scalars['String']['input']>;
  country_exists: InputMaybe<Scalars['Boolean']['input']>;
  country_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  country_not: InputMaybe<Scalars['String']['input']>;
  country_not_contains: InputMaybe<Scalars['String']['input']>;
  country_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  flagIcon_exists: InputMaybe<Scalars['Boolean']['input']>;
  icon_exists: InputMaybe<Scalars['Boolean']['input']>;
  inActivate: InputMaybe<Scalars['Boolean']['input']>;
  inActivate_exists: InputMaybe<Scalars['Boolean']['input']>;
  inActivate_not: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  tournamentId: InputMaybe<Scalars['String']['input']>;
  tournamentId_contains: InputMaybe<Scalars['String']['input']>;
  tournamentId_exists: InputMaybe<Scalars['Boolean']['input']>;
  tournamentId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tournamentId_not: InputMaybe<Scalars['String']['input']>;
  tournamentId_not_contains: InputMaybe<Scalars['String']['input']>;
  tournamentId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tournamentName: InputMaybe<Scalars['String']['input']>;
  tournamentName_contains: InputMaybe<Scalars['String']['input']>;
  tournamentName_exists: InputMaybe<Scalars['Boolean']['input']>;
  tournamentName_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tournamentName_not: InputMaybe<Scalars['String']['input']>;
  tournamentName_not_contains: InputMaybe<Scalars['String']['input']>;
  tournamentName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfTranslationNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfTranslationNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfTranslationNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label: InputMaybe<Scalars['String']['input']>;
  label_contains: InputMaybe<Scalars['String']['input']>;
  label_exists: InputMaybe<Scalars['Boolean']['input']>;
  label_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not: InputMaybe<Scalars['String']['input']>;
  label_not_contains: InputMaybe<Scalars['String']['input']>;
  label_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  value: InputMaybe<Scalars['String']['input']>;
  value_contains: InputMaybe<Scalars['String']['input']>;
  value_exists: InputMaybe<Scalars['Boolean']['input']>;
  value_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not: InputMaybe<Scalars['String']['input']>;
  value_not_contains: InputMaybe<Scalars['String']['input']>;
  value_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfTranslationsNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfTranslationsNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfTranslationsNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  internalTitle: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  listId: InputMaybe<Scalars['String']['input']>;
  listId_contains: InputMaybe<Scalars['String']['input']>;
  listId_exists: InputMaybe<Scalars['Boolean']['input']>;
  listId_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  listId_not: InputMaybe<Scalars['String']['input']>;
  listId_not_contains: InputMaybe<Scalars['String']['input']>;
  listId_not_in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys: InputMaybe<SysFilter>;
  translationsCollection_exists: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfblocksMultiTypeNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfblocksMultiTypeNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfblocksMultiTypeNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  sys: InputMaybe<SysFilter>;
};

export type CardBlockFragment = { __typename: 'CardBlock', title: string | null, isImageLeft: boolean | null, buttonText: string | null, smallVersion: boolean | null, sys: { __typename?: 'Sys', id: string }, backgroundImage: { __typename?: 'Asset', url: string | null } | null, richText: { __typename?: 'CardBlockRichText', json: any } | null, buttonLink: { __typename?: 'ContentPage', slug: string | null } | null };

export type LandingBlockFragment = { __typename: 'LandingBlock', title: string | null, buttonText: string | null, sys: { __typename?: 'Sys', id: string }, backgroundImage: { __typename?: 'Asset', url: string | null } | null, internalLink: { __typename?: 'ContentPage', slug: string | null } | null };

export type HeroBlockFragment = { __typename: 'HeroBlock', paragraph: string | null, opacity: number | null, sys: { __typename?: 'Sys', id: string }, image: { __typename?: 'Asset', url: string | null, title: string | null, description: string | null } | null };

export type TextBlockFragment = { __typename: 'TextBlock', title: string | null, text: string | null, preamble: string | null, centerText: boolean | null, sys: { __typename?: 'Sys', id: string }, optionalBackgroundImage: { __typename?: 'Asset', url: string | null, title: string | null, description: string | null } | null };

export type LoginBlockFragment = { __typename: 'LoginBlock', sys: { __typename?: 'Sys', id: string } };

export type WidgetBlockFragment = { __typename: 'WidgetBlock', title: string | null, text: string | null, addRedBoxToTitle: boolean | null, sys: { __typename?: 'Sys', id: string }, image: { __typename?: 'Asset', url: string | null, title: string | null, description: string | null } | null };

export type CardListBlockFragment = { __typename: 'CardListBlock', sys: { __typename?: 'Sys', id: string }, cardListCollection: { __typename?: 'CardListBlockCardListCollection', items: Array<{ __typename: 'CardBlock', title: string | null, isImageLeft: boolean | null, buttonText: string | null, smallVersion: boolean | null, sys: { __typename?: 'Sys', id: string }, backgroundImage: { __typename?: 'Asset', url: string | null } | null, richText: { __typename?: 'CardBlockRichText', json: any } | null, buttonLink: { __typename?: 'ContentPage', slug: string | null } | null } | null> } | null };

export type LiveScoreBlockFragment = { __typename: 'LiveScoreBlock', title: string | null, noLiveMatchesAvailable: string | null, closedMatches: string | null, sys: { __typename?: 'Sys', id: string }, sportsCollection: { __typename?: 'LiveScoreBlockSportsCollection', items: Array<{ __typename?: 'Sport', sportId: string | null, icon: { __typename?: 'Asset', url: string | null, title: string | null } | null } | null> } | null, tournamentSortOrderCollection: { __typename?: 'LiveScoreBlockTournamentSortOrderCollection', items: Array<{ __typename?: 'Tournament', tournamentId: string | null, tournamentName: string | null, country: string | null, flagIcon: { __typename?: 'Asset', url: string | null, title: string | null } | null } | null> } | null };

export type BetSuggestionBlockFragment = { __typename: 'BetSuggestionBlock', title: string | null, sys: { __typename?: 'Sys', id: string }, sportsCollection: { __typename?: 'BetSuggestionBlockSportsCollection', items: Array<{ __typename?: 'Sport', sportId: string | null, icon: { __typename?: 'Asset', url: string | null, title: string | null } | null } | null> } | null };

export type TournamentStandingsBlockFragment = { __typename: 'TournamentStandingsBlock', sys: { __typename?: 'Sys', id: string }, sport: { __typename?: 'Sport', sportId: string | null, tournamentsCollection: { __typename?: 'SportTournamentsCollection', items: Array<{ __typename?: 'Tournament', tournamentName: string | null, tournamentId: string | null, inActivate: boolean | null } | null> } | null, image: { __typename?: 'Asset', url: string | null, title: string | null } | null } | null };

export type CardLinkBlockFragment = { __typename: 'CardLinkBlock', label: string | null, sys: { __typename?: 'Sys', id: string }, backgroundImage: { __typename?: 'Asset', url: string | null, title: string | null } | null, link: { __typename?: 'ContentPage', slug: string | null } | null };

export type NewsBlockFragment = { __typename: 'NewsBlock', newsSource: string | null, sys: { __typename?: 'Sys', id: string }, mcmNewsList: { __typename?: 'McmNewsList', mcmNewsListCollection: { __typename?: 'McmNewsListMcmNewsListCollection', items: Array<{ __typename?: 'McmNewsBlock', title: string | null, description: string | null, text: string | null, pubDate: string | null, image: { __typename?: 'Asset', url: string | null, title: string | null } | null, logoImage: { __typename?: 'Asset', url: string | null, title: string | null } | null, linkToNewsPage: { __typename?: 'ContentPage', slug: string | null } | null } | null> } | null } | null };

export type McmNewsBlockFragment = { __typename: 'McmNewsBlock', title: string | null, description: string | null, text: string | null, pubDate: string | null, sys: { __typename?: 'Sys', id: string }, image: { __typename?: 'Asset', url: string | null, title: string | null } | null, logoImage: { __typename?: 'Asset', url: string | null, title: string | null } | null, linkToNewsPage: { __typename?: 'ContentPage', slug: string | null } | null };

export type OddsComparsionBlockFragment = { __typename: 'OddsComparsionBlock', sys: { __typename?: 'Sys', id: string }, sport: { __typename?: 'Sport', sportId: string | null, tournamentsCollection: { __typename?: 'SportTournamentsCollection', items: Array<{ __typename?: 'Tournament', tournamentName: string | null, tournamentId: string | null, inActivate: boolean | null } | null> } | null, image: { __typename?: 'Asset', url: string | null, title: string | null } | null } | null };

export type GetAllPageSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPageSlugsQueryResponse = { __typename?: 'Query', contentPageCollection: { __typename?: 'ContentPageCollection', items: Array<{ __typename?: 'ContentPage', slug: string | null } | null> } | null };

export type GetPageBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPageBySlugQueryResponse = { __typename?: 'Query', contentPageCollection: { __typename?: 'ContentPageCollection', items: Array<{ __typename?: 'ContentPage', title: string | null, slug: string | null, description: string | null, keywords: string | null, excludeFromSiteBuild: boolean | null, excludePageFromInternalSearch: boolean | null, isMcmNewsPage: boolean | null, showScrollToTopButton: boolean | null, sys: { __typename?: 'Sys', id: string }, blocksCollection: { __typename?: 'ContentPageBlocksCollection', items: Array<{ __typename: 'BetSuggestionBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'CardBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'CardLinkBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'CardListBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'HeroBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'LandingBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'LiveScoreBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'LoginBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'McmNewsBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NewsBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'OddsComparsionBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TextBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TournamentStandingsBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'WidgetBlock', sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null };

export const LandingBlockFragmentDoc = gql`
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
export const HeroBlockFragmentDoc = gql`
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
export const TextBlockFragmentDoc = gql`
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
export const LoginBlockFragmentDoc = gql`
    fragment LoginBlock on LoginBlock {
  __typename
  sys {
    id
  }
}
    `;
export const WidgetBlockFragmentDoc = gql`
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
export const CardBlockFragmentDoc = gql`
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
export const CardListBlockFragmentDoc = gql`
    fragment CardListBlock on CardListBlock {
  __typename
  sys {
    id
  }
  cardListCollection(limit: 10) {
    items {
      ...CardBlock
    }
  }
}
    `;
export const LiveScoreBlockFragmentDoc = gql`
    fragment LiveScoreBlock on LiveScoreBlock {
  __typename
  sys {
    id
  }
  title
  sportsCollection {
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
  tournamentSortOrderCollection {
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
export const BetSuggestionBlockFragmentDoc = gql`
    fragment BetSuggestionBlock on BetSuggestionBlock {
  __typename
  sys {
    id
  }
  title
  sportsCollection {
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
export const TournamentStandingsBlockFragmentDoc = gql`
    fragment TournamentStandingsBlock on TournamentStandingsBlock {
  __typename
  sys {
    id
  }
  sport {
    sportId
    tournamentsCollection {
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
export const CardLinkBlockFragmentDoc = gql`
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
export const NewsBlockFragmentDoc = gql`
    fragment NewsBlock on NewsBlock {
  __typename
  sys {
    id
  }
  newsSource
  mcmNewsList {
    mcmNewsListCollection {
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
export const McmNewsBlockFragmentDoc = gql`
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
export const OddsComparsionBlockFragmentDoc = gql`
    fragment OddsComparsionBlock on OddsComparsionBlock {
  __typename
  sys {
    id
  }
  sport {
    sportId
    tournamentsCollection {
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
export const GetAllPageSlugsDocument = gql`
    query GetAllPageSlugs {
  contentPageCollection(where: {excludeFromSiteBuild_not: true}) {
    items {
      slug
    }
  }
}
    `;
export const GetPageBySlugDocument = gql`
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAllPageSlugs(variables?: GetAllPageSlugsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllPageSlugsQueryResponse> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllPageSlugsQueryResponse>(GetAllPageSlugsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllPageSlugs', 'query', variables);
    },
    GetPageBySlug(variables: GetPageBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPageBySlugQueryResponse> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPageBySlugQueryResponse>(GetPageBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPageBySlug', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;