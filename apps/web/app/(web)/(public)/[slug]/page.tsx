import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlockRenderer from "@/components/contentful/block-renderer";
import ScrollToTop from "@/components/common/scroll-to-top";
import PageWrapper from "@/components/layout/page-wrapper";
import { appConfig } from "@repo/config";
import { fetchPageBySlug, getAllContentfulPageSlugs } from "@repo/config/contentful";
import { formatSlug } from "@/lib/utils/format-slug";


export async function generateStaticParams() {
  const slugs = await getAllContentfulPageSlugs();
  return slugs
  .filter(slug => slug !== "/")
  .map(slug => ({slug}));
}

export async function generateMetadata({
                                         params
                                         // eslint-disable-next-line
                                       }: any): Promise<Metadata> {
  const p = await params;
  const decodedSlug = formatSlug(p.slug);
  const page = await fetchPageBySlug(decodedSlug);

  if (!page) {
    return notFound();
  }

  return {
    title: `${page.title} | ${appConfig.title}`,
    description: page.description || appConfig.description,
    keywords: page.keywords || appConfig.keywords,
    robots: page.excludePageFromExternalSearch ? "noindex,follow" : undefined
  };
}

export default async function Page({
                                     params
                                     // eslint-disable-next-line
                                   }: any) {
  const p = await params;
  const decodedSlug = formatSlug(p.slug);
  const page = await fetchPageBySlug(decodedSlug);

  if (!page) {
    return notFound();
  }

  return (
    <PageWrapper>
      {/* Visually hidden H1 for SEO */}
      <h1 className="sr-only">{page.title}</h1>
      <BlockRenderer blocks={page.blocks} />
      <ScrollToTop show={!!page.showScrollToTopButton} />
    </PageWrapper>
  );
}