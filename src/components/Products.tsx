const products = [
  {
    name: "Event Extra Virgin Olive Oil",
    category: "Flagship Product",
    description:
      "Premium cold-pressed olive oil with a strong Mediterranean heritage, designed for everyday cooking and the premium oil category.",
    image: "/images/event-olive-oil-table.jpeg",
  },
  {
    name: "Dried Figs",
    category: "Healthy Snacking",
    description:
      "Naturally sweet dried figs suitable for healthy snacking, family consumption, breakfast and desserts.",
    image: "/images/dried-figs.jpg",
  },
  {
    name: "Dried Apricots",
    category: "Healthy Snacking",
    description:
      "Versatile dried apricots ideal for lunchboxes, healthy snacks, baking and everyday family consumption.",
    image: "/images/dried-apricots.jpg",
  },
  {
    name: "Raisins",
    category: "Healthy Snacking",
    description:
      "Convenient and naturally sweet raisins for snacking, breakfast, baking and desserts.",
    image: "/images/raisins.jpg",
  },
  {
    name: "Prunes",
    category: "Healthy Snacking",
    description:
      "Premium dried prunes suitable for healthy snacking, breakfast and use as a versatile food ingredient.",
    image: "/images/prunes.jpg",
  },
  {
    name: "Almonds & Pistachios",
    category: "Nuts & Healthy Snacks",
    description:
      "High-perceived-value Mediterranean snacks suited to convenience stores, checkout displays and health-food shelves.",
    image: "/images/almonds-pistachios.jpg",
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="bg-white py-24 md:py-32"
    >
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
            A Focused Premium Portfolio
          </p>

          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-[#071c27] md:text-5xl">
            Quality products selected for broad consumer appeal.
          </h2>

          <p className="mt-7 text-lg leading-8 text-[#083b52]/70">
            Our phase-one portfolio combines premium Mediterranean olive oil,
            naturally sweet dried fruits and convenient healthy snacks designed
            for modern retail environments.
          </p>

          <a
            href="#product-profiles"
            className="mt-6 inline-flex items-center text-sm font-semibold text-[#09b1ec] transition-colors hover:text-[#078fca]"
          >
            View full product profiles ↓
          </a>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-[22px] border border-[#083b52]/10 bg-[#eef9fd]"
            >
              <div className="flex h-64 items-center justify-center bg-white p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div><br></br>

              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#09b1ec]">
                  {product.category}
                </p>

                <h3 className="mt-4 font-display text-2xl font-semibold text-[#071c27]">
                  {product.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#083b52]/65">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
              Nuts & Healthy Snacks
            </p>

            <h3 className="mt-5 font-display text-3xl font-semibold text-[#071c27] md:text-4xl">
              Convenient products with strong retail potential.
            </h3>

            <ul className="mt-7 space-y-3 text-base leading-7 text-[#083b52]/70">
              <li>Almonds</li>
              <li>Pistachios</li>
              <li>Walnuts</li>
              <li>Hazelnuts</li>
              <li>Other Mediterranean snack options</li>
            </ul>
          </div>

          <div className="rounded-[22px] bg-[#083b52] p-8 md:p-10">
            <p className="text-white font-bold uppercase tracking-[0.16em] text-[#65c2f5]">
              Ideal Retail Placements
            </p>

            <ul className="mt-7 space-y-4 text-base leading-7 text-white/80">
              <li>Checkout displays</li>
              <li>Convenience stores</li>
              <li>Grab-and-go sections</li>
              <li>Health-food shelves</li>
              <li>Premium imported food sections</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}