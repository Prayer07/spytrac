import Breadcrumbs from '../components/ui/Breadcrumbs'

const sections = [
  {
    id: 'about',
    title: 'About Spytrac',
    body: 'Spytrac builds fleet telematics, fleet management and fuel intelligence software for operators who need to see their vehicles clearly and act on what they see.',
  },
  {
    id: 'why-spytrac',
    title: 'Why Spytrac',
    body: 'Most tracking tools stop at the map. Spytrac connects tracking, fuel and maintenance data so a single dashboard tells you what happened and what to do about it.',
  },
  {
    id: 'mission-vision',
    title: 'Mission / Vision',
    body: 'To make fleet data usable, not just visible — turning telemetry into daily operational decisions for every fleet we work with.',
  },
  {
    id: 'technology',
    title: 'Technology',
    body: 'The Spytrac platform is built to work with a wide range of GPS trackers, fuel probes and peripheral sensors, so hardware choice doesn\u2019t lock you into a single vendor path.',
  },
  {
    id: 'partners',
    title: 'Partners',
    body: 'We work with hardware manufacturers, installers and resellers across the region to get fleets onboarded quickly.',
  },
  {
    id: 'customer-stories',
    title: 'Customer Stories',
    body: 'From logistics operators cutting fuel loss to corporate fleets improving driver accountability — real deployments, real results.',
  },
  {
    id: 'careers',
    title: 'Careers',
    body: 'We\u2019re building the team behind Spytrac\u2019s platform, hardware integrations and customer support. Reach out if you want to be part of it.',
  },
  {
    id: 'trust-security',
    title: 'Trust / Security',
    body: 'Fleet and driver data is sensitive. Spytrac is built with role-based access, encrypted transmission and clear data ownership for every customer.',
  },
]

export default function Company() {
  return (
    <>
      <section className="container-page pt-10">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Company' }]} />
        <span className="eyebrow">Company</span>
        <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-ink">
          The team behind the platform.
        </h1>
      </section>

      <section className="container-page py-12">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-24 border-t border-teal-900/10 pt-5">
              <h2 className="font-display text-lg font-semibold text-ink">{s.title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft/75">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}