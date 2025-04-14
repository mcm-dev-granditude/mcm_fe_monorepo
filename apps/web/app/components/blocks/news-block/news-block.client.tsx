"use client";
import { useEffect, useState } from "react";
import { NewsCard } from "@/components/blocks/news-block/news-card";
import { Button } from "@/components/ui/button";
import { NewsBlockComponentProps, NewsItem, NewsSourceId } from "@/components/blocks/news-block/types";
import { useNewsFeed } from "@/components/blocks/news-block/use-news-feed";
import { NewsFilter } from "@/components/blocks/news-block/news-filter";
import { LoadinggSpinner } from "@/components/ui/loading-spinner";

const ITEMS_PER_PAGE = 20;

interface NewsBlockClientProps extends NewsBlockComponentProps {
  initialData: NewsItem[];
}

export function NewsBlockClient({initialData}: NewsBlockClientProps) {
  const [source, setSource] = useState<NewsSourceId>("all");
  const [visible, setVisible] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    setVisible(ITEMS_PER_PAGE);
  }, [source]);

  const {news, loading, error} = useNewsFeed({
    source,
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
        <div className="flex justify-center p-8 h-100 w-100">
          <LoadinggSpinner className="text-accent" />
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
                variant="ghost"
                onClick={() => setVisible(v => v + ITEMS_PER_PAGE)}
              >
                Ladda fler nyheter...
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