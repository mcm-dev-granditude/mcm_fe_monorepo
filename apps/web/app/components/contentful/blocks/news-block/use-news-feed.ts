import { useEffect, useState } from "react";
import { NewsItem } from "@/components/contentful/blocks/news-block/types";

export function useNewsFeed(source: string | null) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/news?source=${source || "all"}`);
        const data = await response.json();
        setNews(data);
      } catch (err) {
        setError("Failed to fetch news: " + (err instanceof Error ? err.message : "Unknown error"));
      } finally {
        setLoading(false);
      }
    };

    void fetchNews();
  }, [source]);

  return {news, loading, error};
}