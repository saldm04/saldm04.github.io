import { ArrowUp } from 'lucide-react'
import { personalInfo, socialLinks } from '../../data/portfolio'
import { SocialLink } from '../ui/SocialLink'

export function Footer() {
  const instagram = socialLinks.find((link) => link.kind === 'instagram')

  return (
    <footer className="bg-[var(--bg)]">
      <div className="section-shell flex flex-col gap-7 py-9 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--text)]">{personalInfo.name}</p>
          <p className="mt-1 text-xs text-[var(--faint)]">© {new Date().getFullYear()} · Maiori, Italia</p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          {instagram ? <SocialLink link={instagram} variant="text" /> : null}
          <a className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-medium text-[var(--muted)] hover:text-[var(--green)]" href="#contenuto">
            Torna su
            <ArrowUp aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
