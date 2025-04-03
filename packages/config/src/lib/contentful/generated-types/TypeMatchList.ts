import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeMatchSkeleton } from "./TypeMatch";

/**
 * Fields type definition for content type 'TypeMatchList'
 * @name TypeMatchListFields
 * @type {TypeMatchListFields}
 * @memberof TypeMatchList
 */
export interface TypeMatchListFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'matches' (Matches)
     * @name Matches
     * @localized false
     */
    matches?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeMatchSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'matchList' (MatchList)
 * @name TypeMatchListSkeleton
 * @type {TypeMatchListSkeleton}
 * @author 4yn1dkHsoNO9Tmms367ZHx
 * @since 2019-06-14T09:03:13.369Z
 * @version 1
 */
export type TypeMatchListSkeleton = EntrySkeletonType<TypeMatchListFields, "matchList">;
/**
 * Entry type definition for content type 'matchList' (MatchList)
 * @name TypeMatchList
 * @type {TypeMatchList}
 * @author 4yn1dkHsoNO9Tmms367ZHx
 * @since 2019-06-14T09:03:13.369Z
 * @version 1
 */
export type TypeMatchList<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMatchListSkeleton, Modifiers, Locales>;
export type TypeMatchListWithoutLinkResolutionResponse = TypeMatchList<"WITHOUT_LINK_RESOLUTION">;
export type TypeMatchListWithoutUnresolvableLinksResponse = TypeMatchList<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeMatchListWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeMatchList<"WITH_ALL_LOCALES", Locales>;
export type TypeMatchListWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeMatchList<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeMatchListWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeMatchList<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
