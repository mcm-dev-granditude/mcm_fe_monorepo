import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeMcmNewsBlockSkeleton } from "./TypeMcmNewsBlock";

/**
 * Fields type definition for content type 'TypeMcmNewsList'
 * @name TypeMcmNewsListFields
 * @type {TypeMcmNewsListFields}
 * @memberof TypeMcmNewsList
 */
export interface TypeMcmNewsListFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'mcmNewsList' (Mcm News List)
     * @name Mcm News List
     * @localized false
     */
    mcmNewsList: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeMcmNewsBlockSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'mcmNewsList' (Mcm News List)
 * @name TypeMcmNewsListSkeleton
 * @type {TypeMcmNewsListSkeleton}
 * @author 3wq5isntIoTAIhSXC8PPww
 * @since 2021-04-23T14:51:59.220Z
 * @version 1
 */
export type TypeMcmNewsListSkeleton = EntrySkeletonType<TypeMcmNewsListFields, "mcmNewsList">;
/**
 * Entry type definition for content type 'mcmNewsList' (Mcm News List)
 * @name TypeMcmNewsList
 * @type {TypeMcmNewsList}
 * @author 3wq5isntIoTAIhSXC8PPww
 * @since 2021-04-23T14:51:59.220Z
 * @version 1
 */
export type TypeMcmNewsList<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMcmNewsListSkeleton, Modifiers, Locales>;
export type TypeMcmNewsListWithoutLinkResolutionResponse = TypeMcmNewsList<"WITHOUT_LINK_RESOLUTION">;
export type TypeMcmNewsListWithoutUnresolvableLinksResponse = TypeMcmNewsList<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeMcmNewsListWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeMcmNewsList<"WITH_ALL_LOCALES", Locales>;
export type TypeMcmNewsListWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeMcmNewsList<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeMcmNewsListWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeMcmNewsList<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
