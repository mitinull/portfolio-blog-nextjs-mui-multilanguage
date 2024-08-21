import { EmaEnglishPage } from "@/components/pages/ema-english/EmaEnglishPage";
import { generateHreflang } from "@/utils/generateHreflang";

export const metadata = {
  title: "EMA English",
  description: "EMA English is a persian podcast.",

  ...generateHreflang("ema-english", "en"),
};

export default async function Basketnull() {
  return <EmaEnglishPage lang="en" />;
}
