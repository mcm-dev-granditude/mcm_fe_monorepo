import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeMatchEventItemSkeleton } from "./TypeMatchEventItem";

/**
 * Fields type definition for content type 'TypeMatchEventsConfiguration'
 * @name TypeMatchEventsConfigurationFields
 * @type {TypeMatchEventsConfigurationFields}
 * @memberof TypeMatchEventsConfiguration
 */
export interface TypeMatchEventsConfigurationFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'eventsList' (Events List)
     * @name Events List
     * @localized false
     */
    eventsList?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeMatchEventItemSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'matchEventsConfiguration' (Match Events Configuration)
 * @name TypeMatchEventsConfigurationSkeleton
 * @type {TypeMatchEventsConfigurationSkeleton}
 * @author 5RssDQR1phdlgStVXppA8M
 * @since 2019-08-14T13:14:22.473Z
 * @version 11
 */
export type TypeMatchEventsConfigurationSkeleton = EntrySkeletonType<TypeMatchEventsConfigurationFields, "matchEventsConfiguration">;
/**
 * Entry type definition for content type 'matchEventsConfiguration' (Match Events Configuration)
 * @name TypeMatchEventsConfiguration
 * @type {TypeMatchEventsConfiguration}
 * @author 5RssDQR1phdlgStVXppA8M
 * @since 2019-08-14T13:14:22.473Z
 * @version 11
 */
export type TypeMatchEventsConfiguration<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMatchEventsConfigurationSkeleton, Modifiers, Locales>;
export type TypeMatchEventsConfigurationWithoutLinkResolutionResponse = TypeMatchEventsConfiguration<"WITHOUT_LINK_RESOLUTION">;
export type TypeMatchEventsConfigurationWithoutUnresolvableLinksResponse = TypeMatchEventsConfiguration<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeMatchEventsConfigurationWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeMatchEventsConfiguration<"WITH_ALL_LOCALES", Locales>;
export type TypeMatchEventsConfigurationWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeMatchEventsConfiguration<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeMatchEventsConfigurationWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeMatchEventsConfiguration<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
