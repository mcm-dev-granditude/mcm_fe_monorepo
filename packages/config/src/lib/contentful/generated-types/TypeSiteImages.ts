import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImagesSkeleton } from "./TypeImages";

/**
 * Fields type definition for content type 'TypeSiteImages'
 * @name TypeSiteImagesFields
 * @type {TypeSiteImagesFields}
 * @memberof TypeSiteImages
 */
export interface TypeSiteImagesFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'images' (Images)
     * @name Images
     * @localized false
     */
    images?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeImagesSkeleton>>;
    /**
     * Field type definition for field 'isActive' (isActive)
     * @name isActive
     * @localized false
     */
    isActive?: EntryFieldTypes.Boolean;
}

/**
 * Entry skeleton type definition for content type 'siteImages' (Site Images)
 * @name TypeSiteImagesSkeleton
 * @type {TypeSiteImagesSkeleton}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-06-29T10:50:37.357Z
 * @version 7
 */
export type TypeSiteImagesSkeleton = EntrySkeletonType<TypeSiteImagesFields, "siteImages">;
/**
 * Entry type definition for content type 'siteImages' (Site Images)
 * @name TypeSiteImages
 * @type {TypeSiteImages}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-06-29T10:50:37.357Z
 * @version 7
 */
export type TypeSiteImages<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSiteImagesSkeleton, Modifiers, Locales>;
export type TypeSiteImagesWithoutLinkResolutionResponse = TypeSiteImages<"WITHOUT_LINK_RESOLUTION">;
export type TypeSiteImagesWithoutUnresolvableLinksResponse = TypeSiteImages<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSiteImagesWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSiteImages<"WITH_ALL_LOCALES", Locales>;
export type TypeSiteImagesWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeSiteImages<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSiteImagesWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeSiteImages<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
