import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeBookingAgency'
 * @name TypeBookingAgencyFields
 * @type {TypeBookingAgencyFields}
 * @memberof TypeBookingAgency
 */
export interface TypeBookingAgencyFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'bookingAgency' (Booking Agency)
     * @name Booking Agency
     * @localized false
     */
    bookingAgency: EntryFieldTypes.Object;
    /**
     * Field type definition for field 'alias' (Alias)
     * @name Alias
     * @localized false
     */
    alias?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'logo' (Logo)
     * @name Logo
     * @localized false
     */
    logo?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'bookingAgency' (Booking Agency)
 * @name TypeBookingAgencySkeleton
 * @type {TypeBookingAgencySkeleton}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-07-01T07:52:46.689Z
 * @version 7
 */
export type TypeBookingAgencySkeleton = EntrySkeletonType<TypeBookingAgencyFields, "bookingAgency">;
/**
 * Entry type definition for content type 'bookingAgency' (Booking Agency)
 * @name TypeBookingAgency
 * @type {TypeBookingAgency}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-07-01T07:52:46.689Z
 * @version 7
 */
export type TypeBookingAgency<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBookingAgencySkeleton, Modifiers, Locales>;
export type TypeBookingAgencyWithoutLinkResolutionResponse = TypeBookingAgency<"WITHOUT_LINK_RESOLUTION">;
export type TypeBookingAgencyWithoutUnresolvableLinksResponse = TypeBookingAgency<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeBookingAgencyWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeBookingAgency<"WITH_ALL_LOCALES", Locales>;
export type TypeBookingAgencyWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeBookingAgency<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeBookingAgencyWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeBookingAgency<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
