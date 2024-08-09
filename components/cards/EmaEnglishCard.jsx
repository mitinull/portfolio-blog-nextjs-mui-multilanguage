import { ReadMore, Link as LinkIcon } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

export function EmaEnglishCard() {
  const language = "english";

  return (
    <Card>
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
          {language === "english"
            ? "Basketnull Game"
            : "بازی بسکتنال (Basketnull)"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A Persian podcast to learn English with musics and songs.
        </Typography>
        <Stack direction="row" mt={2}>
          <Chip
            label={language === "english" ? "Game" : "بازی سازی"}
            size="small"
            variant="outlined"
          />
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">
          <LinkIcon sx={{ fontSize: 18 }} />
          {language === "english" ? "Play the Game" : "رفتن به سایت"}
        </Button>
        <Button size="small">
          <ReadMore
            sx={{
              fontSize: 18,
              scale: language === "english" ? "1" : "-1",
            }}
          />
          {language === "english" ? "Read More" : "بیشتر بخوانید"}
        </Button>
      </CardActions>
    </Card>
  );
}
