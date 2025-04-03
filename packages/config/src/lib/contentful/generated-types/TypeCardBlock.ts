import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentPageSkeleton } from "./TypeContentPage";

/**
 * Fields type definition for content type 'TypeCardBlock'
 * @name TypeCardBlockFields
 * @type {TypeCardBlockFields}
 * @memberof TypeCardBlock
 */
export interface TypeCardBlockFields {
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
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'backgroundImage' (Background Image)
     * @name Background Image
     * @localized false
     */
    backgroundImage: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'richText' (Rich Text)
     * @name Rich Text
     * @localized false
     */
    richText?: EntryFieldTypes.RichText;
    /**
     * Field type definition for field 'isImageLeft' (Is image left)
     * @name Is image left
     * @localized false
     */
    isImageLeft?: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'buttonText' (Button Text)
     * @name Button Text
     * @localized false
     */
    buttonText?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'buttonLink' (Button Link)
     * @name Button Link
     * @localized false
     */
    buttonLink?: EntryFieldTypes.EntryLink<TypeContentPageSkeleton>;
    /**
     * Field type definition for field 'smallVersion' (smallVersion)
     * @name smallVersion
     * @localized false
     */
    smallVersion?: EntryFieldTypes.Boolean;
}

/**
 * Entry skeleton type definition for content type 'cardBlock' (Card Block)
 * @name TypeCardBlockSkeleton
 * @type {TypeCardBlockSkeleton}
 * @author 3wq5isntIoTAIhSXC8PPww
 * @since 2019-05-15T13:21:22.521Z
 * @version 31
 */
export type TypeCardBlockSkeleton = EntrySkeletonType<TypeCardBlockFields, "cardBlock">;
/**
 * Entry type definition for content type 'cardBlock' (Card Block)
 * @name TypeCardBlock
 * @type {TypeCardBlock}
 * @author 3wq5isntIoTAIhSXC8PPww
 * @since 2019-05-15T13:21:22.521Z
 * @version 31
 */
export type TypeCardBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCardBlockSkeleton, Modifiers, Locales>;
export type TypeCardBlockWithoutLinkResolutionResponse = TypeCardBlock<"WITHOUT_LINK_RESOLUTION">;
export type TypeCardBlockWithoutUnresolvableLinksResponse = TypeCardBlock<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeCardBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeCardBlock<"WITH_ALL_LOCALES", Locales>;
export type TypeCardBlockWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeCardBlock<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeCardBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeCardBlock<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
