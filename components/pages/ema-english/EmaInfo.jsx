"use client";

import { HeaderPaper } from "@/components/mui-components/HeaderPaper";
import { HeaderTextCenter } from "@/components/mui-components/HeaderTextCenter";
import { TextLoading } from "@/components/TextLoading";
import { numberToPersian } from "@/utils/numberToPersian";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

export function EmaInfo({ en }) {
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
        <HeaderTextCenter>
          {en ? <>CURRENT SUBSCRIBERS</> : <>تعداد دنبال کنندگان</>}
        </HeaderTextCenter>
      </Stack>
      <HeaderPaper>
        {info ? (
          en ? (
            info.subs
          ) : (
            numberToPersian(info.subs)
          )
        ) : (
          <TextLoading loading={!error} />
        )}
      </HeaderPaper>
      <Stack mt={{ xs: 5, sm: 6 }}>
        <HeaderTextCenter>
          {en ? <>TOTAL PODCAST PLAYS</> : <>تعداد دفعات پخش</>}
        </HeaderTextCenter>
      </Stack>
      <HeaderPaper>
        {info ? (
          en ? (
            info.plays
          ) : (
            numberToPersian(info.plays)
          )
        ) : (
          <TextLoading loading={!error} />
        )}
      </HeaderPaper>
    </div>
  );
}
