import { McmNewsBlock } from "@repo/config/contentful";
import { NewsItem } from "@/components/contentful/blocks/news-block/types";

export function transformMcmNewsToRssItems(mcmNews: McmNewsBlock[]): NewsItem[] {
  return mcmNews.map((news): NewsItem => ({
    id: news._id,
    title: news.title || "",
    description: news.description || news.text || "",
    link: news.linkToNewsPage?.sys?.id || "",
    pubDate: news.pubDate || new Date().toISOString(),
    source: "MCM",
    image: news.image ? {
      url: news.image.url || "",
      alt: news.image.title || news.title || ""
    } : undefined,
    logoUrl: news.logoImage?.url || ""
  }));
}

