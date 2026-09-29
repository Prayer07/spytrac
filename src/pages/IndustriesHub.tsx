import Breadcrumbs from '../components/ui/Breadcrumbs'
import Card from '../components/ui/Card'
import { industries } from '../data/siteData'

export default function IndustriesHub() {
  return (
    <>
      <section className="container-page pt-10">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Industries' }]} />
        <span className="eyebrow">Industries</span>
        <h1 className="mt-2 max-w-2xl font-serif text-4xl font-semibold text-ink">
          The same platform, tuned to how you operate.
        </h1>
        <p className="mt-4 max-w-xl text-[15px] font-sans leading-relaxed text-ink-soft/75">
          Each industry page maps your operational pain points to the exact modules and hardware
          that address them.
        </p>
      </section>

      <section className="container-page py-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <Card key={ind.slug} to={`/industries/${ind.slug}`} title={ind.name} summary={ind.summary} />
          ))}
        </div>
      </section>
    </>
  )
}