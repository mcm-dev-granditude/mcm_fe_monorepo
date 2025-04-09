export interface RssSourceParser {
  parse(rawItem: any): RssItem;

  getSourceId(): string;
}

export interface RssItem {
  id: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  image: {
    url: string;
    alt: string;
  } | null;
  source: string;
  logoImage: string | null;
}

