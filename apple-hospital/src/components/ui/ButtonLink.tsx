import { ArrowRight } from "lucide-react";

const variants = {
  accent: "bg-accent text-forest shadow-lg shadow-accent/25 hover:bg-[#1fe0c4] hover:shadow-accent/40",
  outline: "bg-white text-forest ring-2 ring-accent hover:bg-mint",
  dark: "bg-forest text-white hover:bg-forest-deep",
  ink: "bg-ink text-white hover:bg-forest",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  "aria-label"?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "accent",
  size = "md",
  arrow = false,
  className = "",
  external = false,
  onClick,
  "aria-label": ariaLabel,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight aria-hidden className="h-4 w-4" />}
    </a>
  );
}
