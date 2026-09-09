import { OliveSprig } from "./OliveMotif";

export function Footer() {
  return (
    <footer id="contact" className="bg-near-black text-limestone">
      <div className="container-x pt-20 pb-12 md:pt-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Get in touch about an order
            </h2>
            <p className="mt-5 text-limestone/65 leading-relaxed max-w-sm">
              For bulk, retail or private-label enquiries, reach the team
              directly — production and sourcing is based in Turkey&apos;s
              Aegean region, Izmir and Akhisar.
            </p>
            <OliveSprig className="mt-10 w-40 h-auto text-olive-soft/60" />
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="text-sm font-medium text-limestone/50 mb-4">
              Liberty Health Ltd
            </p>
            <p className="text-limestone/80 leading-relaxed">
              101 Waddon Road
              <br />
              London, CR0 4JH
              <br />
              United Kingdom
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-medium text-limestone/50 mb-4">
              Contact
            </p>
            <a
              href="tel:+447837867759"
              className="block text-limestone/80 hover:text-gold-bright transition-colors"
            >
              +44 7837 867759
            </a>
            <a
              href="mailto:info@eventolives.com"
              className="block mt-1 text-limestone/80 hover:text-gold-bright transition-colors"
            >
              info@eventolives.com
            </a>
            <a
              href="mailto:libertyhealthltd@gmail.com"
              className="block mt-1 text-limestone/80 hover:text-gold-bright transition-colors"
            >
              libertyhealthltd@gmail.com
            </a>
            <div className="mt-4 flex flex-col">
              <a
                href="https://www.eventolives.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-limestone/80 hover:text-gold-bright transition-colors"
              >
                eventolives.com
              </a>
              <a
                href="https://www.libertyhealthltd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-limestone/80 hover:text-gold-bright transition-colors"
              >
                libertyhealthltd.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[var(--line-on-dark)] flex flex-col sm:flex-row justify-between gap-4 text-sm text-limestone/40">
          <p>Liberty Health Ltd — Company Profile 2025</p>
          <p>Production &amp; sourcing: Turkey, Aegean Region — Izmir / Akhisar</p>
        </div>
      </div>
    </footer>
  );
}
