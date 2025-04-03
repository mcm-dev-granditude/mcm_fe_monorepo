import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeTextBlock'
 * @name TypeTextBlockFields
 * @type {TypeTextBlockFields}
 * @memberof TypeTextBlock
 */
export interface TypeTextBlockFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'preamble' (Preamble)
     * @name Preamble
     * @localized false
     */
    preamble?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'text' (Text)
     * @name Text
     * @localized false
     */
    text?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'centerText' (Center Text)
     * @name Center Text
     * @localized false
     */
    centerText?: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'optionalBackgroundImage' (Optional Background Image)
     * @name Optional Background Image
     * @localized false
     */
    optionalBackgroundImage?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'textBlock' (TextBlock)
 * @name TypeTextBlockSkeleton
 * @type {TypeTextBlockSkeleton}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2019-04-17T13:47:39.487Z
 * @version 21
 */
export type TypeTextBlockSkeleton = EntrySkeletonType<TypeTextBlockFields, "textBlock">;
/**
 * Entry type definition for content type 'textBlock' (TextBlock)
 * @name TypeTextBlock
 * @type {TypeTextBlock}
 * @author 1MNIOHAmGRUDmssA4kvEtv
 * @since 2019-04-17T13:47:39.487Z
 * @version 21
 */
export type TypeTextBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTextBlockSkeleton, Modifiers, Locales>;
export type TypeTextBlockWithoutLinkResolutionResponse = TypeTextBlock<"WITHOUT_LINK_RESOLUTION">;
export type TypeTextBlockWithoutUnresolvableLinksResponse = TypeTextBlock<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeTextBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeTextBlock<"WITH_ALL_LOCALES", Locales>;
export type TypeTextBlockWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeTextBlock<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeTextBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeTextBlock<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
