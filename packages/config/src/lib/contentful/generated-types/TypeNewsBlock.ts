import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeMcmNewsListSkeleton } from "./TypeMcmNewsList";

/**
 * Fields type definition for content type 'TypeNewsBlock'
 * @name TypeNewsBlockFields
 * @type {TypeNewsBlockFields}
 * @memberof TypeNewsBlock
 */
export interface TypeNewsBlockFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'newsSource' (Nyhetskälla)
     * @name Nyhetskälla
     * @localized false
     */
    newsSource?: EntryFieldTypes.Symbol<"Alla nyheter" | "Fotbolldirekt" | "Fotbollskanalen" | "Fotbolltransfers" | "Hockey Sverige" | "Matchcentermedia">;
    /**
     * Field type definition for field 'mcmNewsList' (Mcm News List)
     * @name Mcm News List
     * @localized false
     */
    mcmNewsList?: EntryFieldTypes.EntryLink<TypeMcmNewsListSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'newsBlock' (News Block)
 * @name TypeNewsBlockSkeleton
 * @type {TypeNewsBlockSkeleton}
 * @author 4yn1dkHsoNO9Tmms367ZHx
 * @since 2019-07-04T14:45:28.446Z
 * @version 15
 */
export type TypeNewsBlockSkeleton = EntrySkeletonType<TypeNewsBlockFields, "newsBlock">;
/**
 * Entry type definition for content type 'newsBlock' (News Block)
 * @name TypeNewsBlock
 * @type {TypeNewsBlock}
 * @author 4yn1dkHsoNO9Tmms367ZHx
 * @since 2019-07-04T14:45:28.446Z
 * @version 15
 */
export type TypeNewsBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNewsBlockSkeleton, Modifiers, Locales>;
export type TypeNewsBlockWithoutLinkResolutionResponse = TypeNewsBlock<"WITHOUT_LINK_RESOLUTION">;
export type TypeNewsBlockWithoutUnresolvableLinksResponse = TypeNewsBlock<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeNewsBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeNewsBlock<"WITH_ALL_LOCALES", Locales>;
export type TypeNewsBlockWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeNewsBlock<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeNewsBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeNewsBlock<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
