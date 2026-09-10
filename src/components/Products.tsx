"use client";

import { useState } from "react";

const products = [
  {
    name: "Event Extra Virgin Olive Oil",
    category: "Flagship Brand",
    description:
      "Premium extra virgin olive oil produced from carefully selected olives, with a focus on natural character, quality and consistency.",
  },
  {
    name: "Event Olive Oil",
    category: "Food Products",
    description:
      "A versatile olive oil developed for everyday cooking and food preparation.",
  },
  {
    name: "Dried Figs",
    category: "Mediterranean Foods",
    description:
      "Naturally sweet dried figs selected for their quality and Mediterranean character.",
  },
  {
    name: "Dried Apricots",
    category: "Mediterranean Foods",
    description:
      "Carefully selected dried apricots offering a naturally sweet and distinctive flavour.",
  },
];

export function Products() {
  const [selectedImage, setSelectedImage] = useState(
    "/images/event-olive-oil-table.jpeg"
  );

  return (
    <section
      id="products"
      className="bg-white py-24 md:py-32"
    >
      <div className="container-x">

        {/* SECTION INTRO */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT SIDE */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
              Products & Brands
            </p>

            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[#071c27] md:text-5xl">
              A growing
              <br />
              product portfolio.
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-[#083b52]/65">
              Our portfolio reflects our commitment to identifying quality
              products with strong consumer appeal and connecting them with
              the markets we serve.
            </p>

            {/* PORTFOLIO INFORMATION */}
            <div className="mt-10 border-t border-[#083b52]/15">

              <div className="grid grid-cols-2 border-b border-[#083b52]/15 py-5">
                <span className="text-xs uppercase tracking-[0.15em] text-[#083b52]/45">
                  Portfolio
                </span>

                <span className="text-sm font-semibold text-[#071c27]">
                  Food & Consumer Products
                </span>
              </div>

              <div className="grid grid-cols-2 py-5">
                <span className="text-xs uppercase tracking-[0.15em] text-[#083b52]/45">
                  Flagship Brand
                </span>

                <span className="text-sm font-semibold text-[#071c27]">
                  Event
                </span>
              </div>

            </div>
          </div>

          {/* FEATURED BRAND */}
          <div className="grid bg-[#083b52] md:grid-cols-2">

            {/* PRODUCT IMAGE */}
            <div className="relative min-h-[430px]">
              <img
                src={selectedImage}
                alt="Event olive oil"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* PRODUCT INFORMATION */}
            <div className="flex flex-col justify-center p-8 md:p-10">

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#65c2f5]">
                Flagship Brand
              </p>

              <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                Event
              </h3>

              <p className="mt-2 text-lg text-white/80">
                Extra Virgin Olive Oil
              </p>

              <p className="mt-6 text-sm leading-7 text-white/60">
                Event represents Liberty Health&apos;s focus on quality
                Mediterranean food products, beginning with premium olive
                oil and an expanding portfolio.
              </p>

              {/* IMAGE SELECTORS */}
              <div className="mt-8 flex gap-3">

                <button
                  type="button"
                  aria-label="Show Event olive oil bottles"
                  onClick={() =>
                    setSelectedImage(
                      "/images/event-olive-oil-table.jpeg"
                    )
                  }
                  className="h-16 w-16 overflow-hidden border border-white/20 transition hover:border-[#65c2f5]"
                >
                  <img
                    src="/images/event-olive-oil-table.jpeg"
                    alt="Event olive oil bottles"
                    className="h-full w-full object-cover"
                  />
                </button>

                <button
                  type="button"
                  aria-label="Show Event olive oil bottle"
                  onClick={() =>
                    setSelectedImage(
                      "/images/event-olive-oil-hand.jpeg"
                    )
                  }
                  className="h-16 w-16 overflow-hidden border border-white/20 transition hover:border-[#65c2f5]"
                >
                  <img
                    src="/images/event-olive-oil-hand.jpeg"
                    alt="Event olive oil bottle"
                    className="h-full w-full object-cover"
                  />
                </button>

                <button
                  type="button"
                  aria-label="Show olive grove"
                  onClick={() =>
                    setSelectedImage(
                      "/images/event-olive-oil-grove.jpeg"
                    )
                  }
                  className="h-16 w-16 overflow-hidden border border-white/20 transition hover:border-[#65c2f5]"
                >
                  <img
                    src="/images/event-olive-oil-grove.jpeg"
                    alt="Olive grove"
                    className="h-full w-full object-cover"
                  />
                </button>

              </div>

            </div>
          </div>

        </div>

        {/* PRODUCT LIST */}
        <div className="mt-20 border-t border-[#083b52]/15">

          {products.map((product, index) => (
            <div
              key={product.name}
              className="grid gap-5 border-b border-[#083b52]/15 py-8 md:grid-cols-[80px_1fr_1.5fr]"
            >

              {/* NUMBER */}
              <span className="text-sm font-semibold text-[#09b1ec]">
                0{index + 1}
              </span>

              {/* PRODUCT NAME */}
              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#083b52]/40">
                  {product.category}
                </p>

                <h3 className="mt-2 font-display text-xl font-semibold text-[#071c27]">
                  {product.name}
                </h3>

              </div>

              {/* DESCRIPTION */}
              <p className="text-sm leading-7 text-[#083b52]/60">
                {product.description}
              </p>

            </div>
          ))}

        </div>

        {/* INFORMATION NOTE */}
        <p className="mt-8 text-xs text-[#083b52]/45">
          Product information is provided for company and portfolio
          purposes. Products are not available for online purchase through
          this website.
        </p>

      </div>
    </section>
  );
}