import { GoToHomeButton } from "@/components/GoToHomeButton";
import { Box } from "@mui/material";

export default function EnPagesLayout({ children }) {
  return (
    <>
      {children}
      <GoToHomeButton lang="en" />
    </>
  );
}
