import { EmaEnglishPage } from "@/components/pages/ema-english/EmaEnglishPage";
import { ROOT_URL } from "@/utils/constants";
import { generateHreflangAndOg } from "@/utils/generateHreflangAndOg";

const title = "EMA English Podcast - Learn English Through Music";

export const metadata = {
  title: title,
  description:
    "Explore the EMA English podcast, where Ebrahim, Mohammad, and Arad teach English through song lyrics. Learn English in a fun and engaging way. Available on Castbox and Telegram.",

  ...generateHreflangAndOg(
    "ema-english",
    "en",
    undefined,
    ROOT_URL + "/images/ema-dark.jpg",
    title
  ),
};

export default async function Basketnull() {
  return <EmaEnglishPage lang="en" />;
}
