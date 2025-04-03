// components/blocks/LandingBlock.tsx
import Link from "next/link";
import {
  ContentfulBlockProps,
  getAssetUrl,
  getEntrySlug,
  safeText,
  TypeLandingBlockSkeleton
} from "@repo/config/contentful";
import { Button } from "@/components/ui/button";


export default function LandingBlock({blockData}: ContentfulBlockProps<TypeLandingBlockSkeleton>) {
  const {title, backgroundImage, buttonText, internalLink} = blockData.fields;

  // Skip rendering if required props are missing
  if (!title || !backgroundImage || !buttonText || !internalLink) {
    return null;
  }

  const backgroundImageUrl = getAssetUrl(backgroundImage, "?q=60");
  const linkSlug = getEntrySlug(internalLink);
  const titleText = safeText(title).toUpperCase();
  const buttonTextUppercase = safeText(buttonText).toUpperCase();

  return (
    <section className="relative w-full">
      <div
        className="flex flex-col justify-center items-center w-full h-[70vh] md:h-[80vh] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: backgroundImageUrl
            ? `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${backgroundImageUrl})`
            : undefined
        }}
      >
        <h2 className="w-[90%] max-w-[44rem] mx-auto my-8 text-2xl md:text-4xl leading-tight md:leading-[4.875rem] -tracking-[0.04rem] font-bold text-center text-white z-10">
          {titleText}
        </h2>

        <div className="flex items-center justify-center">
          <Button
            asChild
            variant="mcm-main"
            size="no-size"
          >
            <Link
              href={linkSlug}
            >
              {buttonTextUppercase}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}