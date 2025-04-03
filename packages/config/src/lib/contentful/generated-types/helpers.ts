// Helper types and utilities for Contentful
import { Entry, EntryCollection, EntrySkeletonType } from "contentful";

/**
 * Helper type to get strongly typed Entry objects
 * Use with Contentful Entry objects to ensure type safety
 *
 * @example
 * import { IBookingAgency } from './types';
 * import { ContentfulEntry, ContentfulEntryCollection } from './helpers';
 *
 * // Strongly typed entry
 * const entry: ContentfulEntry<IBookingAgency> = response.items[0];
 *
 * // Strongly typed collection
 * const entries: ContentfulEntryCollection<IBookingAgency> = response;
 */
export type ContentfulEntry<T extends EntrySkeletonType> = Entry<T>;

/**
 * Helper type for entry collections
 */
export type ContentfulEntryCollection<T extends EntrySkeletonType> = EntryCollection<T>;
