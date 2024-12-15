import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

export default function CommentCard({ name, date, text }) {
  return (
    <Card sx={{ p: { xs: 1, sm: 1.5 } }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name[0].toUpperCase()}
          </Avatar>
        }
        title={name}
        subheader={date}
      />
      <CardContent sx={{ pt: 1 }}>
        <Typography
          fontWeight={300}
          fontSize={{ xs: 16, sm: 18 }}
          sx={{ color: "text.primary" }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
