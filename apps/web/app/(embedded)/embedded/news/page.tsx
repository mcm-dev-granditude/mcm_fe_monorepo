import News from "@/components/shared-pages/news/news";
import { createMetadata } from "@/lib/utils/metadata";

export const metadata = createMetadata({title: "Nyheter", noIndex: true});


export default function NewsPage() {
  return (
    <News className="min-h-auto p-0 pb-6 " />
  );
}