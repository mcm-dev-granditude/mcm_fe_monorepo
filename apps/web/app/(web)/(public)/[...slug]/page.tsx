import DynamicSlug, {
  generateMetadata,
  generateStaticParams
} from "@/components/shared-pages/dynamic-slug/dynamic-slug";
import { PageProps } from "@/types/page-props";

export default async function Page(props: PageProps<{slug: string[]}>) {
  return (
    <DynamicSlug params={props.params} />
  );
}

export { generateMetadata, generateStaticParams };