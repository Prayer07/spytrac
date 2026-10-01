import Button from '../components/ui/Button'
import { pricingPlans } from '../data/siteData'

const formatNaira = (amount: number) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount)

export default function Pricing() {
  return (
    <>
      <section className="container-page pt-10">

        <span className="eyebrow">Pricing</span>

        <h1 className="mt-2 max-w-3xl font-serif text-4xl font-semibold text-ink">
          Vehicle tracking plans built for every fleet.
        </h1>

        <p className="mt-4 max-w-2xl text-[15px] font-sans leading-relaxed text-ink-soft/75">
          Choose the Spytrac package that fits your vehicle tracking,
          monitoring, fleet management and security requirements.
        </p>
      </section>

      <section className="container-page py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.slug}
              className={`flex flex-col rounded-2xl border p-7 ${
                plan.highlighted
                  ? 'border-teal-600 bg-teal-700 text-white shadow-panel'
                  : 'border-teal-900/10 bg-white'
              }`}
            >
              <div>
                <h2
                  className={`font-serif text-xl font-semibold ${
                    plan.highlighted ? 'text-white' : 'text-ink'
                  }`}
                >
                  {plan.name}
                </h2>

                <p
                  className={`mt-1 font-sans text-sm ${
                    plan.highlighted
                      ? 'text-teal-100'
                      : 'text-ink-soft/70'
                  }`}
                >
                  {plan.positioning}
                </p>
              </div>

              <div className="mt-6">
                <p
                  className={`font-sans text-xs uppercase tracking-wide ${
                    plan.highlighted
                      ? 'text-teal-100'
                      : 'text-ink-soft/60'
                  }`}
                >
                  Total
                </p>

                <p
                  className={`mt-1 font-serif text-3xl font-semibold ${
                    plan.highlighted ? 'text-white' : 'text-ink'
                  }`}
                >
                  {formatNaira(plan.price)}
                </p>

                <p
                  className={`mt-1 text-xs ${
                    plan.highlighted
                      ? 'text-teal-100'
                      : 'text-ink-soft/60'
                  }`}
                >
                  Includes 7.5% VAT
                </p>
              </div>

              <div
                className={`mt-6 space-y-2 border-y py-4 text-sm ${
                  plan.highlighted
                    ? 'border-white/15'
                    : 'border-teal-900/10'
                }`}
              >
                <div className="flex justify-between gap-4">
                  <span
                    className={
                      plan.highlighted
                        ? 'text-teal-100'
                        : 'text-ink-soft/70'
                    }
                  >
                    Tracking device
                  </span>

                  <span className="font-medium">
                    {formatNaira(plan.deviceCost)}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span
                    className={
                      plan.highlighted
                        ? 'text-teal-100'
                        : 'text-ink-soft/70'
                    }
                  >
                    Annual subscription
                  </span>

                  <span className="font-medium">
                    {formatNaira(plan.annualSubscription)}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span
                    className={
                      plan.highlighted
                        ? 'text-teal-100'
                        : 'text-ink-soft/70'
                    }
                  >
                    Installation
                  </span>

                  <span className="font-medium">
                    {formatNaira(plan.installation)}
                  </span>
                </div>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 font-sans text-sm ${
                      plan.highlighted
                        ? 'text-teal-50'
                        : 'text-ink-soft/80'
                    }`}
                  >
                    <svg
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        plan.highlighted
                          ? 'text-sky-300'
                          : 'text-teal-600'
                      }`}
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                to={
                  plan.cta === 'Get Started'
                    ? 'https://wa.me/2349037838141?text=Can%20I%20get%20a%20demo%20on%20Spytrac'
                    : plan.cta === 'Request Quote'
                      ? 'https://wa.me/2349037838141?text=I%20would%20like%20to%20request%20a%20quote%20for%20Spytrac'
                      : 'https://wa.me/2349037838141?text=Can%20I%20get%20a%20demo%20on%20Spytrac'
                }
                variant="secondary"
                className={`mt-7 w-full ${
                  plan.highlighted
                    ? '!border-transparent !bg-white !text-teal-700 hover:!bg-teal-50'
                    : ''
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}