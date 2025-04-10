import DynamicSlug, {
  generateMetadata,
  generateStaticParams
} from "@/components/shared-pages/dynamic-slug/dynamic-slug";
import { PageProps } from "@/types/page-props";

export default async function Page({params}: PageProps) {
  return (
    <DynamicSlug params={params} />
  );
}

export { generateMetadata, generateStaticParams };