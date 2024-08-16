"use client";

import { vazir } from "@/utils/fonts";
import { ltrCache, rtlCache } from "@/utils/providers";
import { CacheProvider } from "@emotion/react";
import { Alert } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ChangeLanguage({ en, href }) {
  const [closed, setClosed] = useState(false);

  const router = useRouter();

  return closed ? null : (
    <CacheProvider value={en ? ltrCache : rtlCache}>
      <Alert
        dir={en ? "ltr" : "rtl"}
        icon
        onClose={(e) => {
          e.stopPropagation();
          setClosed(true);
        }}
        onClick={() => {
          router.push(href);
        }}
        sx={{
          ":hover": { cursor: "pointer" },
          fontFamily: vazir.style.fontFamily,
        }}
      >
        {en
          ? "Click here to read this page in English"
          : "برای خواندن این صفحه به فارسی اینجا کلیک کنید."}
      </Alert>
    </CacheProvider>
  );
}
