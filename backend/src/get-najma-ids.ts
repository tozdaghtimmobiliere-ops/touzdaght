import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://neondb_owner:npg_KF9fhyo3eVuJ@ep-mute-morning-anbgnh7i-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require"
    }
  }
})

async function main() {
  const project = await prisma.project.findFirst({
    where: { slug: 'najma' },
    include: { buildings: true }
  })
  
  if (!project) {
    console.error('Project "najma" not found')
    return
  }

  console.log('--- NAJMA PROJECT ---')
  console.log(`Project ID: ${project.id}`)
  console.log('--- BUILDINGS ---')
  project.buildings.forEach(b => {
    console.log(`Building: ${b.name} | ID: ${b.id}`)
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
