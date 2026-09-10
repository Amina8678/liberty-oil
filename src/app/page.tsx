import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Directors } from "@/components/Directors";
import { Managers } from "@/components/Managers";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Process } from "@/components/Process";
import { Sustainability } from "@/components/Sustainability";
import { Products } from "@/components/Products";
import { Quality } from "@/components/Quality";
import { Locations } from "@/components/Locations";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <About />

        <Directors />

        <Managers />

        <WhatWeDo />

        <Process />

        <Sustainability />

        <Products />

        <Quality />

        <Locations />

        <Contact />
      </main>

      <Footer />
    </>
  );
}