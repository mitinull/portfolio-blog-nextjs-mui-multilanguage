"use client";

import { Box, Typography } from "@mui/material";
import { PulseLoader } from "react-spinners";

export function TextLoading({ loading = true }) {
  return loading ? (
    <PulseLoader color="gray" size={14} />
  ) : (
    <Box component="span" color="gray">
      Unavailable
    </Box>
  );
}
