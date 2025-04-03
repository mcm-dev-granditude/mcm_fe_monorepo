import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSportSkeleton } from "./TypeSport";
import type { TypeTournamentSkeleton } from "./TypeTournament";

/**
 * Fields type definition for content type 'TypeLiveScoreBlock'
 * @name TypeLiveScoreBlockFields
 * @type {TypeLiveScoreBlockFields}
 * @memberof TypeLiveScoreBlock
 */
export interface TypeLiveScoreBlockFields {
    /**
     * Field type definition for field 'internalTitle' (Internal title)
     * @name Internal title
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'sports' (Sports)
     * @name Sports
     * @localized false
     */
    sports: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSportSkeleton>>;
    /**
     * Field type definition for field 'noLiveMatchesAvailable' (No Live Matches Available)
     * @name No Live Matches Available
     * @localized false
     */
    noLiveMatchesAvailable?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'closedMatches' (Closed Matches)
     * @name Closed Matches
     * @localized false
     */
    closedMatches?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'tournamentSortOrder' (Tournament Sort Order)
     * @name Tournament Sort Order
     * @localized false
     */
    tournamentSortOrder?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTournamentSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'liveScoreBlock' (Live Score Block)
 * @name TypeLiveScoreBlockSkeleton
 * @type {TypeLiveScoreBlockSkeleton}
 * @author 5VyNfTw6SYSjD2p1JawbDx
 * @since 2019-06-23T20:24:11.091Z
 * @version 31
 */
export type TypeLiveScoreBlockSkeleton = EntrySkeletonType<TypeLiveScoreBlockFields, "liveScoreBlock">;
/**
 * Entry type definition for content type 'liveScoreBlock' (Live Score Block)
 * @name TypeLiveScoreBlock
 * @type {TypeLiveScoreBlock}
 * @author 5VyNfTw6SYSjD2p1JawbDx
 * @since 2019-06-23T20:24:11.091Z
 * @version 31
 */
export type TypeLiveScoreBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLiveScoreBlockSkeleton, Modifiers, Locales>;
export type TypeLiveScoreBlockWithoutLinkResolutionResponse = TypeLiveScoreBlock<"WITHOUT_LINK_RESOLUTION">;
export type TypeLiveScoreBlockWithoutUnresolvableLinksResponse = TypeLiveScoreBlock<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeLiveScoreBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeLiveScoreBlock<"WITH_ALL_LOCALES", Locales>;
export type TypeLiveScoreBlockWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeLiveScoreBlock<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeLiveScoreBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeLiveScoreBlock<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
