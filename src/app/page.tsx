import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CEOProfile } from "@/components/CEOProfile";
import { Directors } from "@/components/Directors";
import { CompanyProfile } from "@/components/CompanyProfile";
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

        {/* CEO Profile */}
        <CEOProfile />

        {/* Directors */}
        <Directors />

        {/* Company Profile */}
        <CompanyProfile />
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