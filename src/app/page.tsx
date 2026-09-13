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
        {/* Main company introduction */}
        <Hero />

        {/* CEO profile comes first */}
        <CEOProfile />

        {/* Three main company directors and regional leadership */}
        <Directors />

        {/* Company profile comes after the directors */}
        <CompanyProfile />

        {/* Company activities */}
        <WhatWeDo />

        {/* Production process */}
        <Process />

        {/* Sustainability and solar-powered production */}
        <Sustainability />

        {/* Product portfolio */}
        <Products />

        {/* Quality and certifications */}
        <Quality />

        {/* UK and Ghana locations */}
        <Locations />

        {/* Contact message form */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}