import { ContourLines } from "./OliveMotif";

const stats = [
  { value: "10,000", label: "olive trees, own gardens" },
  { value: "300,000 m²", label: "of grove on the Aegean coast" },
  { value: "250 t", label: "warehouse capacity" },
  { value: "2020", label: "founded, 100% Turkish capital" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-limestone">
      <ContourLines className="absolute inset-x-0 top-0 h-full w-full text-olive-soft/40" />
      <div className="container-x relative pt-20 pb-16 md:pt-28 md:pb-24">
        <p className="text-sm font-medium text-olive-mid mb-6">
          Company profile — 2025
        </p>
        <h1 className="font-display text-[10vw] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-olive-deep max-w-4xl">
          Olive oil pressed cold, on the coast where it grew.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-ink/80 leading-relaxed">
          Event is the extra virgin olive oil brand of Liberty Health Ltd — a
          farmers&apos; enterprise on the Aegean coast of Turkey, picked by
          hand and pressed within hours, now finding its way from Izmir to
          London and Accra.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#about"
            className="bg-olive-deep text-limestone px-6 py-3 text-sm font-medium hover:bg-near-black transition-colors"
          >
            Read the full profile
          </a>
          <a
            href="#contact"
            className="border border-olive-deep/50 text-olive-deep px-6 py-3 text-sm font-medium hover:bg-olive-deep/5 transition-colors"
          >
            Talk to us about an order
          </a>
        </div>

        <dl className="relative mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 border-t border-[var(--line)] pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl md:text-4xl text-olive-deep">
                {s.value}
              </dd>
              <p className="mt-1 text-sm text-ink/65 leading-snug max-w-[16ch]">
                {s.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
