import { format } from "date-fns";
import { NewsItem } from "@/components/blocks/news-block/types";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useState } from "react";

interface NewsCardProps {
  item: NewsItem;
}

interface NestedImageUrl {
  url: string;
  alt?: string;
}

export function NewsCard({item}: NewsCardProps) {
  const [imgError, setImgError] = useState(false);

  const getImageUrl = (): string | null => {
    if (imgError) return null;
    if (!item.image) return null;

    if (item.image.url && typeof item.image.url === "object") {
      const nestedUrl = item.image.url as unknown as NestedImageUrl;
      if (nestedUrl.url) {
        return nestedUrl.url;
      }
    }

    if (item.image.url) {
      return item.image.url;
    }

    return null;
  };

  const imageUrl = getImageUrl();

  const hasValidImage = Boolean(imageUrl && imageUrl.trim() !== "");

  const handleImageError = () => {
    console.error(`Failed to load image for "${item.title}" - URL: ${imageUrl}`);
    setImgError(true);
  };

  const decodeHtmlEntities = (text: string): string => {
    return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#039;/g, "'")
    .replace(/&#8221;/g, "\"")
    .replace(/&#8211;/g, "–")
    .replace(/&#8217;/g, "'");
  };

  const stripHtmlAndTruncate = (html: string, maxLength: number = 150): string => {
    const decoded = decodeHtmlEntities(html);

    const plainText = decoded.replace(/<[^>]+>/g, "");

    const cleanText = plainText.replace(/\s+/g, " ").trim();

    if (cleanText.length <= maxLength) return cleanText;

    const truncated = cleanText.substring(0, maxLength).trim();
    const lastSpaceIndex = truncated.lastIndexOf(" ");
    const breakPoint = lastSpaceIndex > maxLength * 0.8 ? lastSpaceIndex : maxLength;

    return cleanText.substring(0, breakPoint) + "...";
  };

  const decodedTitle = decodeHtmlEntities(item.title);

  return (
    <Card className="h-full transition-all hover:scale-[1.02]">
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="h-full flex flex-col"
      >
        {hasValidImage && (
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <Image
              src={imageUrl!}
              alt={item.image?.alt || decodedTitle}
              fill
              className="object-cover"
              onError={handleImageError}
              unoptimized={true}
            />
          </div>
        )}
        <CardHeader className="flex-initial">
          <h3 className="text-lg font-semibold line-clamp-2 h-14 overflow-hidden">
            {decodedTitle}
          </h3>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-muted-foreground line-clamp-3 h-16 overflow-hidden">
            {stripHtmlAndTruncate(item.description)}
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between mt-auto flex-initial">
          <span className="text-sm text-muted-foreground">
            {format(new Date(item.pubDate), "PPP")}
          </span>
          <span className="text-xs text-muted-foreground">
            {item.source}
          </span>
        </CardFooter>
      </a>
    </Card>
  );
}