import { ReadMore } from "@mui/icons-material";

export function CustomReadMoreIcon({ lang }) {
  return (
    <ReadMore
      sx={{
        scale: lang === "en" ? "1" : "-1",
      }}
    />
  );
}
