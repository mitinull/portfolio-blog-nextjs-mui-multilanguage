"use client";

import { Button, useColorScheme } from "@mui/material";
import { useEffect, useState } from "react";

export function SwitchTheme() {
  const { mode, setMode } = useColorScheme();

  const alternateTheme = mode === "light" ? "dark" : "light";

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      onClick={() => {
        setMode(alternateTheme);
      }}
    >
      {alternateTheme}
    </Button>
  );
}
