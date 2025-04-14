import { RSS_LINKS } from "@/app/api/rss/config/rss-config";
import { RssParser } from "@/app/api/rss/parsers/rss-parser";
import { NewsItem } from "@/components/blocks/news-block/types";
import { RssItem } from "@/app/api/rss/types";

export async function fetchRssItems(source: string): Promise<NewsItem[]> {
  let items: NewsItem[] = [];

  if (!source) {
    console.error("No source provided to fetchRssItems");
    return items;
  }

  try {
    const normalizedSource = source.toLowerCase();

    // Case 1: All sources
    if (normalizedSource === "all") {
      const rssPromises = Object.entries(RSS_LINKS).map(([key, url]) => {
        if (!url) {
          console.warn(`[fetchRssItems] Empty URL for source: ${key}`);
          return Promise.resolve([]);
        }

        return RssParser.parseRssFeed(url)
        .then(items => items.map(item => {
          return mapRssItemToNewsItem(item, key);
        }))
        .catch(error => {
          console.error(`[fetchRssItems] Error fetching RSS feed for ${key}:`, error);
          return [] as NewsItem[];
        });
      });

      items = (await Promise.all(rssPromises)).flat();
    } else {
      const sourceKey = Object.keys(RSS_LINKS).find(
        key => key.toLowerCase() === normalizedSource
      );

      if (sourceKey) {
        const rssUrl = RSS_LINKS[sourceKey as keyof typeof RSS_LINKS];

        if (!rssUrl) {
          return items;
        }


        try {
          const rssItems = await RssParser.parseRssFeed(rssUrl);
          items = rssItems.map(item => mapRssItemToNewsItem(item, sourceKey));
        } catch (error) {
          console.error(`[fetchRssItems] Error fetching RSS feed for ${sourceKey}:`, error);
        }
      } else {
        console.warn(`[fetchRssItems] Unknown source: "${source}" (normalized: "${normalizedSource}")`);
      }
    }
  } catch (error) {
    console.error("[fetchRssItems] Error fetching RSS feeds:", error);
  }

  return items;
}

function mapRssItemToNewsItem(item: RssItem, source: string): NewsItem {
  return {
    id: item.id || `${item.title}-${item.pubDate}`,
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