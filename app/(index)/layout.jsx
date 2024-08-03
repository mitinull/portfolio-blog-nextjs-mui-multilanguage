import "../globals.css";
import { HREFLANG_PATHS } from "../../utils/constants";
import { roboto } from "@/utils/fonts";
import { Providers } from "@/utils/providers";

export const metadata = {
  alternates: {
    canonical: "/",
    languages: HREFLANG_PATHS,
  },
};

export default function EnLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <Providers>
          <h3>En layout</h3>
          {children}
        </Providers>
      </body>
    </html>
  );
}
