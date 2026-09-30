import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { solutions, platformModules, hardware, industries } from '../../data/siteData'

interface NavGroup {
  label: string
  to: string
  items: { name: string; slug: string }[]
  base: string
}

const navGroups: NavGroup[] = [
  { label: 'Solutions', to: '/solutions', base: '/solutions', items: solutions.slice(0, 6) },
  { label: 'Platform', to: '/platform', base: '/platform', items: platformModules.slice(0, 6) },
  { label: 'Hardware', to: '/hardware', base: '/hardware', items: hardware.slice(0, 6) },
  { label: 'Industries', to: '/industries', base: '/industries', items: industries.slice(0, 6) },
]

export default function Header() {
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-teal-900/10 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="Spytrac Logo" className="h-9 w-25" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpenGroup(null)}>
          {navGroups.map((group) => (
            <div key={group.label} className="relative" onMouseEnter={() => setOpenGroup(group.label)}>
              <NavLink
                to={group.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium transition-colors ${
                    isActive ? 'text-teal-700' : 'text-ink-soft hover:text-teal-700'
                  }`
                }
              >
                {group.label}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="mt-px opacity-60">
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </NavLink>

              {openGroup === group.label && (
                <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2">
                  <div className="rounded-xl border border-teal-900/10 bg-white p-3 shadow-panel">
                    {group.items.map((item) => (
                      <Link
                        key={item.slug}
                        to={`${group.base}/${item.slug}`}
                        className="block rounded-lg px-3 py-2 text-[14px] text-ink-soft hover:bg-teal-50 hover:text-teal-700"
                        onClick={() => setOpenGroup(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      to={group.to}
                      className="mt-1 block rounded-lg px-3 py-2 text-[14px] font-medium text-sky-600 hover:bg-sky-50"
                      onClick={() => setOpenGroup(null)}
                    >
                      View all {group.label.toLowerCase()} →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-[15px] font-medium ${isActive ? 'text-teal-700' : 'text-ink-soft hover:text-teal-700'}`
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-[15px] font-medium ${isActive ? 'text-teal-700' : 'text-ink-soft hover:text-teal-700'}`
            }
          >
            Resources
          </NavLink>
          <NavLink
            to="/company"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-[15px] font-medium ${isActive ? 'text-teal-700' : 'text-ink-soft hover:text-teal-700'}`
            }
          >
            Company
          </NavLink>

          <p className='rounded-md px-3 py-2 text-[15px] font-medium text-teal-700'>Contact-Us: 2349037838141</p>
        </nav>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md text-ink lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {mobileOpen ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-teal-900/10 bg-white px-5 pb-6 pt-2 lg:hidden">
          {navGroups.map((group) => (
            <div key={group.label} className="border-b border-teal-900/5 py-3">
              <Link to={group.to} className="font-sans text-[15px] font-semibold text-ink" onClick={() => setMobileOpen(false)}>
                {group.label}
              </Link>
              <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5">
                {group.items.map((item) => (
                  <Link
                    key={item.slug}
                    to={`${group.base}/${item.slug}`}
                    className="truncate text-sm text-ink-soft/80"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-2 py-3">
            <Link to="/pricing" className="font-sans text-[15px] font-semibold text-ink" onClick={() => setMobileOpen(false)}>
              Pricing
            </Link>
            <Link to="/resources" className="font-sans text-[15px] font-semibold text-ink" onClick={() => setMobileOpen(false)}>
              Resources
            </Link>
            <Link to="/company" className="font-sans text-[15px] font-semibold text-ink" onClick={() => setMobileOpen(false)}>
              Company
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}