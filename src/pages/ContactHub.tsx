import Breadcrumbs from '../components/ui/Breadcrumbs'
import Card from '../components/ui/Card'

const options = [
  { slug: 'demo', name: 'Request a Demo', summary: 'See the platform live on a call with our team.' },
  { slug: 'quote', name: 'Request a Quote', summary: 'Get pricing sized to your fleet and hardware needs.' },
  { slug: 'sales', name: 'Talk to Sales', summary: 'Discuss your fleet and the right plan for it.' },
  { slug: 'support', name: 'Technical Support', summary: 'Get help with your existing Spytrac account.' },
  { slug: 'installation', name: 'Installation Request', summary: 'Book certified installation for your hardware.' },
  { slug: 'service', name: 'Service Enquiry', summary: 'Report a device issue or request a service visit.' },
]

export default function ContactHub() {
  return (
    <section className="container-page py-14">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact / Demo' }]} />
      <span className="eyebrow">Contact / Demo</span>
      <h1 className="mt-2 max-w-2xl font-serif text-4xl font-semibold text-ink">
        How can we help you get started?
      </h1>
      <p className="mt-4 max-w-xl text-[15px] font-sans leading-relaxed text-ink-soft/75">
        Pick the option that matches where you are — from a first demo to an existing account
        issue.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {options.map((o) => (
          <Card key={o.slug} to={`/contact/${o.slug}`} title={o.name} summary={o.summary} />
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-teal-900/10 bg-teal-50/40 p-6">
        <h2 className="font-sans text-sm font-semibold uppercase tracking-wide text-teal-700/80">
          Location / Channels
        </h2>
        <p className="mt-2 text-[15px] text-ink-soft/75">
          Lagos, Nigeria · support@spytrac.ng · Mon–Sat, 8am–6pm WAT
        </p>
      </div>
    </section>
  )
}
