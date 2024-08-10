import { Button } from "@mui/material";
import Link from "next/link";

export function MyCardButton({ children, Icon, href, newTab }) {
  return (
    <Button
      size="small"
      startIcon={Icon}
      LinkComponent={Link}
      href={href}
      target={newTab ? "_blank" : "_self"}
    >
      {children}
    </Button>
  );
}
