"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react";
import { useEffect, useState } from "react";

// Leaves out sun and peri: those tiles sit right next to this one on some screen sizes.
const COLORS = ["bg-flame", "bg-mint", "bg-coral"];
const INTERVAL = 2000;

// Each card fills the whole tile. The next one pushes the current one out sideways.
const card: Variants = {
  enter: (dir: number) => ({ x: `${100 * dir}%`, scale: 0.86, rotate: 8 * dir }),
  center: { x: "0%", scale: 1, rotate: 0 },
  exit: (dir: number) => ({ x: `${-100 * dir}%`, scale: 0.86, rotate: -8 * dir }),
};

const content: Variants = {
  enter: (dir: number) => ({ x: 80 * dir, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { delay: 0.15, type: "spring", stiffness: 160, damping: 18 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const fade: Variants = { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } };

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
            transition={reduce ? { duration: 0.3 } : { type: "spring", stiffness: 130, damping: 19, mass: 0.8 }}
            className={`absolute inset-0 flex flex-col justify-center rounded-tile p-8 py-16 text-ink sm:px-10 ${COLORS[index % COLORS.length]}`}
          >
            <motion.span
              custom={direction}
              variants={reduce ? fade : content}
              dir="ltr"
              className={`absolute top-8 font-display text-sm font-bold tabular-nums sm:top-10 ${rtl ? "right-8 sm:right-10" : "left-8 sm:left-10"}`}
            >
              {String(index + 1).padStart(2, "0")} / {String(lines.length).padStart(2, "0")}
            </motion.span>
            <motion.p
              custom={direction}
              variants={reduce ? fade : content}
              className="font-display text-[clamp(2.1rem,3.2vw,3rem)] leading-[1.1] font-extrabold tracking-tight rtl:leading-[1.4]"
            >
              {lines[index]}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </button>

      <p className="sr-only">{lines[index]}</p>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center gap-1.5" aria-hidden="true">
        {lines.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full bg-ink transition-all duration-500 ${i === index ? "w-6" : "w-1.5 opacity-30"}`}
          />
        ))}
      </div>
    </div>
  );
}
