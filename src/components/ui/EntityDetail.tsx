import { Link, Navigate, useParams } from 'react-router-dom'
import Breadcrumbs from './Breadcrumbs'
import CTASection from './CTASection'
import { findBySlug } from '../../data/siteData'
import type { LinkedItem } from '../../data/siteData'

interface RelatedGroup {
  label: string
  base: string
  items: LinkedItem[]
}

interface EntityDetailProps {
  hubLabel: string
  hubTo: string
  items: LinkedItem[]
  relatedGroups: (item: LinkedItem) => RelatedGroup[]
  eyebrow: string
}

export default function EntityDetail({ hubLabel, hubTo, items, relatedGroups, eyebrow }: EntityDetailProps) {
  const { slug } = useParams()
  const item = findBySlug(items, slug)

  if (!item) return <Navigate to={hubTo} replace />

  const groups = relatedGroups(item).filter((g) => g.items.length > 0)

  return (
    <>
      <section className="container-page pt-10">
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: hubLabel, to: hubTo }, { label: item.name }]} />
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-2 max-w-2xl font-serif text-4xl font-semibold text-ink">{item.name}</h1>
        <p className="mt-4 max-w-xl text-[15px] font-sans leading-relaxed text-ink-soft/75">{item.detail}</p>
      </section>

      {groups.length > 0 && (
        <section className="container-page py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <div key={group.label}>
                <h2 className="font-serif text-sm font-semibold uppercase tracking-wide text-teal-700/80">
                  {group.label}
                </h2>
                <ul className="mt-3 space-y-2 border-l border-teal-900/10 pl-4">
                  {group.items.map((related) => (
                    <li key={related.slug}>
                      <Link
                        to={`${group.base}/${related.slug}`}
                        className="text-[15px] text-ink-soft/80 hover:text-teal-700"
                      >
                        {related.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      <CTASection
        heading={`Ready to see ${item.name} in action?`}
        body="Get a live walkthrough with your own fleet data, or move straight to pricing."
        primaryLabel="Request a Demo"
        primaryTo="/contact/demo"
        secondaryLabel="View Pricing"
        secondaryTo="/pricing"
      />
    </>
  )
}
