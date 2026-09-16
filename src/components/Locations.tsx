import { MapPin } from "lucide-react";

export function Locations() {
  return (
    <section
      id="locations"
      className="bg-white py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#09b1ec]">
            Our Locations
          </p>

          <h2 className="font-display text-3xl font-bold tracking-tight text-[#071c27] sm:text-4xl md:text-5xl">
            Find us across the UK and Africa 
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#083b52]/70">
            Liberty Health Ltd operates across United Kingdom, Ghana and  South Africa, and the
            , connecting customers and partners with quality
            products and services.
          </p>
        </div>

        {/* Locations */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* United Kingdom */}
          <div className="rounded-3xl border border-[#083b52]/10 bg-[#eef9fd] p-8 transition-shadow hover:shadow-lg md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#09b1ec]">
              <MapPin className="h-7 w-7 text-white" />
            </div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#09b1ec]">
              United Kingdom
            </p>

            <h3 className="font-display text-2xl font-bold text-[#071c27] md:text-3xl">
              Liberty Health Ltd
            </h3>

            <p className="mt-4 text-base leading-7 text-[#083b52]/75">
              United Kingdom
              <br />
              Serving customers and partners
              <br />
              across the UK.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=United+Kingdom"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center rounded-full bg-[#083b52] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#09b1ec]"
            >
              View on Map
            </a>
          </div>

          {/* Ghana */}
          <div className="rounded-3xl border border-[#083b52]/10 bg-[#eef9fd] p-8 transition-shadow hover:shadow-lg md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#09b1ec]">
              <MapPin className="h-7 w-7 text-white" />
            </div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#09b1ec]">
              Ghana
            </p>

            <h3 className="font-display text-2xl font-bold text-[#071c27] md:text-3xl">
              Liberty Health Ltd
            </h3>

            <p className="mt-4 text-base leading-7 text-[#083b52]/75">
              18 Junction, Spintex Road,
              <br />
              Opposite DSTV,
              <br />
              Accra, Ghana.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=18+Junction+Spintex+Road+Accra+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center rounded-full bg-[#083b52] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#09b1ec]"
            >
              View on Map
            </a>
          </div>

          {/* South Africa */}
          <div className="rounded-3xl border border-[#083b52]/10 bg-[#eef9fd] p-8 transition-shadow hover:shadow-lg md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#09b1ec]">
              <MapPin className="h-7 w-7 text-white" />
            </div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#09b1ec]">
              South Africa
            </p>

            <h3 className="font-display text-2xl font-bold text-[#071c27] md:text-3xl">
              Liberty Health Ltd
            </h3>

            <p className="mt-4 text-base leading-7 text-[#083b52]/75">
              Plot 127 Rietfontein,
              <br />
              Hartbeespoort,
              <br />
              North West Province,
              <br />
              South Africa.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Plot+127+Rietfontein+Hartbeespoort+North+West+Province+South+Africa"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center rounded-full bg-[#083b52] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#09b1ec]"
            >
              View on Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}