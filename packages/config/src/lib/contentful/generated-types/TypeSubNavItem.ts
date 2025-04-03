import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentPageSkeleton } from "./TypeContentPage";

/**
 * Fields type definition for content type 'TypeSubNavItem'
 * @name TypeSubNavItemFields
 * @type {TypeSubNavItemFields}
 * @memberof TypeSubNavItem
 */
export interface TypeSubNavItemFields {
    /**
     * Field type definition for field 'internalTitle' (Internal title)
     * @name Internal title
     * @localized false
     */
    internalTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'icon' (Icon)
     * @name Icon
     * @localized false
     */
    icon?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'link' (Link)
     * @name Link
     * @localized false
     */
    link?: EntryFieldTypes.EntryLink<TypeContentPageSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'subNavItem' (Sub Nav Item)
 * @name TypeSubNavItemSkeleton
 * @type {TypeSubNavItemSkeleton}
 * @author 4yn1dkHsoNO9Tmms367ZHx
 * @since 2019-06-28T11:37:31.140Z
 * @version 7
 */
export type TypeSubNavItemSkeleton = EntrySkeletonType<TypeSubNavItemFields, "subNavItem">;
/**
 * Entry type definition for content type 'subNavItem' (Sub Nav Item)
 * @name TypeSubNavItem
 * @type {TypeSubNavItem}
 * @author 4yn1dkHsoNO9Tmms367ZHx
 * @since 2019-06-28T11:37:31.140Z
 * @version 7
 */
export type TypeSubNavItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSubNavItemSkeleton, Modifiers, Locales>;
export type TypeSubNavItemWithoutLinkResolutionResponse = TypeSubNavItem<"WITHOUT_LINK_RESOLUTION">;
export type TypeSubNavItemWithoutUnresolvableLinksResponse = TypeSubNavItem<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSubNavItemWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSubNavItem<"WITH_ALL_LOCALES", Locales>;
export type TypeSubNavItemWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeSubNavItem<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSubNavItemWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeSubNavItem<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
