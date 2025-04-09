import { RSS_LINKS } from "@/app/api/rss/config/rss-config";
import { RssParser } from "@/app/api/rss/parsers/rss-parser";
import { NewsItem } from "@/components/contentful/blocks/news-block/types";

export async function fetchRssItems(source: string): Promise<NewsItem[]> {
  let items: NewsItem[] = [];

  if (!source) {
    return items;
  }

  try {
    if (source === "all") {
      const rssPromises = Object.entries(RSS_LINKS).map(([key, url]) =>
        RssParser.parseRssFeed(url).then(items =>
          items.map(item => ({
            id: item.id,
            title: item.title,
            description: item.description,
            link: item.link,
            pubDate: item.pubDate,
            source: key,
            image: item.image ? {
              url: item.image,
              alt: item.title
            } : undefined,
            logoUrl: item.logoImage
          }))
        )
      );
      items = (await Promise.all(rssPromises)).flat();
    } else if (source in RSS_LINKS) {
      const rssUrl = RSS_LINKS[source as keyof typeof RSS_LINKS];
      const rssItems = await RssParser.parseRssFeed(rssUrl);
      items = rssItems.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        link: item.link,
        pubDate: item.pubDate,
        source,
        image: item.image ? {
          url: item.image,
          alt: item.title
        } : undefined,
        logoUrl: item.logoImage
      }));
    }
  } catch (error) {
    console.error("Error fetching RSS feeds:", error);
  }

  return items;
}