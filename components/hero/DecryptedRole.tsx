"use client";

import { useEffect, useMemo, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function DecryptedRole({ text }: { text: string }) {
  const [iteration, setIteration] = useState(0);

  const rendered = useMemo(
    () =>
      text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < iteration) return text[i];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join(""),
    [iteration, text]
  );

  useEffect(() => {
    if (iteration > text.length) return;
    const timer = setTimeout(() => setIteration((prev) => prev + 1), 70);
    return () => clearTimeout(timer);
  }, [iteration, text.length]);

  return <p className="decrypted">{rendered}</p>;
}
