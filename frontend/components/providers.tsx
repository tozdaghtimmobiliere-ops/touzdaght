'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  dir: string
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'ar',
  setLanguage: () => {},
  dir: 'rtl',
  t: (key: string) => key,
})

export const useLanguage = () => useContext(LanguageContext)

interface AuthContextType {
  user: any
  login: (token: string, user: any) => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
})

export const useAuth = () => useContext(AuthContext)

export function Providers({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState('ar')
  const [translations, setTranslations] = useState<Record<string, any>>({})
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem('tozdaght_lang') || 'ar'
    setLanguageState(savedLang)
    document.documentElement.lang = savedLang
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr'

    const token = localStorage.getItem('tozdaght_token')
    const savedUser = localStorage.getItem('tozdaght_user')
    if (token && savedUser) {
      setUser(JSON.parse(savedUser))
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    // Dynamically load translations
    import(`../messages/${language}.json`).then((module) => {
      setTranslations(module.default)
    }).catch(err => {
      console.error('Failed to load translations:', err)
    })
  }, [language])

  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    localStorage.setItem('tozdaght_lang', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let current = translations
    for (const k of keys) {
      if (current && current[k]) {
        current = current[k]
      } else {
        return key // fallback to key
      }
    }
    return typeof current === 'string' ? current : key
  }

  const login = (token: string, userData: any) => {
    localStorage.setItem('tozdaght_token', token)
    localStorage.setItem('tozdaght_user', JSON.stringify(userData))
    setUser(userData)
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem('tozdaght_token')
    localStorage.removeItem('tozdaght_user')
    setUser(null)
    setIsAuthenticated(false)
  }

  const dir = language === 'ar' ? 'rtl' : 'ltr'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
        {children}
      </AuthContext.Provider>
    </LanguageContext.Provider>
  )
}
