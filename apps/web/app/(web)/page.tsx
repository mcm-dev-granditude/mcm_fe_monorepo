import Home from "@/components/shared-pages/home/home";
import { Metadata } from "next";
import { getContentfulPage } from "@repo/config/contentful";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContentfulPage("/");

  if (!page) {
    return {
      title: "Homepage"
    };
  }

  return {
    title: `${page.title} | Your Site Name`,
    description: page.description,
    keywords: page.keywords,
    robots: page.excludePageFromExternalSearch ? "noindex,follow" : undefined
  };
}


export default function HomePage() {
  return (
    <Home />
  );
}