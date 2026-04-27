'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Trash2, Edit2, ChevronLeft, LayoutGrid, Check } from 'lucide-react'
import { projectsApi, buildingsApi, apartmentsApi } from '@/lib/api'
import { cn } from '@/lib/utils'

// ─── Types ───────────────────────────────────────────────────────────────────
interface Building {
  id: number
  name: string
  floorsCount: number
  apartmentsPerFloor: number
  floorLabels: string | null
  tableauSection: string | null
  apartments: Apartment[]
  _count?: { apartments: number }
}

interface Apartment {
  id: number
  floor: number
  unitNumber: number
  status: 'available' | 'sold' | 'reserved'
}

interface Project {
  id: number
  name: string
  city: { name: string }
}

// ─── Status Config ────────────────────────────────────────────────────────────
const STATUS_CONFIG = {
  available: { label: 'متاحة', color: 'bg-emerald-500', border: 'border-emerald-500', text: 'text-emerald-700', bg: 'bg-emerald-50' },
  reserved:  { label: 'محجوزة', color: 'bg-amber-400',  border: 'border-amber-400',  text: 'text-amber-700',  bg: 'bg-amber-50'  },
  sold:      { label: 'مباعة',  color: 'bg-red-500',    border: 'border-red-500',    text: 'text-red-700',    bg: 'bg-red-50'    },
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function TableauxPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [buildings, setBuildings] = useState<Building[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [view, setView] = useState<'list' | 'create' | 'edit'>('list')
  const [editingBuilding, setEditingBuilding] = useState<Building | null>(null)

  // Create form state
  const [form, setForm] = useState({
    name: '',
    tableauSection: '',
    floorsCount: 3,
    apartmentsPerFloor: 4,
    floorLabels: ['طابق أرضي', 'R+1', 'R+2'] as string[],
  })

  // Cell status edit state
  const [cellModal, setCellModal] = useState<{ apt: Apartment; floorLabel: string } | null>(null)
  const [saving, setSaving] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')

  useEffect(() => { fetchProjects() }, [])
  useEffect(() => { if (selectedProject) fetchBuildings(selectedProject) }, [selectedProject])

  const fetchProjects = async () => {
    try {
      const res = await projectsApi.getAll()
      setProjects(res.data.data)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchBuildings = async (projectId: number) => {
    try {
      const res = await buildingsApi.getByProject(projectId)
      // Fetch apartments for each building
      const buildingsWithApts = await Promise.all(
        res.data.data.map(async (b: Building) => {
          const aptRes = await apartmentsApi.getByBuilding(b.id)
          return { ...b, apartments: aptRes.data.data }
        })
      )
      setBuildings(buildingsWithApts)
    } catch (e) {
      setBuildings([])
    }
  }

  // ── Sync floor labels count with floorsCount ──────────────────────────────
  const handleFloorsCountChange = (count: number) => {
    const labels = [...form.floorLabels]
    while (labels.length < count) labels.push(`R+${labels.length}`)
    setForm({ ...form, floorsCount: count, floorLabels: labels.slice(0, count) })
  }

  // ── Create new tableau ────────────────────────────────────────────────────
  const handleCreate = async () => {
    if (!selectedProject || !form.name) return
    setSaving(true)
    try {
      await buildingsApi.create({
        projectId: selectedProject,
        name: form.name,
        floorsCount: form.floorsCount,
        apartmentsPerFloor: form.apartmentsPerFloor,
        floorLabels: form.floorLabels.slice(0, form.floorsCount),
        tableauSection: form.tableauSection || undefined,
      })
      await fetchBuildings(selectedProject)
      setView('list')
      setSuccessMsg('تم إنشاء الجدول بنجاح ✅')
      setTimeout(() => setSuccessMsg(''), 3000)
      setForm({ name: '', tableauSection: '', floorsCount: 3, apartmentsPerFloor: 4, floorLabels: ['طابق أرضي', 'R+1', 'R+2'] })
    } catch (e) {
      alert('حدث خطأ أثناء إنشاء الجدول')
    } finally {
      setSaving(false)
    }
  }

  // ── Save floor label edits ────────────────────────────────────────────────
  const handleSaveLabels = async () => {
    if (!editingBuilding) return
    setSaving(true)
    try {
      await buildingsApi.update(editingBuilding.id, {
        floorLabels: editingBuilding.floorLabels
          ? JSON.parse(editingBuilding.floorLabels)
          : [],
        tableauSection: editingBuilding.tableauSection,
      })
      await fetchBuildings(selectedProject!)
      setView('edit') // stay in edit
      setSuccessMsg('تم حفظ التسميات بنجاح ✅')
      setTimeout(() => setSuccessMsg(''), 3000)
    } finally {
      setSaving(false)
    }
  }

  // ── Delete building ───────────────────────────────────────────────────────
  const handleDelete = async (id: number) => {
    if (!confirm('هل أنت متأكد من حذف هذا الجدول؟')) return
    await buildingsApi.delete(id)
    await fetchBuildings(selectedProject!)
  }

  // ── Update cell status ────────────────────────────────────────────────────
  const handleCellStatus = async (status: string) => {
    if (!cellModal) return
    setSaving(true)
    try {
      await apartmentsApi.updateStatus(cellModal.apt.id, status)
      await fetchBuildings(selectedProject!)
      setCellModal(null)
      setSuccessMsg('تم تحديث الحالة ✅')
      setTimeout(() => setSuccessMsg(''), 2000)
    } finally {
      setSaving(false)
    }
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  const getFloorLabel = (building: Building, floor: number): string => {
    if (building.floorLabels) {
      try {
        const labels = JSON.parse(building.floorLabels) as string[]
        return labels[floor] || `الطابق ${floor}`
      } catch {}
    }
    return floor === 0 ? 'طابق أرضي' : `R+${floor}`
  }

  const groupByFloor = (apts: Apartment[]) =>
    apts.reduce((acc: Record<number, Apartment[]>, apt) => {
      if (!acc[apt.floor]) acc[apt.floor] = []
      acc[apt.floor].push(apt)
      return acc
    }, {})

  // ─── Render ───────────────────────────────────────────────────────────────
  if (isLoading) return (
    <div className="flex items-center justify-center h-64">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )

  return (
    <div className="space-y-6" dir="rtl">
      {/* Success Toast */}
      <AnimatePresence>
        {successMsg && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-xl font-bold flex items-center gap-2">
            <Check className="w-4 h-4" /> {successMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          {(view === 'create' || view === 'edit') && (
            <button onClick={() => { setView('list'); setEditingBuilding(null) }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          <div>
            <h2 className="font-almarai font-bold text-xl text-text-primary flex items-center gap-2">
              <LayoutGrid className="w-5 h-5 text-primary" />
              {view === 'list' ? 'إدارة الجداول' : view === 'create' ? 'إنشاء جدول جديد' : `تعديل: ${editingBuilding?.name}`}
            </h2>
            <p className="text-text-muted text-sm mt-0.5">
              {view === 'list' ? 'أنشئ وعدّل جداول الوحدات لأي مشروع' : 'حدد الصفوف وأسماءها وعدد الوحدات'}
            </p>
          </div>
        </div>
        {view === 'list' && selectedProject && (
          <button onClick={() => setView('create')}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors">
            <Plus className="w-4 h-4" /> إنشاء جدول
          </button>
        )}
      </div>

      {/* Project Selector */}
      {view === 'list' && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <label className="block text-sm font-semibold text-text-primary mb-3">اختر المشروع</label>
          <select value={selectedProject || ''} onChange={e => setSelectedProject(Number(e.target.value))}
            className="form-input max-w-md">
            <option value="">اختر مشروعاً</option>
            {projects.map(p => (
              <option key={p.id} value={p.id}>{p.name} - {p.city.name}</option>
            ))}
          </select>
        </div>
      )}

      {/* ── LIST VIEW ── */}
      {view === 'list' && selectedProject && (
        <div className="space-y-4">
          {buildings.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center shadow-sm">
              <LayoutGrid className="w-12 h-12 text-gray-200 mx-auto mb-4" />
              <p className="text-text-muted font-medium">لا توجد جداول لهذا المشروع بعد.</p>
              <button onClick={() => setView('create')}
                className="mt-4 px-6 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors">
                إنشاء أول جدول
              </button>
            </div>
          ) : buildings.map(b => {
            const floorMap = groupByFloor(b.apartments || [])
            const floors = Object.keys(floorMap).map(Number).sort((a, z) => z - a)
            return (
              <motion.div key={b.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Card Header */}
                <div className="flex items-center justify-between p-5 border-b border-border">
                  <div>
                    <h3 className="font-almarai font-bold text-lg text-text-primary">{b.name}</h3>
                    {b.tableauSection && <p className="text-xs text-text-muted mt-0.5">{b.tableauSection}</p>}
                    <p className="text-xs text-text-muted mt-1">
                      {b.floorsCount} صفوف · {b.apartmentsPerFloor} وحدات/صف · {b.apartments?.length || 0} وحدة إجمالاً
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => { setEditingBuilding(b); setView('edit') }}
                      className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                      <Edit2 className="w-4 h-4" /> تعديل
                    </button>
                    <button onClick={() => handleDelete(b.id)}
                      className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold border border-red-200 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                {/* Quick Preview Grid */}
                <div className="p-5 space-y-3">
                  {floors.map(floor => (
                    <div key={floor} className="flex items-center gap-3">
                      <span className="text-xs font-bold text-text-muted w-20 text-left shrink-0">
                        {getFloorLabel(b, floor)}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {(floorMap[floor] || []).sort((a, z) => a.unitNumber - z.unitNumber).map(apt => (
                          <div key={apt.id} className={cn(
                            'w-8 h-8 rounded-full text-white text-xs font-bold flex items-center justify-center',
                            STATUS_CONFIG[apt.status]?.color || 'bg-gray-300'
                          )}>
                            {apt.unitNumber}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Legend */}
                <div className="px-5 pb-4 flex gap-4">
                  {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
                    <div key={key} className="flex items-center gap-1.5">
                      <span className={cn('w-3 h-3 rounded-full', cfg.color)} />
                      <span className="text-xs text-text-muted">{cfg.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      )}

      {/* ── CREATE VIEW ── */}
      {view === 'create' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">اسم الجدول *</label>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="مثال: عمارة B" className="form-input w-full" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">القسم (اختياري)</label>
              <input value={form.tableauSection} onChange={e => setForm({ ...form, tableauSection: e.target.value })}
                placeholder="مثال: الجناح الشمالي" className="form-input w-full" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">عدد الصفوف (الطوابق)</label>
              <input type="number" min={1} max={20} value={form.floorsCount}
                onChange={e => handleFloorsCountChange(Number(e.target.value))}
                className="form-input w-full" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">عدد الوحدات في كل صف</label>
              <input type="number" min={1} max={30} value={form.apartmentsPerFloor}
                onChange={e => setForm({ ...form, apartmentsPerFloor: Number(e.target.value) })}
                className="form-input w-full" />
            </div>
          </div>

          {/* Row Labels */}
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-3">أسماء الصفوف</label>
            <div className="space-y-2">
              {Array.from({ length: form.floorsCount }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-text-muted w-16">الصف {i + 1}</span>
                  <input
                    value={form.floorLabels[i] || ''}
                    onChange={e => {
                      const labels = [...form.floorLabels]
                      labels[i] = e.target.value
                      setForm({ ...form, floorLabels: labels })
                    }}
                    placeholder={`مثال: R+${i}`}
                    className="form-input flex-1 !py-2 text-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div className="border border-border rounded-xl p-4">
            <p className="text-xs font-bold text-text-muted mb-3 uppercase tracking-widest">معاينة الجدول</p>
            <div className="space-y-2">
              {Array.from({ length: form.floorsCount }).reverse().map((_, revI) => {
                const i = form.floorsCount - 1 - revI
                return (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs font-bold text-text-muted w-24 text-left shrink-0">
                      {form.floorLabels[i] || `الصف ${i + 1}`}
                    </span>
                    <div className="flex gap-2">
                      {Array.from({ length: form.apartmentsPerFloor }).map((_, u) => (
                        <div key={u} className="w-8 h-8 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center">
                          {u + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button onClick={() => setView('list')}
              className="flex-1 px-4 py-3 border border-border rounded-xl hover:bg-background-alt transition-colors font-bold">
              إلغاء
            </button>
            <button onClick={handleCreate} disabled={saving || !form.name}
              className="flex-1 px-4 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors disabled:opacity-50">
              {saving ? 'جاري الإنشاء...' : 'إنشاء الجدول'}
            </button>
          </div>
        </motion.div>
      )}

      {/* ── EDIT VIEW ── */}
      {view === 'edit' && editingBuilding && (() => {
        const floorMap = groupByFloor(editingBuilding.apartments || [])
        const floors = Object.keys(floorMap).map(Number).sort((a, z) => z - a)
        let parsedLabels: string[] = []
        try { parsedLabels = editingBuilding.floorLabels ? JSON.parse(editingBuilding.floorLabels) : [] } catch {}

        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
            {/* Edit Labels Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-text-primary mb-4">تعديل أسماء الصفوف</h3>
              <div className="space-y-2 mb-4">
                {floors.map((floor, idx) => (
                  <div key={floor} className="flex items-center gap-3">
                    <span className="text-xs font-bold text-text-muted w-16">الصف {idx + 1}</span>
                    <input
                      value={parsedLabels[floor] || ''}
                      onChange={e => {
                        const newLabels = [...parsedLabels]
                        newLabels[floor] = e.target.value
                        setEditingBuilding({
                          ...editingBuilding,
                          floorLabels: JSON.stringify(newLabels),
                        })
                      }}
                      placeholder={`R+${floor}`}
                      className="form-input flex-1 !py-2 text-sm"
                    />
                  </div>
                ))}
              </div>
              <button onClick={handleSaveLabels} disabled={saving}
                className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors disabled:opacity-50">
                {saving ? 'جاري الحفظ...' : 'حفظ الأسماء'}
              </button>
            </div>

            {/* Grid Editor */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-text-primary mb-1">تعديل حالة الوحدات</h3>
              <p className="text-xs text-text-muted mb-5">اضغط على أي وحدة لتغيير حالتها</p>
              <div className="space-y-4">
                {floors.map(floor => (
                  <div key={floor} className="flex items-center gap-4">
                    <span className="text-sm font-bold text-text-primary w-24 text-left shrink-0">
                      {getFloorLabel(editingBuilding, floor)}
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {(floorMap[floor] || []).sort((a, z) => a.unitNumber - z.unitNumber).map(apt => (
                        <button key={apt.id}
                          onClick={() => setCellModal({ apt, floorLabel: getFloorLabel(editingBuilding, floor) })}
                          className={cn(
                            'w-12 h-12 rounded-full text-white text-sm font-bold transition-all hover:scale-110 hover:shadow-lg',
                            STATUS_CONFIG[apt.status]?.color || 'bg-gray-300'
                          )}>
                          {apt.unitNumber}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Legend */}
              <div className="flex flex-wrap gap-6 mt-6 pt-4 border-t border-border">
                {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
                  <div key={key} className="flex items-center gap-2">
                    <span className={cn('w-4 h-4 rounded-full', cfg.color)} />
                    <span className="text-sm text-text-secondary">{cfg.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )
      })()}

      {/* ── CELL STATUS MODAL ── */}
      <AnimatePresence>
        {cellModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setCellModal(null)}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl" onClick={e => e.stopPropagation()}>
              <h3 className="font-almarai font-bold text-xl text-text-primary mb-1">تغيير الحالة</h3>
              <p className="text-text-muted text-sm mb-5">
                وحدة {cellModal.apt.unitNumber} — {cellModal.floorLabel}
              </p>
              <div className="space-y-3 mb-5">
                {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
                  <button key={key} onClick={() => handleCellStatus(key)}
                    disabled={saving || cellModal.apt.status === key}
                    className={cn(
                      'w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all font-bold',
                      cellModal.apt.status === key
                        ? `${cfg.border} ${cfg.bg} ${cfg.text} cursor-default`
                        : 'border-border hover:border-gray-300 hover:bg-gray-50'
                    )}>
                    <span className={cn('w-5 h-5 rounded-full shrink-0', cfg.color)} />
                    <span>{cfg.label}</span>
                    {cellModal.apt.status === key && <Check className="w-4 h-4 mr-auto" />}
                  </button>
                ))}
              </div>
              <button onClick={() => setCellModal(null)}
                className="w-full px-4 py-3 border border-border rounded-xl hover:bg-background-alt transition-colors font-bold">
                إلغاء
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
