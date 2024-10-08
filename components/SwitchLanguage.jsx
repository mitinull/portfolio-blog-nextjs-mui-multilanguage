"use client";

import { roboto, vazir } from "@/utils/fonts";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export function SwitchLanguage({ en }) {
  const router = useRouter();

  const handleClick = () => {
    const currentPath = window.location.pathname;
    if (en) {
      router.push(currentPath.replace("", "/fa"));
    } else {
      router.push(currentPath.replace("/fa", ""));
    }
  };

  return (
    <Button
      // color="footer.bg"
      onClick={handleClick}
      sx={{
        m: 0,
        fontFamily: en ? vazir.style.fontFamily : roboto.style.fontFamily,
        fontSize: 16,
        fontWeight: { xs: 300, sm: 400 },
        color: "text.primary",
      }}
    >
      {en ? "فارسی" : "English"}
    </Button>
  );
}
