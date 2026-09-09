import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Sustainability } from "@/components/Sustainability";
import { Products } from "@/components/Products";
import { Benefits } from "@/components/Benefits";
import { Quality } from "@/components/Quality";
import { Packaging } from "@/components/Packaging";
import { ChoosingAndWhy } from "@/components/ChoosingAndWhy";
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
        <Process />
        <Sustainability />
        <Products />
        <Benefits />
        <Quality />
        <Packaging />
        <ChoosingAndWhy />
        <Locations />

        {/* Message box immediately before Footer */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}