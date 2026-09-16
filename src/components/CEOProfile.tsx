export function CEOProfile() {
  return (
    <section id="ceo" className="bg-white py-24 md:py-32">
      <div className="container-x">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
            Leadership &amp; Company
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight text-[#071c27] md:text-5xl">
            Leadership That Drives Purpose, Growth and Excellence
          </h2>

          <div className="mt-8 max-w-3xl border-l-2 border-[#09b1ec] pl-6">
            <p className="text-xl leading-9 text-[#083b52] md:text-2xl">
              Meet our Chief Executive Officer, a visionary leader committed
              to driving excellence, innovation, and sustainable growth at
              Liberty Health Ltd. With a strong focus on strategic leadership,
              operational efficiency, and client satisfaction, our CEO
              continues to guide the organization toward achieving its mission
              and delivering meaningful value to the communities and markets we
              serve.
            </p>
          </div>

          <p className="mt-7 max-w-3xl text-base leading-8 text-[#083b52]/70 md:text-lg">
            Through dedication, integrity, and a forward-thinking approach,
            our CEO inspires our team to uphold the highest standards of
            professionalism, strengthen trusted partnerships, and create a
            lasting impact across the food and agricultural value chain.
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
               Hafiz Choudhury
              </h3>

              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#083b52]">
                Chief Executive Officer
              </p>

              <p className="mt-6 text-base leading-8 text-[#083b52]/75">
                As Chief Executive Officer of Liberty Health Ltd, Mr. Christian
                Osei provides leadership and direction for the company’s
                development, business relationships, and long-term growth. His
                approach is centred on integrity, quality, innovation, and
                building a company that creates lasting value.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
              A Statement from the CEO
            </p>

            <blockquote className="mt-6 border-l-2 border-[#09b1ec] pl-6 font-display text-3xl leading-tight text-[#083b52] md:text-4xl">
              “Our ambition is to build a company recognised for quality,
              trust, responsible growth, and meaningful relationships across
              every market we serve.”
            </blockquote>

            <p className="mt-8 text-lg leading-8 text-[#083b52]/75">
              At Liberty Health Ltd, our focus is to create a strong and
              dependable business built on quality products, professional
              service, and trusted partnerships. We believe sustainable growth
              comes from understanding our customers, supporting our partners,
              and maintaining high standards throughout our operations.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#083b52]/75">
              Our focus is not limited to commercial success. We are committed
              to responsible business practices, continuous improvement, and
              creating opportunities that benefit the communities and markets
              connected to our work.
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