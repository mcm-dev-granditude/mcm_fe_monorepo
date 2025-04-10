export const RSS_LINKS = {
  "fotbollskanalen": process.env.RSS_URL_FK || "https://www.fotbollskanalen.se/rss",
  "fotbolldirekt": process.env.RSS_URL_FOTBOLL_DIREKT || "https://www.fotbolldirekt.se/feed/",
  "hockeysverige": process.env.RSS_URL_HOCKEY_SVERIGE || "https://www.hockeysverige.se/feed",
  "transfers-allsvenskan": process.env.RSS_URL_FT_ALLSVENSKAN || "https://www.fotbolltransfers.com/site/feed/11",
  "transfers-superettan": process.env.RSS_URL_FT_SUPERETTAN || "https://www.fotbolltransfers.com/site/feed/13",
  "transfers-europe": process.env.RSS_URL_FT_REST_OF_EUROPE || "https://www.fotbolltransfers.com/site/feed/18"
} as const;