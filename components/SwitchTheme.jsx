"use client";

import { Button, useColorScheme } from "@mui/material";

export function SwitchTheme() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const alternativeScheme = colorScheme === "light" ? "dark" : "light";

  return (
    <Button
      onClick={() => {
        setColorScheme(alternativeScheme);
      }}
    >
      <span className="img-dark">Light</span>
      <span className="img-light">Dark</span>
    </Button>
  );
}
