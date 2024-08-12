import { Alert, Paper, Typography } from "@mui/material";

export function Heading3({ children }) {
  return (
    <Typography variant="h3" fontSize={{ xs: 22, sm: 38 }} fontWeight={300}>
      {children}
    </Typography>
  );
}
