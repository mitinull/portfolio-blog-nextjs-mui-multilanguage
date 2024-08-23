import { Typography } from "@mui/material";

export function Heading1({ children }) {
  return (
    <Typography variant="h1" fontSize={{ xs: 35, sm: 58 }} fontWeight={400} maxWidth='md' mx='auto'>
      {children}
    </Typography>
  );
}
