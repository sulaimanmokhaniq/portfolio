"use client";

import { useEffect, useRef, useState } from "react";

// The width the site is laid out at; it is then scaled down to fit the card's window.
const BASE = 1200;

// "Try it live" swaps the cover inside the card's browser window for the real site, so visitors can
// click, scroll and type in it right there. Sits over ProjectArt's screen area (below its address bar).
export function LiveSite({
  url,
  title,
  tryLabel,
  openLabel,
  closeLabel,
}: {
  url: string;
  title: string;
  tryLabel: string;
  openLabel: string;
  closeLabel: string;
}) {
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [box, setBox] = useState({ w: BASE, h: 750 });
  const screen = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const scale = box.w / BASE;

  useEffect(() => {
    const el = screen.current;
    if (!active || !el) return;
    const ro = new ResizeObserver(([e]) => setBox({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, [active]);

  const close = () => {
    setActive(false);
    // Wait for the button to come back before moving focus to it.
    requestAnimationFrame(() => trigger.current?.focus());
  };

  const iconButton =
    "grid size-6 place-items-center rounded-full bg-paper text-ink transition-colors hover:bg-paper-line";

  if (!active) {
    return (
      <button
        ref={trigger}
        type="button"
        onClick={() => {
          setLoaded(false);
          setActive(true);
        }}
        className="absolute end-9 bottom-5 z-10 inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 font-semibold whitespace-nowrap text-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-0.5"
      >
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-live motion-reduce:hidden" />
          <span className="relative inline-flex size-2.5 rounded-full bg-live" />
        </span>
        {tryLabel}
      </button>
    );
  }

  return (
    <>
      <div dir="ltr" className="absolute inset-x-5 top-5 z-10 flex h-8 items-center justify-end gap-1.5 px-2">
        <a href={url} target="_blank" rel="noreferrer" aria-label={openLabel} title={openLabel} className={iconButton}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
          </svg>
        </a>
        <button
          type="button"
          onClick={close}
          aria-label={closeLabel}
          title={closeLabel}
          className={iconButton}
          autoFocus
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
      <div ref={screen} dir="ltr" className="absolute inset-x-5 top-[3.25rem] bottom-0 z-10 overflow-hidden bg-white">
        {!loaded && (
          <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
            <span className="size-7 animate-spin rounded-full border-[3px] border-paper-line border-t-flame" />
          </div>
        )}
        <iframe
          src={url}
          title={title}
          onLoad={() => setLoaded(true)}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
          className="absolute top-0 left-0 origin-top-left border-0"
          style={{ width: BASE, height: box.h / scale, transform: `scale(${scale})` }}
        />
      </div>
    </>
  );
}
