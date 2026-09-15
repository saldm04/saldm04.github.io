import { BookOpen, GraduationCap } from 'lucide-react'
import type { EducationItem } from '../../types/portfolio'

interface TimelineItemProps {
  item: EducationItem
  index: number
  isLast: boolean
}

export function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  return (
    <article className={`relative grid gap-5 pl-10 sm:pl-14 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-10 ${isLast ? '' : 'pb-14 sm:pb-18'}`}>
      {!isLast ? <span className="absolute bottom-0 left-[0.6875rem] top-6 w-px bg-[var(--border-strong)] sm:left-[0.9375rem]" aria-hidden="true" /> : null}
      <span className="absolute left-0 top-0 grid size-6 place-items-center rounded-full border-4 border-[var(--bg)] bg-[var(--green-solid)] text-white sm:size-8" aria-hidden="true">
        {index === 0 ? <BookOpen size={13} /> : <GraduationCap size={15} />}
      </span>

      <div className="pt-0.5">
        <p className="text-sm font-semibold text-[var(--green)]">{item.period}</p>
        <p className="mt-1 text-sm text-[var(--faint)]">{item.institution}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] sm:text-2xl">{item.degree}</h3>
        {item.curriculum ? <p className="mt-2 text-sm font-medium text-[var(--blue)]">Curriculum · {item.curriculum}</p> : null}
        {item.grade ? <p className="mt-3 inline-flex rounded-full bg-[var(--green-soft)] px-3 py-1.5 text-sm font-semibold text-[var(--green)]">{item.grade}</p> : null}
        {item.thesis ? (
          <div className="mt-5 border-l-2 border-[var(--green)] pl-4">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--faint)]">Tesi</p>
            <p className="mt-1 text-base font-medium leading-7 text-[var(--text)]">{item.thesis}</p>
          </div>
        ) : null}
        {item.supervisors ? <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Relatori: {item.supervisors.join(' · ')}</p> : null}
        {item.context ? <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)]">{item.context}</p> : null}
        {item.coursework ? (
          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--faint)]">Insegnamenti completati</p>
            <ul className="mt-3 grid gap-x-6 gap-y-2 text-sm leading-6 text-[var(--muted)] sm:grid-cols-2">
              {item.coursework.map((course) => (
                <li className="flex gap-2" key={course}>
                  <span className="mt-[0.62rem] size-1 shrink-0 rounded-full bg-[var(--green)]" aria-hidden="true" />
                  {course}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {item.note ? <p className="mt-5 text-sm italic leading-6 text-[var(--muted)]">{item.note}</p> : null}
      </div>
    </article>
  )
}
