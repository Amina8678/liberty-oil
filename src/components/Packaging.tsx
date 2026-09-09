const packaging = [
  { name: "Glass Bottle — Dorita Series", sizes: "250 / 500 / 750 ml" },
  { name: "Glass Bottle — Maraska Series", sizes: "250 / 500 / 750 / 1000 ml" },
  { name: "Glass Bottle — Biolio Series", sizes: "250 / 500 / 750 / 1000 ml" },
  { name: "Glass Bottle — Kolio Series", sizes: "250 / 500 / 750 ml" },
  { name: "Plastic Bottle", sizes: "250 / 500 / 1000 ml" },
  { name: "Tin / Can", sizes: "3000 / 5000 ml" },
];

const loading = [
  { pack: "Marasca Glass 1000 ml", units: "12", cases: "60", perPallet: "720", p20: "11", p40: "24" },
  { pack: "Marasca Glass 750 ml", units: "12", cases: "65", perPallet: "780", p20: "11", p40: "24" },
  { pack: "Marasca Glass 500 ml", units: "12", cases: "80", perPallet: "960", p20: "11", p40: "24" },
  { pack: "Marasca Glass 250 ml", units: "24", cases: "66", perPallet: "1,584", p20: "11", p40: "24" },
  { pack: "Dorica Glass 750 ml", units: "12", cases: "65", perPallet: "780", p20: "11", p40: "24" },
  { pack: "Dorica Glass 500 ml", units: "12", cases: "90", perPallet: "1,080", p20: "11", p40: "24" },
  { pack: "Dorica Glass 250 ml", units: "24", cases: "84", perPallet: "2,016", p20: "11", p40: "24" },
  { pack: "Tin/Can 5000 ml", units: "4", cases: "50", perPallet: "200", p20: "11", p40: "24" },
  { pack: "Tin/Can 3000 ml", units: "6", cases: "48", perPallet: "288", p20: "11", p40: "24" },
];

export function Packaging() {
  return (
    <section className="bg-limestone">
      <div className="container-x py-20 md:py-28">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl md:text-4xl text-olive-deep leading-tight">
            Packaging &amp; container loading
          </h2>
          <p className="mt-5 text-[17px] text-ink/80 leading-relaxed">
            Flexible packaging for bulk, retail and private-label orders,
            including 500/1000/25 kg bulk sacks. Full specifications for
            100×120 cm pallets, case dimensions and gross weights are
            available on request.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
          {packaging.map((p) => (
            <div key={p.name} className="flex justify-between gap-4 py-3 rule">
              <span className="text-[15px] text-ink/85">{p.name}</span>
              <span className="text-[15px] text-olive-mid text-right shrink-0">
                {p.sizes}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-sm font-medium text-olive-mid mb-4">
            Container loading — 80 × 120 cm pallets
          </p>
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <table className="w-full text-sm min-w-[640px] border-collapse">
              <thead>
                <tr className="text-left text-ink/60 border-b border-[var(--line)]">
                  <th className="py-3 pr-4 font-medium">Package</th>
                  <th className="py-3 pr-4 font-medium">Units / case</th>
                  <th className="py-3 pr-4 font-medium">Cases / pallet</th>
                  <th className="py-3 pr-4 font-medium">Units / pallet</th>
                  <th className="py-3 pr-4 font-medium">Pallets / 20ft</th>
                  <th className="py-3 font-medium">Pallets / 40ft</th>
                </tr>
              </thead>
              <tbody>
                {loading.map((row) => (
                  <tr key={row.pack} className="border-b border-[var(--line)]">
                    <td className="py-3 pr-4 text-ink/85">{row.pack}</td>
                    <td className="py-3 pr-4 text-ink/70">{row.units}</td>
                    <td className="py-3 pr-4 text-ink/70">{row.cases}</td>
                    <td className="py-3 pr-4 text-ink/70">{row.perPallet}</td>
                    <td className="py-3 pr-4 text-ink/70">{row.p20}</td>
                    <td className="py-3 text-ink/70">{row.p40}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
