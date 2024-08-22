import { BasketnullPage } from "@/components/pages/basketnull/BasketnullPage";
import { generateHreflangAndOg } from "@/utils/generateHreflangAndOg";

export const metadata = {
  title: "بسکتنال - بازی متن‌باز",
  description:
    "بسکتنال، یک بازی متن‌باز توسط میتینال، ساخته شده با Lua و Love2D. آنلاین بازی کنید و مراحل جدید را در گیت‌هاب اضافه کنید.",

  ...generateHreflangAndOg("basketnull", "fa"),
};

export default function Basketnull() {
  return <BasketnullPage lang="fa" />;
}
