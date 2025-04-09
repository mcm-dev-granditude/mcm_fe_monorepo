import { format } from "date-fns";
import { NewsItem } from "@/components/contentful/blocks/news-block/types";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useState } from "react";

interface NewsCardProps {
  item: NewsItem;
}

// Define a type for the nested image structure
interface NestedImageUrl {
  url: string;
  alt?: string;
}

export function NewsCard({item}: NewsCardProps) {
  const [imgError, setImgError] = useState(false);

  // Extract the actual image URL, handling various possible formats
  const getImageUrl = (): string | null => {
    if (imgError) return null;
    if (!item.image) return null;

    // Handle case where image.url is itself an object (nested structure)
    if (item.image.url && typeof item.image.url === "object") {
      // Use type assertion to help TypeScript understand the structure
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

  // Check if we have a valid image URL
  const hasValidImage = Boolean(imageUrl && imageUrl.trim() !== "");

  const handleImageError = () => {
    console.error(`Failed to load image for "${item.title}" - URL: ${imageUrl}`);
    setImgError(true);
  };

  // Function to decode HTML entities
  const decodeHtmlEntities = (text: string): string => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  };

  // Safe version for SSR
  const decodeHtmlEntitiesSafe = (text: string): string => {
    if (typeof window === "undefined") {
      // Server-side: Use a simple regex-based approach
      return text
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, "\"")
      .replace(/&#039;/g, "'")
      .replace(/&#8221;/g, "\"")
      .replace(/&#8211;/g, "–")
      .replace(/&#8217;/g, "");
    } else {
      // Client-side: Use the DOM
      return decodeHtmlEntities(text);
    }
  };

  // Function to strip HTML and truncate text
  const stripHtmlAndTruncate = (html: string, maxLength: number = 150): string => {
    // Decode HTML entities first
    const decoded = decodeHtmlEntitiesSafe(html);

    // Remove HTML tags
    const plainText = decoded.replace(/<[^>]+>/g, "");

    // Remove excess whitespace
    const cleanText = plainText.replace(/\s+/g, " ").trim();

    // Truncate if needed
    if (cleanText.length <= maxLength) return cleanText;

    // Find a good breaking point (word boundary)
    const truncated = cleanText.substring(0, maxLength).trim();
    const lastSpaceIndex = truncated.lastIndexOf(" ");
    const breakPoint = lastSpaceIndex > maxLength * 0.8 ? lastSpaceIndex : maxLength;

    return cleanText.substring(0, breakPoint) + "...";
  };

  // Decode the title
  const decodedTitle = decodeHtmlEntitiesSafe(item.title);

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