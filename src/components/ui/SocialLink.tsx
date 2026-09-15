import { BriefcaseBusiness, Camera, Code2, ExternalLink, Mail } from 'lucide-react'
import type { SocialLink as SocialLinkType } from '../../types/portfolio'

const icons = {
  email: Mail,
  github: Code2,
  linkedin: BriefcaseBusiness,
  instagram: Camera,
}

interface SocialLinkProps {
  link: SocialLinkType
  variant?: 'button' | 'text'
}

export function SocialLink({ link, variant = 'button' }: SocialLinkProps) {
  const Icon = icons[link.kind]
  const isExternal = link.url.startsWith('http')

  if (variant === 'text') {
    return (
      <a
        className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-medium text-[var(--muted)] hover:text-[var(--green)]"
        href={link.url}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
      >
        <Icon aria-hidden="true" size={17} />
        {link.label}
      </a>
    )
  }

  return (
    <a
      className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-5 text-sm font-semibold text-[var(--text)] hover:-translate-y-0.5 hover:border-[var(--green)] hover:text-[var(--green)]"
      href={link.url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      <Icon aria-hidden="true" size={17} />
      {link.label}
      {isExternal ? <ExternalLink className="opacity-45" aria-hidden="true" size={13} /> : null}
    </a>
  )
}
