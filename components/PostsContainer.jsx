import { Container, Grid } from "@mui/material";

export function PostsContainer({ children }) {
  return (
    <Container sx={{ px: 0, py: { xs: 2, sm: 4.5 } }}>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Container>
  );
}
