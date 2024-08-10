"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import {
  experimental_extendTheme as extendTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
} from "@mui/material/styles";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, stylisRTLPlugin],
});

function Rtl(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

export function Providers({ children, direction }) {
  const theme = extendTheme({
    direction: direction,

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
        {direction === "ltr" ? children : <Rtl>{children}</Rtl>}
      </CssVarsProvider>
    </>
  );
}
