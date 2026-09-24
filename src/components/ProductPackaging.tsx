import Image from "next/image";

export function ProductPackaging() {
  return (
    <section
      id="packaging"
      className="bg-white py-24 md:py-32"
    >
      <div className="container-x">

        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
            Packaging &amp; Private Label
          </p>

          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-[#071c27] md:text-5xl">
            Flexible formats, from retail pack to private label.
          </h2>

          <p className="mt-7 text-lg leading-8 text-[#083b52]/70">
            Packaging is designed to protect freshness, preserve product authenticity and
            support efficient transportation — from small consumer packs to
            large bulk sizes for distributors, food processors and
            industrial users.
          </p>
        </div>


        {/* TWO PACKAGING CARDS */}

        <div className="mt-16 grid gap-12 lg:grid-cols-2">


          {/* PACKAGING FORMATS CARD */}

          <div className="overflow-hidden rounded-[22px] bg-[#eef9fd]">

            {/* IMAGE */}

            <div className="relative h-[280px] w-full bg-[#eef9fd]">
              <Image
                src="/images/bottle-size.png"
                alt="Consumer and bulk packaging formats"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>


            {/* CONTENT */}

            <div className="p-8 md:p-10">

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#09b1ec]">
                Packaging Formats
              </p>

              <h3 className="mt-5 font-display text-2xl font-semibold text-[#071c27]">
                Consumer &amp; bulk sizes
              </h3>

              <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-4 text-base leading-7 text-[#083b52]/70">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#083b52]/50">
                    Consumer Packs
                  </p>

                  <ul className="mt-3 space-y-2">
                    <li>250g</li>
                    <li>500g</li>
                    <li>1kg</li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#083b52]/50">
                    Bulk Packs
                  </p>

                  <ul className="mt-3 space-y-2">
                    <li>5kg</li>
                    <li>10kg</li>
                    <li>25kg</li>
                  </ul>
                </div>

              </div>

            </div>
          </div>


          {/* PRIVATE LABEL CARD */}

          <div className="overflow-hidden rounded-[22px] bg-[#083b52]">

            {/* IMAGE */}

            <div className="relative h-[280px] w-full bg-[#083b52]">
              <Image
                src="/images/bottle.png"
                alt="Private label and OEM packaging"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>


            {/* CONTENT */}

            <div className="p-8 md:p-10">

              <p className="font-bold uppercase tracking-[0.16em] text-white">
                Private Label &amp; OEM Services
              </p>

              <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                Bring products to region under your own brand.
              </h3>

              <ul className="mt-7 space-y-4 text-base leading-7 text-white/80">
                <li>Own-brand packaging and labelling</li>
                <li>OEM manufacturing</li>
                <li>Bulk supply programmes</li>
                <li>Global export support</li>
                <li>
                  Tailored collaboration on packaging and product solutions
                </li>
              </ul>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}