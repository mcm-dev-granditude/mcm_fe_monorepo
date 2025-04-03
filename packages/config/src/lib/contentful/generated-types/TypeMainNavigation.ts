import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentPageSkeleton } from "./TypeContentPage";
import type { TypeNavigationItemSkeleton } from "./TypeNavigationItem";

/**
 * Fields type definition for content type 'TypeMainNavigation'
 * @name TypeMainNavigationFields
 * @type {TypeMainNavigationFields}
 * @memberof TypeMainNavigation
 */
export interface TypeMainNavigationFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'navigationItemsList' (Navigation Items List)
     * @name Navigation Items List
     * @localized false
     */
    navigationItemsList: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    /**
     * Field type definition for field 'navigationItemsListForPrototype' (Navigation Items List For Prototype)
     * @name Navigation Items List For Prototype
     * @localized false
     */
    navigationItemsListForPrototype?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationItemSkeleton>>;
    /**
     * Field type definition for field 'logotype' (Logotype)
     * @name Logotype
     * @localized false
     */
    logotype: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'linkToLandingPage' (Link To Landing Page)
     * @name Link To Landing Page
     * @localized false
     */
    linkToLandingPage: EntryFieldTypes.EntryLink<TypeContentPageSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'mainNavigation' (Main Navigation)
 * @name TypeMainNavigationSkeleton
 * @type {TypeMainNavigationSkeleton}
 * @author 3wq5isntIoTAIhSXC8PPww
 * @since 2019-05-08T14:47:08.675Z
 * @version 7
 */
export type TypeMainNavigationSkeleton = EntrySkeletonType<TypeMainNavigationFields, "mainNavigation">;
/**
 * Entry type definition for content type 'mainNavigation' (Main Navigation)
 * @name TypeMainNavigation
 * @type {TypeMainNavigation}
 * @author 3wq5isntIoTAIhSXC8PPww
 * @since 2019-05-08T14:47:08.675Z
 * @version 7
 */
export type TypeMainNavigation<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMainNavigationSkeleton, Modifiers, Locales>;
export type TypeMainNavigationWithoutLinkResolutionResponse = TypeMainNavigation<"WITHOUT_LINK_RESOLUTION">;
export type TypeMainNavigationWithoutUnresolvableLinksResponse = TypeMainNavigation<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeMainNavigationWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeMainNavigation<"WITH_ALL_LOCALES", Locales>;
export type TypeMainNavigationWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeMainNavigation<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeMainNavigationWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeMainNavigation<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
