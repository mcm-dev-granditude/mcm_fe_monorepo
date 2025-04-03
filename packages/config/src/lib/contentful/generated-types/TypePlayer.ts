import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypePlayer'
 * @name TypePlayerFields
 * @type {TypePlayerFields}
 * @memberof TypePlayer
 */
export interface TypePlayerFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'artistName' (Artist Name)
     * @name Artist Name
     * @localized false
     */
    artistName?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'name' (Name)
     * @name Name
     * @localized false
     */
    name: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'team' (Team)
     * @name Team
     * @localized false
     */
    team?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'shirtNumber' (Shirt Number)
     * @name Shirt Number
     * @localized false
     */
    shirtNumber?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'position' (Position)
     * @name Position
     * @localized false
     */
    position?: EntryFieldTypes.Symbol<"b" | "fw" | "mf" | "mv">;
    /**
     * Field type definition for field 'rating' (Rating)
     * @name Rating
     * @localized false
     */
    rating?: EntryFieldTypes.Symbol<"1" | "2" | "3" | "Långtidsskadad">;
    /**
     * Field type definition for field 'absenceReason' (Absence Reason)
     * @name Absence Reason
     * @localized false
     */
    absenceReason?: EntryFieldTypes.Symbol<"Annat" | "Avstängd" | "Sjuk" | "Skadad" | "Tveksam">;
}

/**
 * Entry skeleton type definition for content type 'player' (Player)
 * @name TypePlayerSkeleton
 * @type {TypePlayerSkeleton}
 * @author 3aPlrO8GttAXZXOptFA0vi
 * @since 2019-07-18T08:26:18.891Z
 * @version 31
 */
export type TypePlayerSkeleton = EntrySkeletonType<TypePlayerFields, "player">;
/**
 * Entry type definition for content type 'player' (Player)
 * @name TypePlayer
 * @type {TypePlayer}
 * @author 3aPlrO8GttAXZXOptFA0vi
 * @since 2019-07-18T08:26:18.891Z
 * @version 31
 */
export type TypePlayer<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePlayerSkeleton, Modifiers, Locales>;
export type TypePlayerWithoutLinkResolutionResponse = TypePlayer<"WITHOUT_LINK_RESOLUTION">;
export type TypePlayerWithoutUnresolvableLinksResponse = TypePlayer<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePlayerWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePlayer<"WITH_ALL_LOCALES", Locales>;
export type TypePlayerWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePlayer<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePlayerWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePlayer<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
