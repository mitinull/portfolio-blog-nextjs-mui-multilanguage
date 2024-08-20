import { roboto, vazir } from "@/utils/fonts";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { SwitchTheme } from "../SwitchTheme";
import Image from "next/image";

export function MyAppBar({ lang }) {
  const en = lang === "en";
  return (
    <AppBar
      position="sticky"
      sx={{
        overflow: "hidden",
        // borderBottom: "1px #fff1 solid",
        bgcolor: "transparent",
        backgroundImage: "linear-gradient(to bottom, black , transparent)",
      }}
      // color="#000"
    >
      <Box
        sx={{
          backgroundImage: "url(/images/mitinull-xs-4.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          // filter: "blur(2px)",
          // bgcolor: "#003",
          opacity: 0.9,
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
      />
      <Toolbar
        sx={{
          py: { xs: 2.5, sm: 3.5 },
          alignItems: "center",
          px: { xs: 2.2, sm: 5.5 },
          gap: { xs: 1, sm: 2 },
        }}
      >
        <Link href={en ? "/" : "/fa"} style={{ opacity: 0.9, display: "flex" }}>
          <img src="/images/icon-dark.svg" alt="bicycle logo" width={35} />
          <Typography
            variant="h4"
            component="div"
            mr="auto"
            ml={3.5}
            fontWeight={300}
            fontSize={32}
            display={{ xs: "none", sm: "block" }}
            sx={{
              color: "white",
            }}
          >
            Mitinull
          </Typography>
        </Link>
        <Box mr="auto" />

        <Button
          LinkComponent={Link}
          href={en ? "/fa" : "/"}
          color="inherit"
          sx={{
            m: 0,
            fontFamily: en ? vazir.style.fontFamily : roboto.style.fontFamily,
            fontSize: 16,
            fontWeight: 300,
          }}
        >
          {en ? "فارسی" : "English"}
        </Button>

        <SwitchTheme />
      </Toolbar>
    </AppBar>
  );
}
