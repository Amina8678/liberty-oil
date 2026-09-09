const benefits = [
  "Helps prevent strokes and reduces the risk of heart disease",
  "Anti-inflammatory and anti-bacterial properties",
  "Contains anti-cancer properties and counteracts blood clot formation",
  "Rich in antioxidants that help protect blood cholesterol from oxidation",
  "Supports heart, brain and digestive health",
  "Promotes skin hydration and helps reduce signs of ageing",
  "Prevents obesity and weight gain, and helps reduce type 2 diabetes risk",
  "Supports smoother digestion and may help relieve constipation naturally",
];

export function Benefits() {
  return (
    <section className="bg-olive-deep text-limestone">
      <div className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Why Turkish olive oil
            </h2>
            <p className="mt-5 text-limestone/70 leading-relaxed">
              Event&apos;s oil is rich in monounsaturated fatty acids —
              roughly 73% of total oil content — carrying a wide range of
              medicinal and nutritional benefits.
            </p>
          </div>
          <ul className="md:col-span-7 md:col-start-6 grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {benefits.map((b) => (
              <li
                key={b}
                className="text-[15px] leading-relaxed text-limestone/90 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-px before:bg-gold-bright"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
