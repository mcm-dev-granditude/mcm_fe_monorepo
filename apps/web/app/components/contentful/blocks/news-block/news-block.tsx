import { McmNewsBlock } from "@repo/config/contentful";
import { NewsBlockComponentProps } from "@/components/contentful/blocks/news-block/types";
import { getInitialNews } from "@/components/contentful/blocks/news-block/get-initial-news";
import { Suspense } from "react";
import { LoadinggSpinner } from "@/components/ui/loading-spinner";
import { NewsBlockClient } from "@/components/contentful/blocks/news-block/news-block.client";

export default async function NewsBlockComponent({block}: NewsBlockComponentProps) {
  const mcmNews = (block.mcmNewsList?.mcmNewsListCollection?.items || []).filter(
    (item): item is McmNewsBlock => item !== null
  );

  const initialData = await getInitialNews({
    source: block.newsSource === "Alla nyheter" ? "all" : block.newsSource || "all",
    mcmNews
  });

  return (
    <Suspense
      fallback={
        <div className="flex justify-center p-8">
          <LoadinggSpinner />
        </div>
      }
    >
      <NewsBlockClient
        block={block}
        initialData={initialData}
      />
    </Suspense>
  );
}