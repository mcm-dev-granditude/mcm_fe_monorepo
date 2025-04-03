import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeTranslation'
 * @name TypeTranslationFields
 * @type {TypeTranslationFields}
 * @memberof TypeTranslation
 */
export interface TypeTranslationFields {
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
    label: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'value' (Value)
     * @name Value
     * @localized false
     */
    value: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'translation' (Translation)
 * @name TypeTranslationSkeleton
 * @type {TypeTranslationSkeleton}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-06-29T06:51:50.598Z
 * @version 1
 */
export type TypeTranslationSkeleton = EntrySkeletonType<TypeTranslationFields, "translation">;
/**
 * Entry type definition for content type 'translation' (Translation)
 * @name TypeTranslation
 * @type {TypeTranslation}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-06-29T06:51:50.598Z
 * @version 1
 */
export type TypeTranslation<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTranslationSkeleton, Modifiers, Locales>;
export type TypeTranslationWithoutLinkResolutionResponse = TypeTranslation<"WITHOUT_LINK_RESOLUTION">;
export type TypeTranslationWithoutUnresolvableLinksResponse = TypeTranslation<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeTranslationWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeTranslation<"WITH_ALL_LOCALES", Locales>;
export type TypeTranslationWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeTranslation<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeTranslationWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeTranslation<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
