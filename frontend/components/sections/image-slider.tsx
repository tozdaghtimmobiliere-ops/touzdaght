'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, X, ZoomIn, Download, Maximize2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

// ─── Image Components with Quality Filters ─────────────────────────────────────
function HighQualityImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "w-full h-full object-cover transition-all duration-700",
          "render-4k", // Custom class for sharpness
          className
        )}
        style={{
          filter: 'contrast(1.15) saturate(1.1) brightness(1.03)',
          imageRendering: 'auto'
        }}
      />
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}

// ─── Modal Preview ─────────────────────────────────────────────────────────────
function ImageModal({ src, onClose }: { src: string, onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
      >
        <X size={32} />
      </button>
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        src={src}
        alt="Preview"
        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl shadow-gold/10"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  )
}

// ─── Base Slider (Improved) ───────────────────────────────────────────────────
function BaseSlider({ slides }: { slides: { src: string; badge?: string }[] }) {
  const [index, setIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const next = useCallback(() => setIndex((prev) => (prev + 1) % slides.length), [slides.length])
  const prev = useCallback(() => setIndex((prev) => (prev - 1 + slides.length) % slides.length), [slides.length])

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [slides.length, next])

  if (slides.length === 0) return null

  return (
    <div className="relative w-full max-w-[1200px] mx-auto group">
      <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-secondary/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 cursor-zoom-in"
            onClick={() => setShowModal(true)}
          >
            <HighQualityImage src={slides[index].src} alt={slides[index].badge || "Real Estate"} />

            {slides[index].badge && (
              <div className="absolute top-6 right-6 z-10 px-6 py-2.5 rounded-2xl text-xs font-black tracking-widest shadow-xl backdrop-blur-md bg-black/40 border border-white/20 text-gold uppercase">
                {slides[index].badge}
              </div>
            )}

            <div className="absolute bottom-6 left-6 z-10 text-white/50 text-xs font-mono">
              {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hover Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="w-14 h-14 rounded-full bg-white/10 hover:bg-gold backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 pointer-events-auto shadow-xl"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-secondary" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="w-14 h-14 rounded-full bg-white/10 hover:bg-gold backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 pointer-events-auto shadow-xl"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-secondary" />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIndex(i); }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                index === i ? "bg-gold w-8 shadow-[0_0_10px_#C9A84C]" : "bg-white/30 w-1.5 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showModal && <ImageModal src={slides[index].src} onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </div>
  )
}

// ─── Static image lists (Vercel can't reliably scan public/ at runtime) ───────
const TERRAIN_PROGRESS_IMAGES = [
  '/m/terrain-progress-1.jpg',
  '/m/terrain-progress-2.jpg',
  '/m/terrain-progress-3.jpg',
  '/m/WhatsApp%20Image%202026-04-12%20at%2012.14.44.jpeg',
  '/m/WhatsApp%20Image%202026-04-12%20at%2012.14.44%20(1).jpeg',
  '/m/WhatsApp%20Image%202026-04-12%20at%2012.14.44%20(3).jpeg',
  '/m/WhatsApp%20Image%202026-04-12%20at%2012.14.44%20(5).jpeg',
  '/m/WhatsApp%20Image%202026-04-12%20at%2012.14.45%20(1).jpeg',
  '/m/WhatsApp%20Image%202026-04-12%20at%2012.14.45%20(2).jpeg',
  '/m/WhatsApp%20Image%202026-04-14%20at%2018.41.30%20(1).jpeg',
  '/m/WhatsApp%20Image%202026-04-14%20at%2018.41.30%20(2).jpeg',
]

const IMMEUBLE_PROGRESS_IMAGES = [
  '/m/immeuble-progress-10.jpg',
  '/images/najma/immeuble/progress/1.jpg',
  '/images/najma/immeuble/progress/2.jpg',
  '/images/najma/immeuble/progress/3.jpg',
  '/images/najma/immeuble/progress/6.jpeg',
  '/images/najma/immeuble/progress/7.jpeg',
  '/m/new/WhatsApp%20Image%202026-04-14%20at%2018.41.04.jpeg',
  '/m/new/WhatsApp%20Image%202026-04-14%20at%2018.41.05.jpeg',
  '/m/new/WhatsApp%20Image%202026-04-14%20at%2018.41.05%20(1).jpeg',
  '/m/new/WhatsApp%20Image%202026-04-14%20at%2018.41.05%20(2).jpeg',
  '/m/new/WhatsApp%20Image%202026-04-14%20at%2018.41.05%20(3).jpeg',
  '/m/new/WhatsApp%20Image%202026-04-14%20at%2018.41.05%20(4).jpeg',
  '/m/new/WhatsApp%20Image%202026-04-14%20at%2018.41.05%20(5).jpeg',
]

// ─── ImageSlider Main Component ──────────────────────────────────────────────
interface ImageSliderProps {
  images: any[]
  projectSlug?: string
  category?: 'plans' | 'chantier'
  type?: 'immeuble' | 'terrain'
}

export function ImageSlider({ images, projectSlug, category = 'plans', type }: ImageSliderProps) {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const getSlides = () => {
    // ── تقدم الأشغال tabs: load real construction photos ─────────────────────
    if (projectSlug === 'najma' && category === 'chantier') {
      const srcs = type === 'terrain' ? TERRAIN_PROGRESS_IMAGES : IMMEUBLE_PROGRESS_IMAGES
      return srcs.map(src => ({ src }))
    }

    // ── Plan tabs: architectural plans ───────────────────────────────────────
    if (projectSlug === 'najma') {
      if (type === 'immeuble') {
        return [
          { src: '/images/najma/immeuble/plans/3.jpeg', badge: 'المخطط العام 1' },
          { src: '/images/najma/immeuble/plans/4.jpeg', badge: 'المخطط العام 2' },
          { src: '/images/najma/immeuble/plans/5.jpeg', badge: 'المخطط العام 3' },
          { src: '/images/najma/immeuble/plans/plan-etage0najma.png', badge: 'مخطط الطابق السفلي' },
          { src: '/images/najma/immeuble/plans/plan-etage1najma.png', badge: 'مخطط الطابق الأول' },
        ]
      }
      if (type === 'terrain') {
        return [
          { src: '/images/najma/terrain/plans/plan-terrain-2d.png', badge: '2D Plan' },
          { src: '/images/najma/terrain/plans/plan-terrain-3d.png', badge: '3D Plan' },
        ]
      }
    }

    return images.length > 0 ? images.map(img => ({ src: img.url, badge: img.label })) : []
  }

  const slides = getSlides()

  // ─── Premium 4K photo grid for تقدم الأشغال ─────────────────────────────
  if (category === 'chantier' && projectSlug === 'najma') {
    if (slides.length === 0) {
      return (
        <div className="text-center py-20 bg-secondary/5 rounded-3xl border border-dashed border-white/10">
          <p className="text-secondary/40 font-almarai tracking-wider text-sm">لا توجد صور متاحة</p>
        </div>
      )
    }
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-zoom-in bg-secondary/5
                         shadow-md hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500
                         border border-white/5 hover:border-gold/20"
              onClick={() => setModalImage(slide.src)}
            >
              <HighQualityImage
                src={slide.src}
                alt={`تقدم الأشغال ${i + 1}`}
                className="group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500" />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-9 h-9 rounded-full bg-gold/95 backdrop-blur-md flex items-center justify-center shadow-lg">
                  <Maximize2 size={15} className="text-secondary" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-bold text-white/70 font-mono">
                  {String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {modalImage && <ImageModal src={modalImage} onClose={() => setModalImage(null)} />}
        </AnimatePresence>
      </div>
    )
  }

  if (slides.length === 0) {
    return (
      <div className="text-center py-20 bg-secondary/5 rounded-3xl border border-dashed border-white/10">
        <p className="text-secondary/40 font-almarai tracking-wider text-sm">لا توجد صور متاحة</p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden">
      <BaseSlider slides={slides} />
    </div>
  )
}
































// 'use client'

// import { useState, useCallback, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { cn } from '@/lib/utils'
// import useEmblaCarousel from 'embla-carousel-react'

// interface ImageSliderProps {
//   images: any[]
// }

// const content = {
//   ar: {
//     noImages: 'لا توجد صور متاحة',
//   },
//   fr: {
//     noImages: 'Aucune image disponible',
//   },
//   en: {
//     noImages: 'No images available',
//   },
// }

// export function ImageSlider({ images }: ImageSliderProps) {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
//   const [selectedIndex, setSelectedIndex] = useState(0)

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev()
//   }, [emblaApi])

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext()
//   }, [emblaApi])

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return
//     setSelectedIndex(emblaApi.selectedScrollSnap())
//   }, [emblaApi])

//   useEffect(() => {
//     if (!emblaApi) return
//     onSelect()
//     emblaApi.on('select', onSelect)
//     return () => {
//       emblaApi.off('select', onSelect)
//     }
//   }, [emblaApi, onSelect])

//   if (images.length === 0) {
//     return (
//       <div className="bg-white rounded-xl p-12 text-center">
//         <p className="text-text-muted">{content.ar.noImages}</p>
//       </div>
//     )
//   }

//   return (
//     <div className="bg-white rounded-xl p-6 md:p-8">
//       <div className="overflow-hidden rounded-xl" ref={emblaRef}>
//         <div className="flex">
//           {images.map((image, index) => (
//             <div
//               key={image.id}
//               className="flex-[0_0_100%] min-w-0 relative"
//             >
//               <div className="aspect-[16/9] bg-background-alt relative">
//                 {image.url ? (
//                   <img
//                     src={image.url}
//                     alt={image.label || `Image ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center">
//                     <span className="text-text-muted">{image.label || `صورة ${index + 1}`}</span>
//                   </div>
//                 )}
//                 {image.label && (
//                   <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
//                     {image.label}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation */}
//       {images.length > 1 && (
//         <>
//           <button
//             onClick={scrollPrev}
//             className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
//           >
//             <ChevronRight className="w-6 h-6 text-secondary" />
//           </button>
//           <button
//             onClick={scrollNext}
//             className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
//           >
//             <ChevronLeft className="w-6 h-6 text-secondary" />
//           </button>

//           {/* Dots */}
//           <div className="flex justify-center gap-2 mt-4">
//             {images.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => emblaApi?.scrollTo(index)}
//                 className={cn(
//                   'w-3 h-3 rounded-full transition-all',
//                   selectedIndex === index ? 'bg-primary w-6' : 'bg-border hover:bg-primary/50'
//                 )}
//               />
//             ))}
//           </div>
//         </>
//       )}

//       {/* Image Counter */}
//       <div className="text-center mt-4 text-text-muted text-sm">
//         {selectedIndex + 1} / {images.length}
//       </div>
//     </div>
//   )
// }
