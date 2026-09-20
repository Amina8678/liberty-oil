export function CEOProfile() {
  return (
    <section id="ceo" className="bg-white py-24 md:py-32">
      <div className="container-x">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
            Leadership &amp; Company
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight text-[#071c27] md:text-5xl">
            Leadership with clarity and accountability.
          </h2>

          <div className="mt-8 max-w-3xl border-l-2 border-[#09b1ec] pl-6">
            <p className="text-xl leading-9 text-[#083b52] md:text-2xl">
              Mr Hafiz Choudhury leads Liberty Health Ltd&apos;s commercial direction,
              industry development and responsible growth across the United
              Kingdom, Africa and its Turkish production connections.
            </p>
          </div>

          <p className="mt-7 max-w-3xl text-base leading-8 text-[#083b52]/70 md:text-lg">
            His role is to set clear priorities, support strong execution and
            ensure the company continues to serve its region with trust.
          </p>
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="overflow-hidden rounded-[22px] bg-[#eef9fd]">
            <div className="flex min-h-[360px] items-center justify-center bg-[#dff3fb] p-8">
              <img
                src="/images/CEO.PNG"
                alt="Chief Executive Officer of Liberty Health Ltd"
                className="h-full min-h-[360px] w-full object-contain"
              />
            </div>

            <div className="p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
                Leadership
              </p>

              <h3 className="mt-4 font-display text-3xl font-semibold text-[#071c27]">
              Mr Hafiz Choudhury
              </h3>

              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#083b52]">
                Chief Executive Officer
              </p>

              <p className="mt-6 text-base leading-8 text-[#083b52]/75">
                Hafiz brings a practical, future-focused approach to building
                Liberty Health&apos;s presence in international food markets.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
              A Statement from the CEO
            </p>

            <blockquote className="mt-6 border-l-2 border-[#09b1ec] pl-6 font-display text-3xl leading-tight text-[#083b52] md:text-4xl">
              “Our ambition is to build a dependable company that creates
              meaningful Impact in every marketplace we serve.”
            </blockquote>

            <p className="mt-8 text-lg leading-8 text-[#083b52]/75">
              Our Turkish Manufacturing Partner is a 100% Turkish-owned, farmer-led enterprise led by a woman entrepreneur, 
              sourcing olives from its own groves in Turkey’s Aegean region.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#083b52]/75">
              We are committed to responsible business practices and continuous
              improvement, creating opportunities that benefit the communities
              and region connected to our work.
            </p>

            <div className="mt-10 border-t border-[#dff3fb] pt-6">
              <p className="font-display text-xl font-semibold text-[#071c27]">
                Hafiz Choudhury
              </p>

              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-[#083b52]/65">
                Chief Executive Officer, Liberty Health Ltd
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
