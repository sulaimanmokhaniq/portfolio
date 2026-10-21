"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const INTERVAL = 1000;

// The orange job title under the name, swapping every second. Every title sits invisibly in the same grid
// cell so the headline keeps the height of the longest one and nothing below it jumps.
export function RoleCycler({ roles }: { roles: string[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), INTERVAL);
    return () => clearInterval(id);
  }, [reduce, roles.length]);

  return (
    <span className="grid overflow-hidden text-[0.66em] text-flame sm:text-[0.78em]" aria-hidden="true">
      {roles.map((r) => (
        <span key={r} className="invisible col-start-1 row-start-1">
          {r}.
        </span>
      ))}
      <AnimatePresence initial={false}>
        <motion.span
          key={index}
          className="col-start-1 row-start-1"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
        >
          {roles[index]}.
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
