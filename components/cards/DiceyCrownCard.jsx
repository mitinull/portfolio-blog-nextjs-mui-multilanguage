import { SportsEsports } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { MyCardButton } from "../mui-components/MyCardButton";
import { CustomReadMoreIcon } from "../CustomReadMoreIcon";
import { MyCardBody } from "../mui-components/MyCardBody";
import { MyCard } from "../mui-components/MyCard";

export function DiceyCrownCard({ lang }) {
  const en = lang === "en";

  return (
    <MyCard>
      <CardMedia
        component="img"
        alt={en ? "dicey crown game poster" : "پوستر بازی بسکتنال"}
        image="/images/dicey-crown/dicey-crown-light.jpg"
        className="img-light"
      />
      <CardMedia
        component="img"
        alt={en ? "dicey crown game poster" : "پوستر بازی بسکتنال"}
        image="/images/dicey-crown/dicey-crown-dark.jpg"
        className="img-dark"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {en ? "Dicey Crown" : "بازی بسکتنال (Basketnull)"}
        </Typography>
        <MyCardBody>
          {en
            ? `Basketnull is a 2D web-based game 
            that I developed using Lua and the Love2D framework.
             You can play it right now on your computer browser.`
            : `بازی بسکتنال یک بازی دو بعدی تحت وبه.
             این بازی رو با زبان Lua و فریمورک Love2D ساختم. 
          همین الان می‌تونید این بازی رو با مرورگر کامپیوترتون اجرا کنید.`}
        </MyCardBody>
        <Stack direction="row" mt={2}>
          <Chip
            label={en ? "Game Dev" : "بازی سازی"}
            size="small"
            variant="outlined"
          />
        </Stack>
      </CardContent>
      <CardActions>
        <MyCardButton
          Icon={<SportsEsports />}
          href="https://basketnull.netlify.app/"
          newTab
        >
          {en ? "Play the Game" : "همین الان بازی کن"}
        </MyCardButton>
        <MyCardButton
          Icon={<CustomReadMoreIcon lang={lang} />}
          href="./dicey-crown"
        >
          {en ? "Read More" : "بیشتر بخوانید"}
        </MyCardButton>
      </CardActions>
    </MyCard>
  );
}
