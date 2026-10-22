"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { SLIDE, card, content, fade } from "@/components/hero-cards";

// A stat card shows one big number in place of the place/event pair.
type Win = { kind: string; place: string; event?: string; detail: string; color: string; stat?: boolean };

const HALF = SLIDE.duration / 2;
const TOP = "inset(0 0 50% 0)";
const BOTTOM = "inset(50% 0 0 0)";

// A bento tile as a card deck (hackathon wins, stats). Tap for the next one.
// "slide" moves like the hero cards used to; "flip" works like an airport flip board: the top half of the
// old card folds down over the new one, then the bottom half of the new card lands.
export function WinDeck({
  wins,
  label,
  nextLabel,
  interval = 6000,
  rtl = false,
  effect = "slide",
}: {
  wins: Win[];
  label: string;
  nextLabel: string;
  interval?: number;
  rtl?: boolean;
  effect?: "slide" | "flip";
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [from, setFrom] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const direction = rtl ? -1 : 1;
  const win = wins[index];
  const flip = effect === "flip" && !reduce;

  const next = () => {
    if (!flip) return setIndex((i) => (i + 1) % wins.length);
    if (from !== null) return;
    setFrom(index);
    setIndex((index + 1) % wins.length);
  };

  useEffect(() => {
    if (paused || reduce || wins.length < 2) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, reduce, index, from]);

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
        {flip ? (
          <>
            {from === null ? (
              <Face win={win} />
            ) : (
              <span key={index} className="absolute inset-0 [perspective:1000px]">
                <Face win={win} clip={TOP} />
                <Face win={wins[from]} clip={BOTTOM} />
                <motion.span
                  className="absolute inset-0 origin-center"
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: -90 }}
                  transition={{ duration: HALF, ease: [0.55, 0, 1, 0.45] }}
                >
                  <Face win={wins[from]} clip={TOP} />
                </motion.span>
                <motion.span
                  className="absolute inset-0 origin-center"
                  initial={{ rotateX: 90 }}
                  animate={{ rotateX: 0 }}
                  transition={{ duration: HALF, delay: HALF, ease: [0, 0.55, 0.45, 1] }}
                  onAnimationComplete={() => setFrom(null)}
                >
                  <Face win={win} clip={BOTTOM} />
                </motion.span>
              </span>
            )}
          </>
        ) : (
        <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={reduce ? fade : card}
              initial="enter"
              animate="center"
              exit="exit"
              transition={reduce ? { duration: 0.3 } : SLIDE}
              className={`absolute inset-0 flex flex-col rounded-tile p-8 pb-14 text-ink ${win.stat ? "justify-end" : "justify-between"}`}
              style={{ background: win.color }}
            >
              {!win.stat && (
                <motion.span custom={direction} variants={reduce ? fade : content}>
                  {win.kind}
                </motion.span>
              )}
              <motion.span custom={direction} variants={reduce ? fade : content} className="flex flex-col gap-1.5">
                {win.stat ? (
                  <>
                    <span dir="ltr" className="font-display text-7xl leading-none font-extrabold rtl:text-end">
                      {win.place}
                    </span>
                    <span className="text-lg leading-snug font-semibold">{win.kind}</span>
                  </>
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
        )}
      </button>

      <p className="sr-only">{[win.kind, win.place, win.event, win.detail].filter(Boolean).join(". ")}</p>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center gap-1.5" aria-hidden="true">
        {wins.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full border-ink transition-all duration-500 ${i === index ? "w-6 bg-ink" : "w-1.5 border"}`}
          />
        ))}
      </div>
    </div>
  );
}

// One stat card without motion, optionally cut to its top or bottom half for the flip board.
function Face({ win, clip }: { win: Win; clip?: string }) {
  return (
    <span
      className="absolute inset-0 flex flex-col justify-end rounded-tile p-8 pb-14 text-ink"
      style={{ background: win.color, clipPath: clip }}
    >
      <span className="flex flex-col gap-1.5">
        <span dir="ltr" className="font-display text-7xl leading-none font-extrabold rtl:text-end">
          {win.place}
        </span>
        <span className="text-lg leading-snug font-semibold">{win.kind}</span>
        <span className="leading-snug">{win.detail}</span>
      </span>
    </span>
  );
}
