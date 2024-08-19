"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import {
  experimental_extendTheme as extendTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
  styled,
} from "@mui/material/styles";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";

export const ltrCache = createCache({
  key: "mui",
});

export const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, stylisRTLPlugin],
});

export function Providers({ children, direction }) {
  const theme = extendTheme({
    direction: direction,

    colorSchemes: {
      light: {
        palette: {
          footer: {
            bg: "#d9d9d9",
          },
        },
      },
      dark: {
        palette: {
          footer: {
            bg: "#000",
          },
        },
      },
    },

    typography: {
      fontFamily: "inherit",
      button: {
        fontFamily: "inherit",
      },
    },
  });

  return (
    <>
      <InitColorSchemeScript defaultMode="dark" />
      <CssVarsProvider theme={theme} defaultMode="dark">
        <CacheProvider value={direction === "ltr" ? ltrCache : rtlCache}>
          {children}
        </CacheProvider>
      </CssVarsProvider>
    </>
  );
}
