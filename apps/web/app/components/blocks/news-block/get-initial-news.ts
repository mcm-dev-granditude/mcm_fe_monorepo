import { fetchRssItems } from "@/app/api/rss/service";
import { NewsSourceId } from "@/components/blocks/news-block/types";
import { getMcmNews } from "@/components/blocks/news-block/get-mcm-news";


export async function getInitialNews({
                                       source
                                     }: {
  source: NewsSourceId;
}) {

  const mcmNews = await getMcmNews();
  const rssNews = await fetchRssItems(source);

  return source === "all"
    ? [...rssNews, ...mcmNews]
    : rssNews;
}