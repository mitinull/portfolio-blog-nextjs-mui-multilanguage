import { BasketnullCard } from "@/components/cards/BasketnullCard";
import { EmaEnglishCard } from "@/components/cards/EmaEnglishCard";
import { SwitchTheme } from "@/components/SwitchTheme";
import { vazir } from "@/utils/fonts";
import { generateHreflang } from "@/utils/generateHreflang";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
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
  return (
    <main>
      <SwitchTheme />
      <Typography variant="h2">hello IS This Basketnull</Typography>
      <Button>what About this Basketnull</Button>
      <Box fontWeight={900} component="div" className={vazir.className}>
        اینجا یه چیزی می‌نویسم
        <Button>این فونت وزیر است</Button>
        <Typography>این تایپوگرافی است</Typography>
      </Box>
      <Link href="/fa" className={vazir.className}>
        فارسی
      </Link>
      <div>
        <Link href="./basketnull">
          <div>
            <h2>
              Basketnull <span>-&gt;</span>
            </h2>
            <p>Simple 2d game made using Love2d.</p>
          </div>
        </Link>

        <Link href="ema-english">
          <div>
            <h2>
              EMA English <span>-&gt;</span>
            </h2>
            <p>A Persian podcast to learn English with musics and songs.</p>
          </div>
        </Link>
      </div>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <BasketnullCard />
          </Grid>
          <Grid item sm={6}>
            <EmaEnglishCard />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
