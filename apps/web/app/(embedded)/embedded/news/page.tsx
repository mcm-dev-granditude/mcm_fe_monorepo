import News from "@/components/shared-pages/news/news";
import { createMetadata } from "@/lib/utils/metadata";

export const metadata = createMetadata({title: "Nyheter", noIndex: true, noFollow: true});


export default function NewsPage() {
  return (
    <News className="min-h-auto p-4 pb-6" />
  );
}