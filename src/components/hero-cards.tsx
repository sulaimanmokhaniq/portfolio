"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const COLORS = ["bg-flame", "bg-sun", "bg-peri", "bg-mint", "bg-coral"];
const INTERVAL = 5000;

// Where each card sits in the deck: 0 is the front card, 1 and 2 peek out behind it.
const slots = [
  { y: 0, scale: 1, rotate: 0, opacity: 1 },
  { y: -18, scale: 0.94, rotate: -3, opacity: 1 },
  { y: -36, scale: 0.88, rotate: 3, opacity: 1 },
  { y: -54, scale: 0.82, rotate: 0, opacity: 0 },
];

export function HeroCards({
  lines,
  label,
  nextLabel,
  rtl = false,
}: {
  lines: string[];
  label: string;
  nextLabel: string;
  rtl?: boolean;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const direction = rtl ? -1 : 1;

  const next = () => setIndex((i) => (i + 1) % lines.length);

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, reduce, index]);

  const visible = [0, 1, 2].map((offset) => (index + offset) % lines.length);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="relative h-full min-h-[300px] overflow-hidden rounded-tile bg-chip"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0 size-full opacity-60" aria-hidden="true">
        <defs>
          <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.6" fill="currentColor" className="text-line" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots)" />
      </svg>

      <button
        type="button"
        onClick={next}
        aria-label={nextLabel}
        className="absolute inset-x-6 top-16 bottom-14 cursor-pointer rounded-[1.5rem] text-start"
      >
        <AnimatePresence initial={false}>
          {visible
            .map((line, slot) => ({ line, slot }))
            .reverse()
            .map(({ line, slot }) => (
              <motion.div
                key={line}
                aria-hidden={slot !== 0}
                className={`absolute inset-0 flex flex-col justify-between rounded-[1.5rem] p-7 text-ink shadow-[0_18px_40px_-18px_rgb(0_0_0/0.35)] ${COLORS[line % COLORS.length]}`}
                style={{ zIndex: 3 - slot, transformOrigin: "50% 0%" }}
                initial={reduce ? { opacity: 0 } : slots[3]}
                animate={reduce ? { opacity: slot === 0 ? 1 : 0 } : slots[slot]}
                exit={
                  reduce
                    ? { opacity: 0, zIndex: 4 }
                    : {
                        x: `${135 * direction}%`,
                        rotate: 14 * direction,
                        zIndex: 4,
                        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                      }
                }
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  dir="ltr"
                  className={`self-start font-display text-sm font-bold tabular-nums transition-opacity duration-300 ${slot === 0 ? "delay-200" : "opacity-0"}`}
                >
                  {String(line + 1).padStart(2, "0")} / {String(lines.length).padStart(2, "0")}
                </span>
                <p
                  className={`font-display text-[clamp(1.9rem,2.9vw,2.75rem)] leading-[1.06] font-extrabold tracking-tight transition-opacity duration-300 ${slot === 0 ? "delay-200" : "opacity-0"}`}
                >
                  {lines[line]}
                </p>
              </motion.div>
            ))}
        </AnimatePresence>
      </button>

      <p className="sr-only">{lines[index]}</p>

      <div className="absolute inset-x-0 bottom-5 flex justify-center gap-1.5" aria-hidden="true">
        {lines.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full bg-text transition-all duration-500 ${i === index ? "w-6" : "w-1.5 opacity-25"}`}
          />
        ))}
      </div>
    </div>
  );
}
