import { XMLParser } from "fast-xml-parser";
import { RssItem } from "@/app/api/rss/types";

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
      return (Array.isArray(items) ? items : [items]).map((item: any) => {
        const rssItem: RssItem = {
          id: item.guid || item.link || "",
          title: item.title || "",
          link: item.link || "",
          description: this.cleanDescription(item.description || ""),
          pubDate: new Date(item.pubDate).toISOString(),
          image: item.enclosure?.["@_url"] || undefined,
          source: "",
          logoImage: undefined
        };
        return rssItem;
      });
    } catch (error) {
      console.error(`Error parsing RSS feed from ${url}:`, error);
      return [];
    }
  }

  private static cleanDescription(description: string): string {
    const postIndex = description.indexOf("\n<p>The post");
    if (postIndex !== -1) {
      return description.substring(0, postIndex);
    }
    return description;
  }
}