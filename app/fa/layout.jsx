import { Vazirmatn } from "next/font/google";
import "../globals.css";
import { HREFLANG_PATHS } from "../../utils/constants";

const vazir = Vazirmatn({ subsets: ["arabic"] });

export const metadata = {
  alternates: {
    canonical: "/fa",
    languages: HREFLANG_PATHS,
  },
};

export default function FaLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={vazir.className}>
        <h3>FaLayout</h3>
        {children}
      </body>
    </html>
  );
}
