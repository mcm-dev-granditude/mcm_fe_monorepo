import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentPageSkeleton } from "./TypeContentPage";

/**
 * Fields type definition for content type 'TypeLandingBlock'
 * @name TypeLandingBlockFields
 * @type {TypeLandingBlockFields}
 * @memberof TypeLandingBlock
 */
export interface TypeLandingBlockFields {
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
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'backgroundImage' (Background Image)
     * @name Background Image
     * @localized false
     */
    backgroundImage: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'buttonText' (Button Text)
     * @name Button Text
     * @localized false
     */
    buttonText: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'internalLink' (Internal Link)
     * @name Internal Link
     * @localized false
     */
    internalLink: EntryFieldTypes.EntryLink<TypeContentPageSkeleton>;
    /**
     * Field type definition for field 'logoForPrototype' (Logo For Prototype)
     * @name Logo For Prototype
     * @localized false
     */
    logoForPrototype?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'buttonTextForPrototype' (Button Text For Prototype)
     * @name Button Text For Prototype
     * @localized false
     */
    buttonTextForPrototype?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'infoTextForPrototype' (Info Text For Prototype)
     * @name Info Text For Prototype
     * @localized false
     */
    infoTextForPrototype?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'backgroundForPrototype' (Background For Prototype)
     * @name Background For Prototype
     * @localized false
     */
    backgroundForPrototype?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'landingBlock' (Landing Block)
 * @name TypeLandingBlockSkeleton
 * @type {TypeLandingBlockSkeleton}
 * @author 3wq5isntIoTAIhSXC8PPww
 * @since 2019-05-10T14:06:28.602Z
 * @version 7
 */
export type TypeLandingBlockSkeleton = EntrySkeletonType<TypeLandingBlockFields, "landingBlock">;
/**
 * Entry type definition for content type 'landingBlock' (Landing Block)
 * @name TypeLandingBlock
 * @type {TypeLandingBlock}
 * @author 3wq5isntIoTAIhSXC8PPww
 * @since 2019-05-10T14:06:28.602Z
 * @version 7
 */
export type TypeLandingBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLandingBlockSkeleton, Modifiers, Locales>;
export type TypeLandingBlockWithoutLinkResolutionResponse = TypeLandingBlock<"WITHOUT_LINK_RESOLUTION">;
export type TypeLandingBlockWithoutUnresolvableLinksResponse = TypeLandingBlock<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeLandingBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeLandingBlock<"WITH_ALL_LOCALES", Locales>;
export type TypeLandingBlockWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeLandingBlock<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeLandingBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeLandingBlock<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
