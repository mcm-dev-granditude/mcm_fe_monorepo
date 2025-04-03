import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageSkeleton } from "./TypeImage";

/**
 * Fields type definition for content type 'TypeImages'
 * @name TypeImagesFields
 * @type {TypeImagesFields}
 * @memberof TypeImages
 */
export interface TypeImagesFields {
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
    images: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeImageSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'images' (Images)
 * @name TypeImagesSkeleton
 * @type {TypeImagesSkeleton}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-06-29T10:58:34.340Z
 * @version 5
 */
export type TypeImagesSkeleton = EntrySkeletonType<TypeImagesFields, "images">;
/**
 * Entry type definition for content type 'images' (Images)
 * @name TypeImages
 * @type {TypeImages}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-06-29T10:58:34.340Z
 * @version 5
 */
export type TypeImages<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeImagesSkeleton, Modifiers, Locales>;
export type TypeImagesWithoutLinkResolutionResponse = TypeImages<"WITHOUT_LINK_RESOLUTION">;
export type TypeImagesWithoutUnresolvableLinksResponse = TypeImages<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeImagesWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeImages<"WITH_ALL_LOCALES", Locales>;
export type TypeImagesWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeImages<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeImagesWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeImages<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
