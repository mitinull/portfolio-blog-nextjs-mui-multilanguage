import { Stack } from "@mui/material";
import Image from "next/image";

export function PageImage({ alt, light, dark }) {
  return (
    <Stack borderRadius={{ sx: 0, sm: 1 }} overflow="hidden">
      <Image
        alt={alt}
        src={light}
        className="img-light"
        width={1920}
        height={1080}
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
        priority
      />
      <Image
        alt={alt}
        src={dark}
        className="img-dark"
        width={1920}
        height={1080}
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
        priority
      />
    </Stack>
  );
}
