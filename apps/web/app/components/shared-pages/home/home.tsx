import PageWrapper from "@/components/layout/page-wrapper";
import ScrollToTop from "@/components/common/scroll-to-top";
import { PAGE_CONTENT } from "@/components/shared-pages/home/content";
import LandingBlockComponent from "@/components/blocks/landing-block";
import TextBlockComponent from "@/components/blocks/text-block";
import CardListBlockComponent from "@/components/blocks/card-list-block";

export default async function HomePage({className}: {className?: string}) {
  return (
    <PageWrapper className={className}>
      {/* Visually hidden H1 for SEO */}
      <h1 className="sr-only">{PAGE_CONTENT.title}</h1>
      <LandingBlockComponent block={PAGE_CONTENT.LandingBlock} />
      <TextBlockComponent block={PAGE_CONTENT.TextBlock} />
      <CardListBlockComponent block={PAGE_CONTENT.CardBlockList} />
      <ScrollToTop show />
    </PageWrapper>
  );
}

