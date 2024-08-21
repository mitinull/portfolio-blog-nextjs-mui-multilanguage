import { Heading1 } from "@/components/mui-components/Heading1";
import { Heading3 } from "@/components/mui-components/Heading3";
import { PageHeader } from "@/components/mui-components/PageHeader";
import { Stack } from "@mui/system";
import { HeaderPaper } from "@/components/mui-components/HeaderPaper";
import { HeaderSpacing } from "@/components/mui-components/HeaderSpacing";
import { HeaderTextCenter } from "@/components/mui-components/HeaderTextCenter";
import { GitHub } from "@mui/icons-material";
import { Box } from "@mui/material";
import { HeaderButton } from "@/components/mui-components/HeaderButton";
import { PageImage } from "@/components/mui-components/PageImage";
import { ChangeLanguage } from "@/components/mui-components/ChangeLanguage";
import { BasketnullStars } from "./BasketnullStars";

export function BasketnullPage({ lang }) {
  const en = lang === "en";

  return (
    <main>
      {en && (
        <ChangeLanguage en={!en} href={en ? "/fa/basketnull" : "/basketnull"} />
      )}
      <PageHeader>
        <HeaderSpacing vertical>
          <Heading1>{en ? "Basketnull" : "بسکتنال"}</Heading1>
          <Heading3>
            {en
              ? `Basketnull is a 2D web-based game that I developed using Lua and the
            Love2D framework. You can play it right now on your computer
            browser.`
              : `
            بسکتنال یک بازی دو بعدیه که با Lua و Love2D ساختم. می‌تونید همین
            الان روی «اجرای بازی» کلیک کنید تا بازی روی مرورگر کامپیوترتون باز بشه.
          `}
          </Heading3>
        </HeaderSpacing>
        <Stack mt={{ xs: 6, sm: 7 }}>
          <PageImage
            alt="EMA English Logo"
            light="/images/basketnull-light.jpg"
            dark="/images/basketnull-dark.jpg"
          />
        </Stack>
        <HeaderSpacing>
          <Stack mt={{ xs: 6, sm: 9 }}>
            <HeaderButton outlined>
              {en ? "Play the Game" : "اجرای بازی بسکتنال"}
            </HeaderButton>
          </Stack>
          <Stack mt={{ xs: 6, sm: 10 }} spacing={2.5} mb={2}>
            <Heading3>
              {en
                ? `Basketnull is an open source game. You can visit the code and add
              new levels if you're interested.`
                : `
              بسکتنال یه بازی متن بازه؛ می‌تونید کد‌های بازی رو ببینید و مرحله
              اضافه کنید.
            `}
            </Heading3>
          </Stack>

          <Stack mt={{ xs: 4, sm: 7 }} spacing={{ sm: 3 }}>
            <HeaderTextCenter fontSize={{ xs: 19.5, sm: 27 }}>
              <Box
                component="span"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { xs: 2, sm: 4 },
                }}
              >
                {en ? "STARS ON GITHUB" : "تعداد ستاره‌های گیت‌هاب"}
              </Box>
            </HeaderTextCenter>
            <HeaderPaper>
              <BasketnullStars en={en} />
            </HeaderPaper>
          </Stack>
          <Stack mt={{ xs: 4, sm: 8 }} mb={2}>
            <HeaderButton Icon={GitHub}>
              {en ? "Visit the GitHub Repo" : "بازدید از صفحه گیت‌هاب"}
            </HeaderButton>
          </Stack>
        </HeaderSpacing>
      </PageHeader>
    </main>
  );
}
