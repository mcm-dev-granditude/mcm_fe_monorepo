import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentPageSkeleton } from "./TypeContentPage";

/**
 * Fields type definition for content type 'TypeCardLinkBlock'
 * @name TypeCardLinkBlockFields
 * @type {TypeCardLinkBlockFields}
 * @memberof TypeCardLinkBlock
 */
export interface TypeCardLinkBlockFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'label' (Label)
     * @name Label
     * @localized false
     */
    label?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'backgroundImage' (Background Image)
     * @name Background Image
     * @localized false
     */
    backgroundImage: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'link' (Link)
     * @name Link
     * @localized false
     */
    link?: EntryFieldTypes.EntryLink<TypeContentPageSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'cardLinkBlock' (Card Link Block)
 * @name TypeCardLinkBlockSkeleton
 * @type {TypeCardLinkBlockSkeleton}
 * @author 3aPlrO8GttAXZXOptFA0vi
 * @since 2019-07-26T12:43:34.396Z
 * @version 3
 */
export type TypeCardLinkBlockSkeleton = EntrySkeletonType<TypeCardLinkBlockFields, "cardLinkBlock">;
/**
 * Entry type definition for content type 'cardLinkBlock' (Card Link Block)
 * @name TypeCardLinkBlock
 * @type {TypeCardLinkBlock}
 * @author 3aPlrO8GttAXZXOptFA0vi
 * @since 2019-07-26T12:43:34.396Z
 * @version 3
 */
export type TypeCardLinkBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCardLinkBlockSkeleton, Modifiers, Locales>;
export type TypeCardLinkBlockWithoutLinkResolutionResponse = TypeCardLinkBlock<"WITHOUT_LINK_RESOLUTION">;
export type TypeCardLinkBlockWithoutUnresolvableLinksResponse = TypeCardLinkBlock<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeCardLinkBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeCardLinkBlock<"WITH_ALL_LOCALES", Locales>;
export type TypeCardLinkBlockWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeCardLinkBlock<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeCardLinkBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeCardLinkBlock<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
