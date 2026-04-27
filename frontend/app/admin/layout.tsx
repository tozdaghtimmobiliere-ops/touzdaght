'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Building2,
  Home,
  MapPin,
  Image,
  Globe,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  LayoutGrid,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const sidebarLinks = {
  super_admin: [
    { href: '/admin/dashboard', label: 'لوحة التحكم', icon: LayoutDashboard },
    { href: '/admin/projects', label: 'إدارة المشاريع', icon: Building2 },
    { href: '/admin/tableaux', label: 'إدارة الجداول', icon: LayoutGrid },
    { href: '/admin/units', label: 'إدارة الوحدات', icon: Home },
    { href: '/admin/parcels', label: 'إدارة البقع', icon: MapPin },
    { href: '/admin/media', label: 'إدارة الصور', icon: Image },
    { href: '/admin/cities', label: 'إدارة المدن', icon: Globe },
  ],
  admin: [
    { href: '/admin/tableaux', label: 'إدارة الجداول', icon: LayoutGrid },
    { href: '/admin/units', label: 'إدارة الوحدات', icon: Home },
    { href: '/admin/parcels', label: 'إدارة البقع', icon: MapPin },
  ],
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<any>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('tozdaght_token')
    const userData = localStorage.getItem('tozdaght_user')

    if (!token || !userData) {
      if (pathname !== '/admin') {
        router.push('/admin')
      }
      return
    }

    try {
      setUser(JSON.parse(userData))
    } catch (e) {
      console.error('Failed to parse user data', e)
      localStorage.removeItem('tozdaght_user')
      localStorage.removeItem('tozdaght_token')
      router.push('/admin')
    }
  }, [pathname, router])

  const handleLogout = () => {
    localStorage.removeItem('tozdaght_token')
    localStorage.removeItem('tozdaght_user')
    router.push('/admin')
  }

  if (pathname === '/admin') {
    return children
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const links = sidebarLinks[user.role as keyof typeof sidebarLinks] || sidebarLinks.admin

  return (
    <div className="min-h-screen bg-background-alt">
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 right-0 h-full bg-secondary text-white z-50 transition-transform duration-300',
          'w-64',
          isMobileSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-xl">ت</span>
            </div>
            <div>
              <h2 className="font-almarai font-bold">توزدغت</h2>
              <p className="text-white/60 text-xs">لوحة الإدارة</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {links.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileSidebarOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-white/80 hover:bg-white/10'
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{link.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          'transition-all duration-300 min-h-screen',
          'lg:mr-64'
        )}
      >
        {/* Top Bar */}
        <header className="bg-white border-b border-border sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-background-alt rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Page Title */}
              <h1 className="font-almarai font-bold text-xl text-text-primary">
                {links.find((l) => l.href === pathname)?.label || 'لوحة التحكم'}
              </h1>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">
                  {user?.username ? user.username.charAt(0).toUpperCase() : 'A'}
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="font-semibold text-text-primary text-sm">{user?.username || 'Admin'}</p>
                <p className="text-text-muted text-xs">
                  {user?.role === 'super_admin' ? 'مدير النظام' : 'مدير'}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}
