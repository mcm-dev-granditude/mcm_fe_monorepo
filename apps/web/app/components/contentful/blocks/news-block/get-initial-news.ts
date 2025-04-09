import { McmNewsBlock } from "@repo/config/contentful";
import { transformMcmNewsToRssItems } from "@/components/contentful/blocks/news-block/transform-mcm-news-to-rss";
import { fetchRssItems } from "@/app/api/rss/service";

export async function getInitialNews({
                                       source,
                                       mcmNews
                                     }: {
  source: string;
  mcmNews: McmNewsBlock[];
}) {
  if (source === "MCM") {
    return transformMcmNewsToRssItems(mcmNews);
  }

  const rssNews = await fetchRssItems(source);

  return source === "all"
    ? [...rssNews, ...transformMcmNewsToRssItems(mcmNews)]
    : rssNews;
}