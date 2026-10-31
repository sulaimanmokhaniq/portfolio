/** Faint patterns drawn from each project's own theme, laid behind a project card's content. */

const svg = (size: number, body: string) =>
  `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'><g fill='none' stroke='#141414' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'>${body}</g></svg>`;

const star = (cx: number, cy: number, r: number) =>
  `<rect x='${cx - r}' y='${cy - r}' width='${2 * r}' height='${2 * r}'/><rect x='${cx - r}' y='${cy - r}' width='${2 * r}' height='${2 * r}' transform='rotate(45 ${cx} ${cy})'/>`;

const sparkle = (x: number, y: number, r: number) =>
  `<path d='M${x} ${y - r}Q${x} ${y} ${x + r} ${y}Q${x} ${y} ${x} ${y + r}Q${x} ${y} ${x - r} ${y}Q${x} ${y} ${x} ${y - r}Z'/>`;

const MOTIFS: Record<string, { tile?: string; image?: string; size?: number }> = {
  // TAHABEER: an eight-point star lattice, like the geometry on mosque doors and ceilings.
  tahabeer: {
    size: 88,
    tile: svg(
      88,
      [
        [44, 44],
        [0, 0],
        [88, 0],
        [0, 88],
        [88, 88],
      ]
        .map(([x, y]) => star(x, y, 17))
        .join("") + "<path d='M44 0 88 44 44 88 0 44Z'/><circle cx='44' cy='44' r='7'/>",
    ),
  },
  // Wamdah (a flash): small sparkles and quick flash marks.
  wamdah: {
    size: 120,
    tile: svg(
      120,
      sparkle(30, 30, 14) +
        sparkle(88, 78, 9) +
        sparkle(100, 22, 5) +
        "<path d='M18 92l8-10h-6l8-10'/><path d='M62 44l10-4M64 52l11 1M58 36l5-9'/>",
    ),
  },
  // Qalam: the app's own logo (the word قلم ending in a pen nib), repeated in staggered rows.
  qalam: { image: "url(/work/qalam/motif.png)" },
  // SmartSchedule: a timetable grid with a few booked slots.
  smartschedule: {
    size: 96,
    tile: svg(
      96,
      "<path d='M0 0H96M0 32H96M0 64H96M0 0V96M32 0V96M64 0V96'/><rect x='38' y='6' width='20' height='20' rx='4' fill='#141414' fill-opacity='.35' stroke='none'/><rect x='6' y='70' width='52' height='20' rx='4' fill='#141414' fill-opacity='.35' stroke='none'/>",
    ),
  },
  // CloudTrim: cloud outlines with a dotted "trim" line.
  cloudtrim: {
    size: 150,
    tile: svg(
      150,
      "<path d='M30 62a14 14 0 0 1 3-27 20 20 0 0 1 38-5 16 16 0 0 1 20 20 12 12 0 0 1-3 12z'/><path d='M84 128a10 10 0 0 1 2-19 14 14 0 0 1 27-4 11 11 0 0 1 14 14 9 9 0 0 1-2 9z'/><path d='M8 92H142' stroke-dasharray='2 7'/>",
    ),
  },
};

const MASK =
  "pointer-events-none absolute inset-0 -z-10 rounded-tile opacity-[var(--motif-o,0.14)] [mask-image:radial-gradient(120%_90%_at_0%_100%,black,transparent_55%),radial-gradient(90%_80%_at_100%_0%,black,transparent_50%)]";

export function ProjectMotif({ slug }: { slug: string }) {
  const motif = MOTIFS[slug];
  if (!motif) return null;
  return (
    <span
      aria-hidden="true"
      className={MASK}
      style={{
        backgroundImage: motif.image ?? `url("data:image/svg+xml,${encodeURIComponent(motif.tile ?? "")}")`,
        backgroundSize: motif.image ? "120px 150px" : `${motif.size}px ${motif.size}px`,
      }}
    />
  );
}
