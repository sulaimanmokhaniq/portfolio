"use client";

import { animate, motion, useMotionValue, useReducedMotion, useTransform, type Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

// Leaves out sun and peri (they sit next to this tile) and coral (too close to flame).
const COLORS = ["bg-flame", "bg-mint", "bg-sky"];
const INTERVAL = 6000;

// How long one card takes to slide across. Slow and smooth on purpose.
export const SLIDE = { duration: 1.1, ease: [0.65, 0, 0.35, 1] as const };

// Each card fills the whole tile. The next one pushes the current one out sideways.
export const card: Variants = {
  enter: (dir: number) => ({ x: `${100 * dir}%`, scale: 0.86, rotate: 8 * dir }),
  center: { x: "0%", scale: 1, rotate: 0 },
  exit: (dir: number) => ({ x: `${-100 * dir}%`, scale: 0.86, rotate: -8 * dir }),
};

export const content: Variants = {
  enter: (dir: number) => ({ x: 80 * dir, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export const fade: Variants = { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } };

// Hero cards sit on the sides of a cube. While it turns, the cube steps back a little so it stays inside
// the tile, and the side turning away gets darker like a real cube catching the light.
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
  const [width, setWidth] = useState(0);
  const tile = useRef<HTMLDivElement>(null);
  const busy = useRef(false);
  const turn = useMotionValue(0);
  // Turns toward the reading direction: the next card comes in from the end side.
  const dir = rtl ? 1 : -1;

  const frontRotate = useTransform(turn, (t) => `rotateY(${dir * 90 * t}deg)`);
  const sideRotate = useTransform(turn, (t) => `rotateY(${dir * 90 * (t - 1)}deg)`);
  const frontDim = useTransform(turn, (t) => t * 0.35);
  const sideDim = useTransform(turn, (t) => (1 - t) * 0.35);
  const sideVisibility = useTransform(turn, (t) => (t === 0 ? "hidden" : "visible"));
  const sceneScale = useTransform(turn, (t) => 1 - 0.2 * Math.sin(t * Math.PI));
  const shadowOpacity = useTransform(turn, (t) => Math.sin(t * Math.PI));

  useEffect(() => {
    const el = tile.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const next = () => {
    if (busy.current) return;
    if (reduce) {
      setIndex((i) => (i + 1) % lines.length);
      return;
    }
    busy.current = true;
    animate(turn, 1, SLIDE).then(() => {
      // Swap the front card and reset the turn in the same frame so the old card never flashes back.
      flushSync(() => setIndex((i) => (i + 1) % lines.length));
      turn.set(0);
      busy.current = false;
    });
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, reduce, index]);

  const origin = `50% 50% ${-width / 2}px`;
  const face = (i: number) =>
    `absolute inset-0 flex flex-col justify-center overflow-hidden rounded-tile p-8 py-16 text-ink [backface-visibility:hidden] sm:px-10 ${COLORS[i % COLORS.length]}`;
  const text =
    "relative font-display text-[clamp(2.1rem,3.2vw,3rem)] leading-[1.1] font-extrabold tracking-tight rtl:leading-[1.4]";
  const nextIndex = (index + 1) % lines.length;

  return (
    <div
      ref={tile}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="relative h-full min-h-[300px] rounded-tile bg-chip"
      style={{ perspective: width ? width * 2.4 : 1200 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <motion.span
        aria-hidden="true"
        style={{ opacity: shadowOpacity }}
        className="pointer-events-none absolute inset-x-[12%] -bottom-4 h-6 rounded-[50%] bg-[radial-gradient(closest-side,rgba(0,0,0,0.28),transparent)]"
      />
      <button
        type="button"
        onClick={next}
        aria-label={nextLabel}
        className="absolute inset-0 cursor-pointer rounded-tile text-start"
      >
        <motion.span aria-hidden="true" className="absolute inset-0 [transform-style:preserve-3d]" style={{ scale: sceneScale }}>
          <motion.span
            className={face(nextIndex)}
            style={{ transform: sideRotate, transformOrigin: origin, visibility: sideVisibility }}
          >
            <motion.span className="absolute inset-0 bg-black" style={{ opacity: sideDim }} />
            <span className={text}>{lines[nextIndex]}</span>
          </motion.span>
          <motion.span className={face(index)} style={{ transform: frontRotate, transformOrigin: origin }}>
            <motion.span className="absolute inset-0 bg-black" style={{ opacity: frontDim }} />
            <motion.span
              key={reduce ? index : undefined}
              initial={reduce ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              className={text}
            >
              {lines[index]}
            </motion.span>
          </motion.span>
        </motion.span>
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
