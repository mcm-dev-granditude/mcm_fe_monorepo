import { RssItem } from "../types";
import { BaseRssParser } from "@/app/api/rss/parsers/base-parser";

export class FotbolltransfersParser extends BaseRssParser {
  constructor() {
    super("fotbolltransfers");
  }

  parse(rawItem: any): RssItem {
    const description = this.cleanDescription(rawItem.description || "");

    const image = this.extractBestImage(rawItem);

    return {
      id: rawItem.guid?.["#text"] || rawItem.guid || rawItem.link || "",
      title: rawItem.title ? rawItem.title.trim() : "",
      description,
      link: rawItem.link || "",
      pubDate: new Date(rawItem.pubDate || new Date()).toISOString(),
      image,
      source: this.sourceId,
      logoImage: this.logoImage
    };
  }
}