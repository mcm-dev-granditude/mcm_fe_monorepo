import { format } from "date-fns";
import { NewsItem } from "@/components/contentful/blocks/news-block/types";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface NewsCardProps {
  item: NewsItem;
}

export function NewsCard({item}: NewsCardProps) {
  // Check if image exists and has a url property that's a string
  const hasValidImage = Boolean(
    item.image &&
    typeof item.image.url === "string" &&
    item.image.url.trim() !== ""
  );

  return (
    <Card className="h-full transition-all hover:scale-[1.02]">
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {hasValidImage && (
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <Image
              src={item.image!.url}
              alt={item.image?.alt || item.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <CardHeader>
          <h3 className="text-lg font-semibold">{item.title}</h3>
        </CardHeader>
        <CardContent>
          <div
            className="text-sm text-muted-foreground"
            dangerouslySetInnerHTML={{__html: item.description}}
          />
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {format(new Date(item.pubDate), "PPP")}
          </span>
        </CardFooter>
      </a>
    </Card>
  );
}