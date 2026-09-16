export function CompanyProfile() {
  return (
    <section
      id="about"
      className="bg-white py-24 md:py-32"
    >
      <div className="container-x">
        {/* =====================================================
            COMPANY STORY
            ===================================================== */}

        <div className="mt-24 grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
              Company&apos;s Profile
            </p>

            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-[#071c27] md:text-5xl">
              A company
              <br />
              built on trust.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-xl leading-9 text-[#083b52] md:text-2xl">
              Liberty Health Ltd is a UK-based company established in 2020,
              focused on quality, responsible sourcing, trusted partnerships
              and the development of food products for international markets.
            </p>

            <p className="mt-7 text-base leading-8 text-[#083b52]/65">
              The company brings together producers, suppliers, customers
              and commercial partners through a business model built around
              reliability and long-term relationships.
            </p>

            <p className="mt-5 text-base leading-8 text-[#083b52]/65">
              Liberty Health&apos;s activities extend across sourcing,
              production, quality assurance, packaging, distribution and
              market development. This allows the company to create value
              beyond individual products and build sustainable commercial
              relationships.
            </p>

            <p className="mt-5 text-base leading-8 text-[#083b52]/65">
              Today, the company&apos;s portfolio includes olive oils, dried
              fruits, nuts and raisins, with Event serving as its flagship
              olive oil brand.
            </p>
          </div>
        </div>

        {/* =====================================================
            VIDEO FEATURE
            ===================================================== */}

        <div className="mt-20 overflow-hidden rounded-[28px] border border-[#083b52]/10 bg-[#eef9fd] shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center bg-[#083b52] p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#65c2f5]">
                Company Video
              </p>

              <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                A quick introduction to Liberty Health.
              </h3>

              <p className="mt-5 max-w-md text-base leading-8 text-white/80">
              Explore our company, our commitment to quality, and the journey behind the food products 
              we bring to international markets.
              </p>
            </div>

            <div className="relative aspect-video overflow-hidden bg-[#d8f2fb]">
              <video
                className="h-full w-full object-cover"
                src="/images/intro-vid-1.mov"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                Your browser does not support the video tag.
              </video>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071c27]/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* =====================================================
            HISTORY / VISION / MISSION
            ===================================================== */}

        <div className="mt-20 grid gap-px bg-[#083b52]/10 md:grid-cols-3">
          {/* HISTORY */}

          <div className="bg-[#eef9fd] p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#09b1ec]">
              Our History
            </p>

            <h3 className="mt-5 font-display text-2xl font-semibold text-[#071c27]">
              From family enterprise to international business.
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#083b52]/65">
              Liberty Health&apos;s story is connected to generations of
              experience in olive production and the Akhisar region of
              Turkey. This heritage has developed into a business with
              an international outlook.
            </p>
          </div>

          {/* VISION */}

          <div className="bg-[#083b52] p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#65c2f5]">
              Our Vision
            </p>

            <h3 className="mt-5 font-display text-2xl font-semibold text-white">
              Taking quality to global markets.
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/80">
              To bring exceptional Turkish olive oil and quality food
              products to international markets while creating lasting
              value for customers, partners and local communities.
            </p>
          </div>

          {/* MISSION */}

          <div className="bg-[#071c27] p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#65c2f5]">
              Our Mission
            </p>

            <h3 className="mt-5 font-display text-2xl font-semibold text-white">
              Quality with purpose.
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/80">
              To source quality produce, combine traditional knowledge
              with modern techniques and develop reliable products and
              partnerships for generations to come.
            </p>
          </div>
        </div>

        {/* =====================================================
            AFRICA MISSION STATEMENT
            ===================================================== */}

        <div className="mt-24 grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
              Africa Mission Statement
            </p>

            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-[#071c27] md:text-4xl">
              Serving Africa with quality, nutrition and trust.
            </h2>
          </div>

          <div className="max-w-3xl space-y-6 text-base leading-8 text-[#083b52]/75">
            <p>
              At Liberty Health Ltd, our mission is to provide premium
              Mediterranean food products that combine quality, nutrition,
              authenticity, and trust while serving the diverse cultures,
              traditions, and faiths of Africa.
            </p>

            <p>
              Across Ghana, South Africa, and the wider African continent,
              we are committed to delivering products that meet the highest
              standards of quality, safety, and integrity. Through
              responsible sourcing, ethical partnerships, and sustainable
              business practices, we connect trusted producers with growing
              markets and help consumers make healthier food choices.
            </p>

            <p>
              Our portfolio of Event Extra Virgin Olive Oil, dried fruits,
              nuts, and Mediterranean specialty foods is produced with a
              focus on natural quality. Where applicable, our products are{" "}
              <strong className="font-semibold text-[#083b52]">
                Halal certified
              </strong>
              ,{" "}
              <strong className="font-semibold text-[#083b52]">
                Non-GMO
              </strong>{" "}
              (Genetically Modified Organism) free, and carefully selected
              to meet the needs of culturally and religiously diverse
              communities.
            </p>

            <p>
              We believe that long-term success is built on trust, respect,
              and inclusion. By combining global expertise with local market
              understanding, Liberty Health strives to become one of
              Africa&apos;s most trusted food and distribution partners,
              creating value for customers, businesses, and communities alike.
            </p>
          </div>
        </div>

        {/* =====================================================
            CORPORATE SUSTAINABILITY STATEMENT
            ===================================================== */}

        <div className="mt-24 rounded-[24px] bg-[#eef9fd] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
                Corporate Sustainability Statement
              </p>

              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-[#071c27] md:text-4xl">
                Responsible growth for future generations.
              </h2>
            </div>

            <div>
              <blockquote className="border-l-2 border-[#09b1ec] pl-6 font-display text-2xl leading-relaxed text-[#083b52] md:text-3xl">
                “From the Mediterranean to Africa, Liberty Health delivers
                premium Halal-certified, Non-GMO foods that respect cultural
                diversity, promote healthier lifestyles, and create trusted
                partnerships for future generations.”
              </blockquote>

              <p className="mt-8 text-base leading-8 text-[#083b52]/70">
                Our commitment to sustainability is reflected in the way we
                source products, build partnerships, respect cultural
                diversity, and support healthier lifestyles. We aim to create
                long-term value for customers, businesses, producers, and
                communities across Africa.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            COMPANY PRINCIPLES
            ===================================================== */}

        <div className="mt-24 border-t border-[#083b52]/15 pt-16">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
                What Defines Us
              </p>

              <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-[#071c27] md:text-4xl">
                The principles
                <br />
                behind Liberty Health.
              </h3>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {/* QUALITY */}

              <div className="border-t border-[#083b52]/15 pt-6">
                <h4 className="font-display text-xl font-semibold text-[#071c27]">
                  Quality
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#083b52]/60">
                  We place quality and consistency at the centre of our
                  products and operations.
                </p>
              </div>

              {/* TRUST */}

              <div className="border-t border-[#083b52]/15 pt-6">
                <h4 className="font-display text-xl font-semibold text-[#071c27]">
                  Trust
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#083b52]/60">
                  We build relationships based on reliability, transparency
                  and long-term commitment.
                </p>
              </div>

              {/* RESPONSIBILITY */}

              <div className="border-t border-[#083b52]/15 pt-6">
                <h4 className="font-display text-xl font-semibold text-[#071c27]">
                  Responsibility
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#083b52]/60">
                  We believe responsible sourcing and production create
                  stronger businesses and communities.
                </p>
              </div>

              {/* GROWTH */}

              <div className="border-t border-[#083b52]/15 pt-6">
                <h4 className="font-display text-xl font-semibold text-[#071c27]">
                  Growth
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#083b52]/60">
                  We continue to develop our markets, portfolio and
                  partnerships with a long-term perspective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}