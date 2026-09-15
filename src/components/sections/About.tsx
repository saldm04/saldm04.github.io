import { Compass, Database, Map } from 'lucide-react'
import { aboutParagraphs } from '../../data/portfolio'
import { Section } from '../layout/Section'

const coordinates = [
  { icon: Map, label: 'Origine', value: 'Maiori · Costiera Amalfitana' },
  { icon: Database, label: 'Metodo', value: 'Software e dati' },
  { icon: Compass, label: 'Direzione', value: 'GIS e tecnologie geospaziali' },
]

export function About() {
  return (
    <Section
      id="chi-sono"
      number="01"
      eyebrow="Profilo"
      title="Tecnologia, ricerca e un legame concreto con il territorio."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(20rem,0.42fr)] lg:gap-20">
        <div className="space-y-6">
          {aboutParagraphs.map((paragraph, index) => (
            <p
              className={`${index === 0 ? 'text-xl leading-9 text-[var(--text)] sm:text-2xl sm:leading-10' : 'max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg'}`}
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="self-start border-y border-[var(--border)]" aria-label="Coordinate del profilo">
          {coordinates.map(({ icon: Icon, label, value }, index) => (
            <div className={`grid grid-cols-[2.5rem_1fr] gap-3 py-5 ${index > 0 ? 'border-t border-[var(--border)]' : ''}`} key={label}>
              <span className="grid size-9 place-items-center rounded-full bg-[var(--green-soft)] text-[var(--green)]">
                <Icon aria-hidden="true" size={17} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--faint)]">{label}</p>
                <p className="mt-1 text-sm font-semibold leading-6 text-[var(--text)]">{value}</p>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </Section>
  )
}
