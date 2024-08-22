import { BasketnullPage } from "@/components/pages/basketnull/BasketnullPage";
import { ROOT_URL } from "@/utils/constants";
import { generateHreflangAndOg } from "@/utils/generateHreflangAndOg";

const title = "Basketnull - Open-Source Lua Game";

export const metadata = {
  title: title,
  description:
    "Explore Basketnull, an open-source game by Mitinull built with Lua and Love2D. Play online and contribute new levels on GitHub.",

  ...generateHreflangAndOg(
    "basketnull",
    "en",
    undefined,
    ROOT_URL + "/images/basketnull-dark.jpg",
    title
  ),
};

export default function Basketnull() {
  return <BasketnullPage lang="en" />;
}
