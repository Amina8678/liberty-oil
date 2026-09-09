"use client";

import { useState } from "react";
import { ShoppingCart, Plus, Minus, X, Trash2 } from "lucide-react";

type Product = {
  id: number;
  name: string;
  detail: string;
  body: string;
  priceGhs: number;
  priceGbp: number;
};

type CartItem = Product & {
  quantity: number;
};

const oils: Product[] = [
  {
    id: 1,
    name: "Premium Extra Virgin Olive Oil",
    detail: "Max. acidity 0.1–0.3%",
    body:
      "Cold-extracted from the finest olives, hand-harvested in the first mid-September harvest — under 3 hours from picking to oil.",
    priceGhs: 450,
    priceGbp: 28,
  },
  {
    id: 2,
    name: "Extra Virgin Olive Oil",
    detail: "Max. acidity 0.8%, oleic type",
    body:
      "A softer, smoother flavour suited to meals, salads and sauces.",
    priceGhs: 320,
    priceGbp: 20,
  },
  {
    id: 3,
    name: "Cold-Pressed Extra Virgin Olive Oil",
    detail: "Max. acidity 0.5–0.8%",
    body:
      "A sharper aroma and enhanced taste, best used raw for dipping, drizzling, salad dressings and marinades.",
    priceGhs: 380,
    priceGbp: 24,
  },
  {
    id: 4,
    name: "Pomace Olive Oil",
    detail: "Under 1% acidity",
    body:
      "Refined, light-tasting, with a high smoke point — suitable for everyday cooking and frying.",
    priceGhs: 260,
    priceGbp: 16,
  },
];

const larder = [
  {
    name: "Dried Figs",
    body: "Sun-dried; naturally sweet, soft, rich in fibre and minerals.",
  },
  {
    name: "Dried Apricots",
    body: "Sun-dried with a vibrant colour and rich flavour.",
  },
  {
    name: "Hazelnuts",
    body: "Crunchy, rich in healthy fats and vitamin E.",
  },
  {
    name: "Almonds",
    body: "Packed with protein, fibre and essential nutrients.",
  },
  {
    name: "Walnuts",
    body: "Loaded with omega-3 fatty acids and antioxidants.",
  },
  {
    name: "Pistachios",
    body: "Rich taste, vibrant colour, high in protein.",
  },
  {
    name: "Raisins",
    body: "Naturally sweet, a source of iron and energy.",
  },
];

export function Products() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [country, setCountry] = useState<"Ghana" | "UK">("Ghana");

  const currency = country === "Ghana" ? "GHS" : "GBP";

  const requireLogin = () => {
    const customer = localStorage.getItem("libertyCustomer");

    if (!customer) {
      window.location.href = "/login?redirect=/#products";
      return false;
    }

    return true;
  };

  const addToCart = (product: Product) => {
    if (!requireLogin()) {
      return;
    }

    setCart((current) => {
      const existing = current.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...current,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  };

  const increaseQuantity = (id: number) => {
    setCart((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCart((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const getPrice = (item: Product) =>
    country === "Ghana"
      ? item.priceGhs
      : item.priceGbp;

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) =>
      total + getPrice(item) * item.quantity,
    0
  );

  return (
    <>
      <section id="products" className="bg-paper">
        <div className="container-x py-20 md:py-28">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium">
                Shop our range
              </p>

              <h2 className="mt-3 font-display text-3xl md:text-4xl text-olive-deep">
                Premium olive oils
              </h2>

              <p className="mt-5 text-[17px] text-ink/80 leading-relaxed">
                Create a customer account to order Liberty Health olive oil
                online.
              </p>
            </div>

            <button
              onClick={() => {
                if (requireLogin()) {
                  setCartOpen(true);
                }
              }}
              className="inline-flex items-center justify-center gap-3 bg-olive-deep text-white px-6 py-3 hover:opacity-90 transition"
            >
              <ShoppingCart size={19} />
              Cart

              {cartCount > 0 && (
                <span className="rounded-full bg-gold text-olive-deep px-2 py-0.5 text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </button>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {oils.map((oil) => {
              const price =
                country === "Ghana"
                  ? oil.priceGhs
                  : oil.priceGbp;

              return (
                <article
                  key={oil.id}
                  className="border border-[var(--line)] bg-limestone p-7"
                >

                  <h3 className="font-display text-xl md:text-2xl text-olive-deep">
                    {oil.name}
                  </h3>

                  <p className="mt-2 text-sm text-gold font-medium">
                    {oil.detail}
                  </p>

                  <p className="mt-5 text-[15px] text-ink/75 leading-relaxed">
                    {oil.body}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-4">

                    <strong className="text-lg text-olive-deep">
                      {currency} {price.toFixed(2)}
                    </strong>

                    <button
                      onClick={() => addToCart(oil)}
                      className="inline-flex items-center gap-2 bg-olive-deep text-white px-5 py-3 font-medium hover:opacity-90 transition"
                    >
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>

                  </div>

                </article>
              );
            })}

          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">

            <span className="text-sm text-ink/70">
              Currency:
            </span>

            <button
              onClick={() => setCountry("Ghana")}
              className={`px-4 py-2 text-sm border ${
                country === "Ghana"
                  ? "bg-olive-deep text-white border-olive-deep"
                  : "border-[var(--line)]"
              }`}
            >
              Ghana — GHS
            </button>

            <button
              onClick={() => setCountry("UK")}
              className={`px-4 py-2 text-sm border ${
                country === "UK"
                  ? "bg-olive-deep text-white border-olive-deep"
                  : "border-[var(--line)]"
              }`}
            >
              UK — GBP
            </button>

          </div>

          <div className="mt-20">

            <h3 className="font-display text-2xl text-olive-deep mb-8">
              Dried fruits, nuts &amp; raisins
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)]">

              {larder.map((item) => (
                <div
                  key={item.name}
                  className="bg-limestone p-6"
                >
                  <p className="font-medium text-olive-deep">
                    {item.name}
                  </p>

                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* CART */}
      {cartOpen && (
        <div className="fixed inset-0 z-[100]">

          <button
            className="absolute inset-0 bg-black/40"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
          />

          <aside className="absolute right-0 top-0 h-full w-full max-w-lg bg-paper shadow-2xl overflow-y-auto">

            <div className="sticky top-0 bg-paper border-b border-[var(--line)] px-6 py-5 flex items-center justify-between">

              <div>
                <h2 className="font-display text-2xl text-olive-deep">
                  Your Cart
                </h2>

                <p className="text-sm text-ink/60 mt-1">
                  {cartCount} item{cartCount !== 1 ? "s" : ""}
                </p>
              </div>

              <button
                onClick={() => setCartOpen(false)}
                className="p-2 text-olive-deep"
                aria-label="Close cart"
              >
                <X size={24} />
              </button>

            </div>

            <div className="p-6">

              {cart.length === 0 ? (
                <div className="py-16 text-center">

                  <ShoppingCart
                    size={40}
                    className="mx-auto text-olive-mid"
                  />

                  <p className="mt-5 text-ink/70">
                    Your cart is empty.
                  </p>

                </div>
              ) : (
                <>
                  <div className="space-y-5">

                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="border-b border-[var(--line)] pb-5"
                      >

                        <div className="flex justify-between gap-4">

                          <div>
                            <h3 className="font-medium text-olive-deep">
                              {item.name}
                            </h3>

                            <p className="mt-1 text-sm text-ink/60">
                              {currency}{" "}
                              {getPrice(item).toFixed(2)} each
                            </p>
                          </div>

                          <button
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            className="text-red-700"
                          >
                            <Trash2 size={18} />
                          </button>

                        </div>

                        <div className="mt-4 flex items-center justify-between">

                          <div className="flex items-center border border-[var(--line)]">

                            <button
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                              className="p-2"
                            >
                              <Minus size={16} />
                            </button>

                            <span className="px-4">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                              className="p-2"
                            >
                              <Plus size={16} />
                            </button>

                          </div>

                          <strong className="text-olive-deep">
                            {currency}{" "}
                            {(
                              getPrice(item) *
                              item.quantity
                            ).toFixed(2)}
                          </strong>

                        </div>

                      </div>
                    ))}

                  </div>

                  <div className="mt-8 border-t border-[var(--line)] pt-6">

                    <div className="flex justify-between text-xl font-semibold text-olive-deep">

                      <span>Total</span>

                      <span>
                        {currency} {cartTotal.toFixed(2)}
                      </span>

                    </div>

                    <button
                      onClick={() => {
                        window.location.href =
                          "/checkout";
                      }}
                      className="mt-6 w-full bg-olive-deep text-white py-4 font-medium hover:opacity-90 transition"
                    >
                      Continue to Checkout
                    </button>

                  </div>
                </>
              )}

            </div>

          </aside>
        </div>
      )}
    </>
  );
}