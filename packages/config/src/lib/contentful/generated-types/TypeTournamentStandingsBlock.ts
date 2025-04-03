import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSportSkeleton } from "./TypeSport";

/**
 * Fields type definition for content type 'TypeTournamentStandingsBlock'
 * @name TypeTournamentStandingsBlockFields
 * @type {TypeTournamentStandingsBlockFields}
 * @memberof TypeTournamentStandingsBlock
 */
export interface TypeTournamentStandingsBlockFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'sport' (Sport)
     * @name Sport
     * @localized false
     */
    sport?: EntryFieldTypes.EntryLink<TypeSportSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'tournamentStandingsBlock' (Tournament Standings Block)
 * @name TypeTournamentStandingsBlockSkeleton
 * @type {TypeTournamentStandingsBlockSkeleton}
 * @author 3aPlrO8GttAXZXOptFA0vi
 * @since 2019-07-26T12:52:29.463Z
 * @version 5
 */
export type TypeTournamentStandingsBlockSkeleton = EntrySkeletonType<TypeTournamentStandingsBlockFields, "tournamentStandingsBlock">;
/**
 * Entry type definition for content type 'tournamentStandingsBlock' (Tournament Standings Block)
 * @name TypeTournamentStandingsBlock
 * @type {TypeTournamentStandingsBlock}
 * @author 3aPlrO8GttAXZXOptFA0vi
 * @since 2019-07-26T12:52:29.463Z
 * @version 5
 */
export type TypeTournamentStandingsBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTournamentStandingsBlockSkeleton, Modifiers, Locales>;
export type TypeTournamentStandingsBlockWithoutLinkResolutionResponse = TypeTournamentStandingsBlock<"WITHOUT_LINK_RESOLUTION">;
export type TypeTournamentStandingsBlockWithoutUnresolvableLinksResponse = TypeTournamentStandingsBlock<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeTournamentStandingsBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeTournamentStandingsBlock<"WITH_ALL_LOCALES", Locales>;
export type TypeTournamentStandingsBlockWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeTournamentStandingsBlock<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeTournamentStandingsBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeTournamentStandingsBlock<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
