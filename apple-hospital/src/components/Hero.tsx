import Image from "next/image";
import { HeartPulse, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Badge } from "@/components/ui/SectionHeading";
import { Bubbles, Initials } from "@/components/ui/bits";
import { photos, type Photo } from "@/lib/images";
import { bookingHref, happyPatients, site } from "@/lib/site";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

function HeroCtas() {
  return (
    <>
      <ButtonLink href={bookingHref}>Book Appointment</ButtonLink>
      <ButtonLink href="#specialties" variant="outline">
        Explore Services
      </ButtonLink>
    </>
  );
}

function HeroPhoto({
  photo,
  className,
  delayMs,
  sizes,
  preload = false,
}: {
  photo: Photo;
  className: string;
  delayMs: number;
  sizes: string;
  preload?: boolean;
}) {
  return (
    <div
      style={delay(delayMs)}
      className={`animate-fade-up relative overflow-hidden rounded-t-full bg-linear-to-b from-mint to-white ring-1 ring-accent/15 ${className}`}
    >
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} preload={preload} className="object-cover object-top" />
    </div>
  );
}

const floatingCard =
  "animate-fade-up z-20 flex items-center gap-3 rounded-2xl bg-white/95 p-3 shadow-[0_18px_40px_-18px_rgba(10,58,42,0.35)] ring-1 ring-black/5 backdrop-blur";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-linear-to-b from-white via-white to-mint/70"
    >
      <div
        aria-hidden
        className="bg-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <Bubbles />

      <div className="relative mx-auto max-w-4xl px-4 pt-10 text-center sm:px-6 sm:pt-14">
        <div className="animate-fade-up">
          <Badge>
            <HeartPulse aria-hidden className="h-4 w-4" />
            Trusted Care. Compassionate Healing.
          </Badge>
        </div>

        <h1
          id="hero-title"
          style={delay(80)}
          className="animate-fade-up mt-5 text-[2.1rem] leading-[1.15] font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]"
        >
          Your Journey to Parenthood <br className="hidden sm:block" />
          Starts with <span className="font-bold text-accent-ink">Expert Care</span>
        </h1>

        <p
          style={delay(160)}
          className="animate-fade-up mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base"
        >
          {site.description}
        </p>

        {/* On phones the buttons sit under the copy; from `sm` up they overlay the photos. */}
        <div
          style={delay(240)}
          className="animate-fade-up mt-7 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:justify-center sm:hidden"
        >
          <HeroCtas />
        </div>
      </div>

      <div className="relative mx-auto mt-8 max-w-5xl px-4 sm:mt-12 sm:px-6">
        {/* Floating cards: a simple grid on small screens, pinned beside the photos on desktop. */}
        <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:contents">
          <div style={delay(500)} className={`${floatingCard} pr-5 lg:absolute lg:bottom-32 lg:left-0 xl:-left-6`}>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-forest">
              <Star aria-hidden className="h-5 w-5 fill-current" />
            </span>
            <p className="text-left leading-tight">
              <span className="block text-xl font-bold text-accent-ink">{happyPatients}</span>
              <span className="text-sm text-muted">Happy Patients</span>
            </p>
          </div>

          <div style={delay(600)} className={`${floatingCard} lg:absolute lg:right-0 lg:bottom-44 xl:-right-6`}>
            <Initials name="Dr. Kishore Jangir" className="h-11 w-11 text-sm" />
            <p className="min-w-0 flex-1 text-left leading-tight">
              <span className="block text-sm font-semibold text-ink">Dr. Kishore Jangir</span>
              <span className="text-xs text-muted">Gynecologist</span>
            </p>
            <ButtonLink href={bookingHref} variant="ink" size="sm">
              Book Consult
            </ButtonLink>
          </div>
        </div>

        {/* Public Google rating, desktop only. */}
        <div style={delay(700)} className="animate-fade-up absolute top-6 right-6 hidden text-right lg:block">
          <p className="text-sm font-semibold text-ink">{site.googleRating.value} Google Rating</p>
          <p className="mt-0.5 text-xs text-muted">{site.googleRating.count} patient reviews</p>
          <span className="mt-1.5 flex justify-end gap-0.5" aria-hidden>
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            ))}
          </span>
        </div>

        <div className="relative flex items-end justify-center gap-2 sm:gap-4">
          <HeroPhoto
            photo={photos.heroLeft}
            className="aspect-[3/4] w-[30%] max-w-[250px]"
            sizes="(min-width: 1024px) 250px, 30vw"
            delayMs={200}
          />
          <HeroPhoto
            photo={photos.heroCenter}
            className="z-10 aspect-[3/4.3] w-[38%] max-w-[320px] shadow-[0_-20px_60px_-30px_rgba(0,163,140,0.6)]"
            sizes="(min-width: 1024px) 320px, 38vw"
            delayMs={60}
            preload
          />
          <HeroPhoto
            photo={photos.heroRight}
            className="aspect-[3/4] w-[30%] max-w-[250px]"
            sizes="(min-width: 1024px) 250px, 30vw"
            delayMs={300}
          />

          <div
            style={delay(450)}
            className="animate-fade-up absolute inset-x-0 bottom-6 z-20 hidden justify-center gap-3 sm:flex"
          >
            <HeroCtas />
          </div>
        </div>
      </div>
    </section>
  );
}
