import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Basic Install',
    price: 199,
    description: 'Small jobs and quick fixes',
    features: [
      'Replace outlets/switches (up to 5)',
      'Light fixture install (standard)',
      'Basic troubleshooting',
      '1-year workmanship warranty',
    ],
    cta: 'Book Basic',
    popular: false,
  },
  {
    name: 'Pro Upgrade',
    price: 799,
    description: 'Upgrades and new circuits',
    features: [
      'Dedicated circuit install',
      'EV charger or appliance hookup',
      'Subpanel additions',
      '2-year workmanship warranty',
    ],
    cta: 'Book Pro',
    popular: true,
  },
  {
    name: 'Full Service',
    price: 2199,
    description: 'Major projects and rewires',
    features: [
      'Full or partial home rewire',
      'Service/panel upgrade',
      'Lighting design and install',
      '3-year workmanship warranty',
    ],
    cta: 'Book Full Service',
    popular: false,
  },
];

export default function Pricing({ onAuthClick }) {
  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Transparent pricing</h2>
          <p className="mt-3 text-neutral-600">Upfront packages for common jobs. Final quotes confirmed after a quick virtual walkthrough.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-xl border ${tier.popular ? 'border-neutral-900' : 'border-neutral-200'} bg-white p-6 shadow-sm`}>
              {tier.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">Most Popular</span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-neutral-900">{tier.name}</h3>
                <p className="text-2xl font-bold text-neutral-900">${tier.price}<span className="text-sm font-medium text-neutral-500">/job</span></p>
              </div>
              <p className="mt-2 text-sm text-neutral-600">{tier.description}</p>
              <ul className="mt-4 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-neutral-700">
                    <Check className="mt-[2px] h-4 w-4 text-green-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button onClick={onAuthClick} className={`mt-6 w-full rounded-md px-4 py-2 text-sm font-semibold ${tier.popular ? 'bg-neutral-900 text-white hover:bg-neutral-800' : 'border border-neutral-300 text-neutral-800 hover:bg-neutral-50'}`}>
                {tier.cta}
              </button>
              <p className="mt-2 text-xs text-neutral-500">Sign in or create an account to book.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
