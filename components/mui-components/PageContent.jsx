import { Stack } from "@mui/material";

export function PageContent({ children }) {
  return (
    <Stack
      spacing={{ xs: 5, sm: 8 }}
      px={{ xs: 2, sm: 0 }}
      py={{ xs: 5, sm: 10 }}
    >
      {children}
    </Stack>
  );
}
