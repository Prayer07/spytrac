import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  to?: string
  href?: string
  variant?: Variant
  children: ReactNode
  className?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-teal-700 text-white hover:bg-teal-800 shadow-sm shadow-teal-900/10',
  secondary:
    'bg-white text-teal-700 border border-teal-200 hover:border-teal-400 hover:bg-teal-50',
  ghost: 'text-ink hover:text-teal-700',
}

export default function Button({ to, href, variant = 'primary', children, className = '' }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors duration-150 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} target='_blank'>
        {children}
      </a>
    )
  }
  return <button className={classes}>{children}</button>
}
