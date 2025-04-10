import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { McmNewsBlock } from "@repo/config/contentful";
import { RssItem } from "@/app/api/rss/types";
import { NewsItem } from "@/components/contentful/blocks/news-block/types";
import { transformMcmNewsToRssItems } from "@/components/contentful/blocks/news-block/transform-mcm-news-to-rss";

interface UseNewsFeedProps {
  source: string;
  mcmNews: McmNewsBlock[];
  initialData?: NewsItem[];
}

// Map UI display sources to API source IDs
const SOURCE_MAP: Record<string, string> = {
  "Alla nyheter": "all",
  "all": "all"
  // Add other mappings if needed
};

export function useNewsFeed({source, mcmNews, initialData}: UseNewsFeedProps) {
  const apiSource = SOURCE_MAP[source] || source;

  const initialRssData = useMemo(() => {
    if (!initialData) return undefined;

    const nonMcmInitialData = initialData.filter(item => item.source !== "MCM");

    const filteredData = apiSource !== "all"
      ? nonMcmInitialData.filter(item => item.source.toLowerCase() === apiSource.toLowerCase())
      : nonMcmInitialData;

    return filteredData.map((item): RssItem => ({
      id: item.id,
      title: item.title,
      description: item.description,
      link: item.link,
      pubDate: item.pubDate,
      source: item.source,
      image: item.image ? {
        url: item.image.url,
        alt: item.image.alt || item.title
      } : null,
      logoImage: item.logoUrl || null
    }));
  }, [initialData, apiSource]);

  const {data: rawRssNews, isLoading: isRssLoading, error: rssError} = useQuery<RssItem[]>({
    queryKey: ["rss-news", apiSource],
    queryFn: async () => {
      const encodedSource = encodeURIComponent(apiSource);
      const response = await fetch(`/api/rss?source=${encodedSource}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      return data.filter((item: RssItem) => item.source !== "MCM");
    },
    enabled: true,
    initialData: initialRssData
  });

  const rssNewsItems = useMemo(() => {
    if (!rawRssNews) return [];

    return rawRssNews.map((item): NewsItem => ({
      id: item.id,
      title: item.title,
      description: item.description,
      link: item.link,
      pubDate: item.pubDate,
      source: item.source,
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
    }));
  }, [rawRssNews]);

  const mcmNewsItems = useMemo(() => {
    // Only include MCM news for "all" or "MCM" sources
    if (apiSource === "MCM" || apiSource === "all") {
      return transformMcmNewsToRssItems(mcmNews);
    }
    return [];
  }, [mcmNews, apiSource]);

  const allNews = useMemo(() => {
    const news = [...rssNewsItems, ...mcmNewsItems];
    return news.sort((a, b) =>
      new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    );
  }, [rssNewsItems, mcmNewsItems]);

  return {
    news: allNews,
    loading: isRssLoading,
    error: rssError
  };
}