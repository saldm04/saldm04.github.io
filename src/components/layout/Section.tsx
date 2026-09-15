import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  number: string
  eyebrow: string
  title: string
  intro?: string
  tone?: 'default' | 'muted' | 'warm'
  children: ReactNode
}

const tones = {
  default: 'bg-[var(--bg)]',
  muted: 'bg-[var(--surface-soft)]',
  warm: 'bg-[var(--surface-warm)]',
}

export function Section({
  id,
  number,
  eyebrow,
  title,
  intro,
  tone = 'default',
  children,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-18 border-t border-[var(--border)] ${tones[tone]}`} aria-labelledby={`${id}-title`}>
      <div className="section-shell py-20 sm:py-24 lg:py-30">
        <header className="mb-12 grid gap-5 lg:mb-16 lg:grid-cols-[minmax(12rem,0.38fr)_minmax(0,0.62fr)] lg:gap-12">
          <div className="flex items-center gap-3 self-start pt-1 text-sm font-bold uppercase tracking-[0.15em] text-[var(--green)]">
            <span className="text-[var(--faint)]">{number}</span>
            <span className="h-px w-8 bg-[var(--border-strong)]" aria-hidden="true" />
            {eyebrow}
          </div>
          <div>
            <h2 id={`${id}-title`} className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[var(--text)] sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {intro ? <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{intro}</p> : null}
          </div>
        </header>
        {children}
      </div>
    </section>
  )
}
