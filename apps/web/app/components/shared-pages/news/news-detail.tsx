import PageWrapper from "@/components/layout/page-wrapper";
import ScrollToTop from "@/components/common/scroll-to-top";
import { NewsItem } from "@/components/blocks/news-block/types";
import HeroBlockComponent from "@/components/blocks/hero-block";
import TextBlockComponent from "@/components/blocks/text-block";

export default async function NewsDetailPage({className, item}: {slug: string, item: NewsItem, className?: string}) {
  return (
    <PageWrapper className={className}>
      {/* Visually hidden H1 for SEO */}
      <h1 className="sr-only">{item.title}</h1>
      <HeroBlockComponent block={{title: item.title, img: item.image?.url || "", paragraph: item.description}} />
      <div className="w-full flex justify-end my-4">
        <h3 className="text-sm font-bold text-foreground/80">
          {item.pubDate}
        </h3>
      </div>
      <TextBlockComponent block={{title: item.title, text: item.description, preamble: ""}} />

      {/*todo -- Finish the rest of the render*/}

      <ScrollToTop show />
    </PageWrapper>
  );
}

