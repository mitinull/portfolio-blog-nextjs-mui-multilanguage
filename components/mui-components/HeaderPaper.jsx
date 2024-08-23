import { Paper, Typography } from "@mui/material";

export function HeaderPaper({ children }) {
  return (
    <Paper
      sx={{
        p: { xs: 1, sm: 1.2 },
        my: { xs: 1.7, sm: 2 },
        borderRadius: { xs: 100, sm: 100 },
      }}
    >
      <Typography
        textAlign="center"
        fontSize={{ xs: 28, sm: 40 }}
        fontWeight={300}
      >
        {children}
      </Typography>
    </Paper>
  );
}
