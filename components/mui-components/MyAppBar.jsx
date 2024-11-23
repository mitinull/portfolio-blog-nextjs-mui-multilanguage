import { roboto, vazir } from "@/utils/fonts";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { SwitchTheme } from "../SwitchTheme";
import { SwitchLanguage } from "../SwitchLanguage";

export function MyAppBar({ lang }) {
  const en = lang === "en";

  const headerImageStyles = {
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    opacity: 0.9,
    height: "100%",
    width: "100%",
    position: "absolute",
    scale: en ? 1 : "-1 1",
  };

  return (
    <AppBar
      elevation={2}
      position="sticky"
      sx={{
        overflow: "hidden",
        // borderBottom: "1px #fff1 solid",
        bgcolor: "transparent",
        backgroundImage:
          "linear-gradient(to bottom, var(--theme-color) , transparent)",
      }}
      // color="#000"
    >
      <Box
        sx={{
          backgroundImage: "url(/images/mitinull-xs-4.jpg)",
          ...headerImageStyles,
        }}
        className="img-dark"
      />
      <Box
        sx={{
          backgroundImage: "url(/images/header-light-13.jpg)",
          ...headerImageStyles,
        }}
        className="img-light"
      />

      <Toolbar
        sx={{
          py: { xs: 2.5, sm: 3 },
          alignItems: "center",
          px: { xs: 2.2, sm: 5.5 },
          gap: { xs: 1, sm: 2 },
        }}
      >
        <Link href={en ? "/" : "/fa"} style={{ display: "flex" }}>
          <img
            className="img-dark"
            src="/images/icon-dark.svg"
            alt={en ? "bicycle logo" : "لوگوی دوچرخه"}
            width={35}
            style={{ scale: en ? "1" : "-1 1", opacity: 0.9 }}
          />
          <img
            className="img-light"
            src="/images/icon-light.svg"
            alt={en ? "bicycle logo" : "لوگوی دوچرخه"}
            width={35}
            style={{ scale: en ? "1" : "-1 1", opacity: 0.85 }}
          />
          <Typography
            variant="h4"
            component="div"
            mr="auto"
            ml={3.5}
            fontWeight={300}
            fontSize={31}
            lineHeight={en ? 1.2 : ""}
            display={{ xs: "none", sm: "block" }}
            sx={{
              color: "text.primary",
            }}
          >
            {en ? "Mitinull's Work" : "پروژه‌های میتینال"}
          </Typography>
        </Link>

        <Box mr="auto" />

        <SwitchLanguage en={en} />
        <SwitchTheme />
      </Toolbar>
    </AppBar>
  );
}
