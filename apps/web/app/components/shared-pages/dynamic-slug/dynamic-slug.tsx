import { formatSlug } from "@/lib/utils/format-slug";
import { fetchPageBySlug, getAllContentfulPageSlugs } from "@repo/config/contentful";
import PageWrapper from "@/components/layout/page-wrapper";
import BlockRenderer from "@/components/contentful/block-renderer";
import ScrollToTop from "@/components/common/scroll-to-top";
import { notFound } from "next/navigation";
import { appConfig } from "@repo/config";
import { Metadata } from "next";
import { PageProps } from "@/types/page-props";

export async function generateStaticParams() {
  const slugs = await getAllContentfulPageSlugs();

  return slugs
  .filter(slug => slug !== "/")
  .map((slug) => ({
    slug: slug.replace(/^\/|\/$/g, "").split("/")
  }));
}

export async function generateMetadata({
                                         params
                                       }: PageProps<{slug?: string[]}>): Promise<Metadata> {
  const rawSlugArray = await params.then(r => r.slug) || [];
  const decodedSlug = formatSlug(rawSlugArray.join("/"));
  const page = await fetchPageBySlug(decodedSlug);

  if (!page) {
    notFound();
  }

  return {
    title: `${page.title} | ${appConfig.title}`,
    description: page.description || appConfig.description,
    keywords: page.keywords || appConfig.keywords,
    robots: page.excludePageFromExternalSearch ? "noindex,follow" : undefined
  };
}

export default async function DynamicSlug({
                                            params
                                          }: PageProps<{slug: string[]}>) {
  const rawSlugArray = await params.then(r => r.slug) || [];
  const decodedSlug = formatSlug(rawSlugArray.join("/"));
  const page = await fetchPageBySlug(decodedSlug);

  if (!page) {
    notFound();
  }

  return (
    <PageWrapper>
      <h1 className="sr-only">{page.title}</h1>
      <BlockRenderer blocks={page.blocks} />
      <ScrollToTop show={!!page.showScrollToTopButton} />
    </PageWrapper>
  );
}
