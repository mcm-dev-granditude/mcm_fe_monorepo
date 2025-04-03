import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCardBlockSkeleton } from "./TypeCardBlock";

/**
 * Fields type definition for content type 'TypeCardListBlock'
 * @name TypeCardListBlockFields
 * @type {TypeCardListBlockFields}
 * @memberof TypeCardListBlock
 */
export interface TypeCardListBlockFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'cardList' (Card List)
     * @name Card List
     * @localized false
     */
    cardList?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardBlockSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'cardListBlock' (Card List Block)
 * @name TypeCardListBlockSkeleton
 * @type {TypeCardListBlockSkeleton}
 * @author 4yn1dkHsoNO9Tmms367ZHx
 * @since 2019-06-10T09:39:58.996Z
 * @version 1
 */
export type TypeCardListBlockSkeleton = EntrySkeletonType<TypeCardListBlockFields, "cardListBlock">;
/**
 * Entry type definition for content type 'cardListBlock' (Card List Block)
 * @name TypeCardListBlock
 * @type {TypeCardListBlock}
 * @author 4yn1dkHsoNO9Tmms367ZHx
 * @since 2019-06-10T09:39:58.996Z
 * @version 1
 */
export type TypeCardListBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCardListBlockSkeleton, Modifiers, Locales>;
export type TypeCardListBlockWithoutLinkResolutionResponse = TypeCardListBlock<"WITHOUT_LINK_RESOLUTION">;
export type TypeCardListBlockWithoutUnresolvableLinksResponse = TypeCardListBlock<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeCardListBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeCardListBlock<"WITH_ALL_LOCALES", Locales>;
export type TypeCardListBlockWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeCardListBlock<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeCardListBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeCardListBlock<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
