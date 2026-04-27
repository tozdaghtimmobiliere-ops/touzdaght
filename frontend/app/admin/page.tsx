'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, User, ArrowLeft } from 'lucide-react'

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
      // Standalone fetch call to avoid library issues and ensure relative path proxying
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Invalid credentials')
      }

      const { user, tokens } = result.data

      // Store credentials securely
      localStorage.setItem('tozdaght_token', tokens.accessToken)
      localStorage.setItem('tozdaght_user', JSON.stringify(user))

      // Direct page redirection for speed and stability
      if (user.role === 'super_admin') {
        window.location.href = '/admin/dashboard'
      } else {
        window.location.href = '/admin/units'
      }
    } catch (err: any) {
      console.error('Login Error:', err)
      setError('اسم المستخدم أو كلمة المرور غير صحيحة')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#d4af37]/20">
             <img src="/images/logo.png" alt="Logo" className="h-8 object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-[#0f172a]">لوحة التحكم</h1>
          <p className="text-gray-500 mt-2">تسجيل الدخول للمسؤولين</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 px-4 py-3 rounded-lg mb-6 text-sm text-center font-medium border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">اسم المستخدم</label>
            <div className="relative">
              <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pr-10 pl-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all outline-none"
                placeholder="أدخل اسم المستخدم"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">كلمة المرور</label>
            <div className="relative">
              <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pr-10 pl-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all outline-none"
                placeholder="أدخل كلمة المرور"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#d4af37] text-white py-3 rounded-lg font-bold hover:bg-[#b8962e] transition-all disabled:opacity-50 shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2"
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

        <div className="text-center mt-8">
          <a href="/" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm font-medium">
             العودة إلى الموقع
          </a>
        </div>
      </motion.div>
    </div>
  )
}
