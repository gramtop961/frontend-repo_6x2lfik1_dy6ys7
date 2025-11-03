import { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

export default function AuthPanel({ open, onClose }) {
  const [mode, setMode] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend calls yet; just a friendly confirmation message
    if (mode === 'signup' && (!name || !email || !password)) {
      setMessage('Please complete all fields to create an account.');
      return;
    }
    if (mode === 'signin' && (!email || !password)) {
      setMessage('Enter your email and password to continue.');
      return;
    }
    setMessage(mode === 'signup' ? 'Account created successfully. You are now signed in.' : 'Signed in successfully.');
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/30 px-4">
      <div className="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-neutral-900">{mode === 'signin' ? 'Sign in' : 'Create account'}</h3>
          <button onClick={onClose} className="rounded-md p-1 text-neutral-500 hover:bg-neutral-100" aria-label="Close">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <div className="mt-4 flex gap-2 rounded-lg bg-neutral-100 p-1">
          <button onClick={() => { setMode('signin'); setMessage(''); }} className={`flex-1 rounded-md px-3 py-2 text-sm font-medium ${mode === 'signin' ? 'bg-white shadow-sm' : 'text-neutral-600'}`}>Sign in</button>
          <button onClick={() => { setMode('signup'); setMessage(''); }} className={`flex-1 rounded-md px-3 py-2 text-sm font-medium ${mode === 'signup' ? 'bg-white shadow-sm' : 'text-neutral-600'}`}>Create account</button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          {mode === 'signup' && (
            <div className="relative">
              <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"><User className="h-4 w-4" /></div>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md border border-neutral-300 py-2 pl-9 pr-3 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900" placeholder="Full name" />
            </div>
          )}
          <div className="relative">
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"><Mail className="h-4 w-4" /></div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border border-neutral-300 py-2 pl-9 pr-3 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900" placeholder="Email address" />
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"><Lock className="h-4 w-4" /></div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-md border border-neutral-300 py-2 pl-9 pr-3 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900" placeholder="Password" />
          </div>

          {message && <p className="text-sm text-green-700">{message}</p>}

          <button type="submit" className="w-full rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800">
            {mode === 'signin' ? 'Sign in' : 'Create account'}
          </button>
        </form>

        <p className="mt-3 text-center text-xs text-neutral-500">
          By continuing, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
