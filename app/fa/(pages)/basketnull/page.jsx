import { BasketnullPage } from "@/components/pages/basketnull/BasketnullPage";
import { ROOT_URL } from "@/utils/constants";
import { generateHreflangAndOg } from "@/utils/generateHreflangAndOg";

const title = "بسکتنال - بازی متن‌باز";

export const metadata = {
  title: title,
  description:
    "بسکتنال، یک بازی متن‌باز توسط میتینال، ساخته شده با Lua و Love2D. آنلاین بازی کنید و مراحل جدید را در گیت‌هاب اضافه کنید.",

  ...generateHreflangAndOg(
    "basketnull",
    "fa",
    undefined,
    ROOT_URL + "/images/basketnull-light.jpg",
    title
  ),
};

export default function Basketnull() {
  return <BasketnullPage lang="fa" />;
}
