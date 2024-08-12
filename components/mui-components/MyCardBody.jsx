import { Typography } from "@mui/material";

export function MyCardBody({ children }) {
  return (
    <Typography variant="body2" color="text.secondary" fontSize={{ xs: 16, }}>
      {children}
    </Typography>
  );
}
