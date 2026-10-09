import { Baby, Stethoscope, TestTubes } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/lib/site";

const features = [
  { icon: TestTubes, title: "IVF & Infertility", text: "Advanced test tube baby treatment." },
  { icon: Baby, title: "Maternity & Obstetrics", text: "Safe pregnancy and delivery care." },
  { icon: Stethoscope, title: "Pediatric Care", text: "Expert care for newborns and children." },
];

export function FeaturesBar() {
  return (
    <section aria-label="Core services and key figures" className="bg-forest text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-14">
        <ul className="grid gap-6 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 0.08} className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/25">
                <Icon aria-hidden className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-white/65">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <dl className="mt-10 grid grid-cols-2 gap-y-7 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-7 md:grid-cols-4 md:rounded-full md:px-10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse items-center text-center">
                <dt className="mt-1 text-xs text-white/70 sm:text-sm">{stat.label}</dt>
                <dd className="text-3xl font-semibold text-accent sm:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
