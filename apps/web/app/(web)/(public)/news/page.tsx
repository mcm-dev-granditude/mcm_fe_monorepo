import News from "@/components/shared-pages/news/news";
import { createMetadata } from "@/lib/utils/metadata";

export const metadata = createMetadata({title: "Nyheter"});


export default function NewsPage() {
  return (
    <News />
  );
}