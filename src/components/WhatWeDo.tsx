const areas = [
  {
    number: "01",
    title: "Sourcing",
    text: "We work with producers and suppliers to identify quality agricultural and food products with strong market potential.",
  },
  {
    number: "02",
    title: "Production",
    text: "Our operations connect traditional agricultural knowledge with modern production and processing techniques.",
  },
  {
    number: "03",
    title: "Quality Assurance",
    text: "Quality control is integrated throughout sourcing, processing, packaging and distribution to maintain consistent standards.",
  },
  {
    number: "04",
    title: "Market Development",
    text: "We identify opportunities and connect products with customers, distributors and commercial partners in different markets.",
  },
  {
    number: "05",
    title: "Distribution",
    text: "We support the movement of products from source to market with a focus on reliable supply and customer service.",
  },
  {
    number: "06",
    title: "Partnerships",
    text: "We develop long-term relationships with businesses, retailers, distributors and other strategic partners.",
  },
];

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="border-t border-[#083b52]/10 bg-[#eef9fd] py-24 md:py-32"
    >
      <div className="container-x">

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          {/* INTRO */}
          <div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
              What We Do
            </p>

            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[#071c27] md:text-5xl">
              Connecting
              <br />
              product to market.
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-[#083b52]/65">
              Liberty Health works across the value chain to connect
              quality products with customers and markets through
              sourcing, production, quality assurance and commercial
              partnerships.
            </p>

          </div>


          {/* AREAS */}
          <div className="border-t border-[#083b52]/15">

            {areas.map((area) => (
              <div
                key={area.number}
                className="grid gap-5 border-b border-[#083b52]/15 py-8 md:grid-cols-[70px_230px_1fr]"
              >

                <span className="font-display text-lg font-semibold text-[#09b1ec]">
                  {area.number}
                </span>

                <h3 className="font-display text-2xl font-semibold text-[#071c27]">
                  {area.title}
                </h3>

                <p className="text-sm leading-7 text-[#083b52]/65">
                  {area.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}