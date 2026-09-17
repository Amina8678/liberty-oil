const steps = [
  {
    n: "01",
    title: "Picking & washing",
    body: "Every olive is hand-picked, free of leaves and branches, then passed through a sprinkling system before crushing and cold-air dried to remove residual water.",
  },
  {
    n: "02",
    title: "Crushing & grinding",
    body: "Vertical decanters reduce contact with water, protecting phenolic compounds and antioxidants while limiting olive black-water waste.",
  },
  {
    n: "03",
    title: "Malaxation",
    body: "The crushed olive paste is gently mixed in the malaxator to prepare it for oil separation.",
  },
  {
    n: "04",
    title: "Decanting",
    body: "A 2-phase decanter and polishing separator divide paste from oil, kept away from light, air, heat and water throughout.",
  },
  {
    n: "05",
    title: "Storage & filtration",
    body: "Oil is classified by acidity and stored in chromium-nickel tanks blanketed with nitrogen, in a climate-controlled room held between 15–25°C.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="bg-dusk"
      style={{ color: "#ffffff" }}
    >
      <div className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h2
              className="font-display text-3xl md:text-4xl leading-tight"
              style={{ color: "#ffffff" }}
            >
              From grove to bottle
            </h2>

            <p
              className="mt-5 leading-relaxed max-w-sm"
              style={{ color: "#ffffff" }}
            >
              Hand-harvested, then cold-pressed below 27°C — the temperature
              that keeps aroma, nutrients and flavour intact, and yields a
              markedly higher concentration of phenolic compounds than other
              extraction methods.
            </p>

            <div className="mt-8 overflow-hidden rounded-[22px] border border-white/10 bg-white/5">
              <img
                src="/images/eco-friendly-olive-oil-production.jpeg"
                alt="Olive oil production facility powered by rooftop solar panels"
                className="h-56 w-full object-cover"
              />

              <p
                className="p-5 text-sm leading-7"
                style={{ color: "#ffffff" }}
              >
                From careful harvesting to efficient production, each stage is
                designed to protect quality while reducing unnecessary waste.
              </p>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 rule-dark">
            {steps.map((s) => (
              <div
                key={s.n}
                className="grid grid-cols-[3rem_1fr] gap-4 py-7 rule-dark first:border-t-0"
              >
                <span
                  className="font-display text-2xl"
                  style={{ color: "#65c2f5" }}
                >
                  {s.n}
                </span>

                <div>
                  <h3
                    className="text-base font-medium"
                    style={{ color: "#ffffff" }}
                  >
                    {s.title}
                  </h3>

                  <p
                    className="mt-2 text-[15px] leading-relaxed"
                    style={{ color: "#ffffff" }}
                  >
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
