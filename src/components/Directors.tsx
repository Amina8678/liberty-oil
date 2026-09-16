"use client";

import {
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";

const directors = [
  {
    number: "01",
    name: "Director",
    position: "Director — Liberty Health Ltd",
    bio: "Provides strategic leadership for Liberty Health Ltd, guiding the company's growth, commercial direction and long-term development. The role focuses on building a strong and sustainable business founded on quality, trust and lasting relationships.",
    responsibilities: [
      "Strategic direction",
      "Business development",
      "Commercial partnerships",
      "Corporate growth",
    ],
  },
  {
    number: "02",
    name: "Director",
    position: "Director — Liberty Health Ltd",
    bio: "Supports the company's continued development across its markets and operations, with a focus on strengthening relationships with customers, suppliers and business partners.",
    responsibilities: [
      "Operations",
      "Market development",
      "Customer relationships",
      "Partnership development",
    ],
  },
  {
    number: "03",
    name: "Director",
    position: "Director — Liberty Health Ltd",
    bio: "Contributes to the company's strategic growth by strengthening partnerships, supporting market expansion and helping maintain effective relationships across Liberty Health's international operations.",
    responsibilities: [
      "International growth",
      "Strategic partnerships",
      "Market expansion",
      "Business development",
    ],
  },
];

const managers = [
    {
    region: "United Kingdom",
    name: "Hafiz Choudhury",
    title: "Director — United Kingdom",
    image: "/images/CEO.PNG",
    phone: "+44 7837 867759",
    whatsapp: "441234567890",
    address: "United Kingdom",
  },
  // Ghana Director
  {
    //seth picture
    region: "Ghana",
    name: "Seth Kwame Twum",
    title: "Director — Ghana",
   // image: "/images/manager-ghana.jpg",
    phone: "+233 59 247 1523",
    whatsapp: "+233 59 247 1523",
    address:
      "18 Junction, Spintex Road, opposite DSTV, Accra, Ghana",
  },

  {
    region: "South Africa",
    name: "Mr Kovan Pillay",
    title: "Director — South Africa",
    //image: "/images/manager-sa.png",
    phone: "+27 71 115 3889",
    whatsapp: "27711153889",
    address:
      "Plot 127 Rietfontein, Hartbeespoort, North West Province.",
  },
];

const leadershipValues = [
  {
    number: "01",
    title: "Vision",
    text: "Providing clear direction for the company's long-term development.",
  },
  {
    number: "02",
    title: "Integrity",
    text: "Building relationships through reliability, transparency and responsible decisions.",
  },
  {
    number: "03",
    title: "Partnership",
    text: "Creating lasting relationships with suppliers, customers and commercial partners.",
  },
  {
    number: "04",
    title: "Growth",
    text: "Developing new markets, products and opportunities with a long-term perspective.",
  },
];

export function Directors() {
  return (
    <>
      {/* =========================================================
          COMPANY DIRECTORS
      ========================================================= */}
      <section
        id="directors"
        className="bg-[#eef9fd] py-24 md:py-32"
      >
        <div className="container-x">
          {/* SECTION INTRODUCTION */}
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#09b1ec]">
                Leadership
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-[#071c27] md:text-5xl">
                The people
                <br />
                behind Liberty Health.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-[#083b52] md:text-2xl">
                Liberty Health is built around experienced leadership,
                entrepreneurial thinking and a clear commitment to creating
                long-term value.
              </p>

              <p className="mt-6 text-base leading-8 text-[#083b52]/65">
                Our directors provide the strategic direction that connects
                the company`s people, operations, suppliers, customers and
                markets. Their role extends beyond individual products,
                focusing on building a resilient company with strong
                commercial relationships and a clear international outlook.
              </p>

              <p className="mt-5 text-base leading-8 text-[#083b52]/65">
                Through leadership, collaboration and responsible decision
                making, Liberty Health continues to develop its presence
                across the United Kingdom, Ghana, West Africa and the wider
                international market.
              </p>
            </div>
          </div>

          {/* THREE MAIN DIRECTORS */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {directors.map((director) => (
              <article
                key={director.number}
                className="overflow-hidden bg-white"
              >
                {/* DIRECTOR HEADER */}
                <div className="relative flex min-h-[220px] items-end bg-[#083b52] p-8 md:p-10">
                  <div className="absolute right-8 top-8 md:right-10 md:top-10">
                    <span className="font-display text-7xl font-semibold text-white/10">
                      {director.number}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-5 h-1 w-12 bg-[#09b1ec]" />

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#65c2f5]">
                      {director.position}
                    </p>

                    <h3 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
                      {director.name}
                    </h3>
                  </div>
                </div>

                {/* DIRECTOR INFORMATION */}
                <div className="p-8 md:p-10">
                  <p className="text-sm leading-7 text-[#083b52]/65">
                    {director.bio}
                  </p>

                  <div className="mt-8 border-t border-[#083b52]/10 pt-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#083b52]/40">
                      Areas of Leadership
                    </p>

                    <div className="mt-4 grid grid-cols-1 gap-3">
                      {director.responsibilities.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#09b1ec]" />

                          <span className="text-sm text-[#083b52]/70">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* LEADERSHIP STATEMENT */}
          <div className="mt-16 grid gap-0 lg:grid-cols-2">
            <div className="bg-[#083b52] p-10 md:p-14">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#65c2f5]">
                Leadership Philosophy
              </p>

              <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                Building a business
                <br />
                for the long term.
              </h3>
            </div>

            <div className="bg-white p-10 md:p-14">
              <p className="text-base leading-8 text-[#083b52]/65">
                Liberty Health`s leadership is focused on creating
                sustainable commercial relationships rather than short-term
                transactions. This means developing trusted partnerships with
                producers, suppliers, distributors, retailers and customers
                while maintaining a strong focus on quality and reliability.
              </p>

              <p className="mt-5 text-base leading-8 text-[#083b52]/65">
                The company`s leadership also supports its international
                ambitions, bringing together its UK presence, West African
                market relationships and production connections in Turkey.
              </p>
            </div>
          </div>

          {/* LEADERSHIP VALUES */}
          <div className="mt-16 grid gap-px bg-[#083b52]/10 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipValues.map((value) => (
              <div
                key={value.number}
                className="bg-white p-7"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#09b1ec]">
                  {value.number}
                </p>

                <h4 className="mt-4 font-display text-xl font-semibold text-[#071c27]">
                  {value.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#083b52]/60">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          REGIONAL DIRECTORS AND CONTACT
      ========================================================= */}
      <section
        id="management"
        className="border-t border-[#083b52]/10 bg-white"
      >
        <div className="container-x py-20 md:py-28">
          {/* SECTION INTRODUCTION */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#09b1ec]">
              Regional Leadership
            </p>

            <h2 className="mt-3 font-display text-3xl text-[#083b52] md:text-4xl">
              Speak directly with our directors
            </h2>

            <p className="mt-5 text-[17px] leading-relaxed text-[#083b52]/75">
              Our regional directors are available to assist with product
              enquiries, distribution opportunities, customer relationships
              and general business enquiries.
            </p>
          </div>

          {/* THREE REGIONAL DIRECTORS */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {managers.map((manager) => (
              <article
                key={manager.region}
                className="overflow-hidden border border-[#083b52]/10 bg-[#eef9fd]"
              >
                {/* PHOTO */}
                <div className="aspect-[4/3] overflow-hidden bg-[#dff3fb]">
                  <img
                    src={manager.image}
                    alt={`${manager.name}, ${manager.title}`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                {/* INFORMATION */}
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#09b1ec]">
                    {manager.region}
                  </p>

                  <h3 className="mt-2 font-display text-2xl text-[#083b52] md:text-3xl">
                    {manager.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#083b52]/65">
                    {manager.title}
                  </p>

                  <div className="mt-7 space-y-4">
                    {/* LOCATION */}
                    <div className="flex items-start gap-3 text-sm text-[#083b52]/75">
                      <MapPin
                        size={19}
                        className="mt-0.5 shrink-0 text-[#09b1ec]"
                      />

                      <div>
                        <p className="font-medium text-[#083b52]">
                          Office
                        </p>

                        <p className="mt-1 leading-relaxed">
                          {manager.address}
                        </p>
                      </div>
                    </div>

                    {/* PHONE */}
                    <a
                      href={`tel:${manager.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-sm text-[#083b52]/75 transition-colors hover:text-[#09b1ec]"
                    >
                      <Phone
                        size={18}
                        className="shrink-0 text-[#09b1ec]"
                      />

                      {manager.phone}
                    </a>

                  </div>

                  {/* CONTACT BUTTONS */}
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {/* CALL DIRECTOR — NO HOVER EFFECT */}
                    <a
                      href={`tel:${manager.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center justify-center gap-2 border border-[#083b52] px-4 py-3 text-sm font-medium text-[#083b52]"
                    >
                      <Phone size={17} />
                      Call Director
                    </a>

                    {/* WHATSAPP */}
                    <a
                      href={`https://wa.me/${manager.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                    >
                      <MessageCircle size={17} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}