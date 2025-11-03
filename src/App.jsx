import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import AuthPanel from './components/AuthPanel';

function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar onAuthClick={() => setAuthOpen(true)} />
      <main>
        <Hero />
        <Pricing onAuthClick={() => setAuthOpen(true)} />

        <section id="contact" className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold">Need an electrician?</h3>
                <p className="mt-2 text-neutral-600">Tell us about your project and we’ll get back within one business day.</p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                  <li>Licensed & insured • Permit-ready</li>
                  <li>Upfront pricing • No surprises</li>
                  <li>3-year workmanship warranty</li>
                </ul>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input className="rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-900" placeholder="Full name" />
                  <input className="rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-900" placeholder="Phone" />
                  <input className="sm:col-span-2 rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-900" placeholder="Email" />
                  <textarea rows={3} className="sm:col-span-2 rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-900" placeholder="Briefly describe your project" />
                </div>
                <div className="mt-4 flex gap-3">
                  <button onClick={() => setAuthOpen(true)} className="flex-1 rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800">Send & create account</button>
                  <button onClick={() => setAuthOpen(true)} className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50">Sign in</button>
                </div>
                <p className="mt-2 text-xs text-neutral-500">We’ll create a free account to track your quotes and bookings.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-neutral-600 md:flex-row">
          <p>© {new Date().getFullYear()} BrightSpark Electrical. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#pricing" className="hover:text-neutral-900">Pricing</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </div>
        </div>
      </footer>

      <AuthPanel open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}

export default App;
