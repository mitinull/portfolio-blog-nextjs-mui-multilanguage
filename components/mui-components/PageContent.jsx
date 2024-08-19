import { Stack } from "@mui/material";

export function PageContent({ children }) {
  return (
    <Stack
      spacing={{ xs: 5, sm: 9 }}
      px={{ xs: 2, sm: 0 }}
      pt={{ xs: 5, sm: 11 }}
    >
      {children}
    </Stack>
  );
}
