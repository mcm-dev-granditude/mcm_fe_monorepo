import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeHeroBlock'
 * @name TypeHeroBlockFields
 * @type {TypeHeroBlockFields}
 * @memberof TypeHeroBlock
 */
export interface TypeHeroBlockFields {
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
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'paragraph' (Paragraph)
     * @name Paragraph
     * @localized false
     */
    paragraph?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'buttonLabel' (Button Label)
     * @name Button Label
     * @localized false
     */
    buttonLabel?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'opacity' (Opacity)
     * @name Opacity
     * @localized false
     */
    opacity?: EntryFieldTypes.Integer;
}

/**
 * Entry skeleton type definition for content type 'heroBlock' (Hero Block)
 * @name TypeHeroBlockSkeleton
 * @type {TypeHeroBlockSkeleton}
 * @author 4yn1dkHsoNO9Tmms367ZHx
 * @since 2019-08-12T11:00:37.106Z
 * @version 11
 */
export type TypeHeroBlockSkeleton = EntrySkeletonType<TypeHeroBlockFields, "heroBlock">;
/**
 * Entry type definition for content type 'heroBlock' (Hero Block)
 * @name TypeHeroBlock
 * @type {TypeHeroBlock}
 * @author 4yn1dkHsoNO9Tmms367ZHx
 * @since 2019-08-12T11:00:37.106Z
 * @version 11
 */
export type TypeHeroBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroBlockSkeleton, Modifiers, Locales>;
export type TypeHeroBlockWithoutLinkResolutionResponse = TypeHeroBlock<"WITHOUT_LINK_RESOLUTION">;
export type TypeHeroBlockWithoutUnresolvableLinksResponse = TypeHeroBlock<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeHeroBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeHeroBlock<"WITH_ALL_LOCALES", Locales>;
export type TypeHeroBlockWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeHeroBlock<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeHeroBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeHeroBlock<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
