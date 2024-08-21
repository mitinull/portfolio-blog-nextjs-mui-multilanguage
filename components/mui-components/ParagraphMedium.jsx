import { roboto } from "@/utils/fonts";
import { Typography } from "@mui/material";

export function ParagraphMedium({ children, enInFa, ...other }) {
  return (
    <Typography
      fontSize={{ xs: 19, sm: 22 }}
      fontWeight={300}
      lineHeight={{ xs: 1.75, sm: 1.85 }}
      fontFamily={enInFa ? roboto.style.fontFamily : "inherit"}
      sx={{ direction: enInFa ? "rtl" : "inherit" }}
      {...other}
    >
      {children}
    </Typography>
  );
}
