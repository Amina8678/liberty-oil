const tips = [
  "Choose oil in a dark glass bottle — light through clear glass breaks down chlorophyll.",
  "Make sure the lid is sealed and screwed; corks let in oxygen, which causes spoilage.",
  "The colour of the oil doesn't indicate its quality.",
  "Avoid oil displayed under direct sunlight — it oxidises and spoils quickly.",
  "Check the label for harvest date, bottling date, expiry, origin and olive type.",
  "Extra virgin is best consumed fresh — its phenolic components diminish over time.",
  "Match the pack size to your consumption rate; smaller packs suit slower use.",
  "Store in a dark, cool, moisture-free place.",
];

const reasons = [
  "Consistent, premium quality across every batch",
  "Competitive pricing for bulk, retail and private-label orders",
  "Timely delivery and reliable logistics",
  "Long-term, trust-based partnerships",
  "Global food safety standards and full certification",
  "Sustainable, ethical sourcing from a solar-powered facility",
];

export function ChoosingAndWhy() {
  return (
    <section className="bg-paper">
      <div className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl md:text-4xl text-olive-deep leading-tight">
              Choosing a good extra virgin
            </h2>
            <p className="mt-5 text-ink/70 leading-relaxed">
              What actually determines quality when you&apos;re buying, in
              our view.
            </p>
          </div>
          <ol className="md:col-span-7 md:col-start-6 space-y-5">
            {tips.map((t, i) => (
              <li key={t} className="flex gap-4">
                <span className="font-display text-olive-soft text-lg leading-relaxed shrink-0 w-6">
                  {i + 1}
                </span>
                <span className="text-[15px] text-ink/85 leading-relaxed">
                  {t}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-24 md:mt-28 rule pt-16 md:pt-20 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl md:text-4xl text-olive-deep leading-tight">
              Why choose Liberty Health
            </h2>
          </div>
          <ul className="md:col-span-7 md:col-start-6 grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {reasons.map((r) => (
              <li key={r} className="text-[15px] text-ink/85 leading-relaxed border-l-2 border-gold pl-4">
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
