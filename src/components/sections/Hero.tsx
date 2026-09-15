import { useState } from 'react'
import { ArrowDown, FileText, MapPin } from 'lucide-react'
import { personalInfo, socialLinks } from '../../data/portfolio'
import { SocialLink } from '../ui/SocialLink'

export function Hero() {
  const [profileImageFailed, setProfileImageFailed] = useState(false)
  const professionalLinks = socialLinks.filter((link) => link.professional && link.kind !== 'email')

  return (
    <section
      className="relative isolate flex min-h-[min(900px,100svh)] items-center overflow-hidden pt-24"
      aria-labelledby="hero-title"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 -z-20 opacity-75" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-36 top-24 -z-10 size-[34rem] opacity-80" aria-hidden="true">
        <div className="terrain-ring absolute inset-0 rotate-12" />
        <div className="terrain-ring absolute inset-9 -rotate-6" />
        <div className="terrain-ring absolute inset-18 rotate-6" />
        <div className="terrain-ring absolute inset-28 -rotate-12" />
      </div>

      <div className="section-shell grid items-center gap-12 py-18 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:gap-20 lg:py-24">
        <div>
          <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-[var(--muted)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] px-3 py-1.5 backdrop-blur-sm">
              <span className="size-2 rounded-full bg-[var(--green-bright)]" aria-hidden="true" />
              Informatica · LM-18
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden="true" size={15} />
              {personalInfo.location}
            </span>
          </div>

          <p className="mb-3 text-base font-semibold tracking-[0.02em] text-[var(--green)] sm:text-lg">
            {personalInfo.title}
          </p>
          <h1
            id="hero-title"
            className="max-w-4xl text-[clamp(3rem,9vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[var(--text)]"
          >
            Salvatore
            <span className="block text-[var(--green)]">Di Martino</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
            {personalInfo.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--green-solid)] px-6 text-sm font-semibold text-white shadow-[0_10px_28px_color-mix(in_srgb,var(--green)_24%,transparent)] hover:-translate-y-0.5 hover:bg-[var(--green-solid-hover)]"
              href={`mailto:${personalInfo.email}`}
            >
              Contattami
            </a>
            {professionalLinks.map((link) => (
              <SocialLink link={link} key={link.kind} />
            ))}
            {personalInfo.cvAvailable ? (
              <a
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-5 text-sm font-semibold hover:border-[var(--green)] hover:text-[var(--green)]"
                href={personalInfo.cvPath}
                download
              >
                <FileText aria-hidden="true" size={17} />
                Scarica CV
              </a>
            ) : (
              <button
                className="inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-[var(--border-strong)] px-5 text-sm font-semibold text-[var(--faint)]"
                type="button"
                disabled
                title="CV aggiornato disponibile a breve"
              >
                <FileText aria-hidden="true" size={17} />
                Scarica CV
              </button>
            )}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)]">
            {personalInfo.profileImage && !profileImageFailed ? (
              <img
                className="h-full w-full rounded-[1.35rem] object-cover"
                src={personalInfo.profileImage.src}
                alt={personalInfo.profileImage.alt}
                fetchPriority="high"
                style={{ objectPosition: personalInfo.profileImage.position }}
                onError={() => setProfileImageFailed(true)}
              />
            ) : (
              <div className="relative grid h-full place-items-center overflow-hidden rounded-[1.35rem] bg-[var(--surface-soft)]">
                <div className="hero-grid absolute inset-0 opacity-50" aria-hidden="true" />
                <div className="relative grid size-34 place-items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] text-4xl font-semibold tracking-[-0.05em] text-[var(--green)] shadow-[var(--shadow)]">
                  {personalInfo.initials}
                </div>
                <p className="absolute left-6 right-6 top-6 text-center text-xs font-medium uppercase tracking-[0.14em] text-[var(--faint)]">
                  Software · Spazio · Dati
                </p>
              </div>
            )}
          </div>
          <div className="absolute -bottom-5 -left-5 max-w-52 rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] p-4 shadow-[var(--shadow)] backdrop-blur-md sm:-left-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--green)]">Università</p>
            <p className="mt-1 text-sm font-semibold leading-5 text-[var(--text)]">{personalInfo.university}</p>
          </div>
        </div>
      </div>

      <a
        className="focus-ring absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--faint)] hover:text-[var(--green)] md:flex"
        href="#chi-sono"
      >
        Scopri il percorso
        <ArrowDown aria-hidden="true" size={15} />
      </a>
    </section>
  )
}
