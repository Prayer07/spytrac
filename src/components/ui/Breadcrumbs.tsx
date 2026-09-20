import { Link } from 'react-router-dom'

interface Crumb {
  label: string
  to?: string
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-ink-soft/70">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-1.5">
          {item.to ? (
            <Link to={item.to} className="hover:text-teal-700">
              {item.label}
            </Link>
          ) : (
            <span className="text-ink">{item.label}</span>
          )}
          {i < items.length - 1 && <span className="text-ink-soft/40">/</span>}
        </span>
      ))}
    </nav>
  )
}
