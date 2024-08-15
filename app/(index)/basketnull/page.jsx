import { Heading1 } from "@/components/mui-components/Heading1";
import { Heading3 } from "@/components/mui-components/Heading3";
import { PageHeader } from "@/components/mui-components/PageHeader";
import { generateHreflang } from "@/utils/generateHreflang";
import { Stack } from "@mui/system";
import Link from "next/link";
import { BasketnullStars } from "./baskentull-stars/basketnull-stars";
import { HeaderPaper } from "@/components/mui-components/HeaderPaper";
import { HeaderSpacing } from "@/components/mui-components/HeaderSpacing";
import { HeaderTextCenter } from "@/components/mui-components/HeaderTextCenter";
import { GitHub, SportsEsports, Star } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { HeaderButton } from "@/components/mui-components/HeaderButton";
import { PageImage } from "@/components/mui-components/PageImage";

export const metadata = {
  title: "Basketnull",
  description: "Basketnull is a 2d web game.",

  // ...generateHreflang("basketnull", "en"),
};

export default function Basketnull() {
  return (
    <main>
      <PageHeader>
        <HeaderSpacing vertical>
          <Heading1>Basketnull</Heading1>
          <Heading3>
            Basketnull is a 2D web-based game that I developed using Lua and the
            Love2D framework. You can play it right now on your computer
            browser.
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
            <HeaderButton Icon={SportsEsports} endIcon outlined>
              Play the Game
            </HeaderButton>
          </Stack>
          <Stack mt={{ xs: 6, sm: 10 }} spacing={2.5} mb={2}>
            <Heading3>
              Basketnull is an open source game. You can visit the code and add
              new levels if you're interested.
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
                {/* <Star sx={{ mb: 0.5 }} /> */}
                STARS ON GITHUB
                {/* <Star sx={{ mb: 0.5 }} /> */}
              </Box>
            </HeaderTextCenter>
            <HeaderPaper>
              <BasketnullStars />
            </HeaderPaper>
          </Stack>
          <Stack mt={{ xs: 4, sm: 8 }} mb={2}>
            <HeaderButton Icon={GitHub}>Visit GitHub Repository</HeaderButton>
          </Stack>
        </HeaderSpacing>
      </PageHeader>
    </main>
  );
}
