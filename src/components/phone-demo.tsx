"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react";
import { useState } from "react";
import { Arrow } from "@/components/arrow";

type Shot = { src: string; alt: string };

const screen: Variants = {
  enter: (d: number) => ({ x: `${100 * d}%` }),
  center: { x: "0%" },
  exit: (d: number) => ({ x: `${-30 * d}%`, filter: "brightness(0.7)" }),
};

// A phone frame you can tap, swipe or click through, like moving between screens of the real app.
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
  const [[index, step], setState] = useState([0, 1]);
  const go = (s: number) => setState(([i]) => [(i + s + shots.length) % shots.length, s]);
  // In Arabic the next screen comes in from the left.
  const dir = step * (rtl ? -1 : 1);

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label} className="flex flex-col items-center gap-4">
      <div className="relative aspect-[9/19.5] w-[190px] rounded-[2.2rem] bg-ink p-[7px] shadow-[0_24px_48px_-18px_rgba(0,0,0,0.45)] sm:w-[200px]">
        <span aria-hidden="true" className="absolute top-24 -right-[3px] h-14 w-[3px] rounded-r bg-ink" />
        <span aria-hidden="true" className="absolute top-20 -left-[3px] h-8 w-[3px] rounded-l bg-ink" />
        <span aria-hidden="true" className="absolute top-32 -left-[3px] h-12 w-[3px] rounded-l bg-ink" />
        <div className="relative size-full overflow-hidden rounded-[1.75rem] bg-ink">
          <AnimatePresence initial={false} custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              variants={screen}
              initial="enter"
              animate="center"
              exit="exit"
              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 30 }}
              drag={reduce ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) < 50) return;
                const forward = info.offset.x < 0 !== rtl;
                go(forward ? 1 : -1);
              }}
              onTap={() => go(1)}
              className="absolute inset-0 cursor-pointer touch-pan-y"
            >
              <Image
                src={shots[index].src}
                alt={shots[index].alt}
                fill
                sizes="200px"
                draggable={false}
                className="pointer-events-none object-cover select-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={prevLabel}
          className="grid size-11 place-items-center rounded-full bg-ink text-white transition-transform hover:-translate-y-0.5"
        >
          <Arrow className="rotate-180" />
        </button>
        <div className="flex gap-1.5" aria-hidden="true">
          {shots.map((s, i) => (
            <span
              key={s.src}
              className={`h-1.5 rounded-full bg-ink transition-all duration-300 ${i === index ? "w-5" : "w-1.5 opacity-30"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={nextLabel}
          className="grid size-11 place-items-center rounded-full bg-ink text-white transition-transform hover:-translate-y-0.5"
        >
          <Arrow />
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {shots[index].alt}
      </p>
    </div>
  );
}
