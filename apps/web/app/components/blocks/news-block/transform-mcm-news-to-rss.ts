import { NewsItem } from "@/components/blocks/news-block/types";
import { McmNewsBlock } from "@repo/content";

export function transformMcmNewsToRssItems(mcmNews: McmNewsBlock[]): NewsItem[] {
  return mcmNews.map((item): NewsItem => ({
    ...item,
    image: item.img ? {
      url: item.img.url || "",
      alt: item.img.alt || ""
    } : null,
    source: "mcm",
    logoUrl: "/icon-384x384.png"
  }));
}

