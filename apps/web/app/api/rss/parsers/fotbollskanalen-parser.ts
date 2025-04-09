import { BaseRssParser } from "@/app/api/rss/parsers/base-parser";
import { RssItem } from "@/app/api/rss/types";


export class FotbollskanalenParser extends BaseRssParser {
  constructor() {
    super("fotbollskanalen");
  }

  parse(rawItem: any): RssItem {
    return {
      id: rawItem.guid?.["#text"] || rawItem.link || "",
      title: rawItem.title ? rawItem.title.trim() : "",
      description: this.cleanDescription(rawItem.description || ""),
      link: rawItem.link || "",
      pubDate: new Date(rawItem.pubDate || new Date()).toISOString(),
      image: this.extractBestImage(rawItem),
      source: this.sourceId,
      logoImage: this.logoImage
    };
  }
}