"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const PRINT = 1.9; // seconds for the sheet to come out
const HOLD = 600; // ms to admire the finished page before the download starts

// "Download CV" plays a short printer animation, then hands over the PDF.
export function CvButton({
  href,
  label,
  printingLabel,
  className,
}: {
  href: string;
  label: React.ReactNode;
  printingLabel: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [printing, setPrinting] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const download = () => {
    clearTimeout(timer.current);
    setPrinting(false);
    const a = document.createElement("a");
    a.href = href;
    a.download = "";
    a.click();
  };

  useEffect(() => {
    if (!printing) return;
    timer.current = setTimeout(download, PRINT * 1000 + HOLD);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && download();
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(timer.current);
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [printing]);

  return (
    <>
      <a
        href={href}
        download
        className={className}
        onClick={(e) => {
          if (reduce) return;
          e.preventDefault();
          setPrinting(true);
        }}
      >
        {label}
      </a>

      <AnimatePresence>
        {printing && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={printingLabel}
            className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-ground/80 p-4 backdrop-blur-md"
            onClick={download}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex w-[280px] flex-col items-center gap-6 rounded-tile border border-line bg-surface px-8 pt-9 pb-7 text-text"
              initial={{ scale: 0.9, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 8 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <Printer />
              <p className="font-display text-lg font-bold">{printingLabel}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Printer() {
  return (
    <div className="relative w-52" aria-hidden="true">
      {/* paper tray */}
      <div className="mx-8 h-7 rounded-t-xl bg-sun" />
      {/* body */}
      <motion.div
        className="relative z-10 flex h-20 flex-col justify-between rounded-2xl bg-flame px-5 pt-4 pb-3"
        animate={{ y: [0, -1.5, 0] }}
        transition={{ duration: 0.18, repeat: Math.ceil(PRINT / 0.18), ease: "easeInOut" }}
      >
        <div className="flex justify-end gap-1.5">
          <motion.span
            className="size-2.5 rounded-full bg-mint"
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
          <span className="size-2.5 rounded-full bg-ink" />
        </div>
        <div className="h-2 rounded-full bg-ink" />
      </motion.div>
      {/* sheet coming out of the slot */}
      <div className="mx-6 -mt-4 h-48 overflow-hidden pt-4">
        <motion.div
          className="flex h-44 flex-col gap-2.5 rounded-b-lg bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: PRINT, ease: [0.45, 0, 0.25, 1] }}
        >
          <div className="flex items-center gap-2">
            <span className="size-6 rounded-full bg-peri" />
            <span className="h-2.5 w-20 rounded-full bg-ink" />
          </div>
          <span className="h-1.5 w-full rounded-full bg-flame" />
          <span className="h-1.5 w-11/12 rounded-full bg-[#e4e1d9]" />
          <span className="h-1.5 w-4/5 rounded-full bg-[#e4e1d9]" />
          <span className="h-1.5 w-full rounded-full bg-[#e4e1d9]" />
          <span className="h-1.5 w-2/3 rounded-full bg-[#e4e1d9]" />
          <span className="mt-1 h-1.5 w-1/2 rounded-full bg-mint" />
          <span className="h-1.5 w-5/6 rounded-full bg-[#e4e1d9]" />
        </motion.div>
      </div>
    </div>
  );
}
