import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeMissingPlayers'
 * @name TypeMissingPlayersFields
 * @type {TypeMissingPlayersFields}
 * @memberof TypeMissingPlayers
 */
export interface TypeMissingPlayersFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'matchId' (MatchId)
     * @name MatchId
     * @localized false
     */
    matchId?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'missingPlayers' (Missing Players)
     * @name Missing Players
     * @localized false
     */
    missingPlayers?: EntryFieldTypes.Object;
}

/**
 * Entry skeleton type definition for content type 'missingPlayers' (Missing Players)
 * @name TypeMissingPlayersSkeleton
 * @type {TypeMissingPlayersSkeleton}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2019-10-22T07:39:21.525Z
 * @version 29
 */
export type TypeMissingPlayersSkeleton = EntrySkeletonType<TypeMissingPlayersFields, "missingPlayers">;
/**
 * Entry type definition for content type 'missingPlayers' (Missing Players)
 * @name TypeMissingPlayers
 * @type {TypeMissingPlayers}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2019-10-22T07:39:21.525Z
 * @version 29
 */
export type TypeMissingPlayers<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMissingPlayersSkeleton, Modifiers, Locales>;
export type TypeMissingPlayersWithoutLinkResolutionResponse = TypeMissingPlayers<"WITHOUT_LINK_RESOLUTION">;
export type TypeMissingPlayersWithoutUnresolvableLinksResponse = TypeMissingPlayers<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeMissingPlayersWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeMissingPlayers<"WITH_ALL_LOCALES", Locales>;
export type TypeMissingPlayersWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeMissingPlayers<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeMissingPlayersWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeMissingPlayers<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
