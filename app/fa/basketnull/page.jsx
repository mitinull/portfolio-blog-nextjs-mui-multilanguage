import { generateHreflang } from "@/utils/generateHreflang";
import { BasketnullPage } from "@/components/pages/BasketnullPage";

export const metadata = {
  title: "Basketnull",
  description: "Basketnull is a 2d web game.",

  ...generateHreflang("basketnull", "fa"),
};

export default function Basketnull() {
  return <BasketnullPage lang="fa" />;
}
