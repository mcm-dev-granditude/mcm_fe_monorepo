import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentPageSkeleton } from "./TypeContentPage";

/**
 * Fields type definition for content type 'TypeNavigationItem'
 * @name TypeNavigationItemFields
 * @type {TypeNavigationItemFields}
 * @memberof TypeNavigationItem
 */
export interface TypeNavigationItemFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'footerDescriptionText' (Footer description text)
     * @name Footer description text
     * @localized false
     */
    footerDescriptionText?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'url' (Url)
     * @name Url
     * @localized false
     */
    url: EntryFieldTypes.EntryLink<TypeContentPageSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'navigationItem' (Navigation Item)
 * @name TypeNavigationItemSkeleton
 * @type {TypeNavigationItemSkeleton}
 * @author 3wq5isntIoTAIhSXC8PPww
 * @since 2019-05-08T14:49:54.924Z
 * @version 5
 */
export type TypeNavigationItemSkeleton = EntrySkeletonType<TypeNavigationItemFields, "navigationItem">;
/**
 * Entry type definition for content type 'navigationItem' (Navigation Item)
 * @name TypeNavigationItem
 * @type {TypeNavigationItem}
 * @author 3wq5isntIoTAIhSXC8PPww
 * @since 2019-05-08T14:49:54.924Z
 * @version 5
 */
export type TypeNavigationItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNavigationItemSkeleton, Modifiers, Locales>;
export type TypeNavigationItemWithoutLinkResolutionResponse = TypeNavigationItem<"WITHOUT_LINK_RESOLUTION">;
export type TypeNavigationItemWithoutUnresolvableLinksResponse = TypeNavigationItem<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeNavigationItemWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeNavigationItem<"WITH_ALL_LOCALES", Locales>;
export type TypeNavigationItemWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeNavigationItem<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeNavigationItemWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeNavigationItem<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
