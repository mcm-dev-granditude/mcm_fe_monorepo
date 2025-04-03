import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSubNavItemSkeleton } from "./TypeSubNavItem";

/**
 * Fields type definition for content type 'TypeSubNav'
 * @name TypeSubNavFields
 * @type {TypeSubNavFields}
 * @memberof TypeSubNav
 */
export interface TypeSubNavFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'subNavItems' (Sub Nav Items)
     * @name Sub Nav Items
     * @localized false
     */
    subNavItems?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSubNavItemSkeleton>>;
    /**
     * Field type definition for field 'mobileBehaviour' (Mobile Behaviour)
     * @name Mobile Behaviour
     * @localized false
     */
    mobileBehaviour?: EntryFieldTypes.Symbol<"Icons only" | "Title only">;
}

/**
 * Entry skeleton type definition for content type 'subNav' (Sub Nav)
 * @name TypeSubNavSkeleton
 * @type {TypeSubNavSkeleton}
 * @author 4yn1dkHsoNO9Tmms367ZHx
 * @since 2019-06-28T11:37:06.444Z
 * @version 25
 */
export type TypeSubNavSkeleton = EntrySkeletonType<TypeSubNavFields, "subNav">;
/**
 * Entry type definition for content type 'subNav' (Sub Nav)
 * @name TypeSubNav
 * @type {TypeSubNav}
 * @author 4yn1dkHsoNO9Tmms367ZHx
 * @since 2019-06-28T11:37:06.444Z
 * @version 25
 */
export type TypeSubNav<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSubNavSkeleton, Modifiers, Locales>;
export type TypeSubNavWithoutLinkResolutionResponse = TypeSubNav<"WITHOUT_LINK_RESOLUTION">;
export type TypeSubNavWithoutUnresolvableLinksResponse = TypeSubNav<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSubNavWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSubNav<"WITH_ALL_LOCALES", Locales>;
export type TypeSubNavWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeSubNav<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSubNavWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeSubNav<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
