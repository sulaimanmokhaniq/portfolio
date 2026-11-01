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
  // Keyboard Fixer: loose keycaps.
  "keyboard-fixer": {
    size: 110,
    tile: svg(
      110,
      "<rect x='8' y='10' width='30' height='30' rx='6'/><rect x='13' y='14' width='20' height='18' rx='3'/><rect x='62' y='44' width='30' height='30' rx='6'/><rect x='67' y='48' width='20' height='18' rx='3'/><rect x='14' y='74' width='52' height='26' rx='6'/><path d='M74 14v10M69 19h10M28 87h24'/>",
    ),
  },
  // Handcraft: a Sadu weaving band of diamonds and zigzags.
  handcraft: {
    size: 96,
    tile: svg(
      96,
      "<path d='M0 12l12-10 12 10 12-10 12 10 12-10 12 10 12-10 12 10'/><path d='M24 48l24-20 24 20-24 20z'/><path d='M36 48l12-10 12 10-12 10z'/><path d='M0 84l12 10 12-10 12 10 12-10 12 10 12-10 12 10 12-10'/><circle cx='8' cy='48' r='3'/><circle cx='88' cy='48' r='3'/>",
    ),
  },
  // ReBook: open books and a bookmark.
  "used-books-store": {
    size: 120,
    tile: svg(
      120,
      "<path d='M14 30q16-8 30 0v34q-14-8-30 0z'/><path d='M44 30q14-8 30 0v34q-16-8-30 0'/><path d='M66 26v14l4-4 4 4V26'/><path d='M60 88h44M64 80h36v16H64zM70 80v16'/>",
    ),
  },
  // Oratory: a microphone and sound waves.
  oratory: {
    size: 120,
    tile: svg(
      120,
      "<rect x='22' y='12' width='18' height='30' rx='9'/><path d='M16 34a15 15 0 0 0 30 0M31 49v10M23 59h16'/><path d='M66 92v-8M74 98v-20M82 104v-32M90 98v-20M98 92v-8M106 88v0'/><path d='M54 26q6 6 0 12M62 20q12 12 0 24'/>",
    ),
  },
  // SAY (Start All Yourself): code brackets and launch sparks.
  say: {
    size: 120,
    tile: svg(
      120,
      "<path d='M22 18l-12 14 12 14M50 18l12 14-12 14M42 14l-12 36'/><path d='M80 70q12 0 16 16-16-4-16-16zM80 70l-8 8M88 98l-6-12 12 6'/><path d='M30 92h20M30 100h12'/>",
    ),
  },
  // Smart Attendance: QR corners, a location pin and a tick.
  "smart-attendance": {
    size: 120,
    tile: svg(
      120,
      "<rect x='10' y='10' width='18' height='18' rx='3'/><rect x='16' y='16' width='6' height='6'/><rect x='38' y='10' width='18' height='18' rx='3'/><rect x='10' y='38' width='18' height='18' rx='3'/><path d='M38 40h6M50 40v8h6M44 50h0'/><path d='M84 104s-16-16-16-28a16 16 0 0 1 32 0c0 12-16 28-16 28z'/><circle cx='84' cy='76' r='5'/><path d='M74 30l6 6 12-12'/>",
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
