import { Home } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";

export function GoToHomeButton({ lang }) {
  return (
    <Button
      LinkComponent={Link}
      href={lang === "en" ? "/" : "/fa"}
      fullWidth
      startIcon={<Home />}
      sx={{ borderRadius: 0, p: 3.5, pb: 3.5, my: 4 }}
    >
      {lang === "en" ? "Go to Homepage" : "برو به صفحهٔ اصلی"}
    </Button>
  );
}
