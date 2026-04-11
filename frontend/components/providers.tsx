'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  dir: string
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'ar',
  setLanguage: () => {},
  dir: 'rtl',
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
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem('tozdaght_lang')
    if (savedLang) {
      setLanguageState(savedLang)
      document.documentElement.lang = savedLang
      document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr'
    }

    const token = localStorage.getItem('tozdaght_token')
    const savedUser = localStorage.getItem('tozdaght_user')
    if (token && savedUser) {
      setUser(JSON.parse(savedUser))
      setIsAuthenticated(true)
    }
  }, [])

  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    localStorage.setItem('tozdaght_lang', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
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
    <LanguageContext.Provider value={{ language, setLanguage, dir }}>
      <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
        {children}
      </AuthContext.Provider>
    </LanguageContext.Provider>
  )
}
