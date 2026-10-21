import { stackLogos } from "@/content/stack-logos";

const slide = "transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

// On hover the name card slides sideways out while a brand-coloured logo card slides in over it.
export function StackChip({ name }: { name: string }) {
  const logo = stackLogos[name];
  if (!logo) return <li className="rounded-full bg-chip px-3.5 py-2 text-[15px]">{name}</li>;

  const brand = logo.color === "currentColor" ? "#141414" : logo.color;

  return (
    <li
      aria-label={name}
      className="group/chip relative cursor-default overflow-hidden rounded-full bg-chip text-[15px] isolate"
    >
      <span aria-hidden="true" className={`block px-3.5 py-2 group-hover/chip:translate-x-[110%] ${slide}`}>
        {name}
      </span>
      <span
        aria-hidden="true"
        className={`absolute inset-0 flex -translate-x-[110%] items-center justify-center rounded-full group-hover/chip:translate-x-0 ${slide}`}
        style={{ background: brand }}
      >
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
          <path d={logo.path} fill="#fff" />
        </svg>
      </span>
    </li>
  );
}
