import { CardListBlock, LandingBlock, TextBlock } from "../content-blocks/types";

export interface LandingPageContent {
  title: string;
  LandingBlock: LandingBlock;
  TextBlock: TextBlock;
  CardBlockList: CardListBlock;
}