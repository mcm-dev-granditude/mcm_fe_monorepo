import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeDocumentPage'
 * @name TypeDocumentPageFields
 * @type {TypeDocumentPageFields}
 * @memberof TypeDocumentPage
 */
export interface TypeDocumentPageFields {
    /**
     * Field type definition for field 'document' (document)
     * @name document
     * @localized true
     */
    document: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'url' (url)
     * @name url
     * @localized false
     */
    url?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'documentPage' (Document page)
 * @name TypeDocumentPageSkeleton
 * @type {TypeDocumentPageSkeleton}
 * @author 08BrQ2YDLH7ODOWFGZWso8
 * @since 2023-03-21T04:54:05.622Z
 * @version 1
 */
export type TypeDocumentPageSkeleton = EntrySkeletonType<TypeDocumentPageFields, "documentPage">;
/**
 * Entry type definition for content type 'documentPage' (Document page)
 * @name TypeDocumentPage
 * @type {TypeDocumentPage}
 * @author 08BrQ2YDLH7ODOWFGZWso8
 * @since 2023-03-21T04:54:05.622Z
 * @version 1
 */
export type TypeDocumentPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeDocumentPageSkeleton, Modifiers, Locales>;
export type TypeDocumentPageWithoutLinkResolutionResponse = TypeDocumentPage<"WITHOUT_LINK_RESOLUTION">;
export type TypeDocumentPageWithoutUnresolvableLinksResponse = TypeDocumentPage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeDocumentPageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeDocumentPage<"WITH_ALL_LOCALES", Locales>;
export type TypeDocumentPageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeDocumentPage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeDocumentPageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeDocumentPage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
