import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTranslationSkeleton } from "./TypeTranslation";

/**
 * Fields type definition for content type 'TypeTranslations'
 * @name TypeTranslationsFields
 * @type {TypeTranslationsFields}
 * @memberof TypeTranslations
 */
export interface TypeTranslationsFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'listId' (List Id)
     * @name List Id
     * @localized false
     */
    listId?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'translations' (Translations)
     * @name Translations
     * @localized false
     */
    translations: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTranslationSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'translations' (Translations)
 * @name TypeTranslationsSkeleton
 * @type {TypeTranslationsSkeleton}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-06-29T06:50:22.761Z
 * @version 17
 */
export type TypeTranslationsSkeleton = EntrySkeletonType<TypeTranslationsFields, "translations">;
/**
 * Entry type definition for content type 'translations' (Translations)
 * @name TypeTranslations
 * @type {TypeTranslations}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-06-29T06:50:22.761Z
 * @version 17
 */
export type TypeTranslations<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTranslationsSkeleton, Modifiers, Locales>;
export type TypeTranslationsWithoutLinkResolutionResponse = TypeTranslations<"WITHOUT_LINK_RESOLUTION">;
export type TypeTranslationsWithoutUnresolvableLinksResponse = TypeTranslations<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeTranslationsWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeTranslations<"WITH_ALL_LOCALES", Locales>;
export type TypeTranslationsWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeTranslations<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeTranslationsWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeTranslations<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
