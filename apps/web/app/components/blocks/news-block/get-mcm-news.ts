"use server";
import { McmNewsBlock } from "@/components/blocks/mcm-news-block";
import { transformMcmNewsToRssItems } from "@/components/blocks/news-block/transform-mcm-news-to-rss";

export async function getMcmNews() {
  // todo -- Connect BE endpoint to get MCM news.
  const internalNews: McmNewsBlock[] = [];
  return transformMcmNewsToRssItems(internalNews);
}