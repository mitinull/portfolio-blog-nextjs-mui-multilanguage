"use client";

import { Button, Stack, Typography } from "@mui/material";
import CommentCard from "./CommentCard";
import { useState } from "react";
import {
  Expand,
  ExpandCircleDown,
  ExpandMore,
  More,
} from "@mui/icons-material";

export function EmaComments() {
  const comments = [
    { id: 1, name: "Ahmad Javani", date: "Oct 6th", text: "Very good!" },
    { id: 1, name: "Ahmad Javani", date: "Oct 6th", text: "Very good!" },
    { id: 1, name: "Ahmad Javani", date: "Oct 6th", text: "Very good!" },
    {
      id: 1,
      name: "Ahmad Javani",
      date: "Oct 6th",
      text: "Hello guys, this teaching method was interesting for me, the only thing that seems to me is that the quality of your microphone is low.",
    },
    {
      id: 1,
      name: "Ahmad Javani",
      date: "Oct 6th",
      text: "Hello guys, this teaching method was interesting for me, the only thing that seems to me is that the quality of your microphone is low.",
    },
    {
      id: 1,
      name: "Ahmad Javani",
      date: "Oct 6th",
      text: "Hello guys, this teaching method was interesting for me, the only thing that seems to me is that the quality of your microphone is low.",
    },
    {
      id: 1,
      name: "Ahmad Javani",
      date: "Oct 6th",
      text: "Hello guys, this teaching method was interesting for me, the only thing that seems to me is that the quality of your microphone is low.",
    },
  ];

  const [count, setCount] = useState(3);

  return (
    <Stack>
      <Stack direction={{ xs: "column", sm: "column" }} spacing={4}>
        {comments.slice(0, count).map((comment) => (
          <CommentCard
            key={comment.id}
            name={comment.name}
            date={comment.date}
            text={comment.text}
          />
        ))}
      </Stack>
      {count < comments.length && (
        <Button
          color="info"
          sx={{ mt: 3 }}
          onClick={() =>
            setCount((prev) => Math.min(prev + 3, comments.length))
          }
          // startIcon={<ExpandCircleDown />}
        >
          Show More Reviews
        </Button>
      )}
    </Stack>
  );
}
