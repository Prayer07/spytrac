import { Link } from 'react-router-dom'

interface CardProps {
  to: string
  title: string
  summary: string
  tag?: string
}

export default function Card({ to, title, summary, tag }: CardProps) {
  return (
    <Link
      to={to}
      className="group flex flex-col justify-between gap-4 rounded-2xl border border-teal-900/10 bg-white p-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-panel"
    >
      <div>
        {tag && <span className="mb-2 inline-block text-xs font-medium text-sky-600">{tag}</span>}
        <h3 className="font-serif text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-1.5 text-[15px] font-sans leading-relaxed text-ink-soft/80">{summary}</p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700">
        Learn more
        <svg
          className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  )
}
