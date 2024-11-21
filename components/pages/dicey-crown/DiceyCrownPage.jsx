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
          <Heading1>{en ? "Dicey Crown" : "تاج پرخطر (Dicey Crown)"}</Heading1>
          <Heading3>
            {en
              ? `Basketnull is a 2D web-based game that I developed using Lua and the
            Love2D framework. You can play it right now on your computer
            browser.`
              : `
              این بازی رو برای رویداد بازی‌سازی دانشگاه امیرکبیر در مدت زمان یک هفته ساختیم.
               این بازی از میان ۲۹ بازی ساخته شده با امتیاز 7.35 مقام اول رو کسب کرد.
          `}
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
              از این لینک می‌تونید نمرات همهٔ بازی‌ها رو ببینید.
            </HeadingLink>
          </Stack>
        </HeaderSpacing>
        <HeaderSpacing>
          <Stack mt={{ xs: 5, sm: 7 }} spacing={{ sm: 3 }}>
            <HeaderTextCenter fontSize={{ xs: 19.5, sm: 22 }}>
              <Box
                component="span"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { xs: 2, sm: 2 },
                }}
              >
                <Keyboard />
                {en ? "STARS ON GITHUB" : "برنامه نویس و طراح مرحله"}
              </Box>
            </HeaderTextCenter>
            <HeaderPaper smaller>
              {en ? "Mohammad Torabi" : "محمد ترابی"}
              <Link href={"https://github.com/mitinull"} target="_blank">
                <GitHub />
              </Link>
            </HeaderPaper>
          </Stack>
          <Stack mt={{ xs: 4, sm: 6 }} spacing={{ sm: 3 }}>
            <HeaderTextCenter fontSize={{ xs: 19.5, sm: 22 }}>
              <Box
                component="span"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { xs: 2, sm: 2 },
                }}
              >
                <Brush />
                {en ? "STARS ON GITHUB" : "گرافیست و طراح منو"}
              </Box>
            </HeaderTextCenter>
            <HeaderPaper smaller>
              {en ? "Mohammad Torabi" : "محمدحسن روحانی"}
              <Link
                href={
                  "https://linkedin.com/in/mohammad-hassan-rouhani-501ab5287"
                }
                target="_blank"
              >
                <LinkedIn />
              </Link>
            </HeaderPaper>
          </Stack>

          <Stack mt={{ xs: 6, sm: 9 }}>
            <HeaderButton
              // outlined
              href="https://mitinull.itch.io/diceycrown"
              target="_blank"
              Icon={EmojiEvents}
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
          <Stack spacing={4}>
            <Heading2>موضوع مسابقه</Heading2>
            <ParagraphMedium>
              موضوع مسابقه به طرز جالب و نوآورانه‌ای یک تصویر بود! وظیفه ما این
              بود که با الهام از این تصویر، بازی‌ای طراحی کنیم که ارتباط اون با
              موضوع و تِم کاملاً مشهود باشه. بهتر بود که بازی طراحی‌شده
              ویژگی‌های خاصی داشته باشه مثلا چندنفره باشه یا از عناصر بازی‌های
              تخته‌ای کلاسیک (مثل شطرنج یا منچ) استفاده کنه. خوشبختانه از قسمت
              تِم امتیاز خوبی گرفتیم.
            </ParagraphMedium>
          </Stack>
        </PageContent>
      </Container>

      <Stack mx={2}>
        <Stack
          width="100%"
          maxWidth={1000}
          mt={5}
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
          <Stack spacing={4}>
            <Heading2>توضیحات و گیم‌پلی بازی «Dicey Crown»</Heading2>

            <ParagraphMedium>
              کلمهٔ «Dicey» به معنای غیرقابل‌پیش‌بینی و پر ریسک است، و این دقیقا
              همان حسی است که در این بازی تجربه می‌کنید. هیچ‌کس نمی‌داند چه کسی
              تاج را تصاحب خواهد کرد؛ اما اگر علاوه بر سرعت عمل، در ترتیب
              جمع‌آوری تاس‌ها و انتخاب زمان مناسب برای از بین بردن مهره‌های حریف
              استراتژی درستی داشته باشید، شانس شما برای پیروزی بیشتر خواهد شد.{" "}
            </ParagraphMedium>
          </Stack>
        </PageContent>
      </Container>
      <Stack mx={2}>
        <Stack
          width="100%"
          maxWidth={1000}
          mt={5}
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
            <source src="/videos/Dicey-Crown-Gameplay-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Stack>
      </Stack>

      <Container maxWidth="md">
        <PageContent>
          <Stack spacing={{ xs: 3, sm: 5 }} pt={2}>
            <Heading2>لینک‌های اجرای بازی</Heading2>
            <PlayDiceyCrownLinks />
          </Stack>
        </PageContent>
      </Container>

      <Container maxWidth="md">
        <PageContent>
          <Stack spacing={{ xs: 3, sm: 5 }} pt={2}>
            <Heading2>لینک دانلود بازی (ویندوز)</Heading2>
            <DownloadDiceyCrownLinks />
          </Stack>
        </PageContent>
      </Container>
    </main>
  );
}
