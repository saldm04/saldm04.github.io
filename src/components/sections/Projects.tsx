import { featuredProjects, otherProjects } from '../../data/portfolio'
import { Section } from '../layout/Section'
import { ProjectCard } from '../ui/ProjectCard'

export function Projects() {
  return (
    <Section
      id="progetti"
      number="03"
      eyebrow="Progetti"
      title="Progetti accademici, dal territorio ai linguaggi."
      intro="Esperienze selezionate per il contributo concreto, il lavoro di gruppo e le competenze tecniche sviluppate."
    >
      <div className="space-y-6">
        <ProjectCard project={featuredProjects[0]} variant="primary" index={0} />
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.slice(1).map((project, index) => (
            <ProjectCard project={project} variant="featured" index={index + 1} key={project.id} />
          ))}
        </div>
      </div>

      <div className="mt-18 sm:mt-22">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--green)]">Altri progetti</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-3xl">Altre esperienze tecniche</h3>
          </div>
          <span className="hidden text-sm text-[var(--faint)] sm:block">03 progetti</span>
        </div>
        <div className="border-b border-[var(--border)]">
          {otherProjects.map((project, index) => (
            <ProjectCard project={project} variant="compact" index={index} key={project.id} />
          ))}
        </div>
      </div>
    </Section>
  )
}
