"use client";

import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";

const managers = [
  {
    region: "Ghana",
    name: "Seth Kwame Twum",
    title: "Director — Ghana",
    image: "/images/manager-ghana.jpg",
    // Replace these two with the actual contact details
    phone: "+233 59 953 8678",
    whatsapp: "233599538678",
    email: "ghana@libertyhealth.com",
    location: "Accra, Ghana",
    address: "18 Junction, Spintex Road, opposite DSTV, Accra, Ghana",
  },
  {
    region: "UK",
    name: "UK Director",
    title: "Director — United Kingdom",
    image: "/images/manager-uk.jpg",
    // Replace these with the actual UK contact details
    phone: "+44 XX XXXX XXXX",
    whatsapp: "44XXXXXXXXXX",
    email: "uk@libertyhealth.com",
    location: "United Kingdom",
    address: "United Kingdom",
    
  },
  {
    region: "South Africa",
    name: "Mr Kovan Pillay",
    title: "Director — South Africa",
    image: "/images/manager-sa.png",
    phone: "+27 71 115 3889",
    whatsapp: "27711153889",
    email: "sa@libertyhealth.com",
    location: "South Africa",
    address: "Plot 127 Rietfontein. Hartbeespoort. North West Province.",
  }
];

export function Managers() {
  return (
    <section
      id="management"
      className="bg-limestone border-t border-[var(--line)]"
    >
      <div className="container-x py-20 md:py-28">

        {/* SECTION INTRO */}
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium">
            Leadership & Contact
          </p>

          <h2 className="mt-3 font-display text-3xl md:text-4xl text-olive-deep">
            Speak directly with our directors
          </h2>

          <p className="mt-5 text-[17px] text-ink/75 leading-relaxed">
            Our directors are available to assist with product enquiries,
            olive oil orders, distribution opportunities and general
            enquiries.
          </p>
        </div>

        {/* DIRECTORS */}
        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {managers.map((manager) => (
            <article
              key={manager.region}
              className="bg-paper border border-[var(--line)] overflow-hidden"
            >

              {/* PHOTO */}
              <div className="aspect-[4/3] overflow-hidden bg-[#eee]">
                <img
                  src={manager.image}
                  alt={`${manager.name}, ${manager.title}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* INFORMATION */}
              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                  {manager.region}
                </p>

                <h3 className="mt-2 font-display text-2xl md:text-3xl text-olive-deep">
                  {manager.name}
                </h3>

                <p className="mt-1 text-sm text-ink/65">
                  {manager.title}
                </p>

                <div className="mt-7 space-y-4">

                  {/* LOCATION */}
                  <div className="flex items-start gap-3 text-sm text-ink/75">
                    <MapPin
                      size={19}
                      className="text-olive-mid shrink-0 mt-0.5"
                    />

                    <div>
                      <p className="font-medium text-olive-deep">
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
                    className="flex items-center gap-3 text-sm text-ink/75 hover:text-olive-deep transition"
                  >
                    <Phone
                      size={18}
                      className="text-olive-mid shrink-0"
                    />

                    {manager.phone}
                  </a>

                  {/* EMAIL */}
                  <a
                    href={`mailto:${manager.email}`}
                    className="flex items-center gap-3 text-sm text-ink/75 hover:text-olive-deep transition"
                  >
                    <Mail
                      size={18}
                      className="text-olive-mid shrink-0"
                    />

                    {manager.email}
                  </a>

                </div>

                {/* CONTACT BUTTONS */}
                <div className="mt-8 grid grid-cols-2 gap-3">

                  {/* CALL DIRECTOR */}
                  <a
                    href={`tel:${manager.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 border border-olive-deep text-olive-deep px-4 py-3 text-sm font-medium"
                  >
                    <Phone size={17} />
                    Call Director
                  </a>

                  {/* WHATSAPP */}
                  <a
                    href={`https://wa.me/${manager.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 text-sm font-medium hover:opacity-90 transition"
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
  );
}