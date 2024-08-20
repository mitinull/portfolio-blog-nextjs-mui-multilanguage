import { Alert, Container } from "@mui/material";

export function PageHeader({ color, children }) {
  return (
    <Alert
      color={color || "info"}
      icon={false}
      sx={{
        px: { xs: 0, sm: 2 },
        pt: { xs: 6, sm: 12 },
        pb: { xs: 5, sm: 9 },
        display: "flex",
        justifyContent: "center",
        borderRadius: 0,
        borderBottom: 1,
        borderColor: "#8884",
      }}
    >
      <Container sx={{ px: { xs: 0, sm: 8 } }}>{children}</Container>
    </Alert>
  );
}
