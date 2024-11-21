import { Paper, Typography } from "@mui/material";

export function HeaderPaper({ children, smaller }) {
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
        fontSize={smaller ? { xs: 26, sm: 38 } : { xs: 28, sm: 40 }}
        fontWeight={300}
        display={"flex"}
        alignItems={"center"}
        gap={2}
        justifyContent={"center"}
      >
        {children}
      </Typography>
    </Paper>
  );
}
