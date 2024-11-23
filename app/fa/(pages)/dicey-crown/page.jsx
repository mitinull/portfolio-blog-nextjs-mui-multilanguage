import { DiceyCrownPage } from "@/components/pages/dicey-crown/DiceyCrownPage";
import { ROOT_URL } from "@/utils/constants";
import { generateHreflangAndOg } from "@/utils/generateHreflangAndOg";

const title = "بازی تاج پرخطر (Dicey Crown)";

export const metadata = {
  title: title,
  description: `این بازی رو برای مسابقه بازی‌سازی دانشگاه امیرکبیر ساختیم و موفق به کسب مقام اول شدیم`,

  ...generateHreflangAndOg(
    "dicey-crown",
    "fa",
    undefined,
    ROOT_URL + "/images/dicey-crown/dicey-crown-light.jpg",
    title
  ),
};

export default function DiceyCrown() {
  return <DiceyCrownPage lang="fa" />;
}
