import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeLoginBlock'
 * @name TypeLoginBlockFields
 * @type {TypeLoginBlockFields}
 * @memberof TypeLoginBlock
 */
export interface TypeLoginBlockFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'loginBlock' (Login Block)
 * @name TypeLoginBlockSkeleton
 * @type {TypeLoginBlockSkeleton}
 * @author 08BrQ2YDLH7ODOWFGZWso8
 * @since 2023-06-13T23:59:02.653Z
 * @version 3
 */
export type TypeLoginBlockSkeleton = EntrySkeletonType<TypeLoginBlockFields, "loginBlock">;
/**
 * Entry type definition for content type 'loginBlock' (Login Block)
 * @name TypeLoginBlock
 * @type {TypeLoginBlock}
 * @author 08BrQ2YDLH7ODOWFGZWso8
 * @since 2023-06-13T23:59:02.653Z
 * @version 3
 */
export type TypeLoginBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLoginBlockSkeleton, Modifiers, Locales>;
export type TypeLoginBlockWithoutLinkResolutionResponse = TypeLoginBlock<"WITHOUT_LINK_RESOLUTION">;
export type TypeLoginBlockWithoutUnresolvableLinksResponse = TypeLoginBlock<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeLoginBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeLoginBlock<"WITH_ALL_LOCALES", Locales>;
export type TypeLoginBlockWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeLoginBlock<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeLoginBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeLoginBlock<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
