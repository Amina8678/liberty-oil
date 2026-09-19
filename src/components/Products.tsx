type Product = {
  name: string;
  category: string;
  description: string;
  nutrition: string;
  uses: string;
  image: string;
};

const products: Product[] = [
  {
    name: "Event Extra Virgin Olive Oil",
    category: "Flagship Product",
    description:
      "Cold-extracted olive oil from the Aegean region for cooking, finishing and everyday Mediterranean dishes.",
    nutrition:
      "Naturally contains monounsaturated fats and olive polyphenols.",
    uses: "Cooking, dressings, dips and premium retail shelves.",
    image: "/images/event-olive-oil-table.jpeg",
  },
  {
    name: "Dried Figs",
    category: "Fruit Snacks",
    description:
      "Naturally sweet dried figs with a soft texture for convenient everyday enjoyment.",
    nutrition: "A source of dietary fibre, calcium and potassium.",
    uses: "Snacking, breakfast bowls, baking and cheese platters.",
    image: "/images/dried-figs.jpg",
  },
  {
    name: "Dried Apricots",
    category: "Fruit Snacks",
    description:
      "Versatile dried apricots for lunchboxes, baking and family-friendly snacking.",
    nutrition: "Provides dietary fibre, iron and potassium.",
    uses: "Snacking, cereals, baking and food service.",
    image: "/images/dried-apricots.jpg",
  },
  {
    name: "Raisins",
    category: "Everyday Pantry",
    description:
      "Naturally sweet raisins in a convenient format for home and food-service use.",
    nutrition: "Provides dietary fibre and naturally occurring antioxidants.",
    uses: "Cereals, baking, snack mixes and savoury recipes.",
    image: "/images/raisins.jpg",
  },
  {
    name: "Prunes",
    category: "Fruit Snacks",
    description:
      "Soft dried prunes suited to snacking, breakfast and versatile recipe use.",
    nutrition: "A source of dietary fibre and naturally occurring minerals.",
    uses: "Snacking, breakfast, baking and cooking.",
    image: "/images/prunes.jpg",
  },
  {
    name: "Mediterranean Nuts",
    category: "Nuts & Snacks",
    description:
      "Almonds, pistachios, hazelnuts and walnuts selected for retail and food-service applications.",
    nutrition: "Provides plant protein, fibre and beneficial unsaturated fats.",
    uses: "Snacks, bakery, confectionery and savoury dishes.",
    image: "/images/almonds-pistachios.jpg",
  },
];

export function Products() {
  return (
    <section id="products" className="bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
            Portfolio Overview
          </p>

          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-[#071c27] md:text-5xl">
            Mediterranean foods for everyday occasions.
          </h2>

          <p className="mt-7 text-lg leading-8 text-[#083b52]/70">
            Our focused range brings together olive oil, dried fruits and nuts.
            Each profile includes the essential nutritional highlights and uses,
            so the portfolio can be understood without repeating product stories.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-[22px] border border-white/10 bg-[#071c27]"
            >
              <div className="flex h-56 items-center justify-center bg-white p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#09b1ec]">
                  {product.category}
                </p>

                <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                  {product.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/75">
                  {product.description}
                </p>

                <div className="mt-5 border-t border-white/15 pt-5 text-sm leading-7 text-white/75">
                  <p>
                    <span className="font-semibold text-white">Nutrition — </span>
                    {product.nutrition}
                  </p>
                  <p className="mt-3">
                    <span className="font-semibold text-white">Best for — </span>
                    {product.uses}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
