import { Typography } from "@mui/material";

export function PageQuote({ children }) {
  return (
    <Typography
      component="i"
      fontSize="inherit"
      fontWeight="inherit"
    >
      &#8220;{children}&#8221;
    </Typography>
  );
}
