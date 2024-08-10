import { Container, Grid } from "@mui/material";

export function PostsContainer({ children }) {
  return (
    <Container>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Container>
  );
}
