import { getContentfulPage } from "@repo/config/contentful";
import PageWrapper from "@/components/layout/page-wrapper";

export default async function HomePage({className}: {className?: string}) {
  try {
    await getContentfulPage("/");
  } catch (e) {
    console.error(e);
  }

  // const page = await getContentfulPage("/");

  // if (!page) {
  //   return notFound();
  // }
  //
  return (
    <PageWrapper className={className}>
      <h1>Home</h1>
      {/* Visually hidden H1 for SEO */}
      {/*<h1 className="sr-only">{page.title}</h1>*/}
      {/*<BlockRenderer blocks={page.blocks} />*/}
      {/*<ScrollToTop show={!!page.showScrollToTopButton} />*/}
    </PageWrapper>
  );
}