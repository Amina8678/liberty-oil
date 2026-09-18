"use client";

import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CEOProfile } from "@/components/CEOProfile";
import { Directors } from "@/components/Directors";
import { CompanyProfile } from "@/components/CompanyProfile";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Process } from "@/components/Process";
import { Sustainability } from "@/components/Sustainability";
import { WhyTurkey } from "@/components/WhyTurkey";
import { Products } from "@/components/Products";
import { ProductProfiles } from "@/components/ProductProfiles";
import { Quality } from "@/components/Quality";
import { ProductPackaging } from "@/components/ProductPackaging";
import { Locations } from "@/components/Locations";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main className="overflow-x-hidden">
        <div className="reveal-on-scroll" data-direction="up">
          <Hero />
        </div>

        <div className="reveal-on-scroll" data-direction="left">
          <CEOProfile />
        </div>

        <div className="reveal-on-scroll" data-direction="right">
          <Directors />
        </div>

        <div className="reveal-on-scroll" data-direction="up">
          <CompanyProfile />
        </div>

        <div className="reveal-on-scroll" data-direction="left">
          <WhatWeDo />
        </div>

        <div className="reveal-on-scroll" data-direction="right">
          <Process />
        </div>

        <div className="reveal-on-scroll" data-direction="up">
          <Sustainability />
        </div>

        <div className="reveal-on-scroll" data-direction="left">
          <WhyTurkey />
        </div>

        <div className="reveal-on-scroll" data-direction="right">
          <Products />
        </div>

        <div className="reveal-on-scroll" data-direction="up">
          <ProductProfiles />
        </div>

        <div className="reveal-on-scroll" data-direction="left">
          <Quality />
        </div>

        <div className="reveal-on-scroll" data-direction="right">
          <ProductPackaging />
        </div>

        <div className="reveal-on-scroll" data-direction="up">
          <Locations />
        </div>

        <div className="reveal-on-scroll" data-direction="left">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}