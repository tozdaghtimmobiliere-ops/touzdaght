'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, User, ArrowLeft } from 'lucide-react'
import { authApi } from '@/lib/api'

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await authApi.login(username, password)
      const { data } = response.data

      // Store token and user
      localStorage.setItem('tozdaght_token', data.tokens.accessToken)
      localStorage.setItem('tozdaght_user', JSON.stringify(data.user))

      // Redirect based on role
      if (data.user.role === 'super_admin') {
        router.push('/admin/dashboard')
      } else {
        router.push('/admin/units')
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'اسم المستخدم أو كلمة المرور غير صحيحة')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
           <img
                  src="/images/logo.png"
                  alt="توزدغت"
                  className="h-10 w-auto object-contain"
                />
          </div>
          <h1 className="font-almarai text-2xl font-bold text-white">لوحة التحكم</h1>
          <p className="text-white/60 mt-2">تسجيل الدخول للمسؤولين فقط</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full" />

          {error && (
            <div className="bg-status-sold/10 text-status-sold px-4 py-3 rounded-lg mb-6 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                اسم المستخدم
              </label>
              <div className="relative">
                <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pr-10 pl-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="أدخل اسم المستخدم"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">
                كلمة المرور
              </label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pr-10 pl-10 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="أدخل كلمة المرور"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  دخول
                  <ArrowLeft className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Back to site */}
        <div className="text-center mt-6">
          <a href="/" className="text-white/60 hover:text-white transition-colors text-sm">
            العودة إلى الموقع
          </a>
        </div>
      </motion.div>
    </div>
  )
}
