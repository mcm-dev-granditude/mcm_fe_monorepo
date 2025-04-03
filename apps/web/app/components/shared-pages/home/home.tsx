import { getContentfulPage } from "@repo/config/contentful";
import BlockRenderer from "@/components/contentful/block-renderer";
import ScrollToTop from "@/components/common/scroll-to-top";
import ContentfulPageNotFound from "@/components/common/contentful-page-not-found";
import PageWrapper from "@/components/layout/page-wrapper";

export default async function HomePage({className}: {className?: string}) {
  const page = await getContentfulPage("/");

  if (!page) {
    return (
      <ContentfulPageNotFound
        title="Homepage"
        slug="/"
      />
    );
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