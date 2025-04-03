import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeScrollToTopButton'
 * @name TypeScrollToTopButtonFields
 * @type {TypeScrollToTopButtonFields}
 * @memberof TypeScrollToTopButton
 */
export interface TypeScrollToTopButtonFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'buttonText' (Button Text)
     * @name Button Text
     * @localized false
     */
    buttonText: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'scrollToTopButton' (Scroll To Top Button)
 * @name TypeScrollToTopButtonSkeleton
 * @type {TypeScrollToTopButtonSkeleton}
 * @author 3wq5isntIoTAIhSXC8PPww
 * @since 2019-05-17T13:20:17.096Z
 * @version 3
 */
export type TypeScrollToTopButtonSkeleton = EntrySkeletonType<TypeScrollToTopButtonFields, "scrollToTopButton">;
/**
 * Entry type definition for content type 'scrollToTopButton' (Scroll To Top Button)
 * @name TypeScrollToTopButton
 * @type {TypeScrollToTopButton}
 * @author 3wq5isntIoTAIhSXC8PPww
 * @since 2019-05-17T13:20:17.096Z
 * @version 3
 */
export type TypeScrollToTopButton<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeScrollToTopButtonSkeleton, Modifiers, Locales>;
export type TypeScrollToTopButtonWithoutLinkResolutionResponse = TypeScrollToTopButton<"WITHOUT_LINK_RESOLUTION">;
export type TypeScrollToTopButtonWithoutUnresolvableLinksResponse = TypeScrollToTopButton<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeScrollToTopButtonWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeScrollToTopButton<"WITH_ALL_LOCALES", Locales>;
export type TypeScrollToTopButtonWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeScrollToTopButton<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeScrollToTopButtonWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeScrollToTopButton<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
