"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/ui/Logo";
import { bookingHref, navLinks } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  // The menu's closing animation cancels the browser's own jump to a section,
  // so in-page links scroll only once the menu has finished closing.
  const pendingHash = useRef<string | null>(null);

  const handleMenuLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href") ?? "";
    if (href.startsWith("#")) {
      event.preventDefault();
      pendingHash.current = href;
    }
    setOpen(false);
  };

  const scrollToPending = () => {
    const hash = pendingHash.current;
    pendingHash.current = null;
    if (!hash) return;
    document.querySelector(hash)?.scrollIntoView();
    history.pushState(null, "", hash);
  };

  return (
    <header className="sticky top-0 z-50 bg-forest/95 text-white backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px]">
        <Logo />

        <ul className="hidden items-center gap-7 text-sm lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-white/75 transition hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href={bookingHref} size="sm" arrow>
              Book Appointment
            </ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-full text-white transition hover:bg-white/10 lg:hidden"
          >
            {open ? <X aria-hidden className="h-6 w-6" /> : <Menu aria-hidden className="h-6 w-6" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </nav>

      <AnimatePresence onExitComplete={scrollToPending}>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-full overflow-hidden border-t border-white/10 bg-forest shadow-2xl lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleMenuLink}
                    className="block rounded-xl px-3 py-3 text-base text-white/85 transition hover:bg-white/5 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-3 pt-2 pb-3 sm:hidden">
                <ButtonLink href={bookingHref} arrow className="w-full" onClick={handleMenuLink}>
                  Book Appointment
                </ButtonLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
