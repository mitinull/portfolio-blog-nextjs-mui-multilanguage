import { MyAppBar } from "@/components/mui-components/MyAppBar";
import "../globals.css";
import { vazir } from "@/utils/fonts";
import { Providers } from "@/utils/providers";
import { MadeBy } from "@/components/MadeBy";

export default function FaLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl" suppressHydrationWarning>
      <body className={vazir.className}>
        <Providers>
          <MyAppBar lang="fa" />
          {children}
          <MadeBy lang="fa" />
        </Providers>
      </body>
    </html>
  );
}
