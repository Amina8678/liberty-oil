"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#process", label: "Grove to Bottle" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#products", label: "Products" },
  { href: "#quality", label: "Quality" },
  { href: "#packaging", label: "Packaging" },
  { href: "#locations", label: "Locations" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-[#083b52]/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">

        {/* Logo */}
        <a
          href="#top"
          className="flex items-baseline gap-2"
        >
        
          <img
            src="/images/LOGO.png"
            alt="Liberty Health Logo"
            className="h-20 w-20"
          />
         
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#083b52]/80 transition-colors hover:text-[#09b1ec]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="border border-[#083b52]/30 px-4 py-2 text-sm text-[#083b52] transition-colors hover:bg-[#083b52] hover:text-white"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="p-2 text-[#083b52] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-[#083b52]/10 bg-white md:hidden">
          <nav className="container-x flex flex-col py-4">

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-[#083b52]/10 py-3 text-base text-[#083b52]/85 last:border-none"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-4 border border-[#083b52] px-4 py-3 text-center text-[#083b52]"
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