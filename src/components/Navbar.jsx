import { useState } from 'react';
import { Zap } from 'lucide-react';

export default function Navbar({ onAuthClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 w-full border-b border-neutral-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400 text-black">
            <Zap className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">BrightSpark Electrical</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#services" className="text-sm text-neutral-600 hover:text-neutral-900">Services</a>
          <a href="#pricing" className="text-sm text-neutral-600 hover:text-neutral-900">Pricing</a>
          <a href="#contact" className="text-sm text-neutral-600 hover:text-neutral-900">Contact</a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button onClick={onAuthClick} className="rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50">Sign in</button>
          <button onClick={onAuthClick} className="rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800">Create account</button>
        </div>

        <button
          className="inline-flex items-center rounded-md border border-neutral-300 p-2 md:hidden"
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-neutral-200/60 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#services" className="text-sm text-neutral-700">Services</a>
            <a href="#pricing" className="text-sm text-neutral-700">Pricing</a>
            <a href="#contact" className="text-sm text-neutral-700">Contact</a>
            <div className="mt-2 flex gap-2">
              <button onClick={() => { setMobileOpen(false); onAuthClick(); }} className="flex-1 rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700">Sign in</button>
              <button onClick={() => { setMobileOpen(false); onAuthClick(); }} className="flex-1 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white">Create account</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
