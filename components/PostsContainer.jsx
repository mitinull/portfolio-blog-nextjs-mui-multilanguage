import { Container, Grid } from "@mui/material";

export function PostsContainer({ children }) {
  return (
    <Container sx={{ p: 0 }}>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Container>
  );
}
