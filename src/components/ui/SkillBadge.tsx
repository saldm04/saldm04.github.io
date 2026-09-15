interface SkillBadgeProps {
  children: string
  emphasized?: boolean
}

export function SkillBadge({ children, emphasized = false }: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1.5 text-sm font-medium ${
        emphasized
          ? 'bg-[var(--green-soft)] text-[var(--green)]'
          : 'border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]'
      }`}
    >
      {children}
    </span>
  )
}
