import { ArrowUpRight, Check, Code2 } from 'lucide-react'
import type { Project } from '../../types/portfolio'
import { SkillBadge } from './SkillBadge'

interface ProjectCardProps {
  project: Project
  variant: 'primary' | 'featured' | 'compact'
  index: number
}

export function ProjectCard({ project, variant, index }: ProjectCardProps) {
  if (variant === 'compact') {
    return (
      <article className="group grid gap-5 border-t border-[var(--border)] py-7 md:grid-cols-[3rem_minmax(0,0.75fr)_minmax(0,1.25fr)_auto] md:items-start md:gap-7">
        <span className="text-sm font-semibold text-[var(--faint)]">0{index + 1}</span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--green)]">{project.period}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-[var(--text)]">{project.title}</h3>
          <p className="mt-1 text-sm leading-5 text-[var(--faint)]">{project.context}</p>
          {project.team ? <p className="mt-1 text-xs leading-5 text-[var(--faint)]">{project.team}</p> : null}
        </div>
        <div>
          <p className="text-sm leading-6 text-[var(--muted)]">{project.description}</p>
          {project.contribution ? <p className="mt-2 text-sm font-medium leading-6 text-[var(--text)]">{project.contribution}</p> : null}
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-[var(--faint)]">
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </div>
        <a
          className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--muted)] group-hover:border-[var(--green)] group-hover:text-[var(--green)]"
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Apri ${project.title} su GitHub`}
        >
          <ArrowUpRight aria-hidden="true" size={19} />
        </a>
      </article>
    )
  }

  const primary = variant === 'primary'

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.75rem] border bg-[var(--surface)] transition-transform duration-300 hover:-translate-y-1 ${
        primary
          ? 'border-[color-mix(in_srgb,var(--green)_45%,var(--border))] p-6 shadow-[var(--shadow)] sm:p-9 lg:p-11'
          : 'border-[var(--border)] p-6 sm:p-8'
      }`}
    >
      {primary ? (
        <div className="pointer-events-none absolute -right-24 -top-24 size-80 opacity-70" aria-hidden="true">
          <div className="terrain-ring absolute inset-0" />
          <div className="terrain-ring absolute inset-10 rotate-12" />
          <div className="terrain-ring absolute inset-20 -rotate-12" />
        </div>
      ) : null}

      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {primary ? <span className="rounded-full bg-[var(--green-solid)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-white">In evidenza</span> : null}
            <span className="rounded-full bg-[var(--green-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--green)]">{project.context}</span>
          </div>
          <span className="text-sm font-semibold text-[var(--faint)]">{project.period}</span>
        </div>

        <div className={`${primary ? 'mt-9 max-w-4xl' : 'mt-7'}`}>
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--faint)]">
            <Code2 aria-hidden="true" size={15} />
            Progetto 0{index + 1}
          </p>
          <h3 className={`${primary ? 'max-w-3xl text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl'} font-semibold leading-tight tracking-[-0.04em] text-[var(--text)]`}>
            {project.title}
          </h3>
          <p className={`${primary ? 'mt-6 text-lg leading-8' : 'mt-4 text-base leading-7'} text-[var(--muted)]`}>{project.description}</p>
          {project.contribution ? <p className="mt-4 border-l-2 border-[var(--green)] pl-4 text-sm font-medium leading-6 text-[var(--text)]">{project.contribution}</p> : null}
          {project.team ? <p className="mt-3 text-sm text-[var(--faint)]">{project.team}</p> : null}
        </div>

        {project.image ? (
          <div className="mt-7 aspect-[16/8] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)]">
            <img
              className="h-full w-full object-cover"
              src={project.image.src}
              alt={project.image.alt}
              loading="lazy"
              style={{ objectPosition: project.image.position }}
            />
          </div>
        ) : null}

        {project.highlights ? (
          <ul className="mt-7 grid gap-3 sm:grid-cols-3">
            {project.highlights.map((highlight) => (
              <li className="flex gap-2 text-sm leading-6 text-[var(--muted)]" key={highlight}>
                <Check className="mt-1 shrink-0 text-[var(--green)]" aria-hidden="true" size={16} />
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => <SkillBadge emphasized={primary} key={technology}>{technology}</SkillBadge>)}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--text)] px-5 text-sm font-semibold text-[var(--bg)] hover:bg-[var(--green-solid)] hover:text-white"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            Repository GitHub
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
          {project.externalUrl ? (
            <a
              className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 text-sm font-semibold hover:border-[var(--green)] hover:text-[var(--green)]"
              href={project.externalUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visita il progetto
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
