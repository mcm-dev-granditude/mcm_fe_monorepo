/**
 * Safely get the URL from a Contentful asset
 * Handles both resolved and unresolved assets
 */
export function getAssetUrl(asset: any, query?: string): string | null {
  if (!asset) return null;

  if ("fields" in asset && asset.fields?.file?.url) {
    return query ? `${asset.fields.file.url}${query}` : asset.fields.file.url;
  }

  // Otherwise return null
  return null;
}

/**
 * Safely get the slug from a linked Contentful entry
 * Handles both resolved and unresolved entry links
 */
export function getEntrySlug(entry: any): string {
  if (!entry) return "/";

  // Check if it's a resolved entry with fields
  if ("fields" in entry && entry.fields?.slug) {
    return entry.fields.slug;
  }

  // Default return
  return "/";
}

/**
 * Safely convert a string to uppercase, handling undefined and function values
 */
export function safeText(text: any): string {
  if (typeof text === "string") {
    return text;
  }
  return "";
}