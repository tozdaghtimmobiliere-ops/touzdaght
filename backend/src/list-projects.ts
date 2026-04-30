import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://neondb_owner:npg_KF9fhyo3eVuJ@ep-mute-morning-anbgnh7i-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require"
    }
  }
})

async function main() {
  const projects = await prisma.project.findMany()
  console.log('--- PROJECTS ---')
  projects.forEach(p => {
    console.log(`Name: ${p.name} | Slug: ${p.slug} | ID: ${p.id}`)
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
