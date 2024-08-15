import { Heading1 } from "@/components/mui-components/Heading1";
import { Heading3 } from "@/components/mui-components/Heading3";
import { PageContent } from "@/components/mui-components/PageContent";
import { PageHeader } from "@/components/mui-components/PageHeader";
import { PageImage } from "@/components/mui-components/PageImage";
import { PageQuote } from "@/components/mui-components/PageQuote";
import { ParagraphMedium } from "@/components/mui-components/ParagraphMedium";
import { Podcasts } from "@mui/icons-material";
import { Box, Button, Container, Stack } from "@mui/material";
import Link from "next/link";
import { EmaInfo } from "./getSubsAndPlays/EmaInfo";
import { HeaderSpacing } from "@/components/mui-components/HeaderSpacing";

export const metadata = {
  title: "EMA English",
  description: "EMA English is a persian podcast.",

  // ...generateHreflang("ema-english", "en"),
};

export default async function Basketnull() {
  return (
    <main>
      <PageHeader>
        <HeaderSpacing vertical>
          <Heading1>EMA English</Heading1>
          <Heading3>
            EMA English is a Persian podcast for learning English with musics,
            songs and lyrics. 🎧📃
          </Heading3>
        </HeaderSpacing>
        <Stack mt={{ xs: 6, sm: 7 }}>
          <PageImage
            alt="EMA English Logo"
            light="/images/ema-light.jpg"
            dark="/images/ema-dark.jpg"
          />
        </Stack>
        <HeaderSpacing>
          <EmaInfo />
          <Stack mt={{ xs: 7, sm: 8 }}>
            <Button
              variant="text"
              color="inherit"
              startIcon={<Podcasts />}
              sx={{ borderRadius: { xs: 100, sm: 1 }, p: { xs: 1.5, sm: 2.5 } }}
              size="large"
            >
              Subscribe to Podcast
            </Button>
          </Stack>
        </HeaderSpacing>
      </PageHeader>
      <Container sx={{ p: 0 }}>
        <Container maxWidth="md">
          <PageContent>
            <ParagraphMedium>
              I'm neither a master at teaching English nor a music lover.
              However, English songs and music have played a significant role in
              my English learning journey, and I wanted to share this experience
              with others.📚🤓
            </ParagraphMedium>
            <ParagraphMedium>
              I didn't know what "glitter" meant until I heard Dua Lipa's voice
              singing,{" "}
              <PageQuote>
                Glitter in the sky, glitter in our eyes, shining just the way we
                are.
              </PageQuote>{" "}
              After that, I looked up the meaning of "glitter" once, and it was
              enough for me to remember it forever! Do you know why I know the
              meaning of "ambition"? Because{" "}
              <PageQuote>
                All my friends are toxic, all ambitionless, so rude and always
                negative!
              </PageQuote>{" "}
              (This is another song if you haven't figured it out!)
            </ParagraphMedium>
            <ParagraphMedium>
              EMA English was created in the summer of 2022. We—Ebrahim,
              Mohammad, and Arad (or EMA)—were bored and thought, "Let's do
              something!💪" That's when we came up with the idea to record a
              podcast and teach English through lyrics, as we had been learning
              English together using song lyrics before.
            </ParagraphMedium>
            <ParagraphMedium>
              We started recording several episodes and uploaded them to
              Castbox. Initially, we thought, "OMG, this is awful.😅" We had
              (and probably still have) bad microphones, and we couldn't speak
              fluently, even in Persian! But it was fun, so we kept doing it.
              After recording several episodes, we gained more subscribers than
              we expected. However, we got busy and stopped recording for a
              while. Eventually, with just a few episodes, we ended up with more
              than 500 subscribers without even telling anybody about the
              podcast!
            </ParagraphMedium>
            <ParagraphMedium>
              You can subscribe to the Persian podcast EMA English on Castbox,
              follow our Telegram channel (@emaEnglish), or listen to episodes
              on the EMA English page on Castbox. Thanks for reading, and I hope
              there will be glitter in your eyes! ✨👀
            </ParagraphMedium>
          </PageContent>
        </Container>
        <Link href="/">Home</Link>
      </Container>
    </main>
  );
}
