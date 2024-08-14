"use client";

import { BeatLoader, PulseLoader, SyncLoader } from "react-spinners";

export function TextLoading() {
  return (
    <PulseLoader
      color="gray"
      size={14}
      cssOverride={{ textAlign: "center", display:'block' }}
    />
  );
}
