export interface LandingBlock {
  title: string;
  img: {
    url: string
  };
  btn: {
    text: string;
    url: string;
  };
}

export interface BetSuggestionBlock {

}

export interface CardItemBlock {
  id: string;
  title: string;
  img: string;
  markdown: MarkdownTextBlock;
}


export interface CardLinkBlock {
  img: string;
  label: string;
  link?: {
    slug: string;
  };
}

export interface HeroBlock {
  img: string;
  paragraph: MarkdownTextBlock;
  title: string;
}

export interface LiveScoreBlock {
}

export interface LoginBlock {
}

export type MarkdownTextBlock = string;

export interface McmNewsBlock {
  id: string
  title: string
  description: string
  content: MarkdownTextBlock
  link: string
  pubDate: string
  source: "mcm",
  img: {
    url: string,
    alt: string
  }
}

export interface OddsComparsionBlock {
}

export interface TextBlock {
  title: string;
  preamble: string;
  text?: MarkdownTextBlock;
}


export interface TournamentStandingsBlock {
}


export interface WidgetBlock {
  title?: string;
  text?: MarkdownTextBlock;
  img: string;
}

export interface CardListBlock {
  items: CardItemBlock[];
}
