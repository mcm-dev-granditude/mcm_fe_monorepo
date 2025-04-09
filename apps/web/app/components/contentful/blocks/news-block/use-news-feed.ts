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

export function useNewsFeed({source, mcmNews, initialData}: UseNewsFeedProps) {
  const initialRssData = useMemo(() => {
    if (!initialData) return undefined;
    return initialData.map((item): RssItem => ({
      id: item.id,
      title: item.title,
      description: item.description,
      link: item.link,
      pubDate: item.pubDate,
      source: item.source,
      image: item.image?.url,
      logoImage: item.logoUrl
    }));
  }, [initialData]);

  const {data: rawRssNews, isLoading: isRssLoading, error: rssError} = useQuery<RssItem[]>({
    queryKey: ["rss-news", source],
    queryFn: async () => {
      if (source !== "MCM") {
        const encodedSource = encodeURIComponent(source);
        const response = await fetch(`/api/rss?source=${encodedSource}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }
      return [];
    },
    enabled: source !== "MCM",
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
      image: item.image ? {
        url: item.image,
        alt: item.title
      } : undefined,
      logoUrl: item.logoImage
    }));
  }, [rawRssNews]);

  const mcmNewsItems = useMemo(() => {
    if (source === "MCM" || source === "all") {
      return transformMcmNewsToRssItems(mcmNews);
    }
    return [];
  }, [mcmNews, source]);

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