import PageWrapper from "@/components/layout/page-wrapper";
import ScrollToTop from "@/components/common/scroll-to-top";
import NewsBlockComponent from "@/components/blocks/news-block/news-block";


export default async function NewsPage({className}: {className?: string}) {
  return (
    <PageWrapper className={className}>
      {/* Visually hidden H1 for SEO */}
      <h1 className="sr-only">Nyheter</h1>
      <NewsBlockComponent block={{className: ""}} />
      <ScrollToTop show />
    </PageWrapper>
  );
}

