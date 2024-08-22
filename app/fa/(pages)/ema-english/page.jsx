import { EmaEnglishPage } from "@/components/pages/ema-english/EmaEnglishPage";
import { generateHreflang } from "@/utils/generateHreflang";

export const metadata = {
  title: "پادکست اِما انگلیش - یادگیری انگلیسی با ترانه",
  description:
    "پادکست اِما انگلیش را کشف کنید، جایی که ابراهیم، محمد و آراد از طریق متن آهنگ‌ها به آموزش زبان انگلیسی می‌پردازند. به روش سرگرم کننده و جذابی انگلیسی بیاموزید. اِما انگیش در کست‌باکس و تلگرام در دسترس است.",

  ...generateHreflang("ema-english", "fa"),
};

export default function EmaEnglish() {
  return <EmaEnglishPage lang="fa" />;
}
