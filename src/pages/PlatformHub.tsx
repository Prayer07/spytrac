import Breadcrumbs from '../components/ui/Breadcrumbs'
import Card from '../components/ui/Card'
import CTASection from '../components/ui/CTASection'
import Button from '../components/ui/Button'
import { platformModules } from '../data/siteData'

export default function PlatformHub() {
  return (
    <>
      <section className="container-page pt-10">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Platform' }]} />
        <span className="eyebrow">Platform</span>
        <h1 className="mt-2 max-w-2xl font-serif text-4xl font-semibold text-ink">
          Thirteen modules. One dashboard.
        </h1>
        <p className="mt-4 max-w-xl text-[15px] font-sans leading-relaxed text-ink-soft/75">
          Every module below reads from a hardware data source and feeds directly into the
          solution it supports — nothing lives in isolation.
        </p>
        <div className="mt-6 flex gap-3">
          <Button href="https://spytrac-tel.com/jsp/spytrac_login.jsp" variant="primary">
            See the Platform Live
          </Button>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platformModules.map((m) => (
            <Card key={m.slug} to={`/platform/${m.slug}`} title={m.name} summary={m.summary} />
          ))}
        </div>
      </section>

      <CTASection
        heading="See the platform on your own fleet."
        primaryLabel="Request a Demo"
        primaryTo="https://wa.me/2349037838141?text=Can%20I%20get%20a%20demo%20on%20Spytrac"
        secondaryLabel="View Pricing"
        secondaryTo="/pricing"
      />
    </>
  )
}