type Profile = {
  name: string;
  category: string;
  image?: string;
  highlights: string[];
  uses: string;
  quality: string;
};

const profiles: Profile[] = [
  {
    name: "Premium Turkish Dried Figs",
    category: "Healthy Snacking",
    image: "/images/dried-figs.jpg",
    highlights: [
      "Dietary fibre, calcium and potassium",
      "Antioxidants",
      "Naturally sweet — no added sugar",
    ],
    uses: "Breakfast bowls, snack mixes, baked goods, smoothies and cheese platters.",
    quality:
      "Selected for appearance, texture and consistency to meet demand for natural, nutrient-dense snacks.",
  },
  {
    name: "Premium Turkish Dried Apricots",
    category: "Healthy Snacking",
    image: "/images/dried-apricots.jpg",
    highlights: [
      "Vitamin A, iron and potassium",
      "Dietary fibre",
      "Natural carbohydrates for quick energy",
    ],
    uses: "Snacking, breakfast cereals, baking and premium food service.",
    quality:
      "Sourced from trusted Turkish suppliers for vibrant colour, texture and consistent appeal.",
  },
  {
    name: "Turkish Raisins",
    category: "Healthy Snacking",
    image: "/images/raisins.jpg",
    highlights: [
      "Antioxidants and dietary fibre",
      "Minerals",
      "Naturally sweet, convenient energy",
    ],
    uses: "Cereals, baked goods and savoury recipes.",
    quality:
      "Selected for quality and consistency to meet demand for natural, clean-label ingredients.",
  },
  {
    name: "Premium Almonds",
    category: "Nuts & Healthy Snacks",
    image: "/images/almonds-pistachios.jpg",
    highlights: [
      "Plant-based protein",
      "Vitamin E and magnesium",
      "Healthy fats",
    ],
    uses: "Snacks, dairy alternatives and baked goods.",
    quality:
      "Selected against strict standards for freshness and appearance, meeting growing demand for plant-based foods.",
  },
  {
    name: "Premium Hazelnuts",
    category: "Nuts & Healthy Snacks",
    highlights: [
      "Vitamin E",
      "Omega fatty acids",
      "Antioxidants",
    ],
    uses: "Confectionery, chocolate, bakery, cereals and premium snacks.",
    quality:
      "Turkish origin — one of the world's leading hazelnut-growing regions — sourced for appearance, freshness and consistency.",
  },
  {
    name: "Premium Walnuts",
    category: "Nuts & Healthy Snacks",
    highlights: [
      "Omega-3 fatty acids",
      "Antioxidants",
    ],
    uses: "Snacks, baking, breakfast, salads and everyday recipes.",
    quality:
      "Sourced to strict quality standards for consistent appearance, freshness and flavour.",
  },
  {
    name: "Premium Pistachios",
    category: "Nuts & Healthy Snacks",
    image: "/images/almonds-pistachios.jpg",
    highlights: [
      "Plant-based protein and fibre",
      "Healthy fats",
      "Lutein",
    ],
    uses: "Desserts, baking, confectionery, savoury dishes and snacks.",
    quality:
      "Selected against strict criteria for superior appearance and consistency.",
  },
];

export function ProductProfiles() {
  return (
    <section
      id="product-profiles"
      className="bg-white py-24 md:py-32"
    >
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
            Individual Product Profiles
          </p>

          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-[#071c27] md:text-5xl">
            Seven products. One standard of quality.
          </h2>

          <p className="mt-7 text-lg leading-8 text-[#083b52]/70">
            Every product in our dried fruit and nut range is selected for
            taste, nutrition and consistency, and suited to retail, healthy
            snacking, bakery, food manufacturing and hospitality applications.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((product) => (
            <article
              key={product.name}
              className="product-card overflow-hidden rounded-[22px] border border-white/10 bg-[#071c27]"
            >
              <div className="flex h-56 items-center justify-center bg-white p-6">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-[14px] bg-white text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#083b52]/35">
                      Product photo
                    </span>
                    <span className="text-[11px] text-[#083b52]/30">
                      Coming soon
                    </span>
                  </div>
                )}
              </div>

              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#09b1ec]">
                  {product.category}
                </p>

                <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                  {product.name}
                </h3>

                <ul className="mt-5 space-y-1.5 text-sm leading-6 text-white/75">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#09b1ec]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-white/15 pt-5">
                  <p className="text-sm leading-7 text-white/75">
                    <span className="font-semibold text-white">
                      Culinary uses —{" "}
                    </span>
                    {product.uses}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/75">
                    <span className="font-semibold text-white">
                      Quality —{" "}
                    </span>
                    {product.quality}
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
