import { Box, Typography } from "@mui/material";
import Link from "next/link";

export function MadeBy({ lang }) {
  return (
    <Box
      bgcolor="footer.bg"
      py={1}
      px={2}
      mt="auto"
      component="footer"
    >
      <Typography textAlign="center" variant="subtitle2" fontWeight={300}>
        {lang === "en" ? (
          <>
            Made by <Link href="https://github.com/mitinull">Mitinull</Link>{" "}
            with ❤️, 💚, and 💙.
            <Box
              component="span"
              sx={{ display: { xs: "none", sm: "inline" } }}
            >
              {" "}
              You can create other hearts with RGB.
            </Box>
          </>
        ) : (
          <>
            طراحی توسط <Link href="https://github.com/mitinull">میتینال</Link>{" "}
            با ❤️، 💚 و 💙.
            <Box
              component="span"
              sx={{ display: { xs: "none", sm: "inline" } }}
            >
              {" "}
              با ترکیب این سه رنگ می‌توانید بقیه قلب‌ها را بسازید.
            </Box>
          </>
        )}
      </Typography>
    </Box>
  );
}
