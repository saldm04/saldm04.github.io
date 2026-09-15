import { ArrowUpRight, Mail } from 'lucide-react'
import { personalInfo, socialLinks } from '../../data/portfolio'

export function Contact() {
  const professionalLinks = socialLinks.filter((link) => link.professional && link.kind !== 'email')

  return (
    <section id="contatti" className="scroll-mt-18 border-t border-[var(--border)] bg-[var(--green-solid)] text-white" aria-labelledby="contatti-title">
      <div className="section-shell py-20 sm:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(18rem,0.35fr)] lg:items-end lg:gap-16">
          <div>
            <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-white/90">
              <span>08</span>
              <span className="h-px w-8 bg-white/35" aria-hidden="true" />
              Contatti
            </div>
            <h2 id="contatti-title" className="mt-7 max-w-4xl text-[clamp(2.4rem,6vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
              Parliamo di software, dati e progetti geospaziali.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Sono disponibile per opportunità accademiche, tirocini, collaborazioni e progetti coerenti con il mio percorso.
            </p>
          </div>

          <div className="lg:pb-2">
            <a
              className="focus-ring inline-flex w-full items-center justify-between gap-4 rounded-2xl bg-white p-5 text-left text-[#16382d] shadow-[0_18px_50px_rgba(0,0,0,0.14)] hover:-translate-y-1 sm:p-6"
              href={`mailto:${personalInfo.email}`}
            >
              <span className="flex min-w-0 items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#dff3e9] text-[#047857]">
                  <Mail aria-hidden="true" size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.12em] text-[#577268]">Scrivimi</span>
                  <span className="mt-1 block truncate text-sm font-semibold sm:text-base">{personalInfo.email}</span>
                </span>
              </span>
              <ArrowUpRight className="shrink-0" aria-hidden="true" size={20} />
            </a>
            <div className="mt-4 flex flex-wrap gap-2">
              {professionalLinks.map((link) => (
                <a
                  className="focus-ring inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/35 px-5 text-sm font-semibold text-white hover:bg-white/12"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  key={link.kind}
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
