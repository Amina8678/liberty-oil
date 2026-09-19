import Image from "next/image";

export function Quality() {
  return (
    <section id="quality" className="bg-limestone py-20 md:py-28">
      <div className="container-x">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="section-label">
              Our Quality
            </span>

            <h2 className="mt-5 max-w-xl text-4xl md:text-5xl">
              Product excellence you can see. Taste you can savour.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              We believe premium olive oil begins with the character of
              the olives and continues through every stage of
              production, handling and packaging.
            </p>

            <div className="mt-9 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-blue text-white">
                  01
                </div>

                <div>
                  <h3 className="text-xl">
                    Selected Olives
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-muted">
                    We focus on carefully selected olives as the
                    starting point for exceptional oil.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-blue text-white">
                  02
                </div>

                <div>
                  <h3 className="text-xl">
                    Cold Pressing
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-muted">
                    Cold pressing helps preserve the natural character
                    and qualities of the oil.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-blue text-white">
                  03
                </div>

                <div>
                  <h3 className="text-xl">
                    Careful Packaging
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-muted">
                    Every bottle is prepared to present our product
                    with consistency and care.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="image-premium relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/event-olive-oil-hand.jpeg"
                alt="Event Extra Virgin Olive Oil bottle in an olive grove"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>

        {/* Dried Fruits & Nuts: Sourcing, Processing & Product integrity */}
        <div className="mt-20 border-t border-[#083b52]/10 pt-16 md:mt-28 md:pt-20">
          <div className="max-w-2xl">
            <span className="section-label">
              Dried Fruits &amp; Nuts
            </span>

            <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-[#071c27] md:text-4xl">
              Sourcing, processing and product integrity.
            </h3>

            <p className="mt-6 text-base leading-8 text-muted">
              Product integrity sits at the centre of our dried fruit and
              nut business, from selected growers through to hygienic
              processing and final packaging.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[18px] border border-[#083b52]/10 bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#09b1ec]">
                01
              </p>
              <h4 className="mt-4 font-display text-lg font-semibold text-[#071c27]">
                Responsible Sourcing
              </h4>
              <p className="mt-3 text-sm leading-7 text-[#083b52]/65">
                Products are sourced from carefully selected Turkish growers
                and processors committed to consistent standards and sustainable
                production.
              </p>
            </div>

            <div className="rounded-[18px] border border-[#083b52]/10 bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#09b1ec]">
                02
              </p>
              <h4 className="mt-4 font-display text-lg font-semibold text-[#071c27]">
                Hygienic Processing
              </h4>
              <p className="mt-3 text-sm leading-7 text-[#083b52]/65">
                Sorting, inspection and hygienic processing preserve
                freshness, food safety and nutritional integrity at every
                stage.
              </p>
            </div>

            <div className="rounded-[18px] border border-[#083b52]/10 bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#09b1ec]">
                03
              </p>
              <h4 className="mt-4 font-display text-lg font-semibold text-[#071c27]">
                Compliance &amp; Traceability
              </h4>
              <p className="mt-3 text-sm leading-7 text-[#083b52]/65">
                We work to HACCP principles and ISO 2000-aligned management
                systems, with Halal-certified products where applicable and
                traceability from source to customer.
              </p>
            </div>

            <div className="rounded-[18px] border border-[#083b52]/10 bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#09b1ec]">
                04
              </p>
              <h4 className="mt-4 font-display text-lg font-semibold text-[#071c27]">
                Continuous Monitoring
              </h4>
              <p className="mt-3 text-sm leading-7 text-[#083b52]/65">
                Regular checks on appearance, moisture, cleanliness and
                packaging integrity support consistent product standards and export
                compliance.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}