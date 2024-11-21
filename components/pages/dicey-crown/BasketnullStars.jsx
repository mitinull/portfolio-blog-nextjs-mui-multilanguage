"use client";

import { TextLoading } from "@/components/TextLoading";
import { numberToPersian } from "@/utils/numberToPersian";
import { useEffect, useState } from "react";

export function BasketnullStars({ en }) {
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

        setStars(en ? stars_count : numberToPersian(stars_count));
      } catch (err) {
        setStars(en ? "Unavailable" : "نامشخص");
        console.error(err);
      }
    }

    getStars();
  });

  return stars || <TextLoading />;
}
