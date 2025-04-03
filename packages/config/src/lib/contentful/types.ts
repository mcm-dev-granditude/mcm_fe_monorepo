// lib/component-types.ts
import { ComponentType } from "react";
import { EntrySkeletonType } from "contentful";
import { ContentfulEntry } from "./generated-types/helpers";

/**
 * Props for any Contentful block component
 */
export interface ContentfulBlockProps<T extends EntrySkeletonType> {
  blockData: ContentfulEntry<T>;
}

/**
 * Type for a component that can render a Contentful block
 */
export type ContentfulComponent<T extends EntrySkeletonType = any> =
  ComponentType<ContentfulBlockProps<T>>;