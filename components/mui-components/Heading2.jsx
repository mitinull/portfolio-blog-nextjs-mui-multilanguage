import { Alert, Paper, Typography } from "@mui/material";

export function Heading2({ children }) {
  return (
    <Typography variant="h2" fontSize={{ xs: 28, sm: 34 }} fontWeight={400}>
      {children}
    </Typography>
  );
}
