import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeWidgetBlock'
 * @name TypeWidgetBlockFields
 * @type {TypeWidgetBlockFields}
 * @memberof TypeWidgetBlock
 */
export interface TypeWidgetBlockFields {
    /**
     * Field type definition for field 'internalTItle' (Internal TItle)
     * @name Internal TItle
     * @localized false
     */
    internalTItle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'text' (Text)
     * @name Text
     * @localized false
     */
    text: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'addRedBoxToTitle' (Add Red Box To Title)
     * @name Add Red Box To Title
     * @localized false
     */
    addRedBoxToTitle: EntryFieldTypes.Boolean;
}

/**
 * Entry skeleton type definition for content type 'widgetBlock' (Widget Block)
 * @name TypeWidgetBlockSkeleton
 * @type {TypeWidgetBlockSkeleton}
 * @author 3wq5isntIoTAIhSXC8PPww
 * @since 2019-05-17T12:10:32.097Z
 * @version 7
 */
export type TypeWidgetBlockSkeleton = EntrySkeletonType<TypeWidgetBlockFields, "widgetBlock">;
/**
 * Entry type definition for content type 'widgetBlock' (Widget Block)
 * @name TypeWidgetBlock
 * @type {TypeWidgetBlock}
 * @author 3wq5isntIoTAIhSXC8PPww
 * @since 2019-05-17T12:10:32.097Z
 * @version 7
 */
export type TypeWidgetBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeWidgetBlockSkeleton, Modifiers, Locales>;
export type TypeWidgetBlockWithoutLinkResolutionResponse = TypeWidgetBlock<"WITHOUT_LINK_RESOLUTION">;
export type TypeWidgetBlockWithoutUnresolvableLinksResponse = TypeWidgetBlock<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeWidgetBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeWidgetBlock<"WITH_ALL_LOCALES", Locales>;
export type TypeWidgetBlockWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeWidgetBlock<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeWidgetBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeWidgetBlock<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
