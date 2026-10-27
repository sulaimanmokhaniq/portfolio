"use client";

import { animate, motion, useMotionValue, useReducedMotion, useTransform, type MotionValue, type Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Leaves out sun and peri (they sit next to this tile) and coral (too close to flame).
// Dark mode swaps flame and sky for sun and lilac, so no orange or blue card sits by the blue hero.
const COLORS = ["bg-flame dark:bg-[#e8c14a]", "bg-mint dark:bg-[#86cfae]", "bg-sky dark:bg-[#c9bceb]"];
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
// `turns` only ever counts up, and each face's angle is worked out from it, so nothing has to be reset
// after a turn (a reset would show the wrong card for a frame).
const TEXT =
  "relative font-display text-[clamp(2.1rem,3.2vw,3rem)] leading-[1.1] font-extrabold tracking-tight rtl:leading-[1.4]";

function CubeFace({
  turns,
  step,
  dir,
  origin,
  line,
  color,
}: {
  turns: MotionValue<number>;
  step: number;
  dir: number;
  origin: string;
  line: string;
  color: string;
}) {
  const transform = useTransform(turns, (t) => `rotateY(${dir * 90 * Math.max(-1, Math.min(1, t - step))}deg)`);
  const dim = useTransform(turns, (t) => Math.min(1, Math.abs(t - step)) * 0.35);
  return (
    <motion.span
      className={`absolute inset-0 flex flex-col justify-center overflow-hidden rounded-tile p-8 py-16 text-ink [backface-visibility:hidden] sm:px-10 ${color}`}
      style={{ transform, transformOrigin: origin }}
    >
      <motion.span className="absolute inset-0 bg-black" style={{ opacity: dim }} />
      <span className={TEXT}>{line}</span>
    </motion.span>
  );
}

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
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [width, setWidth] = useState(0);
  const tile = useRef<HTMLDivElement>(null);
  const busy = useRef(false);
  const turns = useMotionValue(0);
  // Turns toward the reading direction: the next card comes in from the end side.
  const dir = rtl ? 1 : -1;
  const index = step % lines.length;

  const sceneScale = useTransform(turns, (t) => 1 - 0.2 * Math.sin((t % 1) * Math.PI));
  const shadowOpacity = useTransform(turns, (t) => Math.sin((t % 1) * Math.PI));

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
      turns.set(step + 1);
      setStep(step + 1);
      return;
    }
    busy.current = true;
    animate(turns, step + 1, SLIDE).then(() => {
      setStep(step + 1);
      busy.current = false;
    });
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, reduce, step]);

  const origin = `50% 50% ${-width / 2}px`;

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
          {[step + 1, step].map((s) => (
            <CubeFace
              key={s}
              turns={turns}
              step={s}
              dir={dir}
              origin={origin}
              line={lines[s % lines.length]}
              color={COLORS[s % COLORS.length]}
            />
          ))}
        </motion.span>
      </button>

      <p className="sr-only">{lines[index]}</p>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center gap-1.5" aria-hidden="true">
        {lines.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full border-ink transition-all duration-500 ${i === index ? "w-6 bg-ink" : "w-1.5 border"}`}
          />
        ))}
      </div>
    </div>
  );
}
