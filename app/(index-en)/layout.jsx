import { MyAppBar } from "@/components/mui-components/MyAppBar";
import "../globals.css";
import { roboto } from "@/utils/fonts";
import { Providers } from "@/utils/providers";

export default function EnLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <Providers direction="ltr">
          <MyAppBar lang="en" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
