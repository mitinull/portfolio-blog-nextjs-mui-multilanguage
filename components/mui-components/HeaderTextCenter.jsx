import { Typography } from "@mui/material";

export function HeaderTextCenter({ children, fontSize }) {
  return (
    <Typography
      textAlign="center"
      fontSize={fontSize || { xs: 18, sm: 25 }}
      fontWeight={300}
    >
      {children}
    </Typography>
  );
}
