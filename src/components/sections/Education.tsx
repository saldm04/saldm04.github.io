import { education } from '../../data/portfolio'
import { Section } from '../layout/Section'
import { TimelineItem } from '../ui/TimelineItem'

export function Education() {
  return (
    <Section
      id="formazione"
      number="02"
      eyebrow="Formazione"
      title="Un percorso costruito tra fondamenti, qualità del software e dati."
      intro="Dalla formazione tecnica al percorso magistrale, con un interesse sempre più definito verso l’informatica geospaziale."
      tone="muted"
    >
      <div className="mx-auto max-w-5xl">
        {education.map((item, index) => (
          <TimelineItem item={item} index={index} isLast={index === education.length - 1} key={`${item.degree}-${item.period}`} />
        ))}
      </div>
    </Section>
  )
}
