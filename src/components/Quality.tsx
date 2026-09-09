import Image from "next/image";

export function Quality() {
  return (
    <section id="quality" className="bg-limestone py-20 md:py-28">
      <div className="container-x">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="section-label">
              Our Quality
            </span>

            <h2 className="mt-5 max-w-xl text-4xl md:text-5xl">
              Quality you can see. Taste you can trust.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              We believe premium olive oil begins with the quality of
              the olives and continues through every stage of
              production, handling and packaging.
            </p>

            <div className="mt-9 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-blue text-white">
                  01
                </div>

                <div>
                  <h3 className="text-xl">
                    Selected Olives
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-muted">
                    We focus on carefully selected olives as the
                    starting point for quality oil.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-blue text-white">
                  02
                </div>

                <div>
                  <h3 className="text-xl">
                    Cold Pressing
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-muted">
                    Cold pressing helps preserve the natural character
                    and qualities of the oil.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-blue text-white">
                  03
                </div>

                <div>
                  <h3 className="text-xl">
                    Careful Packaging
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-muted">
                    Every bottle is prepared to present our product
                    with consistency and care.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="image-premium relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/event-olive-oil-hand.jpeg"
                alt="Event Extra Virgin Olive Oil bottle in an olive grove"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}