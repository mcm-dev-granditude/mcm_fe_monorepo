export type NewsSourceId =
  "all"
  | "mcm"
  | "fotbollskanalen"
  | "fotbolldirekt"
  | "hockeysverige"
  | "transfers-allsvenskan"
  | "transfers-superettan"
  | "transfers-europe";

export interface NewsSource {
  id: NewsSourceId;
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
  block: {
    className?: string;
  };
}