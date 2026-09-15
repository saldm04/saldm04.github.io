import { BadgeCheck, Languages as LanguagesIcon } from 'lucide-react'
import { languages } from '../../data/portfolio'
import { Section } from '../layout/Section'

export function Languages() {
  return (
    <Section
      id="lingue"
      number="07"
      eyebrow="Lingue"
      title="Italiano madrelingua, inglese per studio e collaborazione."
      tone="muted"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {languages.map((language, index) => (
          <article className="flex gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8" key={language.name}>
            <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${index === 0 ? 'bg-[var(--green-soft)] text-[var(--green)]' : 'bg-[var(--blue-soft)] text-[var(--blue)]'}`}>
              {index === 0 ? <LanguagesIcon aria-hidden="true" size={22} /> : <BadgeCheck aria-hidden="true" size={22} />}
            </span>
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--text)]">{language.name}</h3>
              <p className="mt-2 text-base font-medium leading-7 text-[var(--text)]">{language.level}</p>
              {language.note ? <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{language.note}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
