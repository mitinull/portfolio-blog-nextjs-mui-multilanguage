import "../globals.css";
import { HREFLANG_PATHS } from "../../utils/constants";
import { SwitchTheme } from "../../components/SwitchTheme";
import { vazir } from "@/utils/fonts";
import { Providers } from "@/utils/providers";

export const metadata = {
  alternates: {
    canonical: "/fa/",
    languages: HREFLANG_PATHS,
  },
};

export default function FaLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl" suppressHydrationWarning>
      <body className={vazir.className}>
        <Providers>
          <SwitchTheme />
          <h3 style={{ position: "absolute" }}>FaLayout</h3>
          {children}
        </Providers>
      </body>
    </html>
  );
}
