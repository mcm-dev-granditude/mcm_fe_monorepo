// components/NewsBlock.tsx
import { useState } from "react";
import { NewsCard } from "@/components/contentful/blocks/news-block/news-card";
import { Button } from "@/components/ui/button";
import { NewsBlockComponentProps } from "@/components/contentful/blocks/news-block/types";
import { useNewsFeed } from "@/components/contentful/blocks/news-block/use-news-feed";
import { NewsFilter } from "@/components/contentful/blocks/news-block/news-filter";


const ITEMS_PER_PAGE = 20;

export default function NewsBlockComponent({block}: NewsBlockComponentProps) {
  const [source, setSource] = useState<string>(block.newsSource || "all");
  const [visible, setVisible] = useState(ITEMS_PER_PAGE);
  const {news, loading, error} = useNewsFeed(source);

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
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.slice(0, visible).map((item) => (
              <NewsCard
                key={item.id}
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
      )}
    </section>
  );
}