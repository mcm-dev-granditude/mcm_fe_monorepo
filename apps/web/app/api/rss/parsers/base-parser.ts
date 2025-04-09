import { RssItem, RssSourceParser } from "@/app/api/rss/types";

export abstract class BaseRssParser implements RssSourceParser {
  protected sourceId: string;
  protected logoImage: string | null;

  protected constructor(sourceId: string, logoImage?: string) {
    this.sourceId = sourceId;
    this.logoImage = logoImage || null;
  }

  abstract parse(rawItem: any): RssItem;

  getSourceId(): string {
    return this.sourceId;
  }

  protected cleanDescription(description: string): string {
    return description
    .replace(/<p>/g, "")
    .replace(/<\/p>/g, "\n")
    .replace(/<br\s?\/?>/g, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\n\s*\n/g, "\n")
    .trim();
  }

  /**
   * Safely extracts image URL from an enclosure
   * Always returns null (not undefined) when no valid image is found
   */
  protected extractEnclosureImage(item: any, altText: string = ""): {url: string; alt: string} | null {
    if (item?.enclosure?.["@_url"] && typeof item.enclosure["@_url"] === "string" && item.enclosure["@_url"].trim() !== "") {
      return {
        url: item.enclosure["@_url"],
        alt: altText || item?.title?.trim() || ""
      };
    }
    return null;
  }

  /**
   * Safely extracts image from media:thumbnail tag (used by some RSS feeds)
   */
  protected extractMediaThumbnailImage(item: any, altText: string = ""): {url: string; alt: string} | null {
    if (item["media:thumbnail"] && item["media:thumbnail"]["@_url"] &&
      typeof item["media:thumbnail"]["@_url"] === "string" &&
      item["media:thumbnail"]["@_url"].trim() !== "") {
      return {
        url: item["media:thumbnail"]["@_url"],
        alt: altText || item?.title?.trim() || ""
      };
    }
    return null;
  }

  /**
   * Safely extracts image from HTML content
   * Always returns null (not undefined) when no valid image is found
   */
  protected extractImageFromHtml(html: string | undefined | null, altText: string = ""): {
    url: string;
    alt: string
  } | null {
    if (!html) return null;

    const imgMatch = html.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch && imgMatch[1] && imgMatch[1].trim() !== "") {
      return {
        url: imgMatch[1],
        alt: altText || ""
      };
    }
    return null;
  }

  /**
   * Try multiple image extraction methods in sequence
   * Returns the first successful image extraction or null if none work
   */
  protected extractBestImage(item: any): {url: string; alt: string} | null {
    const altText = item?.title?.trim() || "";

    return this.extractEnclosureImage(item, altText) ||
      this.extractMediaThumbnailImage(item, altText) ||
      this.extractImageFromHtml(item["content:encoded"] || item.description, altText) ||
      null;
  }

  protected getDefaultImage(): {url: string; alt: string} | null {
    return null;
  }
}