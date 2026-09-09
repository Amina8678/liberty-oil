const certs = [
  "HALAL Food Certified",
  "Non-GMO Project Verified",
  "FSSC 22000",
  "FDA Approved",
  "Kosher Certified",
  "ISO 9001",
];

export function Quality() {
  return (
    <section id="quality" className="bg-paper">
      <div className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl md:text-4xl text-olive-deep leading-tight">
              Quality control &amp; certification
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 text-[17px] leading-relaxed text-ink/85">
            <p>
              An in-house quality control team checks every order against
              HACCP, ISO 9001, Kosher, Halal and other hygiene protocols,
              from cultivation through processing, packaging and transport.
              Production complies with the Turkish Food Codex, and Event
              offers the world&apos;s first Turkish Organic Olive
              assortment.
            </p>
          </div>
        </div>

        <div className="mt-14 border-y border-[var(--line)] py-8 overflow-x-auto">
          <div className="flex flex-wrap gap-x-10 gap-y-4 justify-between">
            {certs.map((c) => (
              <span
                key={c}
                className="font-display text-lg md:text-xl text-olive-deep whitespace-nowrap"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
