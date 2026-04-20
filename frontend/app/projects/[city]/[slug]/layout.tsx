import type { Metadata } from 'next'

interface Props {
  params: { city: string; slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, slug } = params
  
  // Clean slugs for title
  const projectName = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, ' ')

  // Specific overrides for Arabic-first content
  let title = `${projectName} - ${cityName} | Tozdaght Immobilière`
  let description = `استكشف مشروع ${projectName} في مدينة ${cityName}. شقق وبقع أرضية متميزة من توزدغت للعقار والبناء.`

  if (slug === 'najma') {
    title = 'مشروع إقامة النجمة - تيزنيت | Tozdaght'
    description = 'مشروع النجمة بتيزنيت: شقق سكنية متكاملة، بقع أرضية محفظة، ومكاتب إدارية في موقع استراتيجي بقلب المدينة.'
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [`/images/${slug}/${slug}-thumbnail.jpg`],
    },
  }
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
