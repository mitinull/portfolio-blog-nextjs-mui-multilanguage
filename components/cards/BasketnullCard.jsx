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
import { MyCardButton } from "../MyCardButton";
import { CustomReadMoreIcon } from "../CustomReadMoreIcon";

export function BasketnullCard({ lang }) {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="basketnull game"
        image="/images/basketnull-light.jpg"
        className="img-light"
      />
      <CardMedia
        component="img"
        alt="basketnull game"
        image="/images/basketnull-dark.jpg"
        className="img-dark"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {lang === "en" ? "Basketnull Game" : "بازی بسکتنال (Basketnull)"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {lang === "en"
            ? `Basketnull is a 2D web-based game 
            that I developed using Lua and the Love2D framework.
             You can play it right now on your computer browser.`
            : `بازی بسکتنال یک بازی دو بعدی تحت وبه.
             این بازی رو با زبان Lua و فریمورک Love2D ساختم. 
          همین الان می‌توانید این بازی رو با مرورگر کامپیوتر خود اجرا کنید.`}
        </Typography>
        <Stack direction="row" mt={2}>
          <Chip
            label={lang === "en" ? "Game" : "بازی سازی"}
            size="small"
            variant="outlined"
          />
        </Stack>
      </CardContent>
      <CardActions>
        <MyCardButton Icon={<SportsEsports />}>
          {lang === "en" ? "Play the Game" : "همین الان بازی کن"}
        </MyCardButton>
        <MyCardButton Icon={<CustomReadMoreIcon lang={lang} />}>
          {lang === "en" ? "Read More" : "بیشتر بخوانید"}
        </MyCardButton>
      </CardActions>
    </Card>
  );
}
