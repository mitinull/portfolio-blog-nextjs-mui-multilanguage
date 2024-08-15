import { Typography } from "@mui/material";

export function HeaderTextCenter({ children }) {
  return (
    <Typography
      textAlign="center"
      fontSize={{ xs: 18, sm: 25 }}
      fontWeight={300}
    >
      {children}
    </Typography>
  );
}
