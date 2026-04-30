import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://neondb_owner:npg_KF9fhyo3eVuJ@ep-mute-morning-anbgnh7i-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require"
    }
  }
})

async function main() {
  const buildingId = 1; // Building B
  const apts = await prisma.apartment.findMany({
    where: { buildingId },
    orderBy: [{ floor: 'desc' }, { unitNumber: 'asc' }]
  })

  console.log(`--- BUILDING B (ID ${buildingId}) APARTMENTS ---`)
  apts.forEach(a => {
    console.log(`Floor: ${a.floor} | Unit: ${a.unitNumber} | Status: [${a.status}]`)
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
