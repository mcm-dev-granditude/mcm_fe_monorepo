import { PageProps } from "@/types/page-props";
import { createMetadata } from "@/lib/utils/metadata";
import NewsDetail from "@/app/components/shared-pages/news/news-detail";
import { getMcmNews } from "@/components/blocks/news-block/get-mcm-news";
import { notFound } from "next/navigation";

export const metadata = createMetadata({title: "Nyheter", noIndex: true, noFollow: true});

async function NewsDetailPage({params}: PageProps<{slug: string}>) {
  const slug = await params.then(
    (params) => params.slug);

  // todo -- Fetch news data from the backend

  const item = await getMcmNews().then(items => items[0]);

  if (!item) {
    return notFound();
  }

  return (
    <NewsDetail
      className="px-4"
      slug={slug}
      item={item}
    />
  );
}

export default NewsDetailPage;
