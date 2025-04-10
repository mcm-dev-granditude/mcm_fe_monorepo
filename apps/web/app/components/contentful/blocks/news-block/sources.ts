// sources.ts
import { NewsSource } from "@/components/contentful/blocks/news-block/types";
import { RssSourceParser } from "@/app/api/rss/types";
import { FotbollskanalenParser } from "@/app/api/rss/parsers/fotbollskanalen-parser";
import { FotbollDirektParser } from "@/app/api/rss/parsers/fotbolldirekt-parser";
import { FotbolltransfersParser } from "@/app/api/rss/parsers/fotbolltransfers-parser";
import { HockeySverigeParser } from "@/app/api/rss/parsers/hockeysverige-parser";

interface ExtendedNewsSource extends NewsSource {
  feedUrl?: string;
  parser?: RssSourceParser;
}

export function getSourceByUrl(url: string): ExtendedNewsSource | undefined {
  return NEWS_SOURCES.find(source => source.feedUrl === url);
}


const fotbolltransfersParser = new FotbolltransfersParser();

export const NEWS_SOURCES: ExtendedNewsSource[] = [
  {id: "all", name: "all", displayName: "Alla Nyheter"},
  {id: "MCM", name: "MCM", displayName: "MCM Nyheter"},
  {
    id: "fotbollskanalen",
    name: "Fotbollskanalen",
    displayName: "Fotbollskanalen",
    feedUrl: "https://www.fotbollskanalen.se/rss",
    parser: new FotbollskanalenParser()
  },
  {
    id: "fotbolldirekt",
    name: "Fotbolldirekt",
    displayName: "Fotbolldirekt",
    feedUrl: "https://www.fotbolldirekt.se/feed/",
    parser: new FotbollDirektParser()
  },
  {
    id: "hockeysverige",
    name: "HockeySverige",
    displayName: "Hockey Sverige",
    feedUrl: "https://www.hockeysverige.se/feed",
    parser: new HockeySverigeParser()
  },
  {
    id: "transfers-allsvenskan",
    name: "FtAllsvenskan",
    displayName: "Transfers Allsvenskan",
    feedUrl: "https://www.fotbolltransfers.com/site/feed/11",
    parser: fotbolltransfersParser
  },
  {
    id: "transfers-superettan",
    name: "FtSuperettan",
    displayName: "Transfers Superettan",
    feedUrl: "https://www.fotbolltransfers.com/site/feed/13",
    parser: fotbolltransfersParser
  },
  {
    id: "transfers-europe",
    name: "FtRestOfEurope",
    displayName: "European Transfers",
    feedUrl: "https://www.fotbolltransfers.com/site/feed/18",
    parser: fotbolltransfersParser
  }
];