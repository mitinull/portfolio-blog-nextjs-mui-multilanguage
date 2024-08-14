import { Podcasts, SportsEsports } from "@mui/icons-material";
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

export function EmaEnglishCard({ lang }) {
  return (
    <MyCard>
      <CardMedia
        component="img"
        alt="basketnull game"
        image="/images/ema-light.jpg"
        className="img-light"
      />
      <CardMedia
        component="img"
        alt="basketnull game"
        image="/images/ema-dark.jpg"
        className="img-dark"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {lang === "en" ? "EMA English Podcast" : "پادکست اِما انگلیش"}
        </Typography>
        <MyCardBody>
          {lang === "en"
            ? `EMA English is a Persian podcast that helps 
            you learn English through songs and music.
             If you enjoy our podcast, feel free to subscribe.`
            : `اِما انگلیش (EMA English) یک پادکست فارسیه
            برای یادگیری زبان انگلیسی به همراه ترانه و موسیقی‌.
            اگر دوست داشتید می‌توانید پادکست ما رو دنبال کنید.`}
        </MyCardBody>
        <Stack direction="row" mt={2}>
          <Chip
            label={lang === "en" ? "content" : "تولید محتوا"}
            size="small"
            variant="outlined"
          />
        </Stack>
      </CardContent>
      <CardActions>
        <MyCardButton
          Icon={<Podcasts />}
          href="https://castbox.fm/channel/id5058728?utm_source=website&utm_medium=dlink&utm_campaign=web_share&utm_content=EMA%20English%20%7C%20English%20Music%20%7C%20%D8%A2%D9%85%D9%88%D8%B2%D8%B4%20%D8%B2%D8%A8%D8%A7%D9%86"
          newTab
        >
          {lang === "en" ? "Listen to Podcast" : "برو به صفحه پادکست"}
        </MyCardButton>
        <MyCardButton
          Icon={<CustomReadMoreIcon lang={lang} />}
          href="./ema-english"
        >
          {lang === "en" ? "Read More" : "بیشتر بخوانید"}
        </MyCardButton>
      </CardActions>
    </MyCard>
  );
}
