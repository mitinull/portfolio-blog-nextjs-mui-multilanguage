import { Grid } from "@mui/material";

export function PostWrapper({ children }) {
  return (
    <Grid item md={6}>
      {children}
    </Grid>
  );
}
