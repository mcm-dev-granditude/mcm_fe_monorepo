import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentPageSkeleton } from "./TypeContentPage";

/**
 * Fields type definition for content type 'TypeMcmNewsBlock'
 * @name TypeMcmNewsBlockFields
 * @type {TypeMcmNewsBlockFields}
 * @memberof TypeMcmNewsBlock
 */
export interface TypeMcmNewsBlockFields {
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
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized false
     */
    description: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'pubDate' (Pub Date)
     * @name Pub Date
     * @localized false
     */
    pubDate: EntryFieldTypes.Date;
    /**
     * Field type definition for field 'text' (Text)
     * @name Text
     * @localized false
     */
    text: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'logoImage' (Logo Image)
     * @name Logo Image
     * @localized false
     */
    logoImage: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'linkToNewsPage' (Link To News Page)
     * @name Link To News Page
     * @localized false
     */
    linkToNewsPage: EntryFieldTypes.EntryLink<TypeContentPageSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'mcmNewsBlock' (Mcm News Block)
 * @name TypeMcmNewsBlockSkeleton
 * @type {TypeMcmNewsBlockSkeleton}
 * @author 3wq5isntIoTAIhSXC8PPww
 * @since 2021-04-23T14:49:07.654Z
 * @version 1
 */
export type TypeMcmNewsBlockSkeleton = EntrySkeletonType<TypeMcmNewsBlockFields, "mcmNewsBlock">;
/**
 * Entry type definition for content type 'mcmNewsBlock' (Mcm News Block)
 * @name TypeMcmNewsBlock
 * @type {TypeMcmNewsBlock}
 * @author 3wq5isntIoTAIhSXC8PPww
 * @since 2021-04-23T14:49:07.654Z
 * @version 1
 */
export type TypeMcmNewsBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMcmNewsBlockSkeleton, Modifiers, Locales>;
export type TypeMcmNewsBlockWithoutLinkResolutionResponse = TypeMcmNewsBlock<"WITHOUT_LINK_RESOLUTION">;
export type TypeMcmNewsBlockWithoutUnresolvableLinksResponse = TypeMcmNewsBlock<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeMcmNewsBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeMcmNewsBlock<"WITH_ALL_LOCALES", Locales>;
export type TypeMcmNewsBlockWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeMcmNewsBlock<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeMcmNewsBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeMcmNewsBlock<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
