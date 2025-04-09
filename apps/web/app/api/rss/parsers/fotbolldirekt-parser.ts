import { BaseRssParser } from "@/app/api/rss/parsers/base-parser";
import { RssItem } from "@/app/api/rss/types";


export class FotbollDirektParser extends BaseRssParser {
  constructor() {
    super("fotbolldirekt");
  }

  parse(rawItem: any): RssItem {
    const description = this.cleanDescription(rawItem["content:encoded"] || rawItem.description || "");

    return {
      id: rawItem.guid?.["#text"] || rawItem.link || "",
      title: rawItem.title ? rawItem.title.trim() : "",
      description,
      link: rawItem.link || "",
      pubDate: new Date(rawItem.pubDate || new Date()).toISOString(),
      image: this.extractBestImage(rawItem),
      source: this.sourceId,
      logoImage: this.logoImage
    };
  }

  protected cleanDescription(description: string): string {
    const postIndex = description.indexOf("The post");
    if (postIndex !== -1) {
      description = description.substring(0, postIndex);
    }

    return super.cleanDescription(description);
  }
}