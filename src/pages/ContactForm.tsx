import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Button from '../components/ui/Button'

const copy: Record<string, { title: string; body: string; cta: string; fleetField: boolean }> = {
  demo: {
    title: 'Request a Demo',
    body: 'Tell us about your fleet and we\u2019ll set up a live walkthrough of the platform.',
    cta: 'Request Demo',
    fleetField: true,
  },
  quote: {
    title: 'Request a Quote',
    body: 'Share your fleet size and hardware needs for a tailored quote.',
    cta: 'Request Quote',
    fleetField: true,
  },
  sales: {
    title: 'Talk to Sales',
    body: 'Have questions before you commit? Our sales team can help you scope the right plan.',
    cta: 'Send Message',
    fleetField: true,
  },
  support: {
    title: 'Technical Support',
    body: 'Describe the issue you\u2019re seeing and an account or vehicle ID, if relevant.',
    cta: 'Contact Support',
    fleetField: false,
  },
  installation: {
    title: 'Installation Request',
    body: 'Tell us your vehicle count and location, and we\u2019ll schedule certified installation.',
    cta: 'Request Installation',
    fleetField: true,
  },
  service: {
    title: 'Service Enquiry',
    body: 'Report a device issue or request a service visit for existing hardware.',
    cta: 'Send Enquiry',
    fleetField: false,
  },
}

export default function ContactForm() {
  const { type } = useParams()
  const [submitted, setSubmitted] = useState(false)
  const config = type ? copy[type] : undefined

  if (!config) return <Navigate to="/contact" replace />

  return (
    <section className="container-page py-14">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact / Demo', to: '/contact' }, { label: config.title }]} />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="eyebrow">Contact / Demo</span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">{config.title}</h1>
          <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-ink-soft/75">{config.body}</p>
          <p className="mt-6 text-sm text-ink-soft/60">
            Prefer email? Reach us at <span className="text-teal-700">support@spytrac.ng</span>
          </p>
        </div>

        <div className="rounded-2xl border border-teal-900/10 bg-white p-6 shadow-panel sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-start gap-3 py-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="font-display text-lg font-semibold text-ink">Request received</h2>
              <p className="text-[15px] text-ink-soft/75">
                A member of the Spytrac team will follow up shortly.
              </p>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <Field label="Full name" name="name" required />
                <Field label="Company" name="company" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              {config.fleetField && <Field label="Fleet size" name="fleetSize" placeholder="e.g. 25 vehicles" />}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink-soft/80" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-lg border border-teal-900/15 bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none focus:border-teal-500"
                  placeholder="Tell us a bit about what you need"
                />
              </div>
              <Button variant="primary" className="w-full">
                {config.cta}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-soft/80" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-teal-900/15 bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none focus:border-teal-500"
      />
    </div>
  )
}
