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

      if (itemsArray.length > 0) {
        console.log(`[RSS Parser] Processing ${itemsArray.length} items from ${url}`);
        console.log("[RSS Parser] First item sample:", JSON.stringify(itemsArray[0], null, 2).substring(0, 500) + "...");
      }

      if (!source?.parser) {
        return itemsArray.map((item: any) => {
          let image = null;

          if (item.enclosure?.["@_url"] && typeof item.enclosure["@_url"] === "string" && item.enclosure["@_url"].trim() !== "") {
            image = {
              url: item.enclosure["@_url"],
              alt: item.title?.trim() || ""
            };
          } else if (item["media:thumbnail"] && item["media:thumbnail"]["@_url"] &&
            typeof item["media:thumbnail"]["@_url"] === "string" &&
            item["media:thumbnail"]["@_url"].trim() !== "") {
            image = {
              url: item["media:thumbnail"]["@_url"],
              alt: item.title?.trim() || ""
            };
          }

          return {
            id: item.guid?.["#text"] || item.guid || item.link || "",
            title: item.title ? item.title.trim() : "",
            link: item.link || "",
            description: item.description || "",
            pubDate: new Date(item.pubDate || new Date()).toISOString(),
            image,
            source: source?.id || "",
            logoImage: null
          };
        });
      }

      return itemsArray.map(item => {
        return source.parser!.parse(item);
      });
    } catch (error) {
      console.error(`Error parsing RSS feed from ${url}:`, error);
      return [];
    }
  }
}