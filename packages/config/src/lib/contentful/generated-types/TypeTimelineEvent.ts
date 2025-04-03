import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeTimelineEvent'
 * @name TypeTimelineEventFields
 * @type {TypeTimelineEventFields}
 * @memberof TypeTimelineEvent
 */
export interface TypeTimelineEventFields {
    /**
     * Field type definition for field 'key' (Key)
     * @name Key
     * @localized false
     */
    key: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'text' (Text)
     * @name Text
     * @localized true
     */
    text: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'hide' (Hide)
     * @name Hide
     * @localized false
     */
    hide?: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'push' (Push)
     * @name Push
     * @localized false
     */
    push?: EntryFieldTypes.Boolean;
}

/**
 * Entry skeleton type definition for content type 'timelineEvent' (TimelineEvent)
 * @name TypeTimelineEventSkeleton
 * @type {TypeTimelineEventSkeleton}
 * @author 50Up2ekE3Y9sOqdbPSbFmi
 * @since 2019-06-12T11:00:25.784Z
 * @version 5
 */
export type TypeTimelineEventSkeleton = EntrySkeletonType<TypeTimelineEventFields, "timelineEvent">;
/**
 * Entry type definition for content type 'timelineEvent' (TimelineEvent)
 * @name TypeTimelineEvent
 * @type {TypeTimelineEvent}
 * @author 50Up2ekE3Y9sOqdbPSbFmi
 * @since 2019-06-12T11:00:25.784Z
 * @version 5
 */
export type TypeTimelineEvent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTimelineEventSkeleton, Modifiers, Locales>;
export type TypeTimelineEventWithoutLinkResolutionResponse = TypeTimelineEvent<"WITHOUT_LINK_RESOLUTION">;
export type TypeTimelineEventWithoutUnresolvableLinksResponse = TypeTimelineEvent<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeTimelineEventWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeTimelineEvent<"WITH_ALL_LOCALES", Locales>;
export type TypeTimelineEventWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeTimelineEvent<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeTimelineEventWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeTimelineEvent<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
