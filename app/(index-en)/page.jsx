import { BasketnullCard } from "@/components/cards/BasketnullCard";
import { EmaEnglishCard } from "@/components/cards/EmaEnglishCard";
import { PostsContainer } from "@/components/PostsContainer";
import { PostWrapper } from "@/components/PostWrapper";
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
  ...generateHreflangAndOg("", "en", "website"),
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
      </PostsContainer>
    </main>
  );
}
