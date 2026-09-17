const reasons = [
  {
    n: "01",
    title: "Optimal Growing Conditions",
    body: "Turkey's geography, climate and fertile soils support premium dried fruit and nut production with exceptional flavour and nutrition.",
  },
  {
    n: "02",
    title: "Traditional & Modern Farming",
    body: "Centuries-old agricultural expertise combined with modern techniques delivers consistent harvests that meet export standards.",
  },
  {
    n: "03",
    title: "Sustainable Cultivation",
    body: "Sustainable farming practices protect local ecosystems and maintain long-term productivity and product quality.",
  },
  {
    n: "04",
    title: "Quality & Reliability for Buyers",
    body: "Turkish dried fruit and nut products offer global buyers quality, safety, traceability and value through trusted partnerships.",
  },
];

export function WhyTurkey() {
  return (
    <section
      id="why-turkey"
      className="bg-[#eef9fd] py-24 md:py-32"
    >
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
            Sourcing
          </p>

          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-[#071c27] md:text-5xl">
            Why Turkey?
          </h2>

          <p className="mt-7 text-lg leading-8 text-[#083b52]/70">
            Turkey is globally recognised as a leading producer of dried
            fruits and nuts. Liberty Health partners with trusted Turkish
            growers and processors to bring that heritage to international
            markets.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.n}
              className="rounded-[22px] bg-white p-7 md:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#09b1ec]">
                {r.n}
              </p>

              <h3 className="mt-4 font-display text-xl font-semibold text-[#071c27]">
                {r.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#083b52]/65">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
