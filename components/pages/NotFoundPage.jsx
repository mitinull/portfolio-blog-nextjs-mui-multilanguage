import { ErrorOutline } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export function NotFoundPage({ lang }) {
  const isFa = lang === "fa";

  return (
    <Box display="flex" justifyContent="center" mt="20vh">
      <Stack gap={2} alignItems="center">
        <ErrorOutline sx={{ fontSize: 75, m: 2 }} color="error" />
        <Typography variant="h4" fontWeight={450} color="error">
          {isFa ? "ارور شمارهٔ ۴۰۴" : "Not Found! (404)"}
        </Typography>
        <Typography variant="h6" fontWeight={400} color="error">
          {isFa
            ? "اصلا همچین صفحه‌ای نداریم!"
            : "Looks like this page is on vacation!"}
        </Typography>
        <Button
          href={isFa ? "/fa" : "/"}
          LinkComponent={Link}
          variant="contained"
          sx={{ mt: 3, fontFamily: "inherit", gap: 1 }}
          color="error"
        >
          {isFa ? "بازگشت به صفحهٔ اصلی" : "Go Back to Homepage"}
        </Button>
      </Stack>
    </Box>
  );
}
