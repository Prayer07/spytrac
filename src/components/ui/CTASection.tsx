import Button from './Button'

interface CTASectionProps {
  heading: string
  body?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export default function CTASection({
  heading,
  body,
  primaryLabel = 'Request a Demo',
  primaryTo = '/contact/demo',
  secondaryLabel = 'Talk to Sales',
  secondaryTo = '/contact/sales',
}: CTASectionProps) {
  return (
    <section className="border-t border-teal-900/10 bg-teal-950">
      <div className="container-page flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-lg">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{heading}</h2>
          {body && <p className="mt-3 text-[15px] leading-relaxed text-teal-100/80">{body}</p>}
        </div>
        <div className="flex flex-shrink-0 flex-wrap gap-3">
          <Button href={primaryTo} variant="primary" className="!bg-sky-400 !text-teal-950 hover:!bg-sky-300">
            {primaryLabel}
          </Button>
          <Button to={secondaryTo} variant="secondary" className="!border-teal-700 !bg-transparent !text-white hover:!bg-teal-900">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}