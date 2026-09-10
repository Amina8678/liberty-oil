const directors = [
  {
    number: "01",
    name: "Director",
    position: "Director — Liberty Health Ltd",
    bio: "Provides strategic leadership for Liberty Health Ltd, guiding the company&apos;s growth, commercial direction and long-term development. The role focuses on building a strong and sustainable business founded on quality, trust and lasting relationships.",
    responsibilities: [
      "Strategic direction",
      "Business development",
      "Commercial partnerships",
      "Corporate growth",
    ],
  },
  {
    number: "02",
    name: "Director",
    position: "Director — Liberty Health Ltd",
    bio: "Supports the company&apos;s continued development across its markets and operations, with a focus on strengthening relationships with customers, suppliers and business partners.",
    responsibilities: [
      "Operations",
      "Market development",
      "Customer relationships",
      "Partnership development",
    ],
  },
];

export function Directors() {
  return (
    <section
      id="directors"
      className="bg-[#eef9fd] py-24 md:py-32"
    >
      <div className="container-x">

        {/* SECTION INTRODUCTION */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
              Leadership
            </p>

            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-[#071c27] md:text-5xl">
              The people
              <br />
              behind Liberty Health.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-xl leading-9 text-[#083b52] md:text-2xl">
              Liberty Health is built around experienced leadership,
              entrepreneurial thinking and a clear commitment to creating
              long-term value.
            </p>

            <p className="mt-6 text-base leading-8 text-[#083b52]/65">
              Our directors provide the strategic direction that connects
              the company&apos;s people, operations, suppliers, customers
              and markets. Their role extends beyond individual products,
              focusing on building a resilient company with strong
              commercial relationships and a clear international outlook.
            </p>

            <p className="mt-5 text-base leading-8 text-[#083b52]/65">
              Through leadership, collaboration and responsible decision
              making, Liberty Health continues to develop its presence
              across the United Kingdom, Ghana, West Africa and the wider
              international market.
            </p>
          </div>
        </div>

        {/* DIRECTORS */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {directors.map((director) => (
            <article
              key={director.number}
              className="overflow-hidden bg-white"
            >

              {/* DIRECTOR HEADER */}
              <div className="relative flex min-h-[220px] items-end bg-[#083b52] p-8 md:p-10">

                <div className="absolute right-8 top-8 md:right-10 md:top-10">
                  <span className="font-display text-7xl font-semibold text-white/10">
                    {director.number}
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="mb-5 h-1 w-12 bg-[#09b1ec]" />

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#65c2f5]">
                    {director.position}
                  </p>

                  <h3 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
                    {director.name}
                  </h3>
                </div>
              </div>

              {/* DIRECTOR INFORMATION */}
              <div className="p-8 md:p-10">

                <p className="text-sm leading-7 text-[#083b52]/65">
                  {director.bio}
                </p>

                {/* RESPONSIBILITIES */}
                <div className="mt-8 border-t border-[#083b52]/10 pt-7">

                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#083b52]/40">
                    Areas of Leadership
                  </p>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">

                    {director.responsibilities.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#09b1ec]" />

                        <span className="text-sm text-[#083b52]/70">
                          {item}
                        </span>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </article>
          ))}

        </div>

        {/* LEADERSHIP STATEMENT */}
        <div className="mt-16 grid gap-0 lg:grid-cols-2">

          <div className="bg-[#083b52] p-10 md:p-14">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#65c2f5]">
              Leadership Philosophy
            </p>

            <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              Building a business
              <br />
              for the long term.
            </h3>

          </div>

          <div className="bg-white p-10 md:p-14">

            <p className="text-base leading-8 text-[#083b52]/65">
              Liberty Health&apos;s leadership is focused on creating
              sustainable commercial relationships rather than short-term
              transactions. This means developing trusted partnerships with
              producers, suppliers, distributors, retailers and customers
              while maintaining a strong focus on quality and reliability.
            </p>

            <p className="mt-5 text-base leading-8 text-[#083b52]/65">
              The company&apos;s leadership also supports its international
              ambitions, bringing together its UK presence, West African
              market relationships and production connections in Turkey.
            </p>

          </div>
        </div>

        {/* LEADERSHIP VALUES */}
        <div className="mt-16 grid gap-px bg-[#083b52]/10 sm:grid-cols-2 lg:grid-cols-4">

          <div className="bg-white p-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#09b1ec]">
              01
            </p>

            <h4 className="mt-4 font-display text-xl font-semibold text-[#071c27]">
              Vision
            </h4>

            <p className="mt-3 text-sm leading-7 text-[#083b52]/60">
              Providing clear direction for the company&apos;s long-term
              development.
            </p>
          </div>

          <div className="bg-white p-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#09b1ec]">
              02
            </p>

            <h4 className="mt-4 font-display text-xl font-semibold text-[#071c27]">
              Integrity
            </h4>

            <p className="mt-3 text-sm leading-7 text-[#083b52]/60">
              Building relationships through reliability, transparency and
              responsible decisions.
            </p>
          </div>

          <div className="bg-white p-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#09b1ec]">
              03
            </p>

            <h4 className="mt-4 font-display text-xl font-semibold text-[#071c27]">
              Partnership
            </h4>

            <p className="mt-3 text-sm leading-7 text-[#083b52]/60">
              Creating lasting relationships with suppliers, customers and
              commercial partners.
            </p>
          </div>

          <div className="bg-white p-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#09b1ec]">
              04
            </p>

            <h4 className="mt-4 font-display text-xl font-semibold text-[#071c27]">
              Growth
            </h4>

            <p className="mt-3 text-sm leading-7 text-[#083b52]/60">
              Developing new markets, products and opportunities with a
              long-term perspective.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}