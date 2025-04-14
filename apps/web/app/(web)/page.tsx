import Home from "@/components/shared-pages/home/home";
import { createMetadata } from "@/lib/utils/metadata";

export const metadata = createMetadata({title: "Hemsida"});


export default function HomePage() {
  return (
    <Home />
  );
}