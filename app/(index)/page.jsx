import { BasketnullCard } from "@/components/cards/BasketnullCard";
import { EmaEnglishCard } from "@/components/cards/EmaEnglishCard";
import { PostsContainer } from "@/components/PostsContainer";
import { PostWrapper } from "@/components/PostWrapper";
import { SwitchTheme } from "@/components/SwitchTheme";
import { vazir } from "@/utils/fonts";
import { generateHreflang } from "@/utils/generateHreflang";
import Link from "next/link";

export const metadata = {
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Frontend",
    "Mitinull",
    "Portfolio",
    "Blog",
    "Projects",
    "Game",
    "Game Development",
    "Web Development",
    "AI",
    "Mohammad",
    "Torabi",
    "Mohammad Torabi",
  ],
  ...generateHreflang("", "en"),
};

export default function Home() {
  const lang = "en";

  return (
    <main>
      <SwitchTheme />

      <Link href="/fa" className={vazir.className}>
        فارسی
      </Link>

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
