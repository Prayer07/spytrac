import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Button from '../components/ui/Button'
import { pricingPlans } from '../data/siteData'

const allFeatures = Array.from(new Set(pricingPlans.flatMap((p) => p.features)))

export default function Pricing() {
  return (
    <>
      <section className="container-page pt-10">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Pricing' }]} />
        <span className="eyebrow">Pricing</span>
        <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-ink">
          Plan names stay flexible. What you need doesn't.
        </h1>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-soft/75">
          Every plan includes hardware compatibility guidance and installation support. Add-ons
          and modules can be layered onto any tier as your fleet grows.
        </p>
      </section>

      <section className="container-page py-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.slug}
              className={`flex flex-col rounded-2xl border p-7 ${
                plan.highlighted ? 'border-teal-600 bg-teal-700 text-white shadow-panel' : 'border-teal-900/10 bg-white'
              }`}
            >
              <h2 className={`font-display text-xl font-semibold ${plan.highlighted ? 'text-white' : 'text-ink'}`}>
                {plan.name}
              </h2>
              <p className={`mt-1 text-sm ${plan.highlighted ? 'text-teal-100' : 'text-ink-soft/70'}`}>
                {plan.positioning}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-sm ${plan.highlighted ? 'text-teal-50' : 'text-ink-soft/80'}`}
                  >
                    <svg
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.highlighted ? 'text-sky-300' : 'text-teal-600'}`}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                to={plan.cta === 'Get Started' ? '/contact' : plan.cta === 'Request Quote' ? '/contact/quote' : '/contact/demo'}
                variant="secondary"
                className={`mt-7 w-full ${
                  plan.highlighted ? '!border-transparent !bg-white !text-teal-700 hover:!bg-teal-50' : ''
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-16">
        <h2 className="font-display text-2xl font-semibold text-ink">Feature comparison</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-teal-900/10">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-teal-900/10 bg-teal-50/60">
                <th className="px-5 py-3 font-medium text-ink-soft/70">Feature</th>
                {pricingPlans.map((p) => (
                  <th key={p.slug} className="px-5 py-3 text-center font-medium text-ink-soft/70">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature) => (
                <tr key={feature} className="border-b border-teal-900/5 last:border-0">
                  <td className="px-5 py-3 text-ink-soft/80">{feature}</td>
                  {pricingPlans.map((p) => (
                    <td key={p.slug} className="px-5 py-3 text-center">
                      {p.features.includes(feature) ? (
                        <span className="text-teal-600">✓</span>
                      ) : (
                        <span className="text-ink-soft/25">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-soft/60">
          Hardware and installation are quoted separately based on fleet size and device type.{' '}
          <Link to="/hardware" className="text-teal-700 hover:text-teal-800">
            View hardware options →
          </Link>
        </p>
      </section>
    </>
  )
}