import { RssItem } from "../types";
import { BaseRssParser } from "@/app/api/rss/parsers/base-parser";

export class HockeySverigeParser extends BaseRssParser {
  constructor() {
    super("hockeysverige");
  }

  parse(rawItem: any): RssItem {
    const description = this.cleanDescription(rawItem.description || "");

    // Special case: HockeySverige often has image URLs in the content:encoded field
    const imageFromContent = this.extractImageFromHtml(rawItem["content:encoded"], rawItem.title);

    return {
      id: rawItem.guid?.["#text"] || rawItem.link || "",
      title: rawItem.title ? rawItem.title.trim() : "",
      description,
      link: rawItem.link || "",
      pubDate: new Date(rawItem.pubDate || new Date()).toISOString(),
      image: imageFromContent || this.extractBestImage(rawItem),
      source: this.sourceId,
      logoImage: this.logoImage
    };
  }
}