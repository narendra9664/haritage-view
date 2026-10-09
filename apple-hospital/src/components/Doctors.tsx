import Image from "next/image";
import { Baby, FlaskConical, HandHeart, Stethoscope } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Initials } from "@/components/ui/bits";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { photos } from "@/lib/images";
import { bookingHref } from "@/lib/site";

// The two named doctors come from the hospital brief. The team cards are
// placeholders: confirm or replace them (with real names and portraits).
const doctors = [
  {
    name: "Dr. Kishore Jangir",
    role: "Gynecologist",
    icon: Stethoscope,
    text: "Women's health, pregnancy care and fertility guidance.",
    photo: photos.drGynecologist,
    cta: "Book Appointment",
    featured: true,
  },
  {
    name: "Dr. Kapil Sharma",
    role: "Pediatrician",
    icon: Baby,
    text: "Care for newborns, infants and growing children.",
    photo: photos.drPediatrician,
    cta: "Book Appointment",
  },
  {
    name: "IVF & Embryology Team",
    role: "Fertility Lab",
    icon: FlaskConical,
    text: "Supports every stage of your IVF and test tube baby journey.",
    photo: photos.ivfTeam,
    cta: "Enquire Now",
  },
  {
    name: "Nursing & Maternity Staff",
    role: "Round-the-clock Care",
    icon: HandHeart,
    text: "Trained staff on hand 24/7 for mothers and newborns.",
    photo: photos.nursingTeam,
    cta: "Enquire Now",
  },
];

export function Doctors() {
  return (
    <section id="doctors" aria-labelledby="doctors-title" className="rounded-t-[2.5rem] bg-mint py-16 lg:rounded-t-[3.5rem] lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="doctors-title"
          badge="Our Doctors"
          title="Meet Our"
          highlight="Expert Doctors"
          align="left"
          description="Experienced specialists who will guide you from your first consultation to your baby's first check-up."
        />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map(({ name, role, icon: Icon, text, photo, cta, featured }, i) => (
            <Reveal as="li" key={name} delay={i * 0.08}>
              <article
                className={`group flex h-full flex-col rounded-2xl p-3 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_50px_-24px_rgba(10,58,42,0.45)] ${
                  featured ? "bg-accent ring-4 ring-accent/30" : "bg-white ring-1 ring-black/5"
                }`}
              >
                <div className="relative">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-mint sm:aspect-[4/3]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <Initials
                    name={name}
                    className={`absolute -bottom-5 left-4 h-12 w-12 text-sm ring-4 ${featured ? "ring-accent" : "ring-white"}`}
                  />
                </div>
                <div className="flex flex-1 flex-col px-2 pt-8 pb-2">
                  <p className={`inline-flex items-center gap-1.5 text-xs font-medium ${featured ? "text-forest" : "text-accent-deep"}`}>
                    <Icon aria-hidden className="h-3.5 w-3.5" />
                    {role}
                  </p>
                  <h3 className="mt-1.5 text-base font-semibold text-ink">{name}</h3>
                  <p className={`mt-1.5 text-xs leading-relaxed ${featured ? "text-forest/80" : "text-muted"}`}>{text}</p>
                  <div className="mt-auto pt-5">
                    <ButtonLink href={bookingHref} variant="ink" size="sm" aria-label={`${cta}: ${name}`}>
                      {cta}
                    </ButtonLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
