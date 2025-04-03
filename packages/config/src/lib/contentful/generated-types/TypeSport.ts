import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTournamentSkeleton } from "./TypeTournament";

/**
 * Fields type definition for content type 'TypeSport'
 * @name TypeSportFields
 * @type {TypeSportFields}
 * @memberof TypeSport
 */
export interface TypeSportFields {
    /**
     * Field type definition for field 'internalTitle' (Internal title)
     * @name Internal title
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'sportId' (Sport ID)
     * @name Sport ID
     * @localized false
     */
    sportId?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'icon' (Icon)
     * @name Icon
     * @localized false
     */
    icon: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'tournaments' (Tournaments)
     * @name Tournaments
     * @localized false
     */
    tournaments?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTournamentSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'sport' (Sport)
 * @name TypeSportSkeleton
 * @type {TypeSportSkeleton}
 * @author 5VyNfTw6SYSjD2p1JawbDx
 * @since 2019-06-20T11:26:32.100Z
 * @version 11
 */
export type TypeSportSkeleton = EntrySkeletonType<TypeSportFields, "sport">;
/**
 * Entry type definition for content type 'sport' (Sport)
 * @name TypeSport
 * @type {TypeSport}
 * @author 5VyNfTw6SYSjD2p1JawbDx
 * @since 2019-06-20T11:26:32.100Z
 * @version 11
 */
export type TypeSport<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSportSkeleton, Modifiers, Locales>;
export type TypeSportWithoutLinkResolutionResponse = TypeSport<"WITHOUT_LINK_RESOLUTION">;
export type TypeSportWithoutUnresolvableLinksResponse = TypeSport<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSportWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSport<"WITH_ALL_LOCALES", Locales>;
export type TypeSportWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeSport<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSportWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeSport<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
