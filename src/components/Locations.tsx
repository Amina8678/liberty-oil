import { MapPin } from "lucide-react";

export function Locations() {
  return (
    <section id="locations" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest">
            Our Locations
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Find a Liberty Health location near you
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <MapPin className="mb-4 h-6 w-6" />

            <h3 className="text-xl font-semibold">
              Liberty Health
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Visit our healthcare facility for quality and compassionate
              healthcare services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
