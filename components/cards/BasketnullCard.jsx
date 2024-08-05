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

export function BasketnullCard() {
  const language = "english";
  
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
          {language === "english"
            ? "Basketnull Game"
            : "بازی بسکتنال (Basketnull)"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {language === "english"
            ? `Basketnull is a 2D web game, made by LUA and LOVE2D. You can play
        this game on a desktop browser right now.`
            : `بازی بسکتنال یک بازی دو بعدی تحت وب است. این بازی با زبان Lua و فریمورک Love2D ساخته شده است. 
          همین الان می‌توانید این بازی را توسط مرورگر کامپیوتر خود اجرا کنید.`}
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
