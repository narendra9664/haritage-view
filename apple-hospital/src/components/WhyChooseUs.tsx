import { Baby, Clock, Microscope, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Microscope,
    title: "Advanced IVF Lab",
    text: "State-of-the-art facilities for successful test tube baby treatments.",
  },
  {
    icon: Stethoscope,
    title: "Expert Gynecologists",
    text: "Led by Dr. Kishore Jangir, providing compassionate women's healthcare.",
  },
  {
    icon: Baby,
    title: "Pediatric Excellence",
    text: "Dr. Kapil Sharma ensures your little ones receive the best care.",
  },
  {
    icon: Clock,
    title: "24/7 Supportive Staff",
    text: "Open 24 hours with a focus on cleanliness and patient comfort.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" aria-labelledby="why-title" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div aria-hidden className="bg-dots absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          id="why-title"
          badge="Why Choose Us"
          title="Comprehensive Care for"
          highlight="Every Stage of Life"
          stacked
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 0.08}>
              <div className="flex h-full items-start gap-5 rounded-2xl bg-mint/60 p-6 ring-1 ring-accent/10 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_48px_-24px_rgba(10,58,42,0.35)]">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-accent text-forest shadow-lg shadow-accent/30">
                  <Icon aria-hidden className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
