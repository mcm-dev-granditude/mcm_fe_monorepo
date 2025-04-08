import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { LandingBlockComponentProps } from "@/components/contentful/blocks/landing-block";
import { TextBlockComponentProps } from "@/components/contentful/blocks/text-block";
import { BetSuggestionBlockComponentProps } from "@/components/contentful/blocks/bet-suggestion-block";
import { CardBlockComponentProps } from "@/components/contentful/blocks/card-block";
import { CardLinkBlockComponentProps } from "@/components/contentful/blocks/card-link-block";
import { WidgetBlockComponentProps } from "@/components/contentful/blocks/widget-block";
import { TournamentStandingsBlockComponentProps } from "@/components/contentful/blocks/tournament-standings-block";
import { CardListBlockComponentProps } from "@/components/contentful/blocks/card-list-block";
import { HeroBlockComponentProps } from "@/components/contentful/blocks/hero-block";
import { LiveScoreBlockComponentProps } from "@/components/contentful/blocks/live-score-block";
import { McmNewsBlockComponentProps } from "@/components/contentful/blocks/mcm-news-block";
import { NewsBlockComponentProps } from "@/components/contentful/blocks/news-block";
import { OddsComparsionBlockComponentProps } from "@/components/contentful/blocks/odds-comparison-block";
import { LoginBlockComponentProps } from "@/components/contentful/blocks/login-block";


type BlockComponentProps = {
  LandingBlock: LandingBlockComponentProps;
  TextBlock: TextBlockComponentProps;
  BetSuggestionBlock: BetSuggestionBlockComponentProps
  CardBlock: CardBlockComponentProps
  CardLinkBlock: CardLinkBlockComponentProps
  CardListBlock: CardListBlockComponentProps
  HeroBlock: HeroBlockComponentProps
  LiveScoreBlock: LiveScoreBlockComponentProps
  McmNewsBlock: McmNewsBlockComponentProps
  NewsBlock: NewsBlockComponentProps
  OddsComparsionBlock: OddsComparsionBlockComponentProps
  TournamentStandingsBlock: TournamentStandingsBlockComponentProps
  WidgetBlock: WidgetBlockComponentProps
  LoginBlock: LoginBlockComponentProps
  // Add more as needed
};

const blockRegistry: {
  [K in keyof BlockComponentProps]?: ComponentType<BlockComponentProps[K]>;
} = {
  LandingBlock: dynamic(() => import("./landing-block")),
  TextBlock: dynamic(() => import("./text-block")),
  BetSuggestionBlock: dynamic(() => import("./bet-suggestion-block")),
  CardBlock: dynamic(() => import("./card-block")),
  CardLinkBlock: dynamic(() => import("./card-link-block")),
  CardListBlock: dynamic(() => import("./card-list-block")),
  HeroBlock: dynamic(() => import("./hero-block")),
  LiveScoreBlock: dynamic(() => import("./live-score-block")),
  McmNewsBlock: dynamic(() => import("./mcm-news-block")),
  NewsBlock: dynamic(() => import("./news-block")),
  OddsComparsionBlock: dynamic(() => import("./odds-comparison-block")),
  TournamentStandingsBlock: dynamic(() => import("./tournament-standings-block")),
  WidgetBlock: dynamic(() => import("./widget-block"))
  // Add more block components as needed
};

export default blockRegistry;