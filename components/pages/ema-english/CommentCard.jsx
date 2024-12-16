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

  return (
    <Card sx={{ p: { xs: 1, sm: 1.5 } }}>
      <CardHeader
        avatar={
          // todo: different color for each letter.
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
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
            sx={{ p: 0 }}
            onClick={() => setIsOriginal((prev) => !prev)}
          >
            {isOriginal ? "show translated comment" : "show original comment"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
