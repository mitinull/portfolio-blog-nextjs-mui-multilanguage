import { Alert, Container } from "@mui/material";

export function PageHeader({ color, children }) {
  return (
    <Alert
      color={color || "info"}
      icon={false}
      sx={{
        px: 0,
        pt: { xs: 4, sm: 12 },
        pb: { xs: 5, sm: 12 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container sx={{ p: 0 }}>{children}</Container>
    </Alert>
  );
}
