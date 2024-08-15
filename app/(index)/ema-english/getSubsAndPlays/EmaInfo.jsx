"use client";

import { TextLoading } from "@/components/TextLoading";
import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export function EmaInfo() {
  const [info, setInfo] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getEmaEnglishInfo() {
      const res = await fetch("/api/ema-english-info");

      const data = await res.json();

      if (res.ok) {
        setInfo(data);
      } else {
        console.error(data);
        setError(true);
      }
    }

    getEmaEnglishInfo();
  }, []);

  return (
    <div>
      <Typography
        textAlign="center"
        fontSize={{ xs: 18, sm: 25 }}
        mt={{ xs: 5, sm: 8 }}
        fontWeight={300}
      >
        CURRENT SUBSCRIBERS
      </Typography>
      <Paper
        sx={{
          p: { xs: 1, sm: 1.2 },
          my: { xs: 1.7, sm: 2 },
          borderRadius: { xs: 100, sm: 1 },
        }}
      >
        <Typography
          textAlign="center"
          fontSize={{ xs: 28, sm: 46 }}
          fontWeight={300}
        >
          {info ? info.subs : <TextLoading loading={!error} />}
        </Typography>
      </Paper>
      <Typography
        textAlign="center"
        fontSize={{ xs: 18, sm: 25 }}
        mt={{ xs: 5, sm: 6 }}
        fontWeight={300}
      >
        TOTAL PODCAST PLAYS
      </Typography>
      <Paper
        sx={{
          p: { xs: 1, sm: 1.2 },
          my: { xs: 1.7, sm: 2 },
          borderRadius: { xs: 100, sm: 1 },
        }}
      >
        <Typography
          textAlign="center"
          fontSize={{ xs: 28, sm: 46 }}
          fontWeight={300}
        >
          {info ? info.plays : <TextLoading loading={!error} />}
        </Typography>
      </Paper>
    </div>
  );
}
