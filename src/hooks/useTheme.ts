import { useEffect, useState } from 'react'
import type { Theme } from '../types/portfolio'

const storageKey = 'salvatore-portfolio-theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  try {
    return window.localStorage.getItem(storageKey) === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#111916' : '#f7f8f5',
    )
    try {
      window.localStorage.setItem(storageKey, theme)
    } catch {
      // The selected theme still works for the current session.
    }
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'))

  return { theme, toggleTheme }
}
