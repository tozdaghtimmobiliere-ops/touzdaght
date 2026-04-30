import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://neondb_owner:npg_KF9fhyo3eVuJ@ep-mute-morning-anbgnh7i-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require"
    }
  }
})

async function updateStatus(buildingId: number, floor: number, units: number[], status: string) {
  console.log(`Updating Building ${buildingId}, Floor ${floor}, Units ${units.join(',')} to ${status}...`);
  await prisma.apartment.updateMany({
    where: {
      buildingId,
      floor,
      unitNumber: { in: units }
    },
    data: { status }
  });
}

async function main() {
  // Building IDs
  const B_ID = 1;
  const A_ID = 2;
  const D_ID = 3;
  const C_ID = 4;

  console.log('🚀 Starting Najma status updates...');

  // --- Immeuble A ---
  await updateStatus(A_ID, 3, [1], 'sold');

  // --- Immeuble B ---
  await updateStatus(B_ID, 0, [2, 4, 5], 'sold');
  await updateStatus(B_ID, 1, [4, 5], 'sold');
  await updateStatus(B_ID, 1, [1, 2, 3], 'unavailable');
  await updateStatus(B_ID, 2, [1, 2], 'sold');
  await updateStatus(B_ID, 2, [3, 4, 5], 'unavailable');
  await updateStatus(B_ID, 3, [2], 'sold');

  // --- Immeuble C ---
  await updateStatus(C_ID, 0, [2], 'sold');
  await updateStatus(C_ID, 0, [1, 3, 4], 'unavailable');
  await updateStatus(C_ID, 1, [3, 4, 5], 'sold');
  await updateStatus(C_ID, 1, [1, 2], 'unavailable');
  await updateStatus(C_ID, 2, [2, 4], 'sold');
  await updateStatus(C_ID, 2, [1, 3, 5], 'unavailable');
  await updateStatus(C_ID, 3, [1], 'sold');
  await updateStatus(C_ID, 3, [3], 'unavailable');
  await updateStatus(C_ID, 4, [4], 'sold');

  // --- Immeuble D ---
  await updateStatus(D_ID, 1, [1, 2], 'sold');
  await updateStatus(D_ID, 2, [2], 'sold');
  await updateStatus(D_ID, 3, [2], 'sold');

  console.log('✅ Najma status updates completed successfully!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
