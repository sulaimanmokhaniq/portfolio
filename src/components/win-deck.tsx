"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { SLIDE, card, content, fade } from "@/components/hero-cards";

// A stat card shows one big number in place of the place/event pair.
type Win = { kind: string; place: string; event?: string; detail: string; color: string; stat?: boolean };

// A bento tile as a card deck (hackathon wins, stats), with the same slide as the hero cards. Tap for the next one.
export function WinDeck({
  wins,
  label,
  nextLabel,
  interval = 3500,
  rtl = false,
}: {
  wins: Win[];
  label: string;
  nextLabel: string;
  interval?: number;
  rtl?: boolean;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const direction = rtl ? -1 : 1;
  const win = wins[index];

  const next = () => setIndex((i) => (i + 1) % wins.length);

  useEffect(() => {
    if (paused || reduce || wins.length < 2) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, reduce, index]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="relative h-full min-h-[250px] overflow-hidden rounded-tile bg-chip"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <button
        type="button"
        onClick={next}
        aria-label={nextLabel}
        className="absolute inset-0 cursor-pointer rounded-tile text-start"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={reduce ? fade : card}
            initial="enter"
            animate="center"
            exit="exit"
            transition={reduce ? { duration: 0.3 } : SLIDE}
            className="absolute inset-0 flex flex-col justify-between rounded-tile p-8 pb-14 text-ink"
            style={{ background: win.color }}
          >
            <motion.span custom={direction} variants={reduce ? fade : content}>
              {win.kind}
            </motion.span>
            <motion.span custom={direction} variants={reduce ? fade : content} className="flex flex-col gap-1.5">
              {win.stat ? (
                <span dir="ltr" className="font-display text-7xl leading-none font-extrabold rtl:text-end">
                  {win.place}
                </span>
              ) : (
                <>
                  <span className="font-display text-4xl leading-tight font-extrabold rtl:leading-[1.4]">
                    {win.place}
                  </span>
                  <span className="font-display text-2xl leading-tight font-bold rtl:leading-[1.4]">{win.event}</span>
                </>
              )}
              <span className="leading-snug">{win.detail}</span>
            </motion.span>
          </motion.div>
        </AnimatePresence>
      </button>

      <p className="sr-only">{[win.kind, win.place, win.event, win.detail].filter(Boolean).join(". ")}</p>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center gap-1.5" aria-hidden="true">
        {wins.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full bg-ink transition-all duration-500 ${i === index ? "w-6" : "w-1.5 opacity-30"}`}
          />
        ))}
      </div>
    </div>
  );
}
