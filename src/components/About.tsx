export function About() {
  return (
    <section id="about" className="bg-paper">
      <div className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl md:text-4xl text-olive-deep leading-tight">
              A family enterprise, led by a woman entrepreneur
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-[17px] leading-relaxed text-ink/85">
            <p>
              Liberty Health Ltd is a UK-based company established in 2020,
              specialising in premium Extra Virgin Olive Oil marketed under
              the Event brand. The company sources oil directly from
              carefully selected Turkish olives grown on the coast of the
              Aegean Sea, with purity, quality and lasting customer trust at
              the centre of everything it does.
            </p>
            <p>
              It is a farmers&apos; enterprise with 100% Turkish capital,
              operating a 5,000 m² pressing facility alongside a 2,000 m²
              enclosed storage area — a total warehouse capacity of 250
              tons. The olives themselves come from the company&apos;s own
              gardens: roughly 300,000 m² and 10,000 trees, farmed to Good
              Agricultural Practice, in Turkey&apos;s Aegean region.
            </p>
            <p>
              The factory is the sector&apos;s first environmentally
              friendly olive oil production facility, supplying high-quality
              product to both domestic and international markets.
            </p>
          </div>
        </div>

        <div className="mt-20 md:mt-28 grid md:grid-cols-12 gap-10 md:gap-16 rule pt-16 md:pt-20">
          <div className="md:col-span-4">
            <h3 className="font-display text-3xl md:text-4xl text-olive-deep leading-tight">
              From Skopje to the Aegean
            </h3>
          </div>
          <div className="md:col-span-7 md:col-start-6 text-[17px] leading-relaxed text-ink/85">
            <p>
              The story begins with a family&apos;s migration from Skopje, in
              northern Macedonia, to the Akhisar region of Turkey after the
              Second World War. A resettlement grew into a family enterprise
              built around extra virgin olive oil — first in Akhisar, a
              region known for its olives, and later in Izmir, where the
              company now processes its harvest along the northern Aegean
              coast, sourcing the finest produce from across Turkey.
            </p>
            <p className="mt-6">
              Branded Event to reach a global market, the company carries
              generations of inherited knowledge forward, turning what was
              once family tradition into a product built for health, beauty
              and taste.
            </p>
          </div>
        </div>

        <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-px bg-[var(--line)] rule">
          <div className="bg-limestone p-8 md:p-10">
            <p className="text-sm font-medium text-olive-mid mb-3">Vision</p>
            <p className="font-display text-xl md:text-2xl text-olive-deep leading-snug">
              Turkish olive oil of exceptional quality and high polyphenol
              content, brought to the global market while giving back to
              local communities.
            </p>
          </div>
          <div className="bg-limestone p-8 md:p-10">
            <p className="text-sm font-medium text-olive-mid mb-3">Mission</p>
            <p className="font-display text-xl md:text-2xl text-olive-deep leading-snug">
              To source the finest produce and manufacture premium-quality
              olive oil at a competitive price — combining traditional
              methods with modern technique for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
