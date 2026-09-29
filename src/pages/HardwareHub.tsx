import Breadcrumbs from '../components/ui/Breadcrumbs'
import Card from '../components/ui/Card'
import { hardware } from '../data/siteData'

export default function HardwareHub() {
  return (
    <>
      <section className="container-page pt-10">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Hardware' }]} />
        <span className="eyebrow">Hardware</span>
        <h1 className="mt-2 max-w-2xl font-serif text-4xl font-semibold text-ink">
          Powering every data point.
        </h1>
        <p className="mt-4 max-w-xl text-[15px] font-sans leading-relaxed text-ink-soft/75">
          Each device below links to the solutions it powers — check compatibility, then request
          a quote with installation included.
        </p>
      </section>

      <section className="container-page py-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hardware.map((h) => (
            <Card key={h.slug} to={`/hardware/${h.slug}`} title={h.name} summary={h.summary} />
          ))}
        </div>
      </section>
    </>
  )
}