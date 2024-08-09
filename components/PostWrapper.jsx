import { Grid } from "@mui/material";

export function PostWrapper({ children }) {
  return (
    <Grid item sm={6}>
      {children}
    </Grid>
  );
}
