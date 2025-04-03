import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePlayerSkeleton } from "./TypePlayer";

/**
 * Fields type definition for content type 'TypeMatch'
 * @name TypeMatchFields
 * @type {TypeMatchFields}
 * @memberof TypeMatch
 */
export interface TypeMatchFields {
    /**
     * Field type definition for field 'name' (Name)
     * @name Name
     * @localized false
     */
    name: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'isHidden' (isHidden)
     * @name isHidden
     * @localized false
     */
    isHidden?: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'tvLogo' (TV Logo)
     * @name TV Logo
     * @localized false
     */
    tvLogo?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'winnerPredict' (Winner Predict)
     * @name Winner Predict
     * @localized false
     */
    winnerPredict?: EntryFieldTypes.Object;
    /**
     * Field type definition for field 'betAnalysisText' (Matchanalys)
     * @name Matchanalys
     * @localized false
     */
    betAnalysisText?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'thinkAboutText' (Tänk på att...)
     * @name Tänk på att...
     * @localized false
     */
    thinkAboutText?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'buzzAboutText' (Det snackas om...)
     * @name Det snackas om...
     * @localized false
     */
    buzzAboutText?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'beforeMatchText' (Inför match)
     * @name Inför match
     * @localized false
     */
    beforeMatchText?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'missingPlayers' (Missing Players)
     * @name Missing Players
     * @localized false
     */
    missingPlayers?: EntryFieldTypes.Object;
    /**
     * Field type definition for field 'injuredPlayersHomeTeam' (Skadade spelare hemmalag)
     * @name Skadade spelare hemmalag
     * @localized false
     */
    injuredPlayersHomeTeam?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePlayerSkeleton>>;
    /**
     * Field type definition for field 'injuredPlayersAwayTeam' (Skadade spelare bortalag)
     * @name Skadade spelare bortalag
     * @localized false
     */
    injuredPlayersAwayTeam?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePlayerSkeleton>>;
    /**
     * Field type definition for field 'showBetSuggestion' (Visa upp spelförslag)
     * @name Visa upp spelförslag
     * @localized false
     */
    showBetSuggestion?: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'betType' (Spelform Typ)
     * @name Spelform Typ
     * @localized false
     */
    betType?: EntryFieldTypes.Symbol<"1-X-2" | "DNB" | "HT/FT" | "Handicap" | "Over/under" | "Över/Under 2.5" | "Över/Under 3.5">;
    /**
     * Field type definition for field 'betValue' (Spelform värde)
     * @name Spelform värde
     * @localized false
     */
    betValue?: EntryFieldTypes.Symbol<"0-1" | "0-2" | "1" | "1-0" | "1-1" | "1-2" | "1-X" | "2" | "2-0" | "2-1" | "2-2" | "2-X" | "Under" | "X" | "X-1" | "X-2" | "X-X" | "Över">;
    /**
     * Field type definition for field 'suggestedTeam' (Tips)
     * @name Tips
     * @localized false
     */
    suggestedTeam?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'mcmPlayTo' (McM Play To)
     * @name McM Play To
     * @localized false
     */
    mcmPlayTo?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'estimationInPercent' (Värdering i procent)
     * @name Värdering i procent
     * @localized false
     */
    estimationInPercent?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'playableFrom' (Spelbar från)
     * @name Spelbar från
     * @localized false
     */
    playableFrom?: EntryFieldTypes.Number;
    /**
     * Field type definition for field 'betLevel' (Insatsnivå)
     * @name Insatsnivå
     * @localized false
     */
    betLevel?: EntryFieldTypes.Symbol<"Hög" | "Låg" | "Medel" | "Superhög">;
    /**
     * Field type definition for field 'betSuggestionText' (Spelförslag)
     * @name Spelförslag
     * @localized false
     */
    betSuggestionText?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'scheduled' (Datum/Tid)
     * @name Datum/Tid
     * @localized false
     */
    scheduled: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'scheduledSwe' (Datum/Tid (Svensk tid))
     * @name Datum/Tid (Svensk tid)
     * @localized false
     */
    scheduledSwe?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'sport' (Sport)
     * @name Sport
     * @localized false
     */
    sport?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'tournamentName' (Liga)
     * @name Liga
     * @localized false
     */
    tournamentName?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'competitorNameHome' (Home Team Name)
     * @name Home Team Name
     * @localized false
     */
    competitorNameHome: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'homeTeamDisplayName' (Home Team Display name)
     * @name Home Team Display name
     * @localized false
     */
    homeTeamDisplayName?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'homeTeamLogo' (Home Team Logo)
     * @name Home Team Logo
     * @localized false
     */
    homeTeamLogo?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'competitorNameAway' (Away Team Name)
     * @name Away Team Name
     * @localized false
     */
    competitorNameAway: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'awayTeamDisplayName' (Away Team Display name)
     * @name Away Team Display name
     * @localized false
     */
    awayTeamDisplayName?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'awayTeamLogo' (Away Team Logo)
     * @name Away Team Logo
     * @localized false
     */
    awayTeamLogo?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'country' (Land)
     * @name Land
     * @localized false
     */
    country?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'city' (Stad)
     * @name Stad
     * @localized false
     */
    city?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'venueName' (Plats)
     * @name Plats
     * @localized false
     */
    venueName?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'matchId' (Match Id)
     * @name Match Id
     * @localized false
     */
    matchId: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'sportId' (Sport Id)
     * @name Sport Id
     * @localized false
     */
    sportId: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'tournamentId' (Liga Id)
     * @name Liga Id
     * @localized false
     */
    tournamentId: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'seasonId' (Säsong Id)
     * @name Säsong Id
     * @localized false
     */
    seasonId: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'competitorIdHome' (Hemmalag Id)
     * @name Hemmalag Id
     * @localized false
     */
    competitorIdHome: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'competitorIdAway' (Bortalag Id)
     * @name Bortalag Id
     * @localized false
     */
    competitorIdAway: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'venueId' (Plats Id)
     * @name Plats Id
     * @localized false
     */
    venueId?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'groupName' (Gruppnamn)
     * @name Gruppnamn
     * @localized false
     */
    groupName?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'match' (Match)
 * @name TypeMatchSkeleton
 * @type {TypeMatchSkeleton}
 * @author 50Up2ekE3Y9sOqdbPSbFmi
 * @since 2019-06-05T13:17:16.619Z
 * @version 122
 */
export type TypeMatchSkeleton = EntrySkeletonType<TypeMatchFields, "match">;
/**
 * Entry type definition for content type 'match' (Match)
 * @name TypeMatch
 * @type {TypeMatch}
 * @author 50Up2ekE3Y9sOqdbPSbFmi
 * @since 2019-06-05T13:17:16.619Z
 * @version 122
 */
export type TypeMatch<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMatchSkeleton, Modifiers, Locales>;
export type TypeMatchWithoutLinkResolutionResponse = TypeMatch<"WITHOUT_LINK_RESOLUTION">;
export type TypeMatchWithoutUnresolvableLinksResponse = TypeMatch<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeMatchWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeMatch<"WITH_ALL_LOCALES", Locales>;
export type TypeMatchWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeMatch<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeMatchWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeMatch<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
