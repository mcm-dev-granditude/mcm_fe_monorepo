import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSportSkeleton } from "./TypeSport";

/**
 * Fields type definition for content type 'TypeOddsComparsionBlock'
 * @name TypeOddsComparsionBlockFields
 * @type {TypeOddsComparsionBlockFields}
 * @memberof TypeOddsComparsionBlock
 */
export interface TypeOddsComparsionBlockFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'sport' (Sport)
     * @name Sport
     * @localized false
     */
    sport?: EntryFieldTypes.EntryLink<TypeSportSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'oddsComparsionBlock' (Odds Comparsion Block)
 * @name TypeOddsComparsionBlockSkeleton
 * @type {TypeOddsComparsionBlockSkeleton}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-06-30T10:38:43.556Z
 * @version 1
 */
export type TypeOddsComparsionBlockSkeleton = EntrySkeletonType<TypeOddsComparsionBlockFields, "oddsComparsionBlock">;
/**
 * Entry type definition for content type 'oddsComparsionBlock' (Odds Comparsion Block)
 * @name TypeOddsComparsionBlock
 * @type {TypeOddsComparsionBlock}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2020-06-30T10:38:43.556Z
 * @version 1
 */
export type TypeOddsComparsionBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeOddsComparsionBlockSkeleton, Modifiers, Locales>;
export type TypeOddsComparsionBlockWithoutLinkResolutionResponse = TypeOddsComparsionBlock<"WITHOUT_LINK_RESOLUTION">;
export type TypeOddsComparsionBlockWithoutUnresolvableLinksResponse = TypeOddsComparsionBlock<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeOddsComparsionBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeOddsComparsionBlock<"WITH_ALL_LOCALES", Locales>;
export type TypeOddsComparsionBlockWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeOddsComparsionBlock<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeOddsComparsionBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeOddsComparsionBlock<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
