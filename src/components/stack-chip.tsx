import { stackLogos } from "@/content/stack-logos";

// A stack chip whose brand logo slides in on hover. Touch screens have no hover, so they show it all the time.
export function StackChip({ name }: { name: string }) {
  const logo = stackLogos[name];
  if (!logo) return <li className="rounded-full bg-chip px-3.5 py-2 text-[15px]">{name}</li>;

  const brand = logo.color === "currentColor" ? "var(--text)" : logo.color;

  return (
    <li
      className="group/chip inline-flex cursor-default items-center rounded-full bg-chip px-3.5 py-2 text-[15px] transition-[background-color,box-shadow,translate] duration-300 ease-out hover:-translate-y-0.5 hover:bg-surface hover:shadow-[inset_0_0_0_1.5px_var(--brand)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      style={{ "--brand": brand } as React.CSSProperties}
    >
      <span className="grid grid-cols-[0fr] transition-[grid-template-columns,margin] duration-300 ease-out group-hover/chip:me-2 group-hover/chip:grid-cols-[1fr] motion-reduce:transition-none [@media(hover:none)]:me-2 [@media(hover:none)]:grid-cols-[1fr]">
        <span className="overflow-hidden">
          <svg
            viewBox="0 0 24 24"
            className="size-[18px] -translate-x-3 -rotate-45 opacity-0 transition-[translate,rotate,opacity] duration-300 ease-out group-hover/chip:translate-x-0 group-hover/chip:rotate-0 group-hover/chip:opacity-100 motion-reduce:transition-none [@media(hover:none)]:translate-x-0 [@media(hover:none)]:rotate-0 [@media(hover:none)]:opacity-100"
            aria-hidden="true"
          >
            <path d={logo.path} fill={brand} />
          </svg>
        </span>
      </span>
      {name}
    </li>
  );
}
