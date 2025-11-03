import { Shield, Clock, Wrench, Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
            Safe, certified electrical installations for homes and businesses
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
            From panel upgrades and EV charger installs to full rewires and lighting design — we deliver reliable work with clear pricing and fast turnaround.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#pricing" className="inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800">View pricing</a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50">Book a free quote</a>
          </div>

          <div id="services" className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Feature icon={<Wrench className="h-5 w-5" />} title="New installations" desc="Panels, circuits, outlets, lighting, smart controls" />
            <Feature icon={<Shield className="h-5 w-5" />} title="Code compliance" desc="Licensed, insured, and permit-ready work" />
            <Feature icon={<Clock className="h-5 w-5" />} title="Fast scheduling" desc="Most jobs completed in 24–72 hours" />
            <Feature icon={<Check className="h-5 w-5" />} title="3-year warranty" desc="Quality backed by hassle-free service" />
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#fff7e6,transparent_40%),radial-gradient(circle_at_80%_30%,#e6fff6,transparent_35%)]">
              <div className="rounded-lg border border-amber-300 bg-amber-50/70 p-4 text-center">
                <p className="text-sm font-medium text-amber-800">Licensed Electricians</p>
                <p className="mt-1 text-xs text-amber-700">Residential • Commercial • Industrial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4">
      <div className="mt-1 rounded-md bg-neutral-900 p-2 text-white">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-neutral-900">{title}</p>
        <p className="text-sm text-neutral-600">{desc}</p>
      </div>
    </div>
  );
}
