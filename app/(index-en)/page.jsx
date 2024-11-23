import { BasketnullCard } from "@/components/cards/BasketnullCard";
import { DiceyCrownCard } from "@/components/cards/DiceyCrownCard";
import { EmaEnglishCard } from "@/components/cards/EmaEnglishCard";
import { PostsContainer } from "@/components/PostsContainer";
import { PostWrapper } from "@/components/PostWrapper";
import { ROOT_URL } from "@/utils/constants";
import { generateHreflangAndOg } from "@/utils/generateHreflangAndOg";

export const metadata = {
  title: "Mitinull",
  description:
    "Mitinull's portfolio and blog present an exciting mix of web development, software engineering, and game development projects, along with creative works and personal projects.",
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

  ...generateHreflangAndOg(
    "",
    "en",
    "website",
    ROOT_URL + "/images/mitinull.jpg",
    "mitinull - bicycle at night",
    800,
    800
  ),
};

export default function Home() {
  const lang = "en";

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
