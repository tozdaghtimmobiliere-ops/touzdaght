import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://neondb_owner:npg_KF9fhyo3eVuJ@ep-mute-morning-anbgnh7i-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require"
    }
  }
})

async function main() {
  const result = await prisma.project.update({
    where: { slug: 'najma' },
    data: { name: 'تجزئة النجمة' }
  })
  console.log(`Updated project name to: ${result.name}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
