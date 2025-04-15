import { PageProps } from "@/types/page-props";
import { createMetadata } from "@/lib/utils/metadata";
import NewsDetail from "@/app/components/shared-pages/news/news-detail";
import { getMcmNews } from "@/components/blocks/news-block/get-mcm-news";
import { notFound } from "next/navigation";


export async function generateStaticParams() {
  // todo -- Generate from the BE
  const slugs: string[] = [];
  // const slugs = await getAllNewsSlugs();

  // Return an array of objects with the slug parameter
  return slugs.map((slug) => ({
    slug
  }));
}

export async function generateMetadata({params}: PageProps<{slug: string}>) {
  const slug = await params.then(
    (params) => params.slug);

  // todo -- Fetch news data from the BE
  // const newsItem = await getNewsItemBySlug(slug);

  // todo -- Update the SEO fields with the item information
  return createMetadata({
    title: `News: ${
      slug}`,
    description: "Read our latest news article"

  });
}

async function NewsDetailPage({params}: PageProps<{slug: string}>) {
  const slug = await params.then(
    (params) => params.slug);

  // todo -- Fetch news data from the backend

  const item = await getMcmNews().then(items => items[0]);

  if (!item) {
    return notFound();
  }

  return <NewsDetail
    slug={slug}
    item={item}
  />;
}

export default NewsDetailPage;
