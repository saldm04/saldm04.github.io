import { useState } from 'react'
import { ArrowUpRight, CameraOff, Handshake, Mountain, Trees } from 'lucide-react'
import { communityActivities } from '../../data/portfolio'
import { Section } from '../layout/Section'

export function Community() {
  const [associationImageFailed, setAssociationImageFailed] = useState(false)
  const [festivalImageFailed, setFestivalImageFailed] = useState(false)
  const association = communityActivities[0]
  const festival = communityActivities[1]

  return (
    <Section
      id="comunita"
      number="05"
      eyebrow="Volontariato & comunità"
      title="Partecipare significa prendersi cura dei luoghi e delle persone."
      tone="warm"
    >
      <div className="grid overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-80 overflow-hidden bg-[var(--orange-soft)] p-7 sm:min-h-96 sm:p-10">
          {association.image && !associationImageFailed ? (
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={association.image.src}
              alt={association.image.alt}
              loading="lazy"
              style={{ objectPosition: association.image.position }}
              onError={() => setAssociationImageFailed(true)}
            />
          ) : (
            <div className="flex h-full min-h-64 flex-col justify-between">
              <div className="flex items-center justify-between text-[var(--orange)]">
                <Mountain aria-hidden="true" size={34} strokeWidth={1.5} />
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em]">
                  <CameraOff aria-hidden="true" size={15} />
                  Foto in arrivo
                </span>
              </div>
              <div>
                <p className="max-w-xs text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--text)] sm:text-4xl">
                  Costiera Amalfitana, sentieri e comunità.
                </p>
                <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
                  Spazio predisposto per una fotografia reale delle attività associative.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="p-7 sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--orange)]">
            <span>{association.period}</span>
            <span aria-hidden="true">·</span>
            <span>{association.organization}</span>
          </div>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-4xl">{association.title}</h3>
          {association.role ? <p className="mt-2 text-sm font-semibold text-[var(--green)]">{association.role}</p> : null}
          <p className="mt-6 text-base leading-8 text-[var(--muted)]">{association.description}</p>

          {association.highlights ? (
            <ul className="mt-7 grid gap-3">
              {association.highlights.map((highlight, index) => {
                const Icon = [Handshake, Trees, Mountain][index]
                return (
                  <li className="flex items-center gap-3 text-sm font-medium text-[var(--text)]" key={highlight}>
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--green-soft)] text-[var(--green)]">
                      <Icon aria-hidden="true" size={16} />
                    </span>
                    {highlight}
                  </li>
                )
              })}
            </ul>
          ) : null}

          {association.link ? (
            <a
              className="focus-ring mt-8 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-[var(--muted)] hover:text-[var(--green)]"
              href={association.link}
              target="_blank"
              rel="noreferrer"
            >
              Sito dell’associazione su GitHub
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          ) : null}
        </div>
      </div>

      <aside className="mt-6 grid overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--orange)_30%,var(--border))] bg-[color-mix(in_srgb,var(--orange-soft)_60%,var(--surface))] sm:grid-cols-[minmax(0,3fr)_minmax(18rem,2fr)]" aria-labelledby="maiori-risona-title">
        <div className="relative min-h-44 overflow-hidden bg-[var(--orange-soft)] sm:order-2 sm:aspect-video sm:min-h-0">
          {festival.image && !festivalImageFailed ? (
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={festival.image.src}
              alt={festival.image.alt}
              loading="lazy"
              style={{ objectPosition: festival.image.position }}
              onError={() => setFestivalImageFailed(true)}
            />
          ) : (
            <div className="grid h-full min-h-44 place-items-center text-[var(--orange)]">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em]">
                <CameraOff aria-hidden="true" size={17} />
                Foto non disponibile
              </span>
            </div>
          )}
        </div>
        <div className="p-6 sm:flex sm:flex-col sm:justify-center sm:p-8">
          <p className="flex flex-wrap items-center gap-x-2 text-xs font-bold uppercase tracking-[0.13em] text-[var(--orange)]">
            <span>Iniziativa culturale</span>
            <span aria-hidden="true">·</span>
            <span>{festival.period}</span>
          </p>
          <h3 id="maiori-risona-title" className="mt-1 text-xl font-semibold tracking-[-0.025em] text-[var(--text)]">
            {festival.title} — {festival.organization}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{festival.description}</p>
        </div>
      </aside>
    </Section>
  )
}
