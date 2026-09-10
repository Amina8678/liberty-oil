export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#071c27]"
    >
      <div className="grid min-h-[760px] lg:grid-cols-[1.05fr_0.95fr]">

        {/* LEFT — COMPANY */}
        <div className="relative z-10 flex items-center">

          <div className="container-x w-full py-24 lg:py-32">

            <div className="max-w-3xl">

              {/* EYEBROW */}
              <div className="mb-8 flex items-center gap-3">

                <span className="h-px w-12 bg-[#09b1ec]" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#65c2f5]">
                  Liberty Health Ltd
                </span>

              </div>


              {/* HEADLINE */}
              <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.2rem]">
                Building
                <br />

                <span className="text-[#09b1ec]">
                  trusted value.
                </span>
              </h1>


              {/* COMPANY INTRODUCTION */}
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
                Liberty Health Ltd is a UK-based company focused on
                developing quality food products, building trusted
                partnerships and connecting producers, suppliers and
                customers across international markets.
              </p>


              {/* SECONDARY DESCRIPTION */}
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
                Established in 2020, the company combines entrepreneurial
                leadership, sourcing expertise, quality assurance and
                market development to create long-term value for customers
                and business partners.
              </p>


              {/* BUTTONS */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#about"
                  className="inline-flex items-center justify-center bg-[#09b1ec] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#083b52]"
                >
                  Discover Liberty Health
                </a>

                <a
                  href="#what-we-do"
                  className="inline-flex items-center justify-center border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-[#09b1ec] hover:text-[#65c2f5]"
                >
                  What We Do
                </a>

              </div>


              {/* COMPANY FACTS */}
              <div className="mt-16 grid grid-cols-2 border-t border-white/15 pt-7 sm:grid-cols-4">

                <div className="border-r border-white/10 pr-5">

                  <p className="font-display text-2xl font-semibold text-white">
                    2020
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/45">
                    Established
                  </p>

                </div>


                <div className="border-r border-white/10 px-5">

                  <p className="font-display text-2xl font-semibold text-white">
                    UK
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/45">
                    Company Base
                  </p>

                </div>


                <div className="border-r border-white/10 px-5">

                  <p className="font-display text-2xl font-semibold text-white">
                    GH
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/45">
                    West Africa
                  </p>

                </div>


                <div className="pl-5">

                  <p className="font-display text-2xl font-semibold text-white">
                    B2B
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/45">
                    Business Focus
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* RIGHT — COMPANY IMAGE */}
        <div className="relative min-h-[520px] lg:min-h-[760px]">

          <img
            src="/images/event-olive-oil-grove.jpeg"
            alt="Olive production and agricultural operations connected to Liberty Health"
            className="absolute inset-0 h-full w-full object-cover"
          />


          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071c27] via-[#071c27]/25 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071c27]/70 via-transparent to-transparent" />


          {/* COMPANY CARD */}
          <div className="absolute bottom-10 right-8 max-w-xs border border-white/20 bg-[#071c27]/80 px-7 py-6 backdrop-blur-md">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65c2f5]">
              Our Company
            </p>

            <p className="mt-3 font-display text-2xl font-semibold text-white">
              Liberty Health Ltd
            </p>

            <p className="mt-2 text-xs leading-6 text-white/55">
              Quality products. Trusted relationships. Growing markets.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}