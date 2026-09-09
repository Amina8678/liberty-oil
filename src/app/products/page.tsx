import { Header } from "@/components/Header";
import { Products } from "@/components/Products";
import { Footer } from "@/components/Footer";

export default function ProductsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-olive-deep text-white">
          <div className="container-x py-20 md:py-28">
            <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium">
              Liberty Health
            </p>

            <h1 className="mt-4 font-display text-4xl md:text-6xl leading-tight">
              Our Products
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
              Explore our range of premium olive oils, dried fruits,
              nuts and raisins. Create an account and order directly
              through our online shop.
            </p>
          </div>
        </section>

        <Products />
      </main>

      <Footer />
    </>
  );
}