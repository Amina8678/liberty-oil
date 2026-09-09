"use client";

import { useState } from "react";

const oils = [
  {
    id: 1,
    name: "Premium Extra Virgin Olive Oil",
    detail: "Max. acidity 0.1–0.3%",
    description:
      "Cold-extracted from the finest olives, hand-harvested in the first mid-September harvest and pressed within hours of picking. Produced in limited quantities with a rich, distinctive character.",
    image: "/images/event-olive-oil-table.jpeg",
    uses: "Ideal for finishing dishes, dipping, salads and premium culinary applications.",
  },
  {
    id: 2,
    name: "Extra Virgin Olive Oil",
    detail: "Max. acidity 0.8%, oleic type",
    description:
      "A smooth and balanced extra virgin olive oil made from carefully selected olives from the Aegean coast.",
    image: "/images/event-olive-oil-hand.jpeg",
    uses: "Excellent for everyday meals, salads, sauces and Mediterranean cooking.",
  },
  {
    id: 3,
    name: "Cold-Pressed Extra Virgin Olive Oil",
    detail: "Max. acidity 0.5–0.8%",
    description:
      "Cold-pressed to preserve its natural aroma and flavour, giving the oil a fresh and distinctive character.",
    image: "/images/event-olive-oil-table.jpeg",
    uses: "Best enjoyed raw in dipping, drizzling, salad dressings and marinades.",
  },
  {
    id: 4,
    name: "Pomace Olive Oil",
    detail: "Under 1% acidity · High smoke point",
    description:
      "A refined olive oil with a lighter taste and high smoke point, making it suitable for everyday cooking.",
    image: "/images/event-olive-oil-hand.jpeg",
    uses: "Suitable for frying, cooking and other high-temperature applications.",
  },
];

const larder = [
  {
    name: "Dried Figs",
    description:
      "Sun-dried and naturally sweet, with a soft texture and rich nutritional profile.",
  },
  {
    name: "Dried Apricots",
    description:
      "Sun-dried with a vibrant colour and naturally rich Mediterranean flavour.",
  },
  {
    name: "Hazelnuts",
    description:
      "Crunchy and naturally rich in healthy fats and vitamin E.",
  },
  {
    name: "Almonds",
    description:
      "A nutritious source of protein, fibre and essential nutrients.",
  },
  {
    name: "Walnuts",
    description:
      "Naturally rich in omega-3 fatty acids and antioxidants.",
  },
  {
    name: "Pistachios",
    description:
      "Known for their rich taste, vibrant colour and nutritional value.",
  },
  {
    name: "Raisins",
    description:
      "Naturally sweet and a convenient source of energy and minerals.",
  },
];

export function Products() {
  const [selectedImage, setSelectedImage] = useState(
    "/images/event-olive-oil-table.jpeg"
  );

  return (
    <section
      id="products" href="#products"
      className="bg-paper py-20 md:py-28"
    >
      <div className="container-x">

        {/* =====================================================
            HEADER
            ===================================================== */}

        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-primary-blue" />

            <p className="m-0 text-sm font-semibold uppercase tracking-[0.2em] text-primary-blue">
              Our Products
            </p>
          </div>

          <h2 className="font-display text-4xl font-semibold leading-tight text-near-black md:text-5xl lg:text-6xl">
            From the grove,
            <br />
            <span className="text-primary-blue">
              to your table.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
            Discover the Event collection of olive oils and
            Mediterranean products. Carefully selected and produced
            with a focus on quality, freshness and authentic
            Mediterranean character.
          </p>
        </div>

        {/* =====================================================
            FEATURED PRODUCT IMAGE
            ===================================================== */}

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-near-black shadow-[0_25px_80px_rgba(8,59,82,0.15)]">
          <div className="grid min-h-[540px] lg:grid-cols-2">

            {/* IMAGE */}
            <div className="relative min-h-[420px] overflow-hidden">
              <img
                src={selectedImage}
                alt="Event Extra Virgin Olive Oil"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7">
                <span className="rounded-full bg-white/90 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-near-black backdrop-blur">
                  Event Olive Oil
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center p-8 text-white md:p-12 lg:p-16">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-blue">
                Our Collection
              </p>

              <h3 className="mt-4 font-display text-3xl font-semibold md:text-5xl">
                Authentic olive oil
                <br />
                from the Aegean coast.
              </h3>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/70">
                Event olive oils are produced from carefully selected
                olives grown on the Aegean coast of Turkey. From
                premium extra virgin olive oil to everyday cooking
                oils, each product has its own character and purpose.
              </p>

              {/* IMAGE SELECTOR */}
              <div className="mt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                  Product images
                </p>

                <div className="flex gap-3">

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImage(
                        "/images/event-olive-oil-table.jpeg"
                      )
                    }
                    className={`h-20 w-20 overflow-hidden rounded-2xl border-2 transition ${
                      selectedImage ===
                      "/images/event-olive-oil-table.jpeg"
                        ? "border-primary-blue"
                        : "border-white/20 hover:border-white/50"
                    }`}
                    aria-label="View olive oil bottles on table"
                  >
                    <img
                      src="/images/event-olive-oil-table.jpeg"
                      alt="Event olive oil bottles on a table"
                      className="h-full w-full object-cover"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImage(
                        "/images/event-olive-oil-hand.jpeg"
                      )
                    }
                    className={`h-20 w-20 overflow-hidden rounded-2xl border-2 transition ${
                      selectedImage ===
                      "/images/event-olive-oil-hand.jpeg"
                        ? "border-primary-blue"
                        : "border-white/20 hover:border-white/50"
                    }`}
                    aria-label="View Event olive oil bottle"
                  >
                    <img
                      src="/images/event-olive-oil-hand.jpeg"
                      alt="Event olive oil bottle"
                      className="h-full w-full object-cover"
                    />
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* =====================================================
            OLIVE OIL COLLECTION
            ===================================================== */}

        <div className="mt-20">

          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary-blue">
              Olive Oil Collection
            </p>

            <h3 className="mt-3 font-display text-3xl font-semibold text-near-black md:text-4xl">
              Our olive oils
            </h3>

            <p className="mt-4 text-base leading-7 text-ink/65">
              Explore our range and discover the different
              characteristics and culinary uses of each oil.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">

            {oils.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_15px_50px_rgba(8,59,82,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(8,59,82,0.14)]"
              >

                {/* PRODUCT IMAGE */}
                <div className="relative h-80 overflow-hidden bg-[#eef9fd]">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-near-black backdrop-blur">
                      Event
                    </span>
                  </div>

                </div>

                {/* PRODUCT INFORMATION */}
                <div className="p-7 md:p-8">

                  <h4 className="font-display text-2xl font-semibold leading-tight text-near-black">
                    {product.name}
                  </h4>

                  <p className="mt-3 text-sm font-semibold text-primary-blue">
                    {product.detail}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-ink/65">
                    {product.description}
                  </p>

                  <div className="mt-6 rounded-2xl bg-[#eef9fd] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-blue">
                      Best used for
                    </p>

                    <p className="mt-2 text-sm leading-6 text-ink/70">
                      {product.uses}
                    </p>
                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>

        {/* =====================================================
            MEDITERRANEAN LARDER
            ===================================================== */}

        <div className="mt-24">

          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary-blue">
              Mediterranean Larder
            </p>

            <h3 className="mt-3 font-display text-3xl font-semibold text-near-black md:text-4xl">
              More from the region
            </h3>

            <p className="mt-4 text-base leading-7 text-ink/65">
              A selection of Mediterranean produce that reflects
              the flavours and agricultural traditions of the region.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {larder.map((product) => (
              <article
                key={product.name}
                className="rounded-[1.75rem] bg-[#eef9fd] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#dff3fb]"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-blue text-white">
                  <span className="text-lg">
                    ✦
                  </span>
                </div>

                <h4 className="mt-6 font-display text-xl font-semibold text-near-black">
                  {product.name}
                </h4>

                <p className="mt-3 text-sm leading-6 text-ink/65">
                  {product.description}
                </p>

              </article>
            ))}

          </div>
        </div>

        {/* =====================================================
            INFORMATION NOTE
            ===================================================== */}

        <div className="mt-16 rounded-[2rem] bg-near-black p-8 text-white md:p-10">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary-blue">
                Product Information
              </p>

              <h3 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                Quality from grove to bottle.
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-6 text-white/65">
              Products displayed on this website are presented for
              information and brand showcase purposes. For product
              enquiries and availability, please contact Liberty
              Health Ltd directly.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}