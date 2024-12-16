import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Button } from "@mui/material";
import { useState } from "react";

export default function CommentCard({ name, date, description, en }) {
  const [isOriginal, setIsOriginal] = useState(false);

  function getProfileBackgroundColor(letter) {
    // Get the ASCII code of the character
    const charCode = letter.charCodeAt(0);

    // Use a hash-like formula to generate an RGB color
    const red = (charCode * 137) % 256; // A unique constant
    const green = (charCode * 197) % 256; // Another unique constant
    const blue = (charCode * 151) % 256; // Yet another constant

    // Return the RGB color as a string
    return `rgb(${red}, ${green}, ${blue})`;
  }

  return (
    <Card sx={{ p: { xs: 1, sm: 1.5 } }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: getProfileBackgroundColor(name[0]) }}
            aria-label="recipe"
          >
            {name[0]}
          </Avatar>
        }
        title={name}
        subheader={date}
      />
      <CardContent sx={{ pt: 1 }}>
        {(en ? (isOriginal ? description.fa : description.en) : description.fa)
          .split("\n")
          .map((line, i) => (
            <Typography
              key={i}
              fontWeight={300}
              fontSize={{ xs: 16, sm: 18 }}
              sx={{ color: "text.primary" }}
            >
              {line}
            </Typography>
          ))}
        {en && (
          <Button
            size="small"
            sx={{ p: 0, pt: 1, fontSize: { xs: 12, sm: 13 }, fontWeight: 400 }}
            onClick={() => setIsOriginal((prev) => !prev)}
          >
            {isOriginal ? "view translated comment" : "view original comment"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
