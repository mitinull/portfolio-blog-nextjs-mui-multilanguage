import { Paper, Typography } from "@mui/material";

export function HeaderPaper({ children, smaller, morePadding }) {
  return (
    <Paper
      sx={{
        p: { xs: morePadding ? 1.3 : 1, sm: morePadding ? 1.5 : 1.2 },
        my: { xs: 1.7, sm: 2 },
        borderRadius: { xs: 100, sm: 100 },
      }}
    >
      <Typography
        textAlign="center"
        fontSize={smaller ? { xs: 26, sm: 40 } : { xs: 28, sm: 40 }}
        fontWeight={300}
      >
        {children}
      </Typography>
    </Paper>
  );
}
