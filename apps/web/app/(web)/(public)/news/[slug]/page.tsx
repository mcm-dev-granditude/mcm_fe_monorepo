import { FC } from "react";
import NewsDetail from "@/components/shared-pages/news/news-detail";

interface PageProps {
  params: Promise<{slug: string}>;
}

const Page: FC<PageProps> = async ({params}) => {
  const p = await params;

  return <NewsDetail slug={p.slug} />;
};

export default Page;
