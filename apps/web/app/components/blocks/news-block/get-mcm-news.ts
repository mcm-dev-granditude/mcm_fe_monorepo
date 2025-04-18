"use server";
import { transformMcmNewsToRssItems } from "@/components/blocks/news-block/transform-mcm-news-to-rss";
import { McmNewsBlock } from "@repo/content";

export async function getMcmNews() {
  // todo -- Connect BE endpoint to get MCM news.
  const internalNews: McmNewsBlock[] = [{
    id: "test-placeholder",
    title: "Example MCM Item",
    description: "This item should be replaced with real data.",
    content: "When real data is available, this item will be replaced with real data.",
    link: "/news/test-placeholder",
    pubDate: "2025-02-10",
    source: "mcm",
    img: {
      url: "/icon-384x384.png",
      alt: "mcm logo"
    }
  }];
  return transformMcmNewsToRssItems(internalNews);
}