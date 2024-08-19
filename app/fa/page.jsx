import { BasketnullCard } from "@/components/cards/BasketnullCard";
import { EmaEnglishCard } from "@/components/cards/EmaEnglishCard";
import { PostsContainer } from "@/components/PostsContainer";
import { PostWrapper } from "@/components/PostWrapper";
import { SwitchTheme } from "@/components/SwitchTheme";
import { generateHreflang } from "@/utils/generateHreflang";
import Link from "next/link";

export const metadata = {
  keywords: [
    "Next.js",
    "React",
    "ری اکت",
    "ری‌اکت",
    "فرانت",
    "Mitinull",
    "میتینال",
    "Portfolio",
    "پورتفولیو",
    "Blog",
    "وبلاگ",
    "بازی",
    "بازی سازی",
    "توسعه وب",
    "هوش مصنوعی",
    "محمد",
    "ترابی",
    "محمد ترابی",
  ],
  ...generateHreflang("", "fa"),
};

export default function Home() {
  const lang = "fa";

  return (
    <main>
      <PostsContainer>
        <PostWrapper>
          <BasketnullCard lang={lang} />
        </PostWrapper>
        <PostWrapper>
          <EmaEnglishCard lang={lang} />
        </PostWrapper>
      </PostsContainer>
    </main>
  );
}
