import { NewsSource } from "@/components/contentful/blocks/news-block/types";

export const NEWS_SOURCES: NewsSource[] = [
  {id: "all", name: "all", displayName: "All News"},
  {id: "fotbollskanalen", name: "Fotbollskanalen", displayName: "Fotbollskanalen"},
  {id: "fotbolldirekt", name: "Fotbolldirekt", displayName: "Fotbolldirekt"},
  {id: "hockeysverige", name: "HockeySverige", displayName: "Hockey Sverige"},
  {id: "transfers-allsvenskan", name: "FtAllsvenskan", displayName: "Transfers Allsvenskan"},
  {id: "transfers-superettan", name: "FtSuperettan", displayName: "Transfers Superettan"},
  {id: "transfers-europe", name: "FtRestOfEurope", displayName: "European Transfers"}
];