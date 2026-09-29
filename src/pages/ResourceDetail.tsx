import { Navigate, useParams, Link } from 'react-router-dom'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import { findBySlug, resources } from '../data/siteData'

// Context-aware cross-links, per the architecture doc's "Resources should be
// context-aware" implementation note.
const contextLinks: Record<string, { label: string; to: string }[]> = {
  'fuel-calibration-guides': [
    { label: 'Fuel Monitoring solution', to: '/solutions/fuel-monitoring' },
    { label: 'Fuel Sensors / Probes', to: '/hardware/fuel-sensors' },
  ],
  'installation-guides': [
    { label: 'Vehicle Trackers', to: '/hardware/vehicle-trackers' },
    { label: 'Compatibility / Installation', to: '/hardware/compatibility-installation' },
  ],
  'module-walkthroughs': [{ label: 'Platform Hub', to: '/platform' }],
  'platform-guides': [{ label: 'Platform Hub', to: '/platform' }],
}

export default function ResourceDetail() {
  const { slug } = useParams()
  const resource = findBySlug(resources, slug)

  if (!resource) return <Navigate to="/resources" replace />

  const links = contextLinks[resource.slug] ?? []

  return (
    <>
      <section className="container-page pt-10">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Resources', to: '/resources' }, { label: resource.name }]} />
        <span className="eyebrow">{resource.category}</span>
        <h1 className="mt-2 max-w-2xl font-serif text-4xl font-semibold text-ink">{resource.name}</h1>
        <p className="mt-4 max-w-xl text-[15px] font-sans leading-relaxed text-ink-soft/75">{resource.summary}</p>
      </section>

      {links.length > 0 && (
        <section className="container-page py-10">
          <h2 className="font-serif text-sm font-semibold uppercase tracking-wide text-teal-700/80">Related pages</h2>
          <ul className="mt-3 flex flex-wrap gap-3">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-block rounded-full border border-teal-200 px-4 py-2 text-sm text-teal-700 hover:border-teal-400 hover:bg-teal-50"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}