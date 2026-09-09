import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-paper py-20 md:py-28">
      <div className="container-x">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative">
            <div className="image-premium relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/event-olive-oil-table.jpeg"
                alt="Event olive oil bottles with olive branches"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-5 shadow-lg md:-right-7 md:p-6">
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-primary-blue">
                Event
              </p>

              <p className="font-display text-xl font-semibold text-dark">
                Extra Virgin
                <br />
                Olive Oil
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-label">
              About Liberty Health
            </span>

            <h2 className="mt-5 max-w-xl text-4xl md:text-5xl">
              Bringing the goodness of the olive grove closer to you.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-muted">
              <p>
                Liberty Health Ltd is committed to bringing quality
                food products to consumers and businesses while
                creating trusted connections between producers and
                markets.
              </p>

              <p>
                Our Event Extra Virgin Olive Oil is produced with
                care, focusing on the natural qualities of the olive
                and preserving its distinctive taste and character.
              </p>

              <p>
                From carefully selected olives to the finished bottle,
                we believe quality should be visible, consistent and
                enjoyable in every drop.
              </p>
            </div>

            {/* Features */}
            <div className="mt-9 grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl bg-limestone p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-blue text-white">
                  ✓
                </div>

                <h3 className="text-xl">
                  Carefully Selected
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Selected olives form the foundation of our premium
                  olive oil.
                </p>
              </div>

              <div className="rounded-2xl bg-limestone p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-blue text-white">
                  ✓
                </div>

                <h3 className="text-xl">
                  Cold Pressed
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Produced with care to preserve the natural qualities
                  of the oil.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}