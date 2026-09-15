import { Moon, Sun } from 'lucide-react'
import type { Theme } from '../../types/portfolio'

interface ThemeToggleProps {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const nextTheme = theme === 'light' ? 'scuro' : 'chiaro'

  return (
    <button
      className="focus-ring grid size-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--green)] hover:text-[var(--green)]"
      type="button"
      onClick={onToggle}
      aria-label={`Attiva tema ${nextTheme}`}
      title={`Attiva tema ${nextTheme}`}
    >
      {theme === 'light' ? <Moon aria-hidden="true" size={18} /> : <Sun aria-hidden="true" size={18} />}
    </button>
  )
}
