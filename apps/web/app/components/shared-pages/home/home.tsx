import PageWrapper from "@/components/layout/page-wrapper";
import ScrollToTop from "@/components/common/scroll-to-top";
import LandingBlockComponent from "@/components/blocks/landing-block";
import TextBlockComponent from "@/components/blocks/text-block";
import CardListBlockComponent from "@/components/blocks/card-list-block";
import { landingContent } from "@repo/content";

export default async function HomePage({className}: {className?: string}) {
  // todo -- Dynamic locale
  const content = landingContent["sv"];

  return (
    <PageWrapper className={className}>
      {/* Visually hidden H1 for SEO */}
      <h1 className="sr-only">{content.title}</h1>
      <LandingBlockComponent block={content.LandingBlock} />
      <TextBlockComponent block={content.TextBlock} />
      <CardListBlockComponent block={content.CardBlockList} />
      <ScrollToTop show />
    </PageWrapper>
  );
}

