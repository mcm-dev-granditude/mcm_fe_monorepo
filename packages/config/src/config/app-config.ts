import { BrandId } from "@repo/tokens";

export interface AppConfig {
  appVersion: string;
  title: string;
  description: string;
  keywords: string[];
}

export const appConfig: Record<BrandId, AppConfig> = {
  default:
    {
      appVersion: "0.0.1",
      title: "MatchCenterMedia",
      description: `A comprehensive match center platform aggregating all game information in one place. Whether you're following your favorite league results or seeking advanced statistics, find everything you need to know about the match in a single, convenient hub.`,
      keywords: []
    },
  demo: {
    appVersion: "0.0.1",
    title: "Demo Alternative App",
    description: `A demo alternative app for the MatchCenterMedia`,
    keywords: []
  }
};