// import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import { getAllContentfulSlugs, getContentfulPage } from "@repo/config/contentful";
// import BlockRenderer from "@/components/contentful/block-renderer";
// import ScrollToTop from "@/components/common/scroll-to-top";
// import PageWrapper from "@/components/layout/page-wrapper";
// import { appConfig } from "@repo/config";
//
// // Generate static params for all pages except homepage
// export async function generateStaticParams() {
//   const slugs = await getAllContentfulSlugs();
//   return slugs
//   .filter(slug => slug !== "/")
//   .map(slug => ({slug}));
// }
//
// export async function generateMetadata({
//                                          params
//                                        }: {
//   params: {slug: string}
// }): Promise<Metadata> {
//   const page = await getContentfulPage(params.slug);
//
//   if (!page) {
//     return notFound();
//   }
//
//   return {
//     title: `${page.title} | ${appConfig.title}`,
//     description: page.description || appConfig.description,
//     keywords: page.keywords || appConfig.keywords,
//     robots: page.excludePageFromExternalSearch ? "noindex,follow" : undefined
//   };
// }
//
// export default async function Page({params}: {params: {slug: string}}) {
//   const page = await getContentfulPage(params.slug);
//
//   if (!page) {
//     return notFound();
//   }
//
//   return (
//     <PageWrapper>
//       {/* Visually hidden H1 for SEO */}
//       <h1 className="sr-only">{page.title}</h1>
//       <BlockRenderer blocks={page.blocks} />
//       <ScrollToTop show={!!page.showScrollToTopButton} />
//     </PageWrapper>
//   );
// }
import type { FC } from "react";


const Page: FC = () => {

  return (
    <>Nothing yet</>
  );
};

export default Page;
