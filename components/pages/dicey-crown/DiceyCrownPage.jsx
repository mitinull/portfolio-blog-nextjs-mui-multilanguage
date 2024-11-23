import { Heading1 } from "@/components/mui-components/Heading1";
import { Heading3 } from "@/components/mui-components/Heading3";
import { PageHeader } from "@/components/mui-components/PageHeader";
import { Stack } from "@mui/system";
import { HeaderPaper } from "@/components/mui-components/HeaderPaper";
import { HeaderSpacing } from "@/components/mui-components/HeaderSpacing";
import { HeaderTextCenter } from "@/components/mui-components/HeaderTextCenter";
import {
  Brush,
  EmojiEvents,
  GitHub,
  Keyboard,
  Link as LinkIcon,
  LinkedIn,
  SportsEsports,
} from "@mui/icons-material";
import { Alert, Box, Container } from "@mui/material";
import { HeaderButton } from "@/components/mui-components/HeaderButton";
import { PageImage } from "@/components/mui-components/PageImage";
import { ChangeLanguage } from "@/components/mui-components/ChangeLanguage";
import { PageContent } from "@/components/mui-components/PageContent";
import { ParagraphMedium } from "@/components/mui-components/ParagraphMedium";
import { PlayDiceyCrownLinks } from "./PlayDiceyCrownLinks";
import { HeadingLink } from "@/components/mui-components/HeadingLink";
import Image from "next/image";
import Link from "next/link";
import { Heading2 } from "@/components/mui-components/Heading2";
import { DownloadDiceyCrownLinks } from "./DownloadDiceyCrownLinks";

export function DiceyCrownPage({ lang }) {
  const en = lang === "en";

  return (
    <main>
      {en && (
        <ChangeLanguage
          en={!en}
          href={en ? "/fa/dicey-crown" : "/dicey-crown"}
        />
      )}
      <PageHeader>
        <HeaderSpacing vertical>
          <Heading1>{en ? "Dicey Crown 👑" : "تاج پرخطر 👑"}</Heading1>
          <Heading3>
            {en
              ? `We developed this game in one week for AUT Gamecraft 2024 (the Amirkabir University Game Development Contest). The game, Dicey Crown, scored 7.35 and ranked first out of 29 submissions. 🥇`
              : `این بازی رو در مدت زمان یک هفته برای رویداد بازی‌سازی دانشگاه امیرکبیر ساختیم. اسم بازی Dicey Crown یا همون تاج پرخطره که از بین ۲۹ بازی ساخته شده با امتیاز ۷٫۳۵ مقام اول رو کسب کرد. 🥇`}
          </Heading3>
        </HeaderSpacing>
        <Stack mt={{ xs: 6, sm: 7 }}>
          <PageImage
            alt={
              en
                ? "Gamecraft 2024 Ranking"
                : "نتایج مسابقه بازی سازی امیرکبیر ۲۰۲۴"
            }
            light="/images/dicey-crown/gamecraft-rank-light.png"
            dark="/images/dicey-crown/gamecraft-rank-dark.png"
          />
        </Stack>
        <HeaderSpacing>
          <Stack mt={{ xs: 3, sm: 5 }}>
            <HeadingLink
              href={
                "https://docs.google.com/spreadsheets/d/1LdULLXmQyB846764SGRXG4ko22doHWnpvZGhf4nsJHQ/edit?gid=0#gid=0"
              }
            >
              <LinkIcon />
              {en
                ? "You can view the scores of all the games from this link."
                : "از این لینک می‌تونید نمرات همهٔ بازی‌ها رو ببینید."}
            </HeadingLink>
          </Stack>
        </HeaderSpacing>
        <HeaderSpacing>
          <Stack mt={{ xs: 7, sm: 11 }} spacing={{ sm: 3 }}>
            <HeaderTextCenter fontSize={{ xs: 17.5, sm: 24 }}>
              <Box
                component="span"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { xs: 2, sm: 2 },
                }}
              >
                {/* <Keyboard /> */}
                {en
                  ? "Programming and Level Design"
                  : "برنامه نویس و طراح مرحله"}
              </Box>
            </HeaderTextCenter>
            <HeaderPaper smaller morePadding>
              <Stack
                component={"span"}
                direction={"row"}
                alignItems={"center"}
                gap={{ xs: 1.5, sm: 2 }}
                justifyContent={"center"}
              >
                {en ? "Mohammad Torabi" : "محمد ترابی"}
                <Stack
                  component={Link}
                  href={"https://github.com/mitinull"}
                  target="_blank"
                >
                  <GitHub fontSize="inherit" />
                </Stack>
              </Stack>
            </HeaderPaper>
          </Stack>
          <Stack mt={{ xs: 4, sm: 7 }} spacing={{ sm: 3 }}>
            <HeaderTextCenter fontSize={{ xs: 17.5, sm: 24 }}>
              <Box
                component="span"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { xs: 2, sm: 2 },
                }}
              >
                {/* <Brush /> */}
                {en ? "Art and Menu Design" : "گرافیست و طراح منو"}
              </Box>
            </HeaderTextCenter>
            <HeaderPaper smaller morePadding>
              <Stack
                component={"span"}
                direction={"row"}
                alignItems={"center"}
                gap={{ xs: 1.5, sm: 2 }}
                justifyContent={"center"}
              >
                {en ? "Mohammad Hassan Rouhani" : "محمدحسن روحانی"}
                <Stack
                  component={Link}
                  href={
                    "https://linkedin.com/in/mohammad-hassan-rouhani-501ab5287"
                  }
                  target="_blank"
                >
                  <LinkedIn fontSize="inherit" />
                </Stack>
              </Stack>
            </HeaderPaper>
          </Stack>

          <Stack mt={{ xs: 6, sm: 9 }}>
            <HeaderButton
              // outlined
              href="https://mitinull.itch.io/diceycrown"
              target="_blank"
              Icon={SportsEsports}
            >
              {en
                ? "Play Dicey Crown Right Now"
                : "همین الان بازی تاج پرخطر رو بازی کن"}
            </HeaderButton>
          </Stack>
        </HeaderSpacing>
      </PageHeader>

      <Container maxWidth="md">
        <PageContent>
          <Stack spacing={{ xs: 4, sm: 6 }}>
            <Heading2>
              {en
                ? "What Was the Theme of AUT Gamecraft 2024?"
                : "موضوع مسابقه «AUT_Gamecraft_2024»"}
            </Heading2>
            <ParagraphMedium>
              {en
                ? `
              The theme of the AUT Gamecraft 2024 contest was quite innovative:
              it was based on a single image! Our task was to design a game
              inspired by this image, ensuring the connection between the theme
              and the game was clear. The game was expected to have certain
              features, such as being multiplayer or incorporating elements from
              classic board games like chess or Ludo. Fortunately, we scored
              well in the theme category!`
                : `
                            موضوع مسابقه به طرز جالب و نوآورانه‌ای یک تصویر بود! وظیفه ما این
              بود که با الهام از این تصویر، بازی‌ای طراحی کنیم که ارتباط اون با
              موضوع و تِم کاملاً مشهود باشه. بهتر بود که بازی طراحی‌شده
              ویژگی‌های خاصی داشته باشه مثلا چندنفره باشه یا از عناصر بازی‌های
              تخته‌ای کلاسیک (مثل شطرنج یا منچ) استفاده کنه. خوشبختانه از قسمت
              تِم امتیاز خوبی گرفتیم.

              `}
            </ParagraphMedium>
          </Stack>
        </PageContent>
      </Container>

      <Stack mx={2}>
        <Stack
          width="100%"
          maxWidth={1000}
          mt={{ xs: 5, sm: 7 }}
          mx="auto"
          borderRadius={2}
          alignItems="center"
          overflow="hidden"
        >
          <Image
            src="/images/dicey-crown/gamecraft-poster.jpg"
            alt={
              en
                ? "Gamecraft 2024 theme"
                : "تصویر موضوع مسابقه بازی‌سازی امیرکبیر"
            }
            width="1920"
            height="1080"
            style={{ width: "100%", height: "auto" }}
          />
        </Stack>
      </Stack>

      <Container maxWidth="md">
        <PageContent>
          <Stack spacing={{ xs: 4, sm: 6 }}>
            <Heading2>
              {en
                ? 'Description and Gameplay of "Dicey Crown"'
                : "توضیحات و گیم‌پلی بازی «Dicey_Crown»"}
            </Heading2>

            <ParagraphMedium>
              {en
                ? `
              The word "Dicey" means unpredictable and risky, which perfectly captures the feeling experienced in this game. No one knows who will claim the crown, but if you have a good strategy in collecting dice and timing the elimination of opponent's pieces, alongside quick reflexes, your chances of victory increase.
              `
                : `
              کلمهٔ «Dicey» به معنای غیرقابل‌پیش‌بینی و پر ریسک است، و این دقیقا
              همان حسی است که در این بازی تجربه می‌کنید. هیچ‌کس نمی‌داند چه کسی
              تاج را تصاحب خواهد کرد؛ اما اگر علاوه بر سرعت عمل، در ترتیب
              جمع‌آوری تاس‌ها و انتخاب زمان مناسب برای از بین بردن مهره‌های حریف
              استراتژی درستی داشته باشید، شانس شما برای پیروزی بیشتر خواهد شد.
            `}
            </ParagraphMedium>
          </Stack>
        </PageContent>
      </Container>
      <Stack mx={2}>
        <Stack
          width="100%"
          maxWidth={1000}
          mt={{ xs: 5, sm: 7 }}
          mx="auto"
          borderRadius={2}
          alignItems="center"
          overflow="hidden"
        >
          <video
            width="1920"
            height="1080"
            controls
            // preload="none"
            style={{ width: "100%", height: "auto" }}
          >
            <source src="/videos/Dicey-Crown-Gameplay.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Stack>
      </Stack>

      <Container maxWidth="md">
        <PageContent>
          <Stack spacing={{ xs: 3, sm: 5 }} pt={2}>
            <Heading2>
              {en
                ? `Links to Play the Game (Web Version)`
                : `لینک‌های اجرای بازی (نسخهٔ تحت وب)`}
            </Heading2>
            <PlayDiceyCrownLinks />
          </Stack>
        </PageContent>
      </Container>

      <Container maxWidth="md">
        <PageContent>
          <Stack spacing={{ xs: 3, sm: 5 }} pt={2}>
            <Heading2>
              {en ? `Download the Game (Windows)` : `لینک دانلود بازی (ویندوز)`}
            </Heading2>
            <DownloadDiceyCrownLinks />
          </Stack>
        </PageContent>
      </Container>
    </main>
  );
}
