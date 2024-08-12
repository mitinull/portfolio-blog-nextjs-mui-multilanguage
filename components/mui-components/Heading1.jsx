import { Typography } from "@mui/material";

export function Heading1({ children }) {
  return (
    <Typography variant="h1" fontSize={{ xs: 35, sm: 72 }} fontWeight={400}>
      {children}
    </Typography>
  );
}
