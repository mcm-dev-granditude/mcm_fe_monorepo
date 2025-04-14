import { LandingBlock } from "@/components/blocks/landing-block";
import { TextBlock } from "@/components/blocks/text-block";
import { CardListBlock } from "@/components/blocks/card-list-block";


interface LandingPageContent {
  title: string;
  LandingBlock: LandingBlock;
  TextBlock: TextBlock;
  CardBlockList: CardListBlock;
}

export const PAGE_CONTENT: LandingPageContent = {
  title: "Hemsida",
  "LandingBlock": {
    title: "Allt du behöver veta om matchen",
    img: {
      url: "https://images.ctfassets.net/n8amk6jsxvma/4HiHhQYkKgShTD3TYvJhkG/197607414448372d7893d6e373ec490a/landingImage.jpg"
    },
    btn: {
      text: "Livescore",
      url: "/live-score"
    }
  },
  "TextBlock": {
    title: "Välkommen till Matchcenter",
    preamble: "Här hittar du all relevant information om matchen. Livescore, analyser, tabeller, statistik, skadelägen," +
      " startelvor, oddsjämförelse och mycket annat."
  },
  "CardBlockList": {
    items: [{
      id: "card-1",
      title: "Så här använder du Matchcenter",
      img: "https://images.ctfassets.net/n8amk6jsxvma/3AicvgL67pZOVGreEvF1V8/f47b7c26d1be19fcd7fdb05dd0621975/footballPlayerImage.jpg",
      markdown: "**Matchcenter** strävar efter att det skall finnas något för alla sportintresserade oavsett vad du" +
        " letar efter. Bekanta dig gärna med sitens hela innehåll så att du vet vilka sidor som innehåller det du" +
        " är intresserad av. [Matchcenters alla funktioner hittar du här](/lathund).\n\n" +
        "Vi har också samlat några" +
        " punkter där vi tycker att det krävs en lite mer ingående förklaring om t.ex. [hur våra analytiker" +
        " resonerar](/vart-att-veta)."
    },
      {
        id: "card-2",
        title: "Om oss",
        img: "https://images.ctfassets.net/n8amk6jsxvma/4jrGwSpo2zsvqm4rzssOfH/61cd6fcbaf886aff6f1e5077a0bff413/hockeyPlayerImage.jpg?q=100",
        markdown: "Vad lade grunden till det som idag är Matchcentermedia? Vilken vision fanns när företaget såg" +
          " dagens ljus och vart vill vi komma? Läs mer om vår vision under [om oss](/om-oss)"
      }]
  }
};