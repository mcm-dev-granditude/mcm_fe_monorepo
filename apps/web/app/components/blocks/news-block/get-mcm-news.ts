"use server";
import { McmNewsBlock } from "@/components/blocks/mcm-news-block";
import { transformMcmNewsToRssItems } from "@/components/blocks/news-block/transform-mcm-news-to-rss";

export async function getMcmNews() {
  // todo -- Connect BE endpoint to get MCM news.
  const internalNews: McmNewsBlock[] = [{
    id: "test-placeholder",
    title: "Example MCM Item",
    description: "This item should be replaced with real data.",
    content: "When real data is available, this item will be replaced with real data.",
    link: "/news/test-placeholder",
    pubDate: "10-02-2025",
    source: "mcm",
    img: {
      url: "/icon-384x384.png",
      alt: "mcm logo"
    }
  }];
  return transformMcmNewsToRssItems(internalNews);
}