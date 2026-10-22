"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Arrow } from "@/components/arrow";

type Shot = { src: string; alt: string };

// Where a phone sits for its distance from the current screen: centre, beside it, or tucked away behind.
const SLOTS: Record<number, { x: string; scale: number; z: number; shade: number }> = {
  0: { x: "0%", scale: 1, z: 3, shade: 1 },
  1: { x: "62%", scale: 0.8, z: 2, shade: 0.88 },
  2: { x: "84%", scale: 0.6, z: 1, shade: 0.75 },
};

// Three phones side by side, the current screen big in the middle. Tap a side phone, swipe or use the
// arrows to bring the next screen to the centre, like moving through the real app.
export function PhoneDemo({
  shots,
  label,
  prevLabel,
  nextLabel,
  rtl = false,
}: {
  shots: Shot[];
  label: string;
  prevLabel: string;
  nextLabel: string;
  rtl?: boolean;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const n = shots.length;
  const go = (step: number) => setIndex((i) => (i + step + n) % n);
  // In Arabic the next screen waits on the left.
  const side = rtl ? -1 : 1;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="flex w-full flex-col items-center gap-5"
    >
      <div className="relative h-[420px] w-full max-w-[520px] sm:h-[460px]">
        {shots.map((shot, i) => {
          // Signed distance from the current screen, wrapped to -2..2.
          let d = (i - index + n) % n;
          if (d > n / 2) d -= n;
          const slot = SLOTS[Math.abs(d)] ?? SLOTS[2];
          const x = Math.abs(d) === 0 ? "0%" : `${Math.sign(d) * side * parseFloat(slot.x)}%`;
          const hidden = Math.abs(d) > 1;
          return (
            <div
              key={shot.src}
              className="pointer-events-none absolute inset-0 flex justify-center"
              style={{ zIndex: slot.z }}
            >
              <motion.button
                type="button"
                tabIndex={-1}
                aria-hidden={d !== 0}
                aria-label={d === 0 ? undefined : d > 0 ? nextLabel : prevLabel}
                onClick={() => d !== 0 && go(d)}
                drag={d === 0 && !reduce ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.x) < 50) return;
                  go(info.offset.x < 0 !== rtl ? 1 : -1);
                }}
                initial={false}
                animate={{
                  x,
                  scale: slot.scale,
                  filter: `brightness(${slot.shade})`,
                  opacity: hidden ? 0 : 1,
                }}
                transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 20 }}
                className={`aspect-[9/19.5] h-full rounded-[2.2rem] bg-ink p-[7px] shadow-[0_24px_48px_-18px_rgba(0,0,0,0.45)] ${
                  d === 0 ? "cursor-grab touch-pan-y active:cursor-grabbing" : "cursor-pointer"
                } ${hidden ? "" : "pointer-events-auto"}`}
              >
                <span className="relative block size-full overflow-hidden rounded-[1.75rem] bg-ink">
                  <Image
                    src={shot.src}
                    alt={d === 0 ? shot.alt : ""}
                    fill
                    sizes="220px"
                    draggable={false}
                    className="pointer-events-none object-cover select-none"
                  />
                </span>
              </motion.button>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={prevLabel}
          className="grid size-9 place-items-center rounded-full bg-white text-ink transition-transform hover:-translate-y-0.5"
        >
          <Arrow className="size-4 rotate-180" />
        </button>
        <div className="flex gap-1.5" aria-hidden="true">
          {shots.map((s, i) => (
            <span
              key={s.src}
              className={`h-1.5 rounded-full border-ink transition-all duration-300 ${i === index ? "w-5 bg-ink" : "w-1.5 border"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={nextLabel}
          className="grid size-9 place-items-center rounded-full bg-white text-ink transition-transform hover:-translate-y-0.5"
        >
          <Arrow className="size-4" />
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {shots[index].alt}
      </p>
    </div>
  );
}
