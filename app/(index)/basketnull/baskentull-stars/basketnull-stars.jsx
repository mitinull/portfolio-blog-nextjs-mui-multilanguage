"use client";

import { TextLoading } from "@/components/TextLoading";
import { useEffect, useState } from "react";

export function BasketnullStars() {
  const [stars, setStars] = useState();

  useEffect(() => {
    async function getStars() {
      try {
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        const res = await fetch(
          "https://api.github.com/repos/mitinull/basketnull"
        );

        if (!res.ok) {
          throw new Error(res.status);
        }

        const data = await res.json();

        const stars_count = data["stargazers_count"];

        setStars(stars_count);
      } catch (err) {
        setStars("Unavailable");
        console.error(err);
      }
    }

    getStars();
  });

  return stars || <TextLoading />;
}
