'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Download } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Config des plans par projet ───────────────────────────────────────────────
const PROJECT_PLANS: Record<string, { src: string; badge: string }[]> = {
  najma: [],
  tilila: [
    { src: '/images/tilila/plans/plan-tilila-1.png', badge: 'المخطط العام' },
    { src: '/images/tilila/plans/plan-tilila-2.png', badge: 'مخطط الطابق الأول' },
    { src: '/images/tilila/plans/plan-tilila-3.png', badge: 'مخطط الطابق الثاني' },
    { src: '/images/tilila/plans/plan-terrasse-tilila.png', badge: 'مخطط السطح / التيراس' },
  ],
  'ain-zarqa': [
    { src: '/images/ain-zarqa/plans/plan-ainzarqa-1.png', badge: 'المخطط العام' },
    { src: '/images/ain-zarqa/plans/plan-ainzarqa-2.png', badge: 'الطابق السفلي' },
    { src: '/images/ain-zarqa/plans/plan-ainzarqa-3.png', badge: 'الطابق الأول' },
    { src: '/images/ain-zarqa/plans/plan-ainzarqa-4.png', badge: 'الطابق الثاني' },
    { src: '/images/ain-zarqa/plans/plan-terrasse-ainzarqa.png', badge: 'مخطط السطح / التيراس' },
  ],
  gelmim: [
    { src: '/images/gelmim/plans/plan-gelmim-1.png', badge: 'المخطط العام' },
    { src: '/images/gelmim/plans/plan-gelmim-2.png', badge: 'مخطط الطوابق' },
    { src: '/images/gelmim/plans/plan-gelmim-3.png', badge: 'مخطط الطابق الأخير' },
    { src: '/images/gelmim/plans/plan-terrasse-gelmim.png', badge: 'مخطط السطح / التيراس' },
  ],
  touhmo: [
    { src: '/images/touhmo/plans/plan-touhmo-1.png', badge: 'المخطط العام' },
    { src: '/images/touhmo/plans/plan-touhmo-2.png', badge: 'مخطط الطابق الأرضي' },
    { src: '/images/touhmo/plans/plan-touhmo-3.png', badge: 'مخطط الطابق الأول' },
    { src: '/images/touhmo/plans/plan-touhmo-4.png', badge: 'مخطط الطابق الثاني' },
    { src: '/images/touhmo/plans/plan-terrasse-touhmo.png', badge: 'مخطط السطح / التيراس' },
  ],
  'hay-ta9adom': [
    { src: '/images/hay-ta9adom/plans/plan-hayta9adom-1.png', badge: 'المخطط العام' },
    { src: '/images/hay-ta9adom/plans/plan-hayta9adom-2.png', badge: 'مخطط الطابق الأرضي' },
    { src: '/images/hay-ta9adom/plans/plan-hayta9adom-3.png', badge: 'مخطط الطابق الأول' },
  ],
}

const PROJECT_CHANTIER: Record<string, string[]> = {
  tilila: [
    '/images/tilila/chantier/chantier-tilila-1.png',
    '/images/tilila/chantier/chantier-tilila-2.png',
    '/images/tilila/chantier/chantier-tilila-3.png',
  ],
  'ain-zarqa': [
    '/images/ain-zarqa/chantier/chantier-ainzarqa-1.png',
    '/images/ain-zarqa/chantier/chantier-ainzarqa-2.png',
    '/images/ain-zarqa/chantier/chantier-ainzarqa-3.png',
  ],
  gelmim: [
    '/images/gelmim/chantier/chantier-gelmim-1.png',
    '/images/gelmim/chantier/chantier-gelmim-2.png',
    '/images/gelmim/chantier/chantier-gelmim-3.png',
  ],
  touhmo: [
    '/images/touhmo/chantier/chantier-touhmo-1.png',
    '/images/touhmo/chantier/chantier-touhmo-2.png',
    '/images/touhmo/chantier/chantier-touhmo-3.png',
  ],
  'hay-ta9adom': [
    '/images/hay-ta9adom/chantier/chantier-hayta9adom-1.png',
    '/images/hay-ta9adom/chantier/chantier-hayta9adom-2.png',
    '/images/hay-ta9adom/chantier/chantier-hayta9adom-3.png',
  ],
}

// ─── Slider de base ────────────────────────────────────────────────────────────
function BaseSlider({ slides }: { slides: { src: string; badge?: string }[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setIndex((prev) => (prev + 1) % slides.length)
      if (e.key === 'ArrowRight') setIndex((prev) => (prev - 1 + slides.length) % slides.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [slides.length])

  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length)
  const next = () => setIndex((prev) => (prev + 1) % slides.length)

  if (slides.length === 0) return null

  return (
    <div className="relative rounded-xl overflow-hidden bg-background-alt">
      <div className="relative aspect-[16/9]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: index === i ? 1 : 0, zIndex: index === i ? 1 : 0 }}
          >
            <img
              src={slide.src}
              alt={slide.badge || `slide ${i + 1}`}
              className="w-full h-full object-contain bg-gray-50"
            />
            {slide.badge && (
              <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold z-10">
                {slide.badge}
              </div>
            )}
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 right-3 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-secondary" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 left-3 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-secondary" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={cn(
                  'h-2 rounded-full transition-all',
                  index === i ? 'bg-primary w-6' : 'bg-white/60 w-2 hover:bg-white'
                )}
              />
            ))}
          </div>

          <div className="absolute bottom-3 right-4 text-white/80 text-xs z-20 bg-black/30 px-2 py-1 rounded">
            {index + 1} / {slides.length}
          </div>
        </>
      )}
    </div>
  )
}

// ─── Slider Najma Spécial ──────────────────────────────────────────────────────
function NajmaSlider({ category, type }: { category: 'plans' | 'chantier'; type?: 'immeuble' | 'terrain' }) {

  // ── Immeuble uniquement ──
  if (type === 'immeuble') {
    const slides = category === 'plans'
      ? [
          { src: '/images/najma/immeuble/plans/3.jpeg', badge: 'المخطط العام 1' },
          { src: '/images/najma/immeuble/plans/4.jpeg', badge: 'المخطط العام 2' },
          { src: '/images/najma/immeuble/plans/5.jpeg', badge: 'المخطط العام 3' },
          { src: '/images/najma/immeuble/plans/plan-etage0najma.png', badge: 'مخطط الطابق السفلي' },
          { src: '/images/najma/immeuble/plans/plan-etage1najma.png', badge: 'مخطط الطابق الأول' },
          { src: '/images/najma/immeuble/plans/plan-etage2najma.png', badge: 'مخطط الطابق الثاني' },
          { src: '/images/najma/immeuble/plans/plan-etage3najma.png', badge: 'مخطط الطابق الثالث' },
          { src: '/images/najma/immeuble/plans/plan-etage4najma.png', badge: 'مخطط الطابق الرابع' },
        ]
      : [
          { src: '/images/najma/immeuble/chantier/chantier-najma-1.png', badge: '' },
          { src: '/images/najma/immeuble/chantier/chantier-najma-2.png', badge: '' },
          { src: '/images/najma/immeuble/chantier/chantier-najma-3.png', badge: '' },
        ]
    return <BaseSlider slides={slides} />
  }

  // ── Terrain uniquement ──
  if (type === 'terrain') {
    if (category === 'chantier') {
      return (
        <div className="bg-background-alt rounded-xl p-8 text-center">
          <p className="text-text-muted text-lg font-semibold">لم تبدأ الأشغال بعد</p>
        </div>
      )
    }
    const slides = [
      { src: '/images/najma/terrain/plans/plan-terrain-2d.png', badge: 'خطة التجزئة 2D' },
      { src: '/images/najma/terrain/plans/plan-terrain-3d.png', badge: 'خطة التجزئة 3D' },
    ]
    return (
      <div className="space-y-6">
        <BaseSlider slides={slides} />
        <a
          href="/images/najma/terrain/plans/plan_terrain.pdf"
          download="plan_terrain_najma.pdf"
          className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          <Download className="w-5 h-5" />
          تحميل مخطط التجزئة PDF
        </a>
      </div>
    )
  }

  // ── Sans type : afficher immeuble + terrain ensemble (page générale najma) ──
  const immeubleSlides = category === 'plans'
    ? [
        { src: '/images/najma/immeuble/plans/plan-globalnajma.png', badge: 'المخطط العام' },
        { src: '/images/najma/immeuble/plans/plan-etage0najma.png', badge: 'مخطط الطابق السفلي' },
        { src: '/images/najma/immeuble/plans/plan-etage1najma.png', badge: 'مخطط الطابق الأول' },
        { src: '/images/najma/immeuble/plans/plan-etage2najma.png', badge: 'مخطط الطابق الثاني' },
        { src: '/images/najma/immeuble/plans/plan-etage3najma.png', badge: 'مخطط الطابق الثالث' },
        { src: '/images/najma/immeuble/plans/plan-etage4najma.png', badge: 'مخطط الطابق الرابع' },
      ]
    : [
        { src: '/images/najma/immeuble/chantier/chantier-najma-1.png', badge: '' },
        { src: '/images/najma/immeuble/chantier/chantier-najma-2.png', badge: '' },
        { src: '/images/najma/immeuble/chantier/chantier-najma-3.png', badge: '' },
      ]

  const terrainSlides = category === 'plans'
    ? [
        { src: '/images/najma/terrain/plans/plan-terrain-2d.png', badge: 'خطة التجزئة 2D' },
        { src: '/images/najma/terrain/plans/plan-terrain-3d.png', badge: 'خطة التجزئة 3D' },
      ]
    : []

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-almarai font-bold text-xl text-text-primary mb-4 flex items-center gap-2">
          <span className="w-2 h-6 bg-primary rounded-full inline-block" />
          {category === 'plans' ? 'مخططات العمارة' : 'تقدم أشغال العمارة'}
        </h3>
        <BaseSlider slides={immeubleSlides} />
      </div>

      {category === 'plans' && (
        <div>
          <h3 className="font-almarai font-bold text-xl text-text-primary mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-accent rounded-full inline-block" />
            مخططات التجزئة
          </h3>
          <BaseSlider slides={terrainSlides} />
          <div className="mt-4">
            <a
              href="/images/najma/terrain/plans/plan_terrain.pdf"
              download="plan_terrain_najma.pdf"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              <Download className="w-5 h-5" />
              تحميل مخطط التجزئة PDF
            </a>
          </div>
        </div>
      )}

      {category === 'chantier' && (
        <div>
          <h3 className="font-almarai font-bold text-xl text-text-primary mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-accent rounded-full inline-block" />
            تقدم أشغال التجزئة
          </h3>
          <div className="bg-background-alt rounded-xl p-8 text-center">
            <p className="text-text-muted text-lg font-semibold">لم تبدأ الأشغال بعد</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Interface & Export principal ──────────────────────────────────────────────
interface ImageSliderProps {
  images: any[]
  projectSlug?: string
  category?: 'plans' | 'chantier'
  type?: 'immeuble' | 'terrain'
}

export function ImageSlider({ images, projectSlug, category = 'plans', type }: ImageSliderProps) {
  if (projectSlug === 'najma') {
    return (
      <div className="bg-white rounded-xl p-6 md:p-8">
        <NajmaSlider category={category} type={type} />
      </div>
    )
  }

  const localSlides = projectSlug && category === 'plans'
    ? PROJECT_PLANS[projectSlug] || []
    : projectSlug && category === 'chantier'
    ? (PROJECT_CHANTIER[projectSlug] || []).map((src) => ({ src }))
    : images.map((img) => ({ src: img.url, badge: img.label }))

  if (localSlides.length === 0) {
    return (
      <div className="bg-white rounded-xl p-12 text-center">
        <p className="text-text-muted">لا توجد صور متاحة</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-6 md:p-8">
      <BaseSlider slides={localSlides} />
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
