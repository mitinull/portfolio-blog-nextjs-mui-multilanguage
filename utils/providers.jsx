"use client";

import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import {
  experimental_extendTheme as extendTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
} from "@mui/material/styles";

const theme = extendTheme({
  typography: {
    fontFamily: "inherit",
    button: {
      fontFamily: "inherit",
    },
  },
});

export function Providers({ children }) {
  return (
    <>
      <InitColorSchemeScript defaultMode="dark" />
      <CssVarsProvider theme={theme} defaultMode="dark">
        {children}
      </CssVarsProvider>
    </>
  );
}
