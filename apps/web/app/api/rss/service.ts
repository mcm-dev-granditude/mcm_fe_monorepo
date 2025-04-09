import { RSS_LINKS } from "@/app/api/rss/config/rss-config";
import { RssParser } from "@/app/api/rss/parsers/rss-parser";
import { NewsItem } from "@/components/contentful/blocks/news-block/types";
import { RssItem } from "@/app/api/rss/types";

export async function fetchRssItems(source: string): Promise<NewsItem[]> {
  let items: NewsItem[] = [];

  if (!source) {
    return items;
  }

  try {
    if (source === "all") {
      const rssPromises = Object.entries(RSS_LINKS).map(([key, url]) =>
        RssParser.parseRssFeed(url).then(items =>
          items.map(item => mapRssItemToNewsItem(item, key))
        )
      );
      items = (await Promise.all(rssPromises)).flat();
    } else if (source in RSS_LINKS) {
      const rssUrl = RSS_LINKS[source as keyof typeof RSS_LINKS];
      const rssItems = await RssParser.parseRssFeed(rssUrl);
      items = rssItems.map(item => mapRssItemToNewsItem(item, source));
    }
  } catch (error) {
    console.error("Error fetching RSS feeds:", error);
  }

  return items;
}

function mapRssItemToNewsItem(item: RssItem, source: string): NewsItem {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    link: item.link,
    pubDate: item.pubDate,
    source,
    image: item.image
      ? {
        url: typeof item.image === "string"
          ? item.image
          : item.image.url,
        alt: typeof item.image === "string"
          ? item.title
          : (item.image.alt || item.title)
      }
      : null,
    logoUrl: item.logoImage || undefined
  };
}