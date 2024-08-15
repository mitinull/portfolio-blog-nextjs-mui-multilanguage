import { Button } from "@mui/material";

export function HeaderButton({ children, Icon, endIcon, outlined }) {
  return (
    <Button
      variant={outlined ? "outlined" : "text"}
      color="inherit"
      sx={{
        borderRadius: { xs: 100, sm: 1 },
        p: { xs: 1.5, sm: 2.5 },
        gap: { xs: 1.5, sm: 3.5 },
        fontSize: { xs: 16, sm: 30 },
        fontWeight: { xs: 400 },
      }}
      size="large"
    >
      {Icon && <Icon sx={{ fontSize: { xs: 20, sm: 40 } }} />}
      {children}
      {endIcon && <Icon sx={{ fontSize: { xs: 23, sm: 40 } }} />}
    </Button>
  );
}
