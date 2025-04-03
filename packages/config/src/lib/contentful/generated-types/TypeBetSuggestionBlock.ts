import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSportSkeleton } from "./TypeSport";
import type { TypeTranslationsSkeleton } from "./TypeTranslations";

/**
 * Fields type definition for content type 'TypeBetSuggestionBlock'
 * @name TypeBetSuggestionBlockFields
 * @type {TypeBetSuggestionBlockFields}
 * @memberof TypeBetSuggestionBlock
 */
export interface TypeBetSuggestionBlockFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     */
    title?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'sports' (Sporter)
     * @name Sporter
     * @localized false
     */
    sports: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSportSkeleton>>;
    /**
     * Field type definition for field 'translations' (Translations)
     * @name Translations
     * @localized false
     */
    translations: EntryFieldTypes.EntryLink<TypeTranslationsSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'betSuggestionBlock' (Bet Suggestion Block)
 * @name TypeBetSuggestionBlockSkeleton
 * @type {TypeBetSuggestionBlockSkeleton}
 * @author 3aPlrO8GttAXZXOptFA0vi
 * @since 2019-07-11T09:25:22.253Z
 * @version 29
 */
export type TypeBetSuggestionBlockSkeleton = EntrySkeletonType<TypeBetSuggestionBlockFields, "betSuggestionBlock">;
/**
 * Entry type definition for content type 'betSuggestionBlock' (Bet Suggestion Block)
 * @name TypeBetSuggestionBlock
 * @type {TypeBetSuggestionBlock}
 * @author 3aPlrO8GttAXZXOptFA0vi
 * @since 2019-07-11T09:25:22.253Z
 * @version 29
 */
export type TypeBetSuggestionBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBetSuggestionBlockSkeleton, Modifiers, Locales>;
export type TypeBetSuggestionBlockWithoutLinkResolutionResponse = TypeBetSuggestionBlock<"WITHOUT_LINK_RESOLUTION">;
export type TypeBetSuggestionBlockWithoutUnresolvableLinksResponse = TypeBetSuggestionBlock<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeBetSuggestionBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeBetSuggestionBlock<"WITH_ALL_LOCALES", Locales>;
export type TypeBetSuggestionBlockWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeBetSuggestionBlock<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeBetSuggestionBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeBetSuggestionBlock<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
