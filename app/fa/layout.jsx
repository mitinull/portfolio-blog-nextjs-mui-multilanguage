import "../globals.css";
import { vazir } from "@/utils/fonts";
import { Providers } from "@/utils/providers";

export default function FaLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl" suppressHydrationWarning>
      <body className={vazir.className}>
        <Providers>
          <h3>FaLayout</h3>
          {children}
        </Providers>
      </body>
    </html>
  );
}
