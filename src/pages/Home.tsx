import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import {
  solutions,
  industries,
  hardware,
  moduleRelationships,
} from '../data/siteData'

interface NavigatorConnection extends EventTarget {
  saveData?: boolean
}

interface NavigatorWithConnection extends Navigator {
  connection?: NavigatorConnection
}

function HeroVideoBackground() {
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const isSmallScreen = window.matchMedia(
      '(max-width: 768px)',
    ).matches

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const navigatorWithConnection =
      navigator as NavigatorWithConnection

    const saveData =
      navigatorWithConnection.connection?.saveData ?? false

    if (!isSmallScreen && !prefersReducedMotion && !saveData) {
      setShowVideo(true)
    }
  }, [])

  if (!showVideo) {
    return (
      <img
        src="/hero-poster.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
    )
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      poster="/hero-poster.jpg"
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src="/hero.mp4" type="video/mp4" />
    </video>
  )
}

export default function Home() {
  return (
    <>
      {/* 01. HERO */}
      <section className="relative overflow-hidden">
        <HeroVideoBackground />

        {/* Dark overlay */}
        <div className="pointer-events-none absolute inset-0 bg-teal-950/55" />

        <div className="container-page relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-28">
          {/* Hero content */}
          <div>
            <span className="eyebrow font-sans text-teal-200">
              Fleet telematics · Fleet management · Fuel intelligence
            </span>

            <h1 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-[1.08] text-white sm:text-5xl">
              Know every vehicle location, Track every litre, Optimize your operations.
            </h1>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed font-serif text-white/75">
              Spytrac connects live tracking, fuel monitoring and driver
              accountability into one platform, so fleet operators stop
              guessing and start deciding from real data.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/platform" variant="secondary">
                Explore Platform →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 03 + 04. WHAT SPYTRAC SOLVES + CORE PLATFORM */}
      <section className="container-page py-16 sm:py-20">
        <div className="max-w-xl">
          <span className="eyebrow font-sans">
            Data source → module → result
          </span>

          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink">
            Every reading turns into an operational decision.
          </h2>

          <p className="mt-3 text-[15px] font-serif leading-relaxed text-ink-soft/75">
            Telemetry only matters if it changes what you do next. Here is
            how raw signals move through the platform into results you can
            act on.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-teal-900/10">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-teal-900/10 bg-teal-50/60 text-ink-soft/70">
                <th className="px-5 py-3 font-sans font-medium">
                  Data Source
                </th>

                <th className="px-5 py-3 font-sans font-medium">
                  Core Module
                </th>

                <th className="px-5 py-3 font-sans font-medium">
                  Business Result
                </th>

                <th className="px-5 py-3 font-sans font-medium" />
              </tr>
            </thead>

            <tbody>
              {moduleRelationships.map((row) => (
                <tr
                  key={row.coreModule}
                  className="border-b border-teal-900/5 last:border-0"
                >
                  <td className="px-5 py-4 align-top font-serif text-[13px] text-ink-soft/70">
                    {row.dataSource}
                  </td>

                  <td className="px-5 py-4 align-top font-serif font-medium text-ink">
                    {row.coreModule}
                  </td>

                  <td className="px-5 py-4 align-top font-serif text-ink-soft/75">
                    {row.businessResult}
                  </td>

                  <td className="px-5 py-4 font-sans align-top">
                    <Link
                      to={row.ctaHref}
                      className="whitespace-nowrap text-sm font-medium text-teal-700 hover:text-teal-800"
                    >
                      {row.cta} →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 06. SOLUTIONS BY NEED */}
      <section className="bg-teal-50/40 py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Solutions</span>

              <h2 className="mt-2 font-serif text-2xl font-semibold text-ink">
                Identify the Problem.
              </h2>
            </div>

            <Button to="/solutions" variant="ghost">
              View all solutions →
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.slice(0, 6).map((solution) => (
              <Card
                key={solution.slug}
                to={`/solutions/${solution.slug}`}
                title={solution.name}
                summary={solution.summary}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 07. SOLUTIONS BY INDUSTRY */}
      <section className="container-page py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Industries</span>

            <h2 className="mt-2 font-serif text-2xl font-semibold text-ink">
              Built for Your Industry.
            </h2>
          </div>

          <Button to="/industries" variant="ghost">
            View all industries →
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.slice(0, 4).map((industry) => (
            <Card
              key={industry.slug}
              to={`/industries/${industry.slug}`}
              title={industry.name}
              summary={industry.summary}
            />
          ))}
        </div>
      </section>

      {/* 08. HARDWARE ECOSYSTEM */}
      <section className="bg-teal-950 py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-[13px] font-medium text-sky-300">
                Hardware
              </span>

              <h2 className="mt-2 font-serif text-3xl font-semibold text-white">
                The devices behind every reading.
              </h2>
            </div>

            <Button
              to="/hardware"
              variant="secondary"
              className="!border-teal-700 !bg-transparent !text-white hover:!bg-teal-900"
            >
              View hardware hub →
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hardware.slice(0, 4).map((hw) => (
              <Link
                key={hw.slug}
                to={`/hardware/${hw.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-sky-400/40 hover:bg-white/[0.06]"
              >
                <h3 className="font-serif text-base font-semibold text-white">
                  {hw.name}
                </h3>

                <p className="mt-1.5 text-sm font-sans text-teal-100/70">
                  {hw.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}