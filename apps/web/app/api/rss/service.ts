import { RSS_LINKS } from "@/app/api/rss/config/rss-config";
import { RssParser } from "@/app/api/rss/utils/rss-parser";
import { RssItem } from "@/app/api/rss/types";

export async function fetchRssItems(source: string): Promise<RssItem[]> {
  let items: RssItem[] = [];

  if (!source) {
    return items;
  }

  try {
    if (source === "all") {
      const rssPromises = Object.entries(RSS_LINKS).map(([key, url]) =>
        RssParser.parseRssFeed(url).then(items =>
          items.map(item => ({...item, source: key}))
        )
      );
      items = (await Promise.all(rssPromises)).flat();
    } else if (source in RSS_LINKS) {
      const rssUrl = RSS_LINKS[source as keyof typeof RSS_LINKS];
      const rssItems = await RssParser.parseRssFeed(rssUrl);
      items = rssItems.map(item => ({...item, source}));
    }
  } catch (error) {
    console.error("Error fetching RSS feeds:", error);
  }

  return items;
}