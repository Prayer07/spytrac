import Breadcrumbs from '../components/ui/Breadcrumbs'
import Card from '../components/ui/Card'
import { resources } from '../data/siteData'

const categories = Array.from(new Set(resources.map((r) => r.category)))

export default function ResourcesHub() {
  return (
    <>
      <section className="container-page pt-10">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Resources' }]} />
        <span className="eyebrow">Resources</span>
        <h1 className="mt-2 max-w-2xl font-serif text-4xl font-semibold text-ink">
          Guides for setup, calibration and daily use.
        </h1>
        <p className="mt-4 max-w-xl text-[15px] font-sans leading-relaxed text-ink-soft/75">
          Context-aware by design — fuel articles point back to Fuel Monitoring, tire guides to
          Tire Management, and tracker guides to Hardware.
        </p>
      </section>

      {categories.map((cat) => (
        <section key={cat} className="container-page pb-4">
          <h2 className="font-serif text-sm font-semibold uppercase tracking-wide text-teal-700/80">{cat}</h2>
          <div className="mt-4 grid grid-cols-1 gap-5 pb-8 sm:grid-cols-2 lg:grid-cols-3">
            {resources
              .filter((r) => r.category === cat)
              .map((r) => (
                <Card key={r.slug} to={`/resources/${r.slug}`} title={r.name} summary={r.summary} />
              ))}
          </div>
        </section>
      ))}
    </>
  )
}