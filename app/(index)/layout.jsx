import { Inter } from "next/font/google";
import "../globals.css";
import { HREFLANG_PATHS } from "../../utils/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  alternates: {
    canonical: "/",
    languages: HREFLANG_PATHS,
  },
};

export default function EnLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h3>En layout</h3>
        {children}
      </body>
    </html>
  );
}
