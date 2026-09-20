import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

type Tab = 'customer' | 'partner'

export default function Login() {
  const [tab, setTab] = useState<Tab>('customer')

  return (
    <section className="container-page flex min-h-[70vh] items-center justify-center py-16">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#14655B" />
              <circle cx="16" cy="15" r="5.5" stroke="#7CD4FF" strokeWidth="2" />
              <path d="M16 22V27" stroke="#7CD4FF" strokeWidth="2" strokeLinecap="round" />
              <circle cx="16" cy="15" r="1.75" fill="#7CD4FF" />
            </svg>
            <span className="font-display text-lg font-semibold text-ink">Spytrac</span>
          </Link>
        </div>

        <div className="mb-6 flex rounded-full border border-teal-900/10 bg-teal-50/50 p-1">
          <button
            className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
              tab === 'customer' ? 'bg-white text-teal-700 shadow-sm' : 'text-ink-soft/60'
            }`}
            onClick={() => setTab('customer')}
          >
            Customer Login
          </button>
          <button
            className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
              tab === 'partner' ? 'bg-white text-teal-700 shadow-sm' : 'text-ink-soft/60'
            }`}
            onClick={() => setTab('partner')}
          >
            Reseller / Partner
          </button>
        </div>

        <form className="space-y-4 rounded-2xl border border-teal-900/10 bg-white p-6 shadow-panel" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink-soft/80" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-lg border border-teal-900/15 px-3.5 py-2.5 text-[15px] outline-none focus:border-teal-500"
            />
          </div>
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label className="block text-sm font-medium text-ink-soft/80" htmlFor="password">
                Password
              </label>
              <span className="cursor-pointer text-xs text-teal-700 hover:text-teal-800">Forgot password?</span>
            </div>
            <input
              id="password"
              type="password"
              required
              className="w-full rounded-lg border border-teal-900/15 px-3.5 py-2.5 text-[15px] outline-none focus:border-teal-500"
            />
          </div>
          <Button variant="primary" className="w-full">
            {tab === 'customer' ? 'Log In' : 'Partner Log In'}
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-ink-soft/70">
          New to Spytrac?{' '}
          <Link to="/contact/demo" className="font-medium text-teal-700 hover:text-teal-800">
            Create an account
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-ink-soft/60">
          Need help?{' '}
          <Link to="/contact/support" className="text-teal-700 hover:text-teal-800">
            Support / Account help
          </Link>
        </p>
      </div>
    </section>
  )
}
