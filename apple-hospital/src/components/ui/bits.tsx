import { Star, Users } from "lucide-react";

// Initials for a named doctor; a group icon for a team.
export function Initials({ name, className = "" }: { name: string; className?: string }) {
  if (!/^Dr\.?\s/i.test(name)) {
    return (
      <span aria-hidden className={`grid shrink-0 place-items-center rounded-full bg-forest text-accent ${className}`}>
        <Users className="h-[45%] w-[45%]" />
      </span>
    );
  }
  const letters = name
    .replace(/^Dr\.?\s+/i, "")
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
  return (
    <span
      aria-hidden
      className={`grid shrink-0 place-items-center rounded-full bg-forest font-semibold text-accent ${className}`}
    >
      {letters}
    </span>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span role="img" aria-label="Rated 5 out of 5" className={`flex gap-0.5 ${className}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} aria-hidden className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </span>
  );
}

// Soft floating circles used behind light sections, echoing the reference design.
export function Bubbles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="animate-float absolute top-16 -left-10 h-40 w-40 rounded-full bg-accent/10 blur-2xl" />
      <span className="animate-float-slow absolute top-1/3 right-[-3rem] h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      {/* Small dots only on wider screens, where they can't land on top of text. */}
      <span className="animate-float absolute bottom-24 left-1/4 hidden h-6 w-6 rounded-full bg-accent/25 sm:block" />
      <span className="animate-float-slow absolute top-28 right-1/4 hidden h-4 w-4 rounded-full bg-accent/30 sm:block" />
      <span className="animate-float absolute top-1/2 left-[12%] hidden h-3 w-3 rounded-full bg-accent/40 sm:block" />
      <span className="animate-float-slow absolute right-[14%] bottom-1/3 hidden h-8 w-8 rounded-full bg-accent/15 sm:block" />
    </div>
  );
}
