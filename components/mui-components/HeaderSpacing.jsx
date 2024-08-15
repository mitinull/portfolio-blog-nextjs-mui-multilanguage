import { Stack } from "@mui/material";

export function HeaderSpacing({ children, vertical }) {
  return (
    <Stack spacing={vertical ? { xs: 3.5, sm: 4.5 } : 0} px={{ xs: 4, sm: 0 }}>
      {children}
    </Stack>
  );
}
