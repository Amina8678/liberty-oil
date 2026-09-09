"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#process", label: "Grove to Bottle" },
  { href: "/products", label: "Products" },
  { href: "#quality", label: "Quality" },
  { href: "#locations", label: "Locations" },
  { href: "#management", label: "Management" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur border-b border-[var(--line)]" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight text-olive-deep">
            Liberty Health
          </span>
          <span className="hidden sm:inline text-[11px] text-olive-mid font-medium">
            trading as Event
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink/80 hover:text-olive-deep transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm border border-olive-deep/40 text-olive-deep px-4 py-2 hover:bg-olive-deep hover:text-limestone transition-colors"
          >
            Get in touch
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-olive-deep"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--line)] bg-paper">
          <nav className="container-x flex flex-col py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-3 text-base text-ink/85 border-b border-[var(--line)] last:border-none"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 text-center border border-olive-deep text-olive-deep px-4 py-3"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
