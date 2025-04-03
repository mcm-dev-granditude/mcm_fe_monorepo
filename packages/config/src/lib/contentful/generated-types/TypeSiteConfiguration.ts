import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFooterSkeleton } from "./TypeFooter";
import type { TypeMainNavigationSkeleton } from "./TypeMainNavigation";
import type { TypeSubNavSkeleton } from "./TypeSubNav";

/**
 * Fields type definition for content type 'TypeSiteConfiguration'
 * @name TypeSiteConfigurationFields
 * @type {TypeSiteConfigurationFields}
 * @memberof TypeSiteConfiguration
 */
export interface TypeSiteConfigurationFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'facebookFallbackImage' (Facebook fallback image)
     * @name Facebook fallback image
     * @localized false
     */
    facebookFallbackImage?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'defaultMainNavigation' (Default Main Navigation)
     * @name Default Main Navigation
     * @localized false
     */
    defaultMainNavigation: EntryFieldTypes.EntryLink<TypeMainNavigationSkeleton>;
    /**
     * Field type definition for field 'defaultSubNav' (Default SubNav)
     * @name Default SubNav
     * @localized false
     */
    defaultSubNav: EntryFieldTypes.EntryLink<TypeSubNavSkeleton>;
    /**
     * Field type definition for field 'defaultFooter' (Default Footer)
     * @name Default Footer
     * @localized false
     */
    defaultFooter: EntryFieldTypes.EntryLink<TypeFooterSkeleton>;
    /**
     * Field type definition for field 'daysLimitForMatchRemoval' (Days to delete played matches)
     * @name Days to delete played matches
     * @localized false
     */
    daysLimitForMatchRemoval?: EntryFieldTypes.Integer;
    /**
     * Field type definition for field 'daysAheadForMatchImport' (Days ahead for match import)
     * @name Days ahead for match import
     * @localized false
     */
    daysAheadForMatchImport?: EntryFieldTypes.Integer;
    /**
     * Field type definition for field 'siteLabels' (Site Labels)
     * @name Site Labels
     * @localized false
     */
    siteLabels?: EntryFieldTypes.Object;
    /**
     * Field type definition for field 'soccerField' (Soccer Field)
     * @name Soccer Field
     * @localized false
     */
    soccerField?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'jerseyShadow' (Jersey Shadow)
     * @name Jersey Shadow
     * @localized false
     */
    jerseyShadow?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'jerseyShadowOverlay' (Jersey Shadow Overlay)
     * @name Jersey Shadow Overlay
     * @localized false
     */
    jerseyShadowOverlay?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'siteConfiguration' (Site Configuration)
 * @name TypeSiteConfigurationSkeleton
 * @type {TypeSiteConfigurationSkeleton}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2019-04-17T13:41:30.349Z
 * @version 27
 */
export type TypeSiteConfigurationSkeleton = EntrySkeletonType<TypeSiteConfigurationFields, "siteConfiguration">;
/**
 * Entry type definition for content type 'siteConfiguration' (Site Configuration)
 * @name TypeSiteConfiguration
 * @type {TypeSiteConfiguration}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2019-04-17T13:41:30.349Z
 * @version 27
 */
export type TypeSiteConfiguration<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSiteConfigurationSkeleton, Modifiers, Locales>;
export type TypeSiteConfigurationWithoutLinkResolutionResponse = TypeSiteConfiguration<"WITHOUT_LINK_RESOLUTION">;
export type TypeSiteConfigurationWithoutUnresolvableLinksResponse = TypeSiteConfiguration<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSiteConfigurationWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSiteConfiguration<"WITH_ALL_LOCALES", Locales>;
export type TypeSiteConfigurationWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeSiteConfiguration<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSiteConfigurationWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeSiteConfiguration<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
