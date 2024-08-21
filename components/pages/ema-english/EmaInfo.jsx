"use client";

import { HeaderPaper } from "@/components/mui-components/HeaderPaper";
import { HeaderTextCenter } from "@/components/mui-components/HeaderTextCenter";
import { TextLoading } from "@/components/TextLoading";
import { Stack } from "@mui/material";
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
      <Stack mt={{ xs: 5, sm: 6 }}>
        <HeaderTextCenter>CURRENT SUBSCRIBERS</HeaderTextCenter>
      </Stack>
      <HeaderPaper>
        {info ? info.subs : <TextLoading loading={!error} />}
      </HeaderPaper>
      <Stack mt={{ xs: 5, sm: 6 }}>
        <HeaderTextCenter>TOTAL PODCAST PLAYS</HeaderTextCenter>
      </Stack>
      <HeaderPaper>
        {info ? info.plays : <TextLoading loading={!error} />}
      </HeaderPaper>
    </div>
  );
}
