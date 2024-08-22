import { BasketnullPage } from "@/components/pages/basketnull/BasketnullPage";
import { generateHreflang } from "@/utils/generateHreflang";

export const metadata = {
  title: "بسکتنال - بازی متن‌باز",
  description:
    "بسکتنال، یک بازی متن‌باز توسط میتینال، ساخته شده با Lua و Love2D. آنلاین بازی کنید و مراحل جدید را در گیت‌هاب اضافه کنید.",

  ...generateHreflang("basketnull", "fa"),
};

export default function Basketnull() {
  return <BasketnullPage lang="fa" />;
}
