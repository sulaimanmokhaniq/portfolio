"use client";

import { Aref_Ruqaa } from "next/font/google";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const ruqaa = Aref_Ruqaa({ subsets: ["arabic"], weight: "700", preload: false });

const DURATION = 3600; // ms: draw the strokes, fill them in, then fade out

// Full-screen calligraphy of the Arabic name, played when the visitor taps the logo. It covers whatever part of
// the page they are on and leaves them in the same spot. Tap or Esc ends it early.
export function NameCalligraphy({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = setTimeout(onClose, reduce ? 1500 : DURATION);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    addEventListener("keydown", onKey);
    return () => {
      clearTimeout(id);
      removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;
  // Portalled to <body>: the header's backdrop blur would otherwise trap a fixed layer inside the header.
  return createPortal(
    <div
      className="calli fixed inset-0 z-50 grid cursor-pointer place-items-center bg-ground"
      onClick={onClose}
      aria-hidden="true"
    >
      <svg viewBox="0 0 600 260" className="w-[min(640px,88vw)] overflow-visible">
        <text x="300" y="190" textAnchor="middle" className={ruqaa.className}>
          سليمان
        </text>
      </svg>
    </div>,
    document.body,
  );
}
