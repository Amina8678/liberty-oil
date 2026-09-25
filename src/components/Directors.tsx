"use client";

import {
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";

const managers = [
    {
    region: "United Kingdom",
    name: "Mr Hafiz Choudhury",
    title: "CEO & Director — United Kingdom",
    image: "/images/CEO.PNG",
    phone: "+44 7837 867759",
    whatsapp: "447837867759",
    address: " 101 Waddon Road, London, United Kingdom",
  },
  // Ghana Director
  {
    //seth picture
    region: "Ghana",
    name: "Mr Seth Kwame Twum",
    title: "Director — Ghana",
   image: "/images/ghana.png",
    phone: "+233 59 247 1523",
    whatsapp: "+233 59 247 1523",
    address:
      "18 Junction, Spintex Road, opposite DSTV, Accra, Ghana",
  },

  {
    region: "South Africa",
    name: "Mr Kovan Pillay",
    title: "Director — South Africa",
    image: "/images/south-africa-waving-flag-realistic-transparent-background.png",
    phone: "+27 71 115 3889",
    whatsapp: "27711153889",
    address:
      "Plot 127 Rietfontein, Hartbeespoort, North West Province.",
  },
];

export function Directors() {
  return (
    <>
      {/* =========================================================
          REGIONAL LEADERSHIP
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
                Local leadership,
                <br />
                Global reach.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-[#083b52] md:text-2xl">
                Liberty Health&apos;s regional directors provide a direct point of
                contact for the industry we serve.
              </p>

              <p className="mt-6 text-base leading-8 text-[#083b52]/65">
                They coordinate local trade activity and support Liberty
                Health&apos;s wider operations across the United Kingdom, Ghana,
                South Africa and Turkey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          REGIONAL DIRECTORS AND CONTACT
      ========================================================= */}
      <section
        id="management"
        className="bg-white"
      >
        <div className="container-x py-20 md:py-28">
          {/* SECTION INTRODUCTION */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#09b1ec]">
              Meet the team
            </p>

            <h2 className="mt-3 font-display text-3xl text-[#083b52] md:text-4xl">
              Speak directly with a regional director
            </h2>

            <p className="mt-5 text-[17px] leading-relaxed text-[#083b52]/75">
              Our regional directors are available to assist with product
              enquiries, distribution opportunities, market access and general
              business enquiries.
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
