import { Typography } from "@mui/material";

export function ParagraphMedium({ children }) {
  return (
    <Typography
      fontSize={{ xs: 19, sm: 22 }}
      fontWeight={300}
      lineHeight={{ xs: 1.75, sm: 1.85 }}
    >
      {children}
    </Typography>
  );
}
