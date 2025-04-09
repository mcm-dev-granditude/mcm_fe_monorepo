export const RSS_LINKS = {
  fk: process.env.RSS_URL_FK || "https://www.fotbollskanalen.se/rss",
  FtAllsvenskan: process.env.RSS_URL_FT_ALLSVENSKAN || "https://www.fotbolltransfers.com/site/feed/11",
  FtSuperettan: process.env.RSS_URL_FT_SUPERETTAN || "https://www.fotbolltransfers.com/site/feed/13",
  FtRestOfEurope: process.env.RSS_URL_FT_REST_OF_EUROPE || "https://www.fotbolltransfers.com/site/feed/18",
  FotbollDirekt: process.env.RSS_URL_FOTBOLL_DIREKT || "https://www.fotbolldirekt.se/feed/",
  HockeySverige: process.env.RSS_URL_HOCKEY_SVERIGE || "https://www.hockeysverige.se/feed"
} as const;