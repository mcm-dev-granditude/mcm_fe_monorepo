import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeTournament'
 * @name TypeTournamentFields
 * @type {TypeTournamentFields}
 * @memberof TypeTournament
 */
export interface TypeTournamentFields {
    /**
     * Field type definition for field 'internalTitle' (Internal title)
     * @name Internal title
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'tournamentName' (Tournament Name)
     * @name Tournament Name
     * @localized false
     */
    tournamentName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'tournamentId' (Tournament ID)
     * @name Tournament ID
     * @localized false
     */
    tournamentId: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'country' (Country)
     * @name Country
     * @localized false
     */
    country?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'icon' (Icon)
     * @name Icon
     * @localized false
     */
    icon: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'flagIcon' (Flag Icon)
     * @name Flag Icon
     * @localized false
     */
    flagIcon?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'inActivate' (inActivate)
     * @name inActivate
     * @localized false
     */
    inActivate?: EntryFieldTypes.Boolean;
}

/**
 * Entry skeleton type definition for content type 'tournament' (Tournament)
 * @name TypeTournamentSkeleton
 * @type {TypeTournamentSkeleton}
 * @author 5VyNfTw6SYSjD2p1JawbDx
 * @since 2019-06-20T11:29:03.578Z
 * @version 19
 */
export type TypeTournamentSkeleton = EntrySkeletonType<TypeTournamentFields, "tournament">;
/**
 * Entry type definition for content type 'tournament' (Tournament)
 * @name TypeTournament
 * @type {TypeTournament}
 * @author 5VyNfTw6SYSjD2p1JawbDx
 * @since 2019-06-20T11:29:03.578Z
 * @version 19
 */
export type TypeTournament<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTournamentSkeleton, Modifiers, Locales>;
export type TypeTournamentWithoutLinkResolutionResponse = TypeTournament<"WITHOUT_LINK_RESOLUTION">;
export type TypeTournamentWithoutUnresolvableLinksResponse = TypeTournament<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeTournamentWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeTournament<"WITH_ALL_LOCALES", Locales>;
export type TypeTournamentWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeTournament<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeTournamentWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeTournament<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
