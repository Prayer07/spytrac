import Breadcrumbs from '../components/ui/Breadcrumbs'
import Card from '../components/ui/Card'
import CTASection from '../components/ui/CTASection'
import { solutions } from '../data/siteData'

export default function SolutionsHub() {
  return (
    <>
      <section className="container-page pt-10">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Solutions' }]} />
        <span className="eyebrow">Solutions</span>
        <h1 className="mt-2 max-w-2xl font-serif text-4xl font-semibold text-ink">
          Nine problems. One platform to solve them.
        </h1>
        <p className="mt-4 max-w-xl text-[15px] font-sans leading-relaxed text-ink-soft/75">
          Every solution below connects to the platform capability that powers it, the hardware
          that feeds it data, and the pricing plan built for it. Start with the need you have today.
        </p>
      </section>

      <section className="container-page py-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <Card key={s.slug} to={`/solutions/${s.slug}`} title={s.name} summary={s.summary} />
          ))}
        </div>
      </section>

      <CTASection
        heading="Not sure which solution fits?"
        body="Tell us about your fleet and we'll point you to the right modules and hardware."
        primaryLabel="Talk to Sales"
        primaryTo="https://wa.me/2349037838141"
        secondaryLabel="Explore Platform"
        secondaryTo="/platform"
      />
    </>
  )
}