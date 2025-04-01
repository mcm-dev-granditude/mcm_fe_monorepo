import { FC } from "react";
import NewsDetail from "@/components/shared-pages/news/news-detail";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{slug: string}>;
}

// TODO generate dynamic metadata
export const metadata: Metadata = {
  title: "Nyheter"
};

const Page: FC<PageProps> = async ({params}) => {
  const p = await params;

  return <NewsDetail slug={p.slug} />;
};

export default Page;
