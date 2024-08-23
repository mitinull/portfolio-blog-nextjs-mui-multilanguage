"use client";

import { ltrCache } from "@/utils/providers";
import { CacheProvider } from "@emotion/react";
import { Alert } from "@mui/material";
import Link from "next/link";

export function BasketnullLinks() {
  return (
    <CacheProvider value={ltrCache}>
      <Link href="https://basketnull.netlify.app/" target="_blank">
        <Alert color="info" dir="ltr" variant="outlined">
          https://basketnull.netlify.app/
        </Alert>
      </Link>
      <Link href="https://basketnull.liara.run/" target="_blank">
        <Alert color="info" dir="ltr" variant="outlined">
          https://basketnull.liara.run/
        </Alert>
      </Link>
    </CacheProvider>
  );
}
