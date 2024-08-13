import { Alert, Container } from "@mui/material";

export function PageHeader({ color, children }) {
  return (
    <Alert
      color={color || "info"}
      icon={false}
      sx={{
        px: { xs: 0, sm: 2 },
        pt: { xs: 6.5, sm: 12 },
        pb: { xs: 5, sm: 12 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container sx={{ p: 0 }}>{children}</Container>
    </Alert>
  );
}
