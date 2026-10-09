import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { footerLinks, site, socials } from "@/lib/site";

const headingClass = "text-sm font-semibold tracking-wide text-white";

export function Footer() {
  const { address } = site;
  return (
    <footer id="contact" aria-labelledby="contact-title" className="rounded-t-[2.5rem] bg-forest text-white lg:rounded-t-[3.5rem]">
      <h2 id="contact-title" className="sr-only">
        Contact {site.name}
      </h2>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_1.1fr_1.1fr] lg:py-20">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">{site.tagline}</p>
          <ul className="mt-6 flex gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/80 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-accent hover:text-forest"
                >
                  <SocialIcon name={social.icon} className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h3 className={headingClass}>Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/65 transition hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className={headingClass}>Location</h3>
          <address className="mt-4 flex gap-3 text-sm leading-relaxed text-white/65 not-italic">
            <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>
              {address.street}, {address.locality},
              <br />
              {address.city}, {address.region} – {address.postalCode}
            </span>
          </address>
        </div>

        <div>
          <h3 className={headingClass}>Contact &amp; Hours</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            <li className="flex items-center gap-3">
              <Clock aria-hidden className="h-4 w-4 shrink-0 text-accent" />
              {site.hours}
            </li>
            <li className="flex items-center gap-3">
              <Phone aria-hidden className="h-4 w-4 shrink-0 text-accent" />
              {site.phone.href ? (
                <a href={site.phone.href} className="transition hover:text-accent">
                  {site.phone.display}
                </a>
              ) : (
                site.phone.display
              )}
            </li>
          </ul>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-forest transition hover:-translate-y-0.5 hover:bg-[#1fe0c4]"
          >
            <Navigation aria-hidden className="h-4 w-4" />
            Get Directions
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-white/55 sm:px-6 sm:text-sm">
          © 2026 Apple Hospital &amp; Test Tube Baby Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
