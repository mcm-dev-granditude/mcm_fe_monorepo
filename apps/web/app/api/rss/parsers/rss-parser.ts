import { XMLParser } from "fast-xml-parser";
import { RssItem } from "@/app/api/rss/types";
import { getSourceByUrl } from "@/components/contentful/blocks/news-block/sources";

export class RssParser {
  private static parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_"
  });

  static async parseRssFeed(url: string): Promise<RssItem[]> {
    try {
      const response = await fetch(url);
      const xmlText = await response.text();
      const result = this.parser.parse(xmlText);

      const items = result.rss?.channel?.item || [];
      const itemsArray = Array.isArray(items) ? items : [items];

      const source = getSourceByUrl(url);

      // Debug logging for first item
      if (itemsArray.length > 0) {
        console.log(`[RSS Parser] Processing ${itemsArray.length} items from ${url}`);
        console.log("[RSS Parser] First item sample:", JSON.stringify(itemsArray[0], null, 2).substring(0, 500) + "...");
      }

      // If there's no parser, use a basic parser
      if (!source?.parser) {
        const parsedItems = itemsArray.map((item: any) => {
          // Try to extract image from different possible sources
          let image = null;

          // Check enclosure first
          if (item.enclosure?.["@_url"] && typeof item.enclosure["@_url"] === "string" && item.enclosure["@_url"].trim() !== "") {
            image = {
              url: item.enclosure["@_url"],
              alt: item.title?.trim() || ""
            };
            console.log(`[RSS Parser] Found enclosure image: ${image.url}`);
          }
          // Then check media:thumbnail
          else if (item["media:thumbnail"] && item["media:thumbnail"]["@_url"] &&
            typeof item["media:thumbnail"]["@_url"] === "string" &&
            item["media:thumbnail"]["@_url"].trim() !== "") {
            image = {
              url: item["media:thumbnail"]["@_url"],
              alt: item.title?.trim() || ""
            };
            console.log(`[RSS Parser] Found media:thumbnail image: ${image.url}`);
          } else {
            console.log(`[RSS Parser] No image found for item: ${item.title?.substring(0, 30) || "Untitled"}...`);
          }

          return {
            id: item.guid?.["#text"] || item.guid || item.link || "",
            title: item.title ? item.title.trim() : "",
            link: item.link || "",
            description: item.description || "",
            pubDate: new Date(item.pubDate || new Date()).toISOString(),
            image, // Always null or a valid object, never undefined
            source: source?.id || "",
            logoImage: null
          };
        });

        // Count items with images
        const itemsWithImages = parsedItems.filter(item => item.image !== null).length;
        console.log(`[RSS Parser] ${itemsWithImages} out of ${parsedItems.length} items have images for source: ${url}`);

        return parsedItems;
      }

      const parsedItems = itemsArray.map(item => {
        const parsedItem = source.parser!.parse(item);

        if (parsedItem.image) {
          console.log(`[RSS Parser] Custom parser found image: ${parsedItem.image.url} for item: ${parsedItem.title.substring(0, 30)}...`);
        } else {
          console.log(`[RSS Parser] Custom parser found NO image for item: ${parsedItem.title.substring(0, 30)}...`);
        }

        return parsedItem;
      });

      // Count items with images
      const itemsWithImages = parsedItems.filter(item => item.image !== null).length;
      console.log(`[RSS Parser] ${itemsWithImages} out of ${parsedItems.length} items have images for source: ${url}`);

      return parsedItems;
    } catch (error) {
      console.error(`Error parsing RSS feed from ${url}:`, error);
      return [];
    }
  }
}