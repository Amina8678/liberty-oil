export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="bg-[#eef9fd] py-24 md:py-32"
    >
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
            The Opportunity
          </p>

          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-[#071c27] md:text-5xl">
            Premium Mediterranean foods designed for Ghana.
          </h2>

          <p className="mt-7 text-lg leading-8 text-[#083b52]/70 md:text-xl">
            Liberty Health Ltd is building a premium, health-focused food portfolio that combines Mediterranean heritage, 
            established product origins, trusted ingredients, and convenient formats for modern consumers.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[22px] bg-[#071c27] p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] !text-white">
              Consumer Demand
            </p>

            <h3 className="mt-5 font-display text-2xl font-semibold !text-white">
              What consumers are looking for
            </h3>

            <ul className="mt-7 space-y-4 text-base leading-7 !text-white">
              <li className="!text-white">Better nutritional choices</li>
              <li className="!text-white">Convenient healthy products</li>
              <li className="!text-white">Premium imported brands</li>
              <li className="!text-white">Culturally and religiously aligned foods</li>
              <li className="!text-white">Established product origins</li>
            </ul>
          </div>

          <div className="rounded-[22px] bg-white p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#65c2f5]">
              Liberty Health Offer
            </p>

            <h3 className="mt-5 font-display text-2xl font-semibold text-white">
              An established portfolio
            </h3>

            <ul className="mt-7 space-y-4 text-base leading-7 text-white/80">
                  <li>Imported products</li>
              <li>Halal-certified </li>
              <li>Non-GMO </li>
              <li>Health-focused food range</li>
              <li>Reliable supply and partnership support</li>
            </ul>
          </div>
        </div>

        <div className="mt-24 border-t border-[#083b52]/15 pt-16">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
                Why Ghana, Why Now?
              </p>

              <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-[#071c27] md:text-4xl">
                A strong fit for changing consumer and retail trends.
              </h3>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="font-display text-xl font-semibold text-[#071c27]">
                  Target audience
                </h4>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-[#083b52]/65">
                  <li>Growing health awareness</li>
                  <li>Urbanisation and rising disposable incomes</li>
                  <li>Increasing demand for distinctive and authentic foods</li>
                  <li>Expansion of convenience retail</li>
                  <li>Strong opportunity for Halal-certified products where applicable</li>
                </ul>
              </div>

              <div>
                <h4 className="font-display text-xl font-semibold text-[#071c27]">
                  Why Liberty Health Fits
                </h4>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-[#083b52]/65">
                  <li>Nutritional value combined with convenience</li>
                  <li>Premium Mediterranean heritage</li>
                  <li>Strong shelf appeal</li>
                  <li>Retail-friendly formats</li>
                  <li>Sustainable supply and customer support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}