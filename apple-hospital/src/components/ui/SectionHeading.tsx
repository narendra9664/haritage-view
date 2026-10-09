import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  id: string;
  badge?: string;
  title: string;
  highlight: string;
  /** Put the highlight on its own line, as in the hero-style headings. */
  stacked?: boolean;
  align?: "center" | "left";
  description?: string;
};

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-1.5 text-sm font-medium text-accent-deep ring-1 ring-accent/15">
      {children}
    </span>
  );
}

export function SectionHeading({
  id,
  badge,
  title,
  highlight,
  stacked = false,
  align = "center",
  description,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {badge && <Badge>{badge}</Badge>}
      <h2
        id={id}
        className="mt-4 text-[1.75rem] leading-tight font-medium tracking-tight text-balance text-ink sm:text-4xl lg:text-[2.6rem]"
      >
        {title}
        {stacked ? <br /> : " "}
        <span className="font-semibold text-accent-ink">{highlight}</span>
      </h2>
      {description && (
        <p className={`mt-4 text-sm leading-relaxed text-muted sm:text-base ${centered ? "mx-auto max-w-xl" : ""}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
