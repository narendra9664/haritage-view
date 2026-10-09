import Image from "next/image";
import { Baby, Clock, HeartPulse, TestTube } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Initials } from "@/components/ui/bits";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { photos } from "@/lib/images";

const specialties = [
  {
    title: "IVF & Test Tube Baby",
    category: "Fertility",
    icon: TestTube,
    photo: photos.ivf,
    text: "Advanced fertility treatment in our dedicated IVF lab, guided step by step by specialists.",
    lead: "Fertility & IVF Team",
  },
  {
    title: "Gynecology & Obstetrics",
    category: "Women's Health",
    icon: HeartPulse,
    photo: photos.gynecology,
    text: "Complete women's healthcare, from routine check-ups to safe pregnancy and delivery.",
    lead: "Dr. Kishore Jangir",
  },
  {
    title: "Pediatric Care",
    category: "Child Health",
    icon: Baby,
    photo: photos.pediatric,
    text: "Gentle, expert care for newborns and children, from the very first check-up.",
    lead: "Dr. Kapil Sharma",
  },
];

export function Specialties() {
  return (
    <section id="specialties" aria-labelledby="specialties-title" className="bg-white px-4 pb-20 sm:px-6 lg:pb-28">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-mint px-4 pt-14 pb-12 sm:px-8 lg:rounded-[2.5rem] lg:px-12 lg:pt-16">
        <SectionHeading
          id="specialties-title"
          title="Our Specialized"
          highlight="Treatments"
          description="Focused care for fertility, pregnancy and childhood, delivered by an experienced team under one roof in Sikar."
        />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map(({ title, category, icon: Icon, photo, text, lead }, i) => (
            <Reveal as="li" key={title} delay={i * 0.1} className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <article className="group flex h-full flex-col rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_50px_-24px_rgba(10,58,42,0.4)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-mint sm:aspect-[16/10] lg:aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col px-2 pt-4 pb-2">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon aria-hidden className="h-3.5 w-3.5 text-accent-deep" />
                      {category}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock aria-hidden className="h-3.5 w-3.5 text-accent-deep" />
                      Consultation
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-accent-deep">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <span className="flex min-w-0 items-center gap-2 text-sm font-medium text-ink">
                      <Initials name={lead} className="h-8 w-8 text-[11px]" />
                      <span className="truncate">{lead}</span>
                    </span>
                    <ButtonLink href="#contact" variant="ink" size="sm" aria-label={`Learn more about ${title}`}>
                      Learn More
                    </ButtonLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <ButtonLink href="#contact" arrow>
            See All Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
