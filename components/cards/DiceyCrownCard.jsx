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
import Link from "next/link";

export function DiceyCrownCard({ lang }) {
  const en = lang === "en";

  return (
    <MyCard>
      <Link href="./dicey-crown">
        <CardMedia
          component="img"
          alt={en ? "dicey crown game poster" : "پوستر بازی تاج پرخطر"}
          image="/images/dicey-crown/dicey-crown-light.jpg"
          className="img-light"
        />
        <CardMedia
          component="img"
          alt={en ? "dicey crown game poster" : "پوستر بازی تاج پرخطر"}
          image="/images/dicey-crown/dicey-crown-dark.jpg"
          className="img-dark"
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {en ? "Dicey Crown" : "بازی تاج پرخطر (Dicey Crown)"}
        </Typography>
        <MyCardBody>
          {en
            ? `We developed this game in one week for Amirkabir University Gamecraft 2024. Dicey Crown ranked first out of 29 games.`
            : `این بازی رو برای مسابقه بازی‌سازی دانشگاه امیرکبیر ساختیم و موفق به کسب مقام اول شدیم.`}
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
          href="https://mitinull.itch.io/diceycrown/"
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
