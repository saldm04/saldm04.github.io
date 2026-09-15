import { Braces, ChartNoAxesCombined, Database, GitBranch, MapPinned, Wrench } from 'lucide-react'
import { skillCategories } from '../../data/portfolio'
import { Section } from '../layout/Section'

const categoryIcons = [MapPinned, GitBranch, Database, Braces, ChartNoAxesCombined, Wrench]

export function Skills() {
  return (
    <Section
      id="competenze"
      number="04"
      eyebrow="Competenze"
      title="Competenze costruite attraverso studio e progetti."
      intro="Tecnologie e concetti incontrati nello studio e nei progetti, con una crescente attenzione all’elaborazione geospaziale."
      tone="muted"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = categoryIcons[index]
          return (
            <article
              className={`rounded-2xl border p-6 ${
                category.emphasized
                  ? 'border-[color-mix(in_srgb,var(--green)_55%,var(--border))] bg-[var(--green-soft)] md:col-span-2 lg:col-span-1 lg:row-span-2'
                  : 'border-[var(--border)] bg-[var(--surface)]'
              }`}
              key={category.title}
            >
              <div className={`grid size-10 place-items-center rounded-xl ${category.emphasized ? 'bg-[var(--green-solid)] text-white' : 'bg-[var(--surface-soft)] text-[var(--green)]'}`}>
                <Icon aria-hidden="true" size={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-[var(--text)]">{category.title}</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--faint)]">{category.description}</p>
              <ul className="mt-5 grid gap-x-5 gap-y-2 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                {category.skills.map((skill) => (
                  <li
                    className={`flex items-center gap-2 text-sm leading-6 ${
                      category.emphasized
                        ? 'font-medium text-[var(--green)]'
                        : 'text-[var(--muted)]'
                    }`}
                    key={skill}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-px w-3 shrink-0 ${
                        category.emphasized
                          ? 'bg-[var(--green)]'
                          : 'bg-[var(--border-strong)]'
                      }`}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
