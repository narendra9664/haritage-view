import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { photos } from "@/lib/images";

const treatments = [
  {
    lead: "Fertility",
    rest: "Treatments",
    text: "Personalised plans for couples trying to conceive.",
    photo: photos.fertility,
  },
  {
    lead: "High-Risk",
    rest: "Pregnancy Care",
    text: "Close monitoring and support for complex pregnancies.",
    photo: photos.highRiskPregnancy,
  },
  {
    lead: "Family",
    rest: "Planning",
    text: "Clear guidance on contraception and pregnancy spacing.",
    photo: photos.familyPlanning,
  },
  {
    lead: "Newborn",
    rest: "Care",
    text: "Gentle, attentive care for your baby's first days.",
    photo: photos.newbornCare,
  },
];

export function Treatments() {
  return (
    <section id="treatments" aria-labelledby="treatments-title" className="relative overflow-hidden bg-white pb-20 lg:pb-28">
      <div aria-hidden className="bg-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="treatments-title" title="Proven Medical Relief," highlight="Backed By Science" stacked />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {treatments.map(({ lead, rest, text, photo }, i) => (
            <Reveal as="li" key={lead} delay={i * 0.08}>
              <article className="group h-full rounded-2xl bg-mint p-2 ring-1 ring-accent/10 transition duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_28px_50px_-24px_rgba(10,58,42,0.4)] sm:p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 270px, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-1.5 pt-3 pb-1.5 sm:px-2 sm:pt-4 sm:pb-2">
                  <h3 className="text-sm font-semibold text-ink sm:text-base">
                    <span className="text-accent-deep">{lead}</span> {rest}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <ButtonLink href="#contact" arrow>
            View All Treatments
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
