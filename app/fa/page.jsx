import { BasketnullCard } from "@/components/cards/BasketnullCard";
import { DiceyCrownCard } from "@/components/cards/DiceyCrownCard";
import { EmaEnglishCard } from "@/components/cards/EmaEnglishCard";
import { PostsContainer } from "@/components/PostsContainer";
import { PostWrapper } from "@/components/PostWrapper";
import { ROOT_URL } from "@/utils/constants";
import { generateHreflangAndOg } from "@/utils/generateHreflangAndOg";

export const metadata = {
  title: "میتینال",
  description:
    "پورتفولیو و وبلاگ میتینال مجموعه‌ای هیجان‌انگیز از پروژه‌های توسعه وب، مهندسی نرم‌افزار و توسعه بازی، همراه با آثار خلاقانه و پروژه‌های شخصی را ارائه می‌دهند.",
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

  ...generateHreflangAndOg(
    "",
    "fa",
    "website",
    ROOT_URL + "/images/mitinull.jpg",
    "میتینال - دوچرخه در شب",
    800,
    800
  ),
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
        <PostWrapper>
          <DiceyCrownCard lang={lang} />
        </PostWrapper>
      </PostsContainer>
    </main>
  );
}
