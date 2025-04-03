// app/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllContentfulSlugs, getContentfulPage } from "@repo/config/contentful";
import BlockRenderer from "@/components/contentful/block-renderer";

// Generate static params for all pages except homepage
export async function generateStaticParams() {
  const slugs = await getAllContentfulSlugs();
  return slugs
  .filter(slug => slug !== "/")
  .map(slug => ({slug}));
}

// Generate metadata for each page
export async function generateMetadata({
                                         params
                                       }: {
  params: {slug: string}
}): Promise<Metadata> {
  const page = await getContentfulPage(params.slug);

  if (!page) {
    return {
      title: "Page Not Found"
    };
  }

  return {
    title: `${page.title} | Your Site Name`,
    description: page.description,
    keywords: page.keywords,
    robots: page.excludePageFromExternalSearch ? "noindex,follow" : undefined
  };
}

export default async function Page({params}: {params: {slug: string}}) {
  // Fetch the page data from Contentful
  const page = await getContentfulPage(params.slug);

  // If page not found, return 404
  if (!page) {
    notFound();
  }

  return (
    <main>
      {/* Visually hidden H1 for SEO */}
      <h1 className="sr-only">{page.title}</h1>

      {/* Render the blocks */}
      <BlockRenderer blocks={page.blocks} />

      {/* Scroll to Top Button */}
      {page.showScrollToTopButton && (
        <button
          className="fixed bottom-8 right-8 bg-black bg-opacity-70 text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-opacity"
          onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </main>
  );
}