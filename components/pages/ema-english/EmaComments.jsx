"use client";

import { Button, Stack, Typography } from "@mui/material";
import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";
import { TextLoading } from "@/components/TextLoading";
import { useEma } from "./EmaContext";

export function EmaComments({ en }) {
  const { info, error } = useEma();

  const [count, setCount] = useState(3);

  if (!info?.comments) return <TextLoading />;

  return (
    <Stack>
      <Stack direction={{ xs: "column", sm: "column" }} spacing={4}>
        {info.comments.slice(0, count).map((comment) => (
          // todo: key??
          <CommentCard
            // key={comment.id}
            name={comment.username}
            date={comment.date}
            description={comment.description}
            en={en}
          />
        ))}
      </Stack>
      {count < info.comments.length && (
        <Button
          color="info"
          sx={{ mt: 3 }}
          onClick={() =>
            setCount((prev) => Math.min(prev + 3, info.comments.length))
          }
          // startIcon={<ExpandCircleDown />}
        >
          Show More Reviews
        </Button>
      )}
    </Stack>
  );
}
