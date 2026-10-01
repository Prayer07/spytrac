import { Link } from 'react-router-dom'
import { solutions, platformModules, hardware, industries } from '../../data/siteData'

const footerColumns = [
  { title: 'Solutions', base: '/solutions', items: solutions.slice(0, 5) },
  { title: 'Platform', base: '/platform', items: platformModules.slice(0, 5) },
  { title: 'Hardware', base: '/hardware', items: hardware.slice(0, 5) },
  { title: 'Industries', base: '/industries', items: industries.slice(0, 5) },
]

const utilityLinks = [
  { label: 'Pricing', to: '/pricing' },
  { label: 'Resources', to: '/resources' },
  { label: 'Company', to: '/company' },
  { label: 'Support', to: '/resources/help-centre' },
]

export default function Footer() {
  return (
    <footer className="border-t border-teal-900/10 bg-white">
      <div className="container-page grid grid-cols-2 gap-8 py-14 sm:grid-cols-3 lg:grid-cols-6">
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="font-sans text-sm font-semibold text-ink">{col.title}</h4>
            <ul className="mt-3 space-y-2">
              {col.items.map((item) => (
                <li key={item.slug}>
                  <Link to={`${col.base}/${item.slug}`} className="text-sm text-ink-soft/75 hover:text-teal-700">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="font-sans text-sm font-semibold text-ink">Company</h4>
          <ul className="mt-3 space-y-2">
            {utilityLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-sm text-ink-soft/75 hover:text-teal-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-teal-900/10">
        <div className="container-page flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Spytrac Logo" className="h-4 w-23" />
            <span className="hidden text-sm text-ink-soft/50 sm:inline">— Track today. Secure tomorrow.</span>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-soft/60">
            <span>© {new Date().getFullYear()} Spytrac</span>
            <Link to="/company/trust-security" className="hover:text-teal-700">
              Privacy
            </Link>
            <Link to="/company/trust-security" className="hover:text-teal-700">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}