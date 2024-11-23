"use client";

import { ltrCache } from "@/utils/providers";
import { CacheProvider } from "@emotion/react";
import { Alert } from "@mui/material";
import Link from "next/link";

export function DownloadDiceyCrownLinks() {
  return (
    <CacheProvider value={ltrCache}>
      <Link
        href="https://drive.google.com/file/d/1RALNXEb5d0FONK2vL-f4Rt0QfMFyCKiI/view?usp=sharing"
        target="_blank"
      >
        <Alert
          color="info"
          dir="ltr"
          variant="outlined"
          sx={{ fontSize: { sm: 16 } }}
        >
          https://drive.google.com/file/d/1RALNXEb5d0FONK2vL-f4Rt0QfMFyCKiI/view?usp=sharing
        </Alert>
      </Link>
    </CacheProvider>
  );
}
