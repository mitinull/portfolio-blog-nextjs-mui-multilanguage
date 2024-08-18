import { BasketnullPage } from "@/components/pages/BasketnullPage";
import { generateHreflang } from "@/utils/generateHreflang";

export const metadata = {
  title: "Basketnull",
  description: "Basketnull is a 2d web game.",

  ...generateHreflang("basketnull", "en"),
};

export default function Basketnull() {
  return <BasketnullPage lang="en" />;
}
