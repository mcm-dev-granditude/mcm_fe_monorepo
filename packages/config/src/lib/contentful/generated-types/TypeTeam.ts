import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeTeam'
 * @name TypeTeamFields
 * @type {TypeTeamFields}
 * @memberof TypeTeam
 */
export interface TypeTeamFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'team' (Team)
     * @name Team
     * @localized false
     */
    team: EntryFieldTypes.Object;
    /**
     * Field type definition for field 'logo' (Logo)
     * @name Logo
     * @localized false
     */
    logo?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'team' (Team)
 * @name TypeTeamSkeleton
 * @type {TypeTeamSkeleton}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-07-03T09:33:44.903Z
 * @version 9
 */
export type TypeTeamSkeleton = EntrySkeletonType<TypeTeamFields, "team">;
/**
 * Entry type definition for content type 'team' (Team)
 * @name TypeTeam
 * @type {TypeTeam}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-07-03T09:33:44.903Z
 * @version 9
 */
export type TypeTeam<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTeamSkeleton, Modifiers, Locales>;
export type TypeTeamWithoutLinkResolutionResponse = TypeTeam<"WITHOUT_LINK_RESOLUTION">;
export type TypeTeamWithoutUnresolvableLinksResponse = TypeTeam<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeTeamWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeTeam<"WITH_ALL_LOCALES", Locales>;
export type TypeTeamWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeTeam<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeTeamWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeTeam<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
