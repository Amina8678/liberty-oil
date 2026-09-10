import { ContourLines } from "./OliveMotif";

const stats = [
  {
    value: "10,000",
    label: "olive trees, own gardens",
  },
  {
    value: "300,000 m²",
    label: "of grove on the Aegean coast",
  },
  {
    value: "250 t",
    label: "warehouse capacity",
  },
  {
    value: "2020",
    label: "founded, 100% Turkish capital",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[760px] overflow-hidden bg-near-black"
    >
      {/* Hero Image */}
      <img
        src="/images/event-olive-oil-grove.jpeg"
        alt="Event Extra Virgin Olive Oil in an olive grove"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Main dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Left-to-right gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Blue glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-blue/20 blur-3xl" />

      {/* Decorative contour lines */}
      <ContourLines
        className="pointer-events-none absolute right-0 top-0 z-[1] hidden h-full w-1/2 text-white/10 lg:block"
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="container-x">
          <div className="flex min-h-[760px] items-center py-20 md:py-28">
            <div className="max-w-5xl">

              {/* Brand label */}
              <div className="mb-7 flex items-center gap-3">
                <span className="h-[2px] w-10 rounded-full bg-primary-blue" />

                <p className="m-0 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                  Liberty Health Ltd · Event
                </p>
              </div>

              {/* Heading */}
              <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Olive oil pressed cold,
                <br />

                <span className="text-primary-blue">
                  on the coast where it grew.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
                Event is the extra virgin olive oil brand of Liberty
                Health Ltd — a farmers&apos; enterprise on the Aegean
                coast of Turkey, picked by hand and pressed within
                hours, now finding its way from Izmir to London and
                Accra.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#products"
                  className="btn-primary"
                >
                  Products
                </a>

                <a
                  href="#about"
                  className="button-outline border border-white/40 bg-white/10 text-white backdrop-blur-md hover:border-primary-blue hover:bg-white/20"
                >
                  Discover Our Story
                </a>
              </div>

              {/* Statistics */}
              <dl className="mt-14 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-8 border-t border-white/20 pt-8 md:mt-20 md:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">
                      {stat.label}
                    </dt>

                    <dd className="m-0 font-display text-3xl font-semibold text-white md:text-4xl">
                      {stat.value}
                    </dd>

                    <p className="mt-1 max-w-[18ch] text-sm leading-snug text-white/65">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </dl>

            </div>
          </div>
        </div>
      </div>

      {/* Final fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-24 bg-gradient-to-t from-near-black/80 to-transparent" />
    </section>
  );
}