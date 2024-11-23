import { Alert, Paper, Typography } from "@mui/material";
import Link from "next/link";

export function HeadingLink({ children, href }) {
  return (
    <Link href={href} target="_blank">
      <Typography
        variant="p"
        lineHeight={1.5}
        fontSize={{ xs: 18, sm: 24 }}
        fontWeight={300}
        display="flex"
        alignItems="center"
        gap={2}
      >
        {children}
      </Typography>
    </Link>
  );
}
