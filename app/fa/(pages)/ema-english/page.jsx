import { EmaEnglishPage } from "@/components/pages/ema-english/EmaEnglishPage";
import { ROOT_URL } from "@/utils/constants";
import { generateHreflangAndOg } from "@/utils/generateHreflangAndOg";

const title = "پادکست اِما انگلیش - یادگیری انگلیسی با ترانه";

export const metadata = {
  title: title,
  description:
    "پادکست اِما انگلیش را کشف کنید، جایی که ابراهیم، محمد و آراد از طریق متن آهنگ‌ها به آموزش زبان انگلیسی می‌پردازند. به روش سرگرم کننده و جذابی انگلیسی بیاموزید. اِما انگلیش در کست‌باکس و تلگرام در دسترس است.",

  ...generateHreflangAndOg(
    "ema-english",
    "fa",
    undefined,
    ROOT_URL + "/images/ema-light.jpg",
    title
  ),
};

export default function EmaEnglish() {
  return <EmaEnglishPage lang="fa" />;
}
