import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentPageSkeleton } from "./TypeContentPage";
import type { TypeNavigationItemSkeleton } from "./TypeNavigationItem";

/**
 * Fields type definition for content type 'TypeFooter'
 * @name TypeFooterFields
 * @type {TypeFooterFields}
 * @memberof TypeFooter
 */
export interface TypeFooterFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'footerSection1Title' (Footer Section 1 Title)
     * @name Footer Section 1 Title
     * @localized false
     */
    footerSection1Title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'textBlock' (Text Block)
     * @name Text Block
     * @localized false
     */
    textBlock?: EntryFieldTypes.RichText;
    /**
     * Field type definition for field 'sectionOneTitleTwo' (Section One Title Two)
     * @name Section One Title Two
     * @localized false
     */
    sectionOneTitleTwo?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'textBlockTwo' (Text Block Two)
     * @name Text Block Two
     * @localized false
     */
    textBlockTwo?: EntryFieldTypes.RichText;
    /**
     * Field type definition for field 'facebookIcon' (Facebook Icon)
     * @name Facebook Icon
     * @localized false
     */
    facebookIcon?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'linkToFacebook' (Link to Facebook)
     * @name Link to Facebook
     * @localized false
     */
    linkToFacebook?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'instagramIcon' (Instagram Icon)
     * @name Instagram Icon
     * @localized false
     */
    instagramIcon?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'linkToInstagram' (Link to Instagram)
     * @name Link to Instagram
     * @localized false
     */
    linkToInstagram?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'twitterIcon' (Twitter Icon)
     * @name Twitter Icon
     * @localized false
     */
    twitterIcon?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'linkToTwitter' (Link to Twitter)
     * @name Link to Twitter
     * @localized false
     */
    linkToTwitter?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'emailIcon' (Email icon)
     * @name Email icon
     * @localized false
     */
    emailIcon: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'linkToEmail' (Link to Email)
     * @name Link to Email
     * @localized false
     */
    linkToEmail?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'footerSection2Title' (Footer Section 2 Title)
     * @name Footer Section 2 Title
     * @localized false
     */
    footerSection2Title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'responsibleBetting' (Responsible Betting)
     * @name Responsible Betting
     * @localized false
     */
    responsibleBetting?: EntryFieldTypes.RichText;
    /**
     * Field type definition for field 'footerSection3Title' (Footer Section 3 Title)
     * @name Footer Section 3 Title
     * @localized false
     */
    footerSection3Title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'navigationItemsList' (Navigation Items List)
     * @name Navigation Items List
     * @localized false
     */
    navigationItemsList: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationItemSkeleton>>;
    /**
     * Field type definition for field 'logotype' (Logotype)
     * @name Logotype
     * @localized false
     */
    logotype: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'linkToLandingPage' (Link to Landing Page)
     * @name Link to Landing Page
     * @localized false
     */
    linkToLandingPage: EntryFieldTypes.EntryLink<TypeContentPageSkeleton>;
    /**
     * Field type definition for field 'linkToDataPolicy' (Link to Data Policy)
     * @name Link to Data Policy
     * @localized false
     */
    linkToDataPolicy: EntryFieldTypes.EntryLink<TypeContentPageSkeleton>;
    /**
     * Field type definition for field 'partnerLogo' (Partner Logo)
     * @name Partner Logo
     * @localized false
     */
    partnerLogo?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'footer' (Footer)
 * @name TypeFooterSkeleton
 * @type {TypeFooterSkeleton}
 * @author 4yn1dkHsoNO9Tmms367ZHx
 * @since 2019-08-05T11:53:33.282Z
 * @version 21
 */
export type TypeFooterSkeleton = EntrySkeletonType<TypeFooterFields, "footer">;
/**
 * Entry type definition for content type 'footer' (Footer)
 * @name TypeFooter
 * @type {TypeFooter}
 * @author 4yn1dkHsoNO9Tmms367ZHx
 * @since 2019-08-05T11:53:33.282Z
 * @version 21
 */
export type TypeFooter<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFooterSkeleton, Modifiers, Locales>;
export type TypeFooterWithoutLinkResolutionResponse = TypeFooter<"WITHOUT_LINK_RESOLUTION">;
export type TypeFooterWithoutUnresolvableLinksResponse = TypeFooter<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeFooterWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeFooter<"WITH_ALL_LOCALES", Locales>;
export type TypeFooterWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeFooter<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeFooterWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeFooter<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
