import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { NewsItem, NewsSourceId } from "@/components/blocks/news-block/types";
import { getMcmNews } from "@/components/blocks/news-block/get-mcm-news";

interface UseNewsFeedProps {
  source: NewsSourceId;
  initialData?: NewsItem[];
}

export function useNewsFeed({source, initialData}: UseNewsFeedProps) {
  const fetchMCMNewsItems = useCallback(async () => {
    return getMcmNews();
  }, []);


  const {data, isLoading: isRssLoading, error: rssError} = useQuery<NewsItem[]>({
    queryKey: ["rss-news", source],
    queryFn: async () => {
      const encodedSource = encodeURIComponent(source);
      const response = await fetch(`/api/rss?source=${encodedSource}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const mcmNews = await fetchMCMNewsItems();
      const rssNews: NewsItem[] = await response.json();

      return (source === "all"
        ? [...rssNews, ...mcmNews]
        : rssNews);
    },
    enabled: true,
    initialData: initialData
  });

  return {
    news: data || [],
    loading: isRssLoading,
    error: rssError
  };
}