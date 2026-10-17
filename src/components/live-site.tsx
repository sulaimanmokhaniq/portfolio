"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const subscribe = () => () => {};

// "Try it live" opens the real site inside a big browser window, so visitors can click, scroll and type in it.
export function LiveSite({
  url,
  title,
  tryLabel,
  openLabel,
  closeLabel,
  className = "",
}: {
  url: string;
  title: string;
  tryLabel: string;
  openLabel: string;
  closeLabel: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const { host, pathname } = new URL(url);

  useEffect(() => {
    if (!open) return;
    closeBtn.current?.focus();
    const button = trigger.current;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      button?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        onClick={() => {
          setLoaded(false);
          setOpen(true);
        }}
        className={`inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 font-semibold text-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-0.5 ${className}`}
      >
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#5BE38C] motion-reduce:hidden" />
          <span className="relative inline-flex size-2.5 rounded-full bg-[#5BE38C]" />
        </span>
        {tryLabel}
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-ground/80 p-3 backdrop-blur-md sm:p-8"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-label={title}
                  onClick={(e) => e.stopPropagation()}
                  className="flex size-full max-h-[880px] max-w-[1320px] flex-col overflow-hidden rounded-[1.25rem] border border-line bg-surface shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]"
                  initial={reduce ? false : { scale: 0.94, y: 24 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={reduce ? undefined : { scale: 0.96, y: 12 }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                >
                  <div dir="ltr" className="flex h-12 shrink-0 items-center gap-3 bg-chip px-4">
                    <div className="flex gap-1.5" aria-hidden="true">
                      <span className="size-3 rounded-full bg-[#ff5f57]" />
                      <span className="size-3 rounded-full bg-[#febc2e]" />
                      <span className="size-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex h-8 min-w-0 flex-1 items-center gap-2 rounded-full bg-surface px-3.5 text-sm">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" className="shrink-0 text-muted">
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                      </svg>
                      <span className="truncate">
                        {host}
                        <span className="text-muted">{pathname === "/" ? "" : pathname}</span>
                      </span>
                    </div>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={openLabel}
                      title={openLabel}
                      className="grid size-9 shrink-0 place-items-center rounded-full transition-colors hover:bg-surface"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
                      </svg>
                    </a>
                    <button
                      ref={closeBtn}
                      type="button"
                      onClick={() => setOpen(false)}
                      aria-label={closeLabel}
                      title={closeLabel}
                      className="grid size-9 shrink-0 place-items-center rounded-full transition-colors hover:bg-surface"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                        <path d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    </button>
                  </div>
                  <div className="relative flex-1 bg-white">
                    {!loaded && (
                      <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
                        <span className="size-8 animate-spin rounded-full border-[3px] border-[#e4e1d9] border-t-flame" />
                      </div>
                    )}
                    <iframe
                      src={url}
                      title={title}
                      onLoad={() => setLoaded(true)}
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
                      className="absolute inset-0 size-full border-0"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
