import { generateHreflang } from "@/utils/generateHreflang";
import { Typography } from "@mui/material";
import Link from "next/link";

export const metadata = generateHreflang("", "fa");

export default function Home() {
  return (
    <main>
      <Link href="/">English</Link>
      <div>
        <Link href="./basketnull">
          <div>
            <h2>
              بسکتنال <span>-&gt;</span>
            </h2>
            <Typography>hello Ema</Typography>
            <p>Simple 2d game made using Love2d.</p>
          </div>
        </Link>

        <Link href="ema english">
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
