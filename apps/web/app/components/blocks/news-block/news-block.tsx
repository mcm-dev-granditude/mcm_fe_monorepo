import { NewsBlockComponentProps } from "@/components/blocks/news-block/types";
import { getInitialNews } from "@/components/blocks/news-block/get-initial-news";
import { Suspense } from "react";
import { LoadinggSpinner } from "@/components/ui/loading-spinner";
import { NewsBlockClient } from "@/components/blocks/news-block/news-block.client";

export default async function NewsBlockComponent({block}: NewsBlockComponentProps) {
  const initialData = await getInitialNews({
    source: "all"
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