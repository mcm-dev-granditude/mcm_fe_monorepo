import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { McmNewsBlock } from "@repo/config/contentful";
import { RssItem } from "@/app/api/rss/types";
import { NewsItem } from "@/components/contentful/blocks/news-block/types";

interface UseNewsFeedProps {
  source: string;
  mcmNews: McmNewsBlock[];
}

function transformMcmNewsToRssItems(mcmNews: McmNewsBlock[]): NewsItem[] {
  return mcmNews.map((news): NewsItem => ({
    id: news._id,
    title: news.title || "",
    description: news.description || news.text || "",
    link: news.linkToNewsPage?.sys?.id || "",
    pubDate: news.pubDate || new Date().toISOString(),
    source: "MCM",
    image: news.image ? {
      url: news.image.url || "",
      alt: news.image.title || news.title || ""
    } : undefined,
    logoUrl: news.logoImage?.url || ""
  }));
}


export function useNewsFeed({source, mcmNews}: UseNewsFeedProps) {
  const {data: rawRssNews, isLoading: isRssLoading, error: rssError} = useQuery<RssItem[]>({
    queryKey: ["rss-news", source],
    queryFn: async () => {
      if (source !== "MCM") {
        const response = await fetch(`/api/news?source=${source}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }
      return [];
    },
    enabled: source !== "MCM"
  });

  // Transform RSS items to NewsItem format
  const rssNews = useMemo(() => {
    return (rawRssNews || []).map((item): NewsItem => ({
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
    const news = [...rssNews, ...mcmNewsItems];
    return news.sort((a, b) =>
      new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    );
  }, [rssNews, mcmNewsItems]);

  return {
    news: allNews,
    loading: isRssLoading,
    error: rssError
  };
}