export function CEOProfile() {
  return (
    <section
      id="ceo"
      className="bg-white py-24 md:py-32"
    >
      <div className="container-x">

        {/* =====================================================
            VISION STATEMENT
            ===================================================== */}

        <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
          Leadership &amp; Company
        </p>

        <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-[#071c27] md:text-5xl">
          Meet Our CEO and Discover the Story Behind Liberty Health Ltd
        </h2>

        <div className="mt-8 max-w-3xl border-l-2 border-[#09b1ec] pl-6">
          <p className="text-xl leading-9 text-[#083b52] md:text-2xl">
            Meet our Chief Executive Officer, a visionary leader committed to
            driving excellence, innovation, and sustainable growth at Liberty
            Health. With a strong focus on strategic leadership, operational
            efficiency, and client satisfaction, our CEO continues to guide the
            organization toward achieving its mission and delivering meaningful
            value to the communities we serve.
          </p>
        </div>

        <p className="mt-7 max-w-3xl text-base leading-8 text-[#083b52]/70 md:text-lg">
          Through dedication, integrity, and a forward-thinking approach, our CEO
          inspires our team to uphold the highest standards of professionalism,
          strengthen trusted partnerships, and create a lasting impact in the
          communities and markets we serve.
        </p>
      </div>

        {/* =====================================================
            CEO STATEMENT AND PROFILE
            ===================================================== */}

        <div className="mt-24 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          {/* CEO PROFILE */}
          <div className="overflow-hidden rounded-[22px] bg-[#eef9fd]">
            <div className="flex min-h-[360px] items-center justify-center bg-[#dff3fb] p-8">
              {/* Replace this placeholder with the CEO's photograph */}
              <div className="text-center">
                {/* <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-[#09b1ec]/30 bg-white text-4xl font-display text-[#083b52]">
                  CEO
                </div> */}

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#083b52]">
                  <img src="/images/ceo.png" alt="CEO image" />
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
                Leadership
              </p>

              <h3 className="mt-4 font-display text-3xl font-semibold text-[#071c27]">
                Mr. Christian Osei, CEO
              </h3>

              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#0b526e]">
                Chief Executive Officer
              </p>

              <p className="mt-5 text-sm leading-7 text-[#083b52]/70">
                [Add the confirmed CEO biography here, including the
                CEO&apos;s professional background, leadership experience,
                business responsibilities and vision for Liberty Health Ltd.]
              </p>
            </div>
          </div>

          {/* CEO STATEMENT */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
              A Statement from the CEO
            </p>

            <blockquote className="mt-6 border-l-2 border-[#09b1ec] pl-6 md:pl-8">
              <p className="font-display text-3xl font-medium leading-tight text-[#083b52] md:text-4xl">
                “Our ambition is to build a company recognised for quality,
                integrity and dependable relationships, connecting trusted
                producers with customers and markets around the world.”
              </p>
            </blockquote>

            <p className="mt-8 text-base leading-8 text-[#083b52]/65">
              At Liberty Health Ltd, we believe that sustainable growth is
              built through consistency, responsible business practices and
              a clear understanding of the needs of our customers and
              partners.
            </p>

            <p className="mt-5 text-base leading-8 text-[#083b52]/65">
              Our focus is not limited to individual products. We are
              developing a long-term business platform that brings together
              sourcing, production, quality assurance, packaging,
              distribution and market development.
            </p>

            <div className="mt-8">
              <p className="font-display text-xl font-semibold text-[#071c27]">
                Mr. Christian Osei
              </p>

              <p className="mt-1 text-sm text-[#52656f]">
                Chief Executive Officer, Liberty Health Ltd
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}