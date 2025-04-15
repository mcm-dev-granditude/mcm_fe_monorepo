import Home from "@/components/shared-pages/home/home";
import { createMetadata } from "@/lib/utils/metadata";


export const metadata = createMetadata({title: "Hemsida", noIndex: true});


export default function HomePage() {
  return (
    <Home className="min-h-auto px-4 pb-6" />
  );
}