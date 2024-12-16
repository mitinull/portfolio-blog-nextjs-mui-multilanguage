import { Heading1 } from "@/components/mui-components/Heading1";
import { Heading3 } from "@/components/mui-components/Heading3";
import { PageContent } from "@/components/mui-components/PageContent";
import { PageHeader } from "@/components/mui-components/PageHeader";
import { PageImage } from "@/components/mui-components/PageImage";
import { PageQuote } from "@/components/mui-components/PageQuote";
import { ParagraphMedium } from "@/components/mui-components/ParagraphMedium";
import { Podcasts, Telegram } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { EmaInfo } from "./EmaInfo";
import { HeaderSpacing } from "@/components/mui-components/HeaderSpacing";
import { HeaderButton } from "@/components/mui-components/HeaderButton";
import { EmaComments } from "./EmaComments";
import { EmaProvider } from "./EmaContext";

export function EmaEnglishPage({ lang }) {
  const en = lang === "en";

  return (
    <main>
      <EmaProvider>
        <PageHeader>
          <HeaderSpacing vertical>
            <Heading1>{en ? "EMA English" : "اِما انگلیش"}</Heading1>
            <Heading3>
              {en ? (
                <>
                  EMA English is a Persian podcast for learning English with
                  musics, songs and lyrics. 🎧📃
                </>
              ) : (
                <>
                  اِما انگلیش یک پادکست فارسیه برای یادگیری زبان انگلیسی به
                  همراه ترانه و آهنگ‌های انگلیسی.🎧📃
                </>
              )}
            </Heading3>
          </HeaderSpacing>
          <Stack mt={{ xs: 6, sm: 7 }}>
            <PageImage
              alt={en ? "EMA English Logo" : "لوگوی اما انگلیش"}
              light="/images/ema-light.jpg"
              dark="/images/ema-dark.jpg"
            />
          </Stack>
          <HeaderSpacing>
            <EmaInfo en={en} />
            <Stack mt={{ xs: 7, sm: 8 }}>
              <HeaderButton
                Icon={Podcasts}
                href="https://castbox.fm/channel/id5058728?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=EMA%20English%20%7C%20English%20Music%20%7C%20%D8%A2%D9%85%D9%88%D8%B2%D8%B4%20%D8%B2%D8%A8%D8%A7%D9%86"
                target="_blank"
              >
                {en ? <>Subscribe to Podcast</> : <>دنبال کردن پادکست</>}
              </HeaderButton>
            </Stack>
          </HeaderSpacing>
        </PageHeader>
        <Container sx={{ p: 0 }}>
          <Container maxWidth="md">
            <PageContent>
              {!en && (
                <ParagraphMedium>دربارهٔ اِما انگلیش بخوانید:</ParagraphMedium>
              )}
              <ParagraphMedium enInFa={lang === "fa"}>
                I'm neither a master at teaching English nor a music lover.
                However, English songs and music have played a significant role
                in my English learning journey, and I always wanted to share
                this experience with others.📚🤓
              </ParagraphMedium>
              <ParagraphMedium enInFa={lang === "fa"}>
                I didn't know what "glitter" meant until I heard Dua Lipa's
                voice singing,{" "}
                <PageQuote>
                  Glitter in the sky, glitter in our eyes, shining just the way
                  we are.
                </PageQuote>{" "}
                After that, I looked up the meaning of "glitter" once, and it
                was enough for me to remember it forever! Do you know why I know
                the meaning of "ambition"? Because{" "}
                <PageQuote>
                  All my friends are toxic, all ambitionless, so rude and always
                  negative!
                </PageQuote>{" "}
                (This is another song if you haven't figured it out!)
              </ParagraphMedium>
              <ParagraphMedium enInFa={lang === "fa"}>
                EMA English was created in the summer of 2022. We—Ebrahim,
                Mohammad, and Arad (or EMA)—were bored and thought, "Let's do
                something!💪" That's when we came up with the idea to record a
                podcast and teach English through lyrics, as we had been
                learning English together using song lyrics before.
              </ParagraphMedium>
              <ParagraphMedium enInFa={lang === "fa"}>
                We started recording several episodes and uploaded them to
                Castbox. Initially, we thought, "OMG, this is awful.😅" We had
                (and probably still have) bad microphones, and we couldn't speak
                fluently, even in Persian! But it was fun, so we kept doing it.
                After recording several episodes, we gained more subscribers
                than we expected. However, we got busy and stopped recording for
                a while. Eventually, with just a few episodes, we ended up with
                more than 500 subscribers without even telling anybody about the
                podcast!
              </ParagraphMedium>
              <ParagraphMedium enInFa={lang === "fa"}>
                You can listen to the Persian podcast EMA English on Castbox or
                via our Telegram channel (t.me/emaEnglish). Thanks for reading,
                and I hope there will be glitter in your eyes! ✨👀
              </ParagraphMedium>
              <Stack spacing={3.5} pt={3}>
                <Button
                  variant="contained"
                  color="warning"
                  startIcon={<Podcasts />}
                  href="https://castbox.fm/channel/id5058728?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=EMA%20English%20%7C%20English%20Music%20%7C%20%D8%A2%D9%85%D9%88%D8%B2%D8%B4%20%D8%B2%D8%A8%D8%A7%D9%86"
                  target="_blank"
                  sx={{ p: { sm: 1.5 } }}
                >
                  {en ? (
                    <>EMA English on Castbox</>
                  ) : (
                    <>اِما انگلیش در کست‌باکس</>
                  )}
                </Button>
                <Button
                  variant="contained"
                  startIcon={<Telegram />}
                  href="https://t.me/emaEnglish"
                  target="_blank"
                  sx={{ p: { sm: 1.5 } }}
                >
                  {en ? <>Visit Telegram Channel</> : <>رفتن به کانال تلگرام</>}
                </Button>
              </Stack>
              <Stack spacing={4.5} pt={4}>
                <Stack spacing={2.5}>
                  <Typography fontSize={{ xs: 32, sm: 36 }} fontWeight={300}>
                    {en ? "Audience Feedback" : "نظرات شنوندگان"}
                  </Typography>
                  <Alert severity="warning" sx={{ fontSize: 15 }}>
                    <AlertTitle>
                      {en ? "Pay Attention!" : "توجه کنید!"}
                    </AlertTitle>
                    {en
                      ? `These reviews are the latest comments from Castbox,
                        translated by Google, selected by AI, and updated every
                        hour.`
                      : `این نظرات، جدیدترین کامنت‌ها از Castbox هستند که توسط 
                         هوش مصنوعی گزینش شده‌اند و هر ساعت به‌روزرسانی می‌شوند.`}
                  </Alert>
                </Stack>
                <EmaComments en={en} />
              </Stack>
            </PageContent>
          </Container>
        </Container>
      </EmaProvider>
    </main>
  );
}
