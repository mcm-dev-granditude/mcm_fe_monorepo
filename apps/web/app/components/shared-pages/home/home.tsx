// src/app/page.tsx
import { getContentfulPage } from "@repo/config/contentful";
import PageWrapper from "@/components/layout/page-wrapper";
import BlockRenderer from "@/components/contentful/block-renderer";
import ScrollToTop from "@/components/common/scroll-to-top";
import { notFound } from "next/navigation";

export default async function HomePage({className}: {className?: string}) {
  let page = null;

  try {
    page = await getContentfulPage("/");
  } catch (e) {
    console.error("Error fetching home page:", e);
  }

  if (!page) {
    return notFound();
  }

  return (
    <PageWrapper className={className}>
      {/* Visually hidden H1 for SEO */}
      <h1 className="sr-only">{page.title}</h1>
      <BlockRenderer blocks={page.blocks} />
      <ScrollToTop show={!!page.showScrollToTopButton} />
    </PageWrapper>
  );
}