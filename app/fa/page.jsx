import { BasketnullCard } from "@/components/cards/BasketnullCard";
import { EmaEnglishCard } from "@/components/cards/EmaEnglishCard";
import { PostsContainer } from "@/components/PostsContainer";
import { PostWrapper } from "@/components/PostWrapper";
import { generateHreflang } from "@/utils/generateHreflang";

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
