import {  ErrorOutline } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box display="flex" justifyContent="center" minHeight="110vh">
      <Stack gap={2} mt={20} alignItems="center">
        <ErrorOutline sx={{ fontSize: 75, m: 2 }} color="error" />
        <Typography variant="h4" fontWeight={450} color="error">
          ارور شمارهٔ ۴۰۴
        </Typography>
        <Typography variant="h6" fontWeight={400} color="error">
          اصلا همچین صفحه‌ای نداریم!
        </Typography>
        <Button
          href="/fa"
          LinkComponent={Link}
          variant="contained"
          sx={{ mt: 3, fontFamily: "inherit", gap: 1 }}
          color="error"
        >
          بازگشت به صفحهٔ اصلی
        </Button>
      </Stack>
    </Box>
  );
}
