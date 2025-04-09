import { NewsBlock } from "@repo/config/contentful";

export interface NewsSource {
  id: string;
  name: string;
  displayName: string;
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  image: {
    url: string;
    alt?: string;
  } | null;
  logoUrl?: string;
}

export interface NewsBlockComponentProps {
  block: NewsBlock;
}