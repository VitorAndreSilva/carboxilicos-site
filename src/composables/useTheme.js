import { readonly, ref } from 'vue'

const STORAGE_KEY = 'carboxylic-theme'
const theme = ref('dark')
let initialized = false
let systemPreference = null

function resolveInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(value) {
  theme.value = value
  document.documentElement.dataset.theme = value
  document.documentElement.style.colorScheme = value
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    'content',
    value === 'dark' ? '#070a10' : '#f4f7fb',
  )
}

export function initializeTheme() {
  if (initialized) return
  initialized = true
  applyTheme(resolveInitialTheme())
  systemPreference = window.matchMedia('(prefers-color-scheme: dark)')
  systemPreference.addEventListener('change', (event) => {
    if (localStorage.getItem(STORAGE_KEY)) return
    applyTheme(event.matches ? 'dark' : 'light')
  })
}

export function useTheme() {
  function toggleTheme() {
    const nextTheme = theme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem(STORAGE_KEY, nextTheme)
    applyTheme(nextTheme)
  }

  return { theme: readonly(theme), toggleTheme, initializeTheme }
}
