export function Sustainability() {
  return (
    <section
      id="sustainability"
      className="bg-[#071c27] py-24 md:py-32"
      style={{ color: "#ffffff" }}
    >
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT SIDE */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: "#65c2f5" }}
            >
              Sustainability
            </p>

            <h2
              className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl"
              style={{ color: "#ffffff" }}
            >
              Responsible
              <br />
              by design.
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <p
              className="text-xl leading-9 md:text-2xl"
              style={{ color: "#ffffff" }}
            >
              We believe responsible business is about making decisions
              that create lasting value for our customers, partners and
              the communities connected to our operations.
            </p>

            <div className="mt-8 overflow-hidden rounded-[22px] border border-white/10 bg-white/5">
              <img
                src="/images/event-olive-oil-grove.jpeg"
                alt="Olive grove supporting responsible olive oil production"
                className="h-64 w-full object-cover"
              />

              <div className="p-7">
                <p
                  className="text-xs font-bold uppercase tracking-[0.16em]"
                  style={{ color: "#65c2f5" }}
                >
                  Environmentally Friendly Production
                </p>

                <p
                  className="mt-4 text-base leading-8"
                  style={{ color: "#ffffff" }}
                >
                  Our production facility incorporates environmentally responsible
                  olive-oil production practices designed to improve efficiency
                  and reduce waste. We take pride in contributing to the Turkish
                  economy by supplying high-quality products to both domestic and
                  international markets.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-3">

              {/* 01 */}
              <div className="bg-[#071c27] p-7">
                <p
                  className="text-xs font-bold uppercase tracking-[0.15em]"
                  style={{ color: "#65c2f5" }}
                >
                  01
                </p>

                <h3
                  className="mt-4 font-display text-xl"
                  style={{ color: "#ffffff" }}
                >
                  Responsible Sourcing
                </h3>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: "#ffffff" }}
                >
                  Building dependable relationships with producers and
                  suppliers.
                </p>
              </div>

              {/* 02 */}
              <div className="bg-[#071c27] p-7">
                <p
                  className="text-xs font-bold uppercase tracking-[0.15em]"
                  style={{ color: "#65c2f5" }}
                >
                  02
                </p>

                <h3
                  className="mt-4 font-display text-xl"
                  style={{ color: "#ffffff" }}
                >
                  Product excellence
                </h3>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: "#ffffff" }}
                >
                  Maintaining consistent standards throughout our
                  product portfolio.
                </p>
              </div>

              {/* 03 */}
              <div className="bg-[#071c27] p-7">
                <p
                  className="text-xs font-bold uppercase tracking-[0.15em]"
                  style={{ color: "#65c2f5" }}
                >
                  03
                </p>

                <h3
                  className="mt-4 font-display text-xl"
                  style={{ color: "#ffffff" }}
                >
                  Lasting Value
                </h3>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: "#ffffff" }}
                >
                  Developing markets and partnerships with a future-focused
                  perspective.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}