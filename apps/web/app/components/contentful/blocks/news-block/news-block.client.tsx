"use client";
import { useEffect, useState } from "react";
import { NewsCard } from "@/components/contentful/blocks/news-block/news-card";
import { Button } from "@/components/ui/button";
import { NewsBlockComponentProps, NewsItem } from "@/components/contentful/blocks/news-block/types";
import { useNewsFeed } from "@/components/contentful/blocks/news-block/use-news-feed";
import { NewsFilter } from "@/components/contentful/blocks/news-block/news-filter";
import { LoadinggSpinner } from "@/components/ui/loading-spinner";
import { McmNewsBlock } from "@repo/config/contentful";
import { NEWS_SOURCES } from "@/components/contentful/blocks/news-block/sources";

const ITEMS_PER_PAGE = 20;

interface NewsBlockClientProps extends NewsBlockComponentProps {
  initialData: NewsItem[];
}

export function NewsBlockClient({block, initialData}: NewsBlockClientProps) {
  const normalizeSource = (source: string | null | undefined): string => {
    if (!source) return "all";

    if (source.toLowerCase() === "alla nyheter") return "all";

    const foundSource = NEWS_SOURCES.find(s =>
      s.id.toLowerCase() === source.toLowerCase() ||
      s.name.toLowerCase() === source.toLowerCase() ||
      s.displayName.toLowerCase() === source.toLowerCase()
    );

    return foundSource ? foundSource.id : "all";
  };

  const [source, setSource] = useState<string>(normalizeSource(block.newsSource));
  const [visible, setVisible] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    setVisible(ITEMS_PER_PAGE);
  }, [source]);

  const mcmNews = (block.mcmNewsList?.mcmNewsListCollection?.items || []).filter(
    (item): item is McmNewsBlock => item !== null
  );

  const {news, loading, error} = useNewsFeed({
    source,
    mcmNews,
    initialData
  });

  if (error) {
    return (
      <div className="text-center text-destructive">
        Misslyckades med att ladda nyheter. Försök igen senare.
      </div>
    );
  }

  return (
    <section className="space-y-6 p-4">
      <NewsFilter
        value={source}
        onChange={setSource}
      />

      {loading ? (
        <div className="flex justify-center p-8">
          <LoadinggSpinner />
        </div>
      ) : news.length > 0 ? (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.slice(0, visible).map((item) => (
              <NewsCard
                key={`${item.id}-${item.source}`}
                item={item}
              />
            ))}
          </div>

          {visible < news.length && (
            <div className="flex justify-center pt-4">
              <Button
                variant="outline"
                onClick={() => setVisible(v => v + ITEMS_PER_PAGE)}
              >
                Mer nyheter
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center text-muted-foreground py-12">
          Inga nyheter hittades för vald källa.
        </div>
      )}
    </section>
  );
}