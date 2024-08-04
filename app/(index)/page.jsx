import { vazir } from "@/utils/fonts";
import { generateHreflang } from "@/utils/generateHreflang";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export const metadata = generateHreflang("", "en");

export default function Home() {
  return (
    <main>
      <Typography variant="h2">hello IS This Basketnull</Typography>
      <Button>what About this Basketnull</Button>
      <Box fontWeight={900} component="div" className={vazir.className}>
        اینجا یه چیزی می‌نویسم
        <Button>این فونت وزیر است</Button>
        <Typography>این تایپوگرافی است</Typography>
      </Box>
      <Link href="/fa" className={vazir.className}>
        فارسی
      </Link>
      <div>
        <Link href="./basketnull">
          <div>
            <h2>
              Basketnull <span>-&gt;</span>
            </h2>
            <p>Simple 2d game made using Love2d.</p>
          </div>
        </Link>

        <Link href="ema-english">
          <div>
            <h2>
              EMA English <span>-&gt;</span>
            </h2>
            <p>A Persian podcast to learn English with musics and songs.</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
