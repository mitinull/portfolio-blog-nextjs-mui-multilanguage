"use client";

import { ltrCache } from "@/utils/providers";
import { CacheProvider } from "@emotion/react";
import { Alert } from "@mui/material";
import Link from "next/link";

export function PlayDiceyCrownLinks() {
  return (
    <CacheProvider value={ltrCache}>
      <Link href="https://mitinull.itch.io/diceycrown" target="_blank">
        <Alert
          color="info"
          dir="ltr"
          variant="outlined"
          sx={{ fontSize: { sm: 16 } }}
        >
          https://mitinull.itch.io/diceycrown
        </Alert>
      </Link>
      <Link href="https://diceycrown.netlify.app/" target="_blank">
        <Alert
          color="info"
          dir="ltr"
          variant="outlined"
          sx={{ fontSize: { sm: 16 } }}
        >
          https://diceycrown.netlify.app/
        </Alert>
      </Link>
      <Link href="https://diceycrown.liara.run/" target="_blank">
        <Alert
          color="info"
          dir="ltr"
          variant="outlined"
          sx={{ fontSize: { sm: 16 } }}
        >
          https://diceycrown.liara.run/
        </Alert>
      </Link>
    </CacheProvider>
  );
}
