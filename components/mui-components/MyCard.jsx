import { Card } from "@mui/material";

export function MyCard({ children }) {
  return <Card sx={{ borderRadius: 0 }}>{children}</Card>;
}
