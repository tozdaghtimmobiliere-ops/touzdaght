import Link from 'next/link'
import { MapPin, Building, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: any;
  types: Record<string, string>;
  t: any;
  projectImages: Record<string, string>;
  cityOverrides: Record<string, string>;
}

export function ProjectCard({ project, types, t, projectImages, cityOverrides }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.city.slug}/${project.slug}`}>
      <div className="project-card-luxury group bg-white dark:bg-dark-light h-full flex flex-col border border-border dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <div className="aspect-[16/10] relative overflow-hidden bg-background-alt dark:bg-dark">
          {projectImages[project.slug] ? (
            <img src={projectImages[project.slug]} alt={project.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-secondary/5">
              <Building className="w-12 h-12 text-gold/20" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute top-4 right-4 z-10">
            <span className={cn('px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md',
              project.status === 'active' ? 'bg-primary text-white' : 'bg-secondary/80 text-white backdrop-blur-sm border border-white/10')}>
              {project.status === 'active' ? t.filter.active : t.filter.completed}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 z-10">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-[10px] font-black text-white uppercase tracking-widest">
              {types[project.type] || project.type}
            </span>
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4" />
            {cityOverrides[project.slug] || project.city.name}
          </div>
          
          <h3 className="font-almarai text-xl font-bold text-secondary dark:text-white group-hover:text-gold transition-colors duration-300 mb-3">
            {project.name}
          </h3>

          {project.description && (
            <p className="text-sm text-secondary font-cairo line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          )}

          <div className="mt-auto flex items-center justify-between pt-5 border-t border-border/50 dark:border-white/5">
            <div className="flex items-center gap-2 text-secondary/40 dark:text-gray-500 text-[10px] font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5 text-gold/40" />
              {project._count?.buildings > 0 ? `${project._count.buildings} Units`
                : project._count?.parcels > 0 ? `${project._count.parcels} Plots` : 'Units'}
            </div>
            <span className="text-accent font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
              {t.viewDetails} <ArrowLeft className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
