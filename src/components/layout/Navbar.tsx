import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigation, personalInfo } from '../../data/portfolio'
import { useTheme } from '../../hooks/useTheme'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${
        scrolled || menuOpen
          ? 'border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] shadow-[0_8px_30px_rgba(20,45,35,0.05)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-18 items-center justify-between" aria-label="Navigazione principale">
        <a
          className="focus-ring rounded-md text-sm font-semibold tracking-[-0.01em] text-[var(--text)]"
          href="#contenuto"
          aria-label="Torna all’inizio"
        >
          {personalInfo.name}
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-[var(--muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--text)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            className="focus-ring grid size-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] lg:hidden"
            type="button"
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`section-shell grid overflow-hidden transition-[grid-template-rows,opacity] lg:hidden ${
          menuOpen ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <div className="grid gap-1 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-[var(--shadow)]">
            {navigation.map((item) => (
              <a
                className="focus-ring rounded-xl px-4 py-3 text-sm font-medium text-[var(--muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--text)]"
                href={item.href}
                key={item.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
