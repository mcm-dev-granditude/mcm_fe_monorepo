import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeImage'
 * @name TypeImageFields
 * @type {TypeImageFields}
 * @memberof TypeImage
 */
export interface TypeImageFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'label' (Label)
     * @name Label
     * @localized false
     */
    label?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'value' (Value)
     * @name Value
     * @localized false
     */
    value: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'image' (Image)
 * @name TypeImageSkeleton
 * @type {TypeImageSkeleton}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-06-29T11:00:50.425Z
 * @version 3
 */
export type TypeImageSkeleton = EntrySkeletonType<TypeImageFields, "image">;
/**
 * Entry type definition for content type 'image' (Image)
 * @name TypeImage
 * @type {TypeImage}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-06-29T11:00:50.425Z
 * @version 3
 */
export type TypeImage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeImageSkeleton, Modifiers, Locales>;
export type TypeImageWithoutLinkResolutionResponse = TypeImage<"WITHOUT_LINK_RESOLUTION">;
export type TypeImageWithoutUnresolvableLinksResponse = TypeImage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeImageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeImage<"WITH_ALL_LOCALES", Locales>;
export type TypeImageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeImage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeImageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeImage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
