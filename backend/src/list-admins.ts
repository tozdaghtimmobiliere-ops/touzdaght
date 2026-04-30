import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://neondb_owner:npg_KF9fhyo3eVuJ@ep-mute-morning-anbgnh7i-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require"
    }
  }
})

async function main() {
  const admins = await prisma.admin.findMany()
  console.log('--- ADMIN USERS ---')
  admins.forEach(a => {
    console.log(`Email: ${a.email} | Role: ${a.role}`)
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
