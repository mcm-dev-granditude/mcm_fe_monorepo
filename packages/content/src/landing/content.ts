import { LandingPageContent } from "./types";
import { LocalizedContent } from "../locales/types";


export const landingContent: LocalizedContent<LandingPageContent> = {
  en: {
    title: "Homepage",
    LandingBlock: {
      title: "Everything you need to know about the match",
      img: {
        url: "https://images.ctfassets.net/n8amk6jsxvma/4HiHhQYkKgShTD3TYvJhkG/197607414448372d7893d6e373ec490a/landingImage.jpg"
      },
      btn: {
        text: "Live Score",
        url: "/live-score"
      }
    },
    TextBlock: {
      title: "Welcome to Match Center",
      preamble: "Here you'll find all relevant information about the match. Live scores, analysis, tables, statistics, injury updates, starting lineups, odds comparison and much more."
    },
    CardBlockList: {
      items: [{
        id: "card-1",
        title: "How to use Match Center",
        img: "https://images.ctfassets.net/n8amk6jsxvma/3AicvgL67pZOVGreEvF1V8/f47b7c26d1be19fcd7fdb05dd0621975/footballPlayerImage.jpg",
        markdown: "**Match Center** strives to have something for all sports enthusiasts regardless of what you're looking for. Please familiarize yourself with the site's full content so you know which pages contain what you're interested in. [Find all Match Center features here](/guide).\n\nWe have also gathered some points where we think a more detailed explanation is needed, for example [how our analysts reason](/worth-knowing)."
      },
        {
          id: "card-2",
          title: "About Us",
          img: "https://images.ctfassets.net/n8amk6jsxvma/4jrGwSpo2zsvqm4rzssOfH/61cd6fcbaf886aff6f1e5077a0bff413/hockeyPlayerImage.jpg?q=100",
          markdown: "What laid the foundation for what is today Match Center Media? What vision existed when the company came to light and where do we want to go? Read more about our vision under [about us](/about-us)"
        }]
    }
  },
  sv: {
    title: "Hemsida",
    LandingBlock: {
      title: "Allt du behöver veta om matchen",
      img: {
        url: "https://images.ctfassets.net/n8amk6jsxvma/4HiHhQYkKgShTD3TYvJhkG/197607414448372d7893d6e373ec490a/landingImage.jpg"
      },
      btn: {
        text: "Livescore",
        url: "/live-score"
      }
    },
    TextBlock: {
      title: "Välkommen till Matchcenter",
      preamble: "Här hittar du all relevant information om matchen. Livescore, analyser, tabeller, statistik, skadelägen, startelvor, oddsjämförelse och mycket annat."
    },
    CardBlockList: {
      items: [{
        id: "card-1",
        title: "Så här använder du Matchcenter",
        img: "https://images.ctfassets.net/n8amk6jsxvma/3AicvgL67pZOVGreEvF1V8/f47b7c26d1be19fcd7fdb05dd0621975/footballPlayerImage.jpg",
        markdown: "**Matchcenter** strävar efter att det skall finnas något för alla sportintresserade oavsett vad du letar efter. Bekanta dig gärna med sitens hela innehåll så att du vet vilka sidor som innehåller det du är intresserad av. [Matchcenters alla funktioner hittar du här](/lathund).\n\nVi har också samlat några punkter där vi tycker att det krävs en lite mer ingående förklaring om t.ex. [hur våra analytiker resonerar](/vart-att-veta)."
      },
        {
          id: "card-2",
          title: "Om oss",
          img: "https://images.ctfassets.net/n8amk6jsxvma/4jrGwSpo2zsvqm4rzssOfH/61cd6fcbaf886aff6f1e5077a0bff413/hockeyPlayerImage.jpg?q=100",
          markdown: "Vad lade grunden till det som idag är Matchcentermedia? Vilken vision fanns när företaget såg dagens ljus och vart vill vi komma? Läs mer om vår vision under [om oss](/om-oss)"
        }]
    }
  }
};
