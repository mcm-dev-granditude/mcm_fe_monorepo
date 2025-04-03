import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeMatchEventItem'
 * @name TypeMatchEventItemFields
 * @type {TypeMatchEventItemFields}
 * @memberof TypeMatchEventItem
 */
export interface TypeMatchEventItemFields {
    /**
     * Field type definition for field 'internalTitle' (Internal Title)
     * @name Internal Title
     * @localized false
     */
    internalTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'type' (Type)
     * @name Type
     * @localized false
     */
    type: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'eventType' (Event Type)
     * @name Event Type
     * @localized false
     */
    eventType?: EntryFieldTypes.Symbol<"break_start" | "cancelled_video_assistant_referee" | "corner_kick" | "free_kick" | "goal_kick" | "injury" | "injury_return" | "injury_time_shown" | "match_ended" | "match_started" | "offside" | "penalty_awarded" | "penalty_missed" | "penalty_shootout" | "period_score" | "period_start" | "possible_video_assistant_referee" | "red_card" | "score_change" | "shot_off_target" | "shot_on_target" | "shot_saved" | "substitution" | "suspension" | "throw_in" | "video_assistant_referee" | "video_assistant_referee_over" | "yellow_card" | "yellow_red_card">;
    /**
     * Field type definition for field 'periodNames' (Period Names)
     * @name Period Names
     * @localized false
     */
    periodNames?: EntryFieldTypes.Symbol<"1st extra" | "1st half" | "1st pause" | "1st period" | "2nd extra" | "2nd half" | "2nd pause" | "2nd period" | "3rd extra" | "3rd period" | "Awaiting extra" | "Awaiting penalties" | "Extra time halftime" | "Interrupted" | "None" | "Overtime" | "Pause" | "Penalties">;
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     */
    title?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'icon' (Default Icon)
     * @name Default Icon
     * @localized false
     */
    icon?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'hideInEventsList' (Hide in events list)
     * @name Hide in events list
     * @localized false
     */
    hideInEventsList?: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'pushNotification' (Push notification)
     * @name Push notification
     * @localized false
     */
    pushNotification?: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'iconOverrideSport_1' (Icon Override Football)
     * @name Icon Override Football
     * @localized false
     */
    iconOverrideSport_1?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'iconOverrideSport_5' (Icon Override Ice Hockey)
     * @name Icon Override Ice Hockey
     * @localized false
     */
    iconOverrideSport_5?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'iconOverrideSport_15' (Icon Override Bandy)
     * @name Icon Override Bandy
     * @localized false
     */
    iconOverrideSport_15?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'iconOverrideSport_6' (Icon Override Handball)
     * @name Icon Override Handball
     * @localized false
     */
    iconOverrideSport_6?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'iconOverrideSport_7' (Icon Override Floorball)
     * @name Icon Override Floorball
     * @localized false
     */
    iconOverrideSport_7?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'matchEventItem' (Match Event Item)
 * @name TypeMatchEventItemSkeleton
 * @type {TypeMatchEventItemSkeleton}
 * @author 5RssDQR1phdlgStVXppA8M
 * @since 2019-08-14T13:27:02.574Z
 * @version 33
 */
export type TypeMatchEventItemSkeleton = EntrySkeletonType<TypeMatchEventItemFields, "matchEventItem">;
/**
 * Entry type definition for content type 'matchEventItem' (Match Event Item)
 * @name TypeMatchEventItem
 * @type {TypeMatchEventItem}
 * @author 5RssDQR1phdlgStVXppA8M
 * @since 2019-08-14T13:27:02.574Z
 * @version 33
 */
export type TypeMatchEventItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMatchEventItemSkeleton, Modifiers, Locales>;
export type TypeMatchEventItemWithoutLinkResolutionResponse = TypeMatchEventItem<"WITHOUT_LINK_RESOLUTION">;
export type TypeMatchEventItemWithoutUnresolvableLinksResponse = TypeMatchEventItem<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeMatchEventItemWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeMatchEventItem<"WITH_ALL_LOCALES", Locales>;
export type TypeMatchEventItemWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeMatchEventItem<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeMatchEventItemWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeMatchEventItem<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
