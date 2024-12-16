"use client";

import { createContext, useContext, useEffect, useState } from "react";

const EmaContext = createContext();

export function useEma() {
  return useContext(EmaContext);
}

export function EmaProvider({ children }) {
  const [info, setInfo] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getEmaEnglishInfo() {
      const res = await fetch("/api/ema-english");

      const data = await res.json();

      if (res.ok) {
        setInfo(data);
      } else {
        console.error(data);
        setError(true);
      }
    }

    getEmaEnglishInfo();
  }, []);

  return (
    <EmaContext.Provider value={{ info, error }}>
      {children}
    </EmaContext.Provider>
  );
}
