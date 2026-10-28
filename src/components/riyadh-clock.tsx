"use client";

import { useEffect, useState } from "react";

// Live Riyadh time. Rendered only after mount so the server's clock never disagrees with the visitor's.
export function RiyadhClock({ label, awake, asleep }: { label: string; awake: string; asleep: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(id);
  }, []);

  // Western digits in both languages, like the rest of the site.
  const time = now?.toLocaleTimeString("en-GB", { timeZone: "Asia/Riyadh", hour: "2-digit", minute: "2-digit" });
  const hour = now
    ? Number(now.toLocaleString("en-GB", { timeZone: "Asia/Riyadh", hour: "2-digit", hour12: false }))
    : 12;

  return (
    <div className="flex h-full min-h-[210px] flex-col justify-between gap-6 rounded-tile bg-hero p-8 text-hero-text">
      <span className="text-hero-muted">{label}</span>
      <time dir="ltr" className="font-display text-7xl leading-none font-extrabold tracking-tight rtl:text-end">
        {time ?? "--:--"}
      </time>
      <span className="leading-snug text-hero-muted">{hour >= 8 && hour < 23 ? awake : asleep}</span>
    </div>
  );
}
