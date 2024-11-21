import { Heading1 } from "@/components/mui-components/Heading1";
import { Heading3 } from "@/components/mui-components/Heading3";
import { PageHeader } from "@/components/mui-components/PageHeader";
import { Stack } from "@mui/system";
import { HeaderPaper } from "@/components/mui-components/HeaderPaper";
import { HeaderSpacing } from "@/components/mui-components/HeaderSpacing";
import { HeaderTextCenter } from "@/components/mui-components/HeaderTextCenter";
import {
  Brush,
  Casino,
  EmojiEvents,
  Gamepad,
  GitHub,
  Keyboard,
  Language,
  Link,
  SportsEsports,
  SportsVolleyball,
} from "@mui/icons-material";
import { Alert, Box, Container } from "@mui/material";
import { HeaderButton } from "@/components/mui-components/HeaderButton";
import { PageImage } from "@/components/mui-components/PageImage";
import { ChangeLanguage } from "@/components/mui-components/ChangeLanguage";
import { BasketnullStars } from "./BasketnullStars";
import { PageContent } from "@/components/mui-components/PageContent";
import { ParagraphMedium } from "@/components/mui-components/ParagraphMedium";
import { AparatBasketnull } from "./AparatBasketnull";
import { BasketnullLinks } from "./BasketnullLinks";
import { Heading4, HeadingLink } from "@/components/mui-components/HeadingLink";

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
          <Heading1>{en ? "Dicey Crown" : "بازی تاج پرخطر"}</Heading1>
          <Heading3>
            {en
              ? `Basketnull is a 2D web-based game that I developed using Lua and the
            Love2D framework. You can play it right now on your computer
            browser.`
              : `
              بازی تاج پرخطر (Dicey Crown) رو برای رویداد بازی‌سازی دانشگاه امیرکبیر در مدت زمان یک هفته ساختیم.
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
              <Link />
              از این لینک می‌تونید نمرات همهٔ بازی‌ها رو ببینید.
            </HeadingLink>
          </Stack>
        </HeaderSpacing>
        <HeaderSpacing>
          <Stack mt={{ xs: 6, sm: 9 }}>
            <HeaderButton
              outlined
              href="https://mitinull.itch.io/basketnull"
              target="_blank"
              Icon={EmojiEvents}
            >
              {en
                ? "Play Dicey Crown Right Now"
                : "همین الان بازی تاج پرخطر رو بازی کن"}
            </HeaderButton>
          </Stack>
          <Stack mt={{ xs: 6, sm: 10 }} spacing={2.5} mb={2}>
            <Heading3>
              {en
                ? `Basketnull is an open-source game. You can explore the source code and add
              new levels if you're interested.`
                : `
                چه کسانی این بازی را ساختند؟
            `}
            </Heading3>
          </Stack>

          <Stack mt={{ xs: 4, sm: 8 }} spacing={{ sm: 3 }}>
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
            <HeaderPaper>{en ? "Mohammad Torabi" : "محمد ترابی"}</HeaderPaper>
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
            <HeaderPaper>
              {en ? "Mohammad Torabi" : "محمدحسن روحانی"}
            </HeaderPaper>
          </Stack>
        </HeaderSpacing>
      </PageHeader>

      <Container maxWidth="md">
        <PageContent>
          <ParagraphMedium>
            کلمه‌ی "Dicey" به معنای غیرقابل‌پیش‌بینی و پر ریسک است، و این دقیقا
            همان حسی است که در این بازی تجربه می‌کنید. هیچ‌کس نمی‌داند چه کسی
            تاج را تصاحب خواهد کرد؛ اما اگر علاوه بر سرعت عمل، در ترتیب جمع‌آوری
            تاس‌ها و انتخاب زمان مناسب برای از بین بردن مهره‌های حریف استراتژی
            درستی داشته باشید، شانس شما برای پیروزی بیشتر خواهد شد.{" "}
          </ParagraphMedium>
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
            <ParagraphMedium textAlign="center">
              {en ? <>Links to Play the Game</> : <>لینک‌های اجرای بازی</>}
            </ParagraphMedium>
            <BasketnullLinks />
          </Stack>
        </PageContent>
      </Container>
    </main>
  );
}
