import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBetSuggestionBlockSkeleton } from "./TypeBetSuggestionBlock";
import type { TypeCardBlockSkeleton } from "./TypeCardBlock";
import type { TypeCardLinkBlockSkeleton } from "./TypeCardLinkBlock";
import type { TypeCardListBlockSkeleton } from "./TypeCardListBlock";
import type { TypeHeroBlockSkeleton } from "./TypeHeroBlock";
import type { TypeLandingBlockSkeleton } from "./TypeLandingBlock";
import type { TypeLiveScoreBlockSkeleton } from "./TypeLiveScoreBlock";
import type { TypeLoginBlockSkeleton } from "./TypeLoginBlock";
import type { TypeMcmNewsBlockSkeleton } from "./TypeMcmNewsBlock";
import type { TypeNewsBlockSkeleton } from "./TypeNewsBlock";
import type { TypeOddsComparsionBlockSkeleton } from "./TypeOddsComparsionBlock";
import type { TypeSubNavSkeleton } from "./TypeSubNav";
import type { TypeTextBlockSkeleton } from "./TypeTextBlock";
import type { TypeTournamentStandingsBlockSkeleton } from "./TypeTournamentStandingsBlock";
import type { TypeWidgetBlockSkeleton } from "./TypeWidgetBlock";

/**
 * Fields type definition for content type 'TypeContentPage'
 * @name TypeContentPageFields
 * @type {TypeContentPageFields}
 * @memberof TypeContentPage
 */
export interface TypeContentPageFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'slug' (Slug)
     * @name Slug
     * @localized true
     */
    slug: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'parentPage' (Parent page)
     * @name Parent page
     * @localized false
     */
    parentPage?: EntryFieldTypes.EntryLink<TypeContentPageSkeleton>;
    /**
     * Field type definition for field 'subNav' (SubNav)
     * @name SubNav
     * @localized false
     */
    subNav?: EntryFieldTypes.EntryLink<TypeSubNavSkeleton>;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized true
     */
    description?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'keywords' (Keywords)
     * @name Keywords
     * @localized true
     */
    keywords?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'blocks' (Blocks)
     * @name Blocks
     * @localized true
     */
    blocks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBetSuggestionBlockSkeleton | TypeCardBlockSkeleton | TypeCardLinkBlockSkeleton | TypeCardListBlockSkeleton | TypeHeroBlockSkeleton | TypeLandingBlockSkeleton | TypeLiveScoreBlockSkeleton | TypeLoginBlockSkeleton | TypeMcmNewsBlockSkeleton | TypeNewsBlockSkeleton | TypeOddsComparsionBlockSkeleton | TypeTextBlockSkeleton | TypeTournamentStandingsBlockSkeleton | TypeWidgetBlockSkeleton>>;
    /**
     * Field type definition for field 'excludeFromSiteBuild' (Exclude page from site build)
     * @name Exclude page from site build
     * @localized false
     */
    excludeFromSiteBuild?: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'excludePageFromExternalSearch' (Exclude page from external search)
     * @name Exclude page from external search
     * @localized false
     */
    excludePageFromExternalSearch?: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'excludePageFromInternalSearch' (Exclude page from internal search)
     * @name Exclude page from internal search
     * @localized false
     */
    excludePageFromInternalSearch?: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'showScrollToTopButton' (Show Scroll To Top Button)
     * @name Show Scroll To Top Button
     * @localized false
     */
    showScrollToTopButton: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'isMcmNewsPage' (Is Mcm News Page)
     * @name Is Mcm News Page
     * @localized false
     */
    isMcmNewsPage?: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'id' (Id)
     * @name Id
     * @localized false
     */
    id?: EntryFieldTypes.Integer;
    /**
     * Field type definition for field 'url' (URL)
     * @name URL
     * @localized false
     */
    url?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'document' (Document)
     * @name Document
     * @localized false
     */
    document?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'contentPage' (Content Page)
 * @name TypeContentPageSkeleton
 * @type {TypeContentPageSkeleton}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2019-04-17T13:26:43.924Z
 * @version 107
 */
export type TypeContentPageSkeleton = EntrySkeletonType<TypeContentPageFields, "contentPage">;
/**
 * Entry type definition for content type 'contentPage' (Content Page)
 * @name TypeContentPage
 * @type {TypeContentPage}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2019-04-17T13:26:43.924Z
 * @version 107
 */
export type TypeContentPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContentPageSkeleton, Modifiers, Locales>;
export type TypeContentPageWithoutLinkResolutionResponse = TypeContentPage<"WITHOUT_LINK_RESOLUTION">;
export type TypeContentPageWithoutUnresolvableLinksResponse = TypeContentPage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeContentPageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeContentPage<"WITH_ALL_LOCALES", Locales>;
export type TypeContentPageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeContentPage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeContentPageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeContentPage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
