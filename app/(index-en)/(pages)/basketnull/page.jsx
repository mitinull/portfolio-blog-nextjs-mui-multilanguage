import { BasketnullPage } from "@/components/pages/basketnull/BasketnullPage";
import { generateHreflangAndOg } from "@/utils/generateHreflangAndOg";

export const metadata = {
  title: "Basketnull - Open-Source Lua Game",
  description:
    "Explore Basketnull, an open-source game by Mitinull built with Lua and Love2D. Play online and contribute new levels on GitHub.",

  ...generateHreflangAndOg("basketnull", "en"),
};

export default function Basketnull() {
  return <BasketnullPage lang="en" />;
}
