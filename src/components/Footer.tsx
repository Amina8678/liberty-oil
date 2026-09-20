export function Footer() {
  return (
    <footer className="bg-[#071c27] text-white">

      <div className="container-x py-20 md:py-24">

        <div className="grid gap-14 md:grid-cols-12">

          {/* COMPANY */}
          <div className="md:col-span-5">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center bg-[#09b1ec]">
                <span className="font-display text-lg font-bold text-white">
                  LH
                </span>
              </div>

              <div>
                <p className="font-display text-xl font-semibold">
                  Liberty Health
                </p>

                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65c2f5]">
                  Trading as Event
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
              Liberty Health Ltd connects premium products and trusted suppliers across Ghana, the United Kingdom, and South Africa.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex border border-[#65c2f5] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#09b1ec] hover:border-[#09b1ec]"
            >
              Contact Us
            </a>

          </div>

          {/* COMPANY LINKS */}
          <div className="md:col-span-2 md:col-start-7">

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Company
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">

              <a
                href="#about"
                className="transition-colors hover:text-[#65c2f5]"
              >
                About Us
              </a>

              <a
                href="#sustainability"
                className="transition-colors hover:text-[#65c2f5]"
              >
                Sustainability
              </a>

            </div>

          </div>

          {/* PORTFOLIO */}
          <div className="md:col-span-2">

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Portfolio
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">

              <a
                href="#products"
                className="transition-colors hover:text-[#65c2f5]"
              >
                Event
              </a>

              <a
                href="#products"
                className="transition-colors hover:text-[#65c2f5]"
              >
                Olive Oil
              </a>

              <a
                href="#products"
                className="transition-colors hover:text-[#65c2f5]"
              >
                Mediterranean Foods
              </a>

            </div>

          </div>

          {/* CONTACT */}
          <div className="md:col-span-3">

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Contact
            </p>

            <div className="mt-5 space-y-3 text-sm text-white/60">
              <a
                href="tel:+447837867759"
                className="block transition-colors hover:text-[#65c2f5]"
              >
                +44 7837 867759
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/35 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Liberty Health Ltd. All rights reserved.
          </p>

          <p>
            United Kingdom · Ghana · South Africa
          </p>

        </div>

      </div>

    </footer>
  );
}