import { DiceyCrownPage } from "@/components/pages/dicey-crown/DiceyCrownPage";
import { ROOT_URL } from "@/utils/constants";
import { generateHreflangAndOg } from "@/utils/generateHreflangAndOg";

const title = "Dicey Crown Game";

export const metadata = {
  title: title,
  description:
    "We developed this game in one week for Amirkabir University Gamecraft 2024. Dicey Crown ranked first out of 29 games.",

  ...generateHreflangAndOg(
    "dicey-crown",
    "en",
    undefined,
    ROOT_URL + "/images/dicey-crown/dicey-crown-dark.jpg",
    title
  ),
};

export default function DiceyCrown() {
  return <DiceyCrownPage lang="en" />;
}
