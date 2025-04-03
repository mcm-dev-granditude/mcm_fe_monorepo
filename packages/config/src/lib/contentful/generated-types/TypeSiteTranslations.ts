import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTranslationsSkeleton } from "./TypeTranslations";

/**
 * Fields type definition for content type 'TypeSiteTranslations'
 * @name TypeSiteTranslationsFields
 * @type {TypeSiteTranslationsFields}
 * @memberof TypeSiteTranslations
 */
export interface TypeSiteTranslationsFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'translations' (Translations)
     * @name Translations
     * @localized false
     */
    translations?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTranslationsSkeleton>>;
    /**
     * Field type definition for field 'isActive' (isActive)
     * @name isActive
     * @localized false
     */
    isActive?: EntryFieldTypes.Boolean;
}

/**
 * Entry skeleton type definition for content type 'siteTranslations' (Site Translations)
 * @name TypeSiteTranslationsSkeleton
 * @type {TypeSiteTranslationsSkeleton}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-06-29T06:48:45.010Z
 * @version 3
 */
export type TypeSiteTranslationsSkeleton = EntrySkeletonType<TypeSiteTranslationsFields, "siteTranslations">;
/**
 * Entry type definition for content type 'siteTranslations' (Site Translations)
 * @name TypeSiteTranslations
 * @type {TypeSiteTranslations}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-06-29T06:48:45.010Z
 * @version 3
 */
export type TypeSiteTranslations<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSiteTranslationsSkeleton, Modifiers, Locales>;
export type TypeSiteTranslationsWithoutLinkResolutionResponse = TypeSiteTranslations<"WITHOUT_LINK_RESOLUTION">;
export type TypeSiteTranslationsWithoutUnresolvableLinksResponse = TypeSiteTranslations<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSiteTranslationsWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSiteTranslations<"WITH_ALL_LOCALES", Locales>;
export type TypeSiteTranslationsWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeSiteTranslations<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSiteTranslationsWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeSiteTranslations<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
