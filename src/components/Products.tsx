type Product = {
  name: string;
  category: string;
  description: string;
  benefits: string[];
  uses: string;
  image: string;
};

const products: Product[] = [
  {
    name: "Event Extra Virgin Olive Oil",
    category: "Flagship Product",
    description:
      "Premium cold-pressed olive oil with a strong Mediterranean heritage, designed for everyday cooking and the premium oil category.",
    benefits: [
      "💗 Good for heart health by helping improve cholesterol levels.",
      "🛡️ Rich in antioxidants that protect cells from damage.",
      "🔥 Reduces inflammation in the body.",
      "💧 May help control blood sugar and support diabetes prevention.",
      "🧠 Supports brain health and may help reduce cognitive decline.",
      "⚖️ Can aid weight management by helping you feel fuller.",
      "🌱 Part of a healthy Mediterranean diet linked to longer life and lower risk of chronic diseases.",
    ],
    uses: "Cooking, dressings, dips and premium retail shelves.",
    image: "/images/event-olive-oil-table.jpeg",
  },
  {
    name: "Dried Figs",
    category: "Convenient Nutrition",
    description:
      "Naturally sweet dried figs suitable for healthy snacking, family consumption, breakfast and desserts.",
    benefits: [
      "🌿 Good for digestion because they are rich in fibre and can help prevent constipation.",
      "💗 Supports heart health by providing potassium and helping maintain healthy blood pressure.",
      "🦴 Strengthens bones with minerals such as calcium and potassium.",
      "💧 May help blood sugar control when eaten in moderation as part of a balanced diet.",
      "🛡️ Rich in antioxidants that help protect cells from damage.",
      "🧠 Provides important nutrients including vitamin B6, copper, magnesium, and potassium.",
    ],
    uses: "Snacking, breakfast bowls, baking and cheese platters.",
    image: "/images/dried-figs.jpg",
  },
  {
    name: "Dried Apricots",
    category: "Naturally Nutritious",
    description:
      "Versatile dried apricots ideal for lunchboxes, healthy snacks, baking and everyday family consumption.",
    benefits: [
      "👁️ Supports eye health with naturally occurring vitamin A.",
      "🩸 Provides iron and potassium as part of a balanced diet.",
      "🌿 Provides dietary fibre for everyday digestive wellness.",
      "⚡ Natural carbohydrates provide convenient everyday energy.",
      "🛡️ Contains antioxidants that help protect cells from damage.",
    ],
    uses: "Snacking, cereals, baking and food service.",
    image: "/images/dried-apricots.jpg",
  },
  {
    name: "Raisins",
    category: "Everyday Nutrition",
    description:
      "Convenient and naturally sweet raisins for snacking, breakfast, baking and desserts.",
    benefits: [
      "⚡ Provides natural energy in a convenient snack.",
      "🌿 Contains dietary fibre to support digestive wellness.",
      "🛡️ Provides antioxidants that help protect cells from damage.",
      "💗 Contains minerals that support everyday heart health.",
      "🍇 Naturally sweet with no need for added sugar.",
    ],
    uses: "Cereals, baking, snack mixes and savoury recipes.",
    image: "/images/raisins.jpg",
  },
  {
    name: "Prunes",
    category: "Fruit Snacks",
    description:
      "Dried prunes suitable for healthy snacking, breakfast and use as a versatile food ingredient.",
    benefits: [
      "🌿 Rich in fibre and can support digestive wellness.",
      "🦴 Provides vitamin K and minerals that support bone health.",
      "🛡️ Contains antioxidants that help protect cells from damage.",
      "💗 Provides naturally occurring nutrients for a balanced diet.",
      "⚡ A naturally sweet source of convenient everyday energy.",
    ],
    uses: "Snacking, breakfast, baking and cooking.",
    image: "/images/prunes.jpg",
  },
  {
    name: "Almonds & Pistachios",
    category: "Nuts & Healthy Snacks",
    description:
      "Mediterranean snacks with strong retail appeal, suited to convenience stores, checkout displays and health-food shelves.",
    benefits: [
      "💪 Provides plant-based protein for satisfying everyday snacking.",
      "💗 Contains beneficial fats that support heart-conscious eating.",
      "🧠 Provides vitamin E, magnesium and other important nutrients.",
      "🌿 Contains dietary fibre to support a balanced diet.",
      "⚡ A nutrient-dense option for convenient everyday energy.",
    ],
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
            Each card brings together the product story, health benefits and
            recommended uses in one place.
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

                <div className="mt-5 border-t border-white/15 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#09b1ec]">
                    Health benefits
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-white/75">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <span aria-hidden="true" className="shrink-0 text-base leading-6">
                          {benefit.slice(0, 2)}
                        </span>
                        <span>{benefit.slice(2).trim()}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm leading-7 text-white/75">
                    <span className="font-semibold text-white">Best for — </span>
                    {product.uses}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
              Nuts &amp; Healthy Snacks
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
            <p className="font-bold uppercase tracking-[0.16em] text-[#65c2f5]">
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
