export interface RssSourceParser {
  parse(rawItem: any): RssItem;

  getSourceId(): string;
}

export interface RssImageData {
  url: string;
  alt: string;
}

export interface RssItem {
  id: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  image: RssImageData | string | null;
  logoImage: string | null;
}