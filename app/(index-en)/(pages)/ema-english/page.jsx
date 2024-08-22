import { EmaEnglishPage } from "@/components/pages/ema-english/EmaEnglishPage";
import { generateHreflang } from "@/utils/generateHreflang";

export const metadata = {
  title: "EMA English Podcast - Learn English Through Music",
  description:
    "Explore the EMA English podcast, where Ebrahim, Mohammad, and Arad teach English through song lyrics. Learn English in a fun and engaging way. Available on Castbox and Telegram.",

  ...generateHreflang("ema-english", "en"),
};

export default async function Basketnull() {
  return <EmaEnglishPage lang="en" />;
}
