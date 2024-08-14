import { Alert, Paper, Typography } from "@mui/material";

export function Heading3({ children }) {
  return (
    <Typography variant="h3" lineHeight={1.5} fontSize={{ xs: 22, sm: 36 }} fontWeight={300}>
      {children}
    </Typography>
  );
}
