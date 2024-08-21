import { Button } from "@mui/material";

export function HeaderButton({ children, Icon, endIcon, outlined, ...other }) {
  return (
    <Button
      variant={outlined ? "outlined" : "text"}
      color="inherit"
      sx={{
        borderRadius: { xs: 100, sm: 1 },
        p: { xs: 1.5, sm: 2.4 },
        gap: { xs: 1.5, sm: 3.8 },
        fontSize: { xs: 16, sm: 25 },
        fontWeight: { xs: 400 },
      }}
      size="large"
      {...other}
    >
      {Icon && <Icon sx={{ fontSize: { xs: 20, sm: 32 } }} />}
      {children}
      {endIcon && <Icon sx={{ fontSize: { xs: 23, sm: 32 } }} />}
    </Button>
  );
}
