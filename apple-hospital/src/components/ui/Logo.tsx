import { site } from "@/lib/site";

// Placeholder wordmark until the hospital supplies its own logo file.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`flex items-center gap-2.5 ${className}`} aria-label={`${site.shortName} home`}>
      <svg viewBox="0 0 32 32" aria-hidden className="h-8 w-8 shrink-0">
        <path
          d="M16 10.2c-2.4-2.6-7.1-3-9.6.3-3 4-1.6 10.6 2 15 1.9 2.3 3.9 3.3 5.4 2.5.8-.4 1.5-.4 2.3 0 1.5.8 3.5-.2 5.4-2.5 3.6-4.4 5-11 2-15-2.5-3.3-7.2-2.9-9.5-.3z"
          className="fill-accent"
        />
        <path d="M16.2 9.6c-.2-3.4 1.6-5.9 5.2-6.8.2 3.4-1.7 5.9-5.2 6.8z" className="fill-[#7ff0dd]" />
        <path d="M14.6 15.2h2.8v2.6H20v2.8h-2.6v2.6h-2.8v-2.6H12v-2.8h2.6z" className="fill-forest" />
      </svg>
      <span className="text-lg leading-none font-semibold tracking-tight text-white sm:text-xl">
        Apple <span className="text-accent">Hospital</span>
      </span>
    </a>
  );
}
