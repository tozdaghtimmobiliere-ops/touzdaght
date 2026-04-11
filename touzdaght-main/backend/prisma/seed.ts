import { PrismaClient } from '../generated/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create admin users
  const superAdminPassword = await bcrypt.hash('nezhatouzdght2026', 12)
  const adminPassword = await bcrypt.hash('rachidtouzdght2026', 12)

  await prisma.admin.upsert({
    where: { username: 'nezha@touzdght' },
    update: {},
    create: {
      username: 'nezha@touzdght',
      passwordHash: superAdminPassword,
      role: 'super_admin',
    },
  })

  await prisma.admin.upsert({
    where: { username: 'rachid@touzdght' },
    update: {},
    create: {
      username: 'rachid@touzdght',
      passwordHash: adminPassword,
      role: 'admin',
    },
  })

  console.log('✅ Admin users created')

  // Create Cities
  const cities = await Promise.all([
    prisma.city.upsert({
      where: { slug: 'agadir' },
      update: {},
      create: { name: 'أكادير', slug: 'agadir' },
    }),
    prisma.city.upsert({
      where: { slug: 'tiznit' },
      update: {},
      create: { name: 'تيزنيت', slug: 'tiznit' },
    }),
    prisma.city.upsert({
      where: { slug: 'ait-melloul' },
      update: {},
      create: { name: 'أيت ملول', slug: 'ait-melloul' },
    }),
    prisma.city.upsert({
      where: { slug: 'l9li3a' },
      update: {},
      create: { name: 'لقليعة', slug: 'l9li3a' },
    }),
  ])

  console.log('✅ Cities created')

  const tiznit = cities.find(c => c.slug === 'tiznit')!
  const agadir = cities.find(c => c.slug === 'agadir')!
  const aitMelloul = cities.find(c => c.slug === 'ait-melloul')!
  const l9li3a = cities.find(c => c.slug === 'l9li3a')!

  // Create Projects
  const projects = await Promise.all([
    // Najma - Lotissement (Tiznit)
    prisma.project.upsert({
      where: { slug: 'najma' },
      update: {},
      create: {
        name: 'تجزئة النجمة',
        slug: 'najma',
        cityId: tiznit.id,
        type: 'lotissement',
        status: 'active',
        description: 'مشروع تجزئة سكنية وتجارية حديثة في قلب تيزنيت',
        address: 'تجزئة النجمة، تيزنيت',
        totalArea: 30000,
        whatsapp: '212702060323',
      },
    }),
    // Gelmim - Residence (Tiznit)
    prisma.project.upsert({
      where: { slug: 'gelmim' },
      update: {},
      create: {
        name: 'شقق طريق كلميم',
        slug: 'gelmim',
        cityId: tiznit.id,
        type: 'residence',
        status: 'active',
        description: 'إقامة سكنية حديثة على طريق كلميم',
        address: 'طريق كلميم، تيزنيت',
        totalArea: 1200,
        whatsapp: '212702060323',
      },
    }),
    // Ain Zarqa - Residence (Tiznit) - Completed
    prisma.project.upsert({
      where: { slug: 'ain-zarqa' },
      update: {},
      create: {
        name: 'العين الزرقاء',
        slug: 'ain-zarqa',
        cityId: tiznit.id,
        type: 'residence',
        status: 'completed',
        description: 'مشروع سكني وتجاري مكتمل في العين الزرقاء',
        address: 'البقعة 766، تجزئة العين الزرقاء، تيزنيت',
        totalArea: 120,
        whatsapp: '212702060323',
      },
    }),
    // Tilila - Residence (Agadir) - Completed
    prisma.project.upsert({
      where: { slug: 'tilila' },
      update: {},
      create: {
        name: 'تيليلا',
        slug: 'tilila',
        cityId: agadir.id,
        type: 'residence',
        status: 'completed',
        description: 'مشروع سكني مكتمل في أكادير',
        address: 'تيليلا، أكادير',
        totalArea: 800,
        whatsapp: '212702060323',
      },
    }),
    // Touhmo - House (Ait Melloul)
    prisma.project.upsert({
      where: { slug: 'touhmo' },
      update: {},
      create: {
        name: 'توهمو',
        slug: 'touhmo',
        cityId: aitMelloul.id,
        type: 'house',
        status: 'active',
        description: 'منزل R+2 في أيت ملول',
        address: 'توهمو، أيت ملول',
        totalArea: 243,
        whatsapp: '212702060323',
      },
    }),
    // Hay Ta9adom - House (L9li3a)
    prisma.project.upsert({
      where: { slug: 'hay-ta9adom' },
      update: {},
      create: {
        name: 'حي التقدم',
        slug: 'hay-ta9adom',
        cityId: l9li3a.id,
        type: 'house',
        status: 'active',
        description: 'منزل R+1 في حي التقدم',
        address: 'حي التقدم، لقليعة',
        totalArea: 162,
        whatsapp: '212702060323',
      },
    }),
  ])

  console.log('✅ Projects created')

  // Create Buildings and Apartments for Najma Residences
  const najma = projects.find(p => p.slug === 'najma')!
  
  // Najma Buildings A, B, C, D
  const najmaBuildings = await Promise.all([
    prisma.building.upsert({
      where: { id: 1 },
      update: {},
      create: {
        projectId: najma.id,
        name: 'A',
        floorsCount: 5,
        apartmentsPerFloor: 2,
        totalSurface: 870,
      },
    }),
    prisma.building.upsert({
      where: { id: 2 },
      update: {},
      create: {
        projectId: najma.id,
        name: 'B',
        floorsCount: 5,
        apartmentsPerFloor: 5,
        totalSurface: 2175,
      },
    }),
    prisma.building.upsert({
      where: { id: 3 },
      update: {},
      create: {
        projectId: najma.id,
        name: 'C',
        floorsCount: 5,
        apartmentsPerFloor: 5,
        totalSurface: 2175,
      },
    }),
    prisma.building.upsert({
      where: { id: 4 },
      update: {},
      create: {
        projectId: najma.id,
        name: 'D',
        floorsCount: 5,
        apartmentsPerFloor: 2,
        totalSurface: 870,
      },
    }),
  ])

  console.log('✅ Najma buildings created')

  // Create Apartments for Najma
  for (const building of najmaBuildings) {
    const apartments = []
    for (let floor = 0; floor < building.floorsCount; floor++) {
      for (let unit = 1; unit <= building.apartmentsPerFloor; unit++) {
        // Determine status based on seed data
        let status = 'available'
        
        // Building A sold apartments
        if (building.name === 'A' && unit === 1 && (floor === 2 || floor === 3)) {
          status = 'sold'
        }
        // Building B sold apartments
        if (building.name === 'B') {
          if (unit === 1 && floor === 2) status = 'sold'
          if (unit === 2 && (floor === 0 || floor === 1 || floor === 2 || floor === 3 || floor === 4)) status = 'sold'
        }
        // Building C sold apartments
        if (building.name === 'C') {
          if (unit === 2 && (floor === 0 || floor === 2 || floor === 3)) status = 'sold'
          if (unit === 4 && (floor === 2 || floor === 4)) status = 'sold'
          if (unit === 1 && floor === 3) status = 'sold'
        }
        // Building D sold apartments
        if (building.name === 'D' && unit === 2 && (floor === 2 || floor === 3)) {
          status = 'sold'
        }

        apartments.push({
          buildingId: building.id,
          floor,
          unitNumber: unit,
          rooms: 2,
          salons: 1,
          kitchens: 1,
          bathrooms: 1,
          surface: 70 + Math.floor(Math.random() * 20),
          status,
        })
      }
    }

    await prisma.apartment.createMany({
      data: apartments,
      skipDuplicates: true,
    })
  }

  console.log('✅ Najma apartments created')

  // Create Parcels for Najma Lotissement
  const parcelData = [
    // ZONE R+2 - HE2 (residential) - 24 parcelles
    { num: 1, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 84, status: 'available' },
    { num: 2, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 84, status: 'available' },
    { num: 3, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 105, status: 'available' },
    { num: 4, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 80, status: 'available' },
    { num: 5, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 80, status: 'sold' },
    { num: 6, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 106, status: 'available' },
    { num: 7, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 91, status: 'available' },
    { num: 10, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 85, status: 'available' },
    { num: 11, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 80, status: 'available' },
    { num: 12, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 85, status: 'available' },
    { num: 13, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 80, status: 'available' },
    { num: 14, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 85, status: 'available' },
    { num: 15, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 80, status: 'available' },
    { num: 16, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 85, status: 'sold' },
    { num: 17, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 81, status: 'sold' },
    { num: 34, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 80, status: 'available' },
    { num: 37, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 80, status: 'available' },
    { num: 38, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 80, status: 'available' },
    { num: 43, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 80, status: 'available' },
    { num: 44, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 80, status: 'available' },
    { num: 45, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 80, status: 'available' },
    { num: 46, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 80, status: 'sold' },
    { num: 47, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 80, status: 'available' },
    { num: 48, code: 'HE2', usage: 'residential', zone: 'R+2', surface: 80, status: 'sold' },
    // ZONE R+2 - HC2 (commercial) - 16 parcelles
    { num: 8, code: 'HC2', usage: 'commercial', zone: 'R+2', surface: 80, status: 'sold' },
    { num: 9, code: 'HC2', usage: 'commercial', zone: 'R+2', surface: 83, status: 'sold' },
    { num: 18, code: 'HC2', usage: 'commercial', zone: 'R+2', surface: 83, status: 'available' },
    { num: 19, code: 'HC2', usage: 'commercial', zone: 'R+2', surface: 83, status: 'available' },
    { num: 32, code: 'HC2', usage: 'commercial', zone: 'R+2', surface: 86, status: 'available' },
    { num: 33, code: 'HC2', usage: 'commercial', zone: 'R+2', surface: 100, status: 'available' },
    { num: 35, code: 'HC2', usage: 'commercial', zone: 'R+2', surface: 80, status: 'sold' },
    { num: 36, code: 'HC2', usage: 'commercial', zone: 'R+2', surface: 80, status: 'sold' },
    { num: 39, code: 'HC2', usage: 'commercial', zone: 'R+2', surface: 80, status: 'sold' },
    { num: 40, code: 'HC2', usage: 'commercial', zone: 'R+2', surface: 80, status: 'sold' },
    { num: 41, code: 'HC2', usage: 'commercial', zone: 'R+2', surface: 80, status: 'available' },
    { num: 42, code: 'HC2', usage: 'commercial', zone: 'R+2', surface: 80, status: 'available' },
    { num: 49, code: 'HC2', usage: 'commercial', zone: 'R+2', surface: 80, status: 'available' },
    { num: 50, code: 'HC2', usage: 'commercial', zone: 'R+2', surface: 80, status: 'available' },
    { num: 51, code: 'HC2', usage: 'commercial', zone: 'R+2', surface: 92, status: 'available' },
    { num: 52, code: 'HC2', usage: 'commercial', zone: 'R+2', surface: 93, status: 'sold' },
    // ZONE R+3 - HC3 (commercial) - 15 parcelles
    { num: 20, code: 'HC3', usage: 'commercial', zone: 'R+3', surface: 147, status: 'available' },
    { num: 21, code: 'HC3', usage: 'commercial', zone: 'R+3', surface: 147, status: 'available' },
    { num: 22, code: 'HC3', usage: 'commercial', zone: 'R+3', surface: 147, status: 'available' },
    { num: 23, code: 'HC3', usage: 'commercial', zone: 'R+3', surface: 147, status: 'available' },
    { num: 24, code: 'HC3', usage: 'commercial', zone: 'R+3', surface: 147, status: 'available' },
    { num: 25, code: 'HC3', usage: 'commercial', zone: 'R+3', surface: 147, status: 'available' },
    { num: 26, code: 'HC3', usage: 'commercial', zone: 'R+3', surface: 140, status: 'available' },
    { num: 27, code: 'HC3', usage: 'commercial', zone: 'R+3', surface: 140, status: 'available' },
    { num: 53, code: 'HC3', usage: 'commercial', zone: 'R+3', surface: 150, status: 'available' },
    { num: 54, code: 'HC3', usage: 'commercial', zone: 'R+3', surface: 141, status: 'available' },
    { num: 55, code: 'HC3', usage: 'commercial', zone: 'R+3', surface: 141, status: 'available' },
    { num: 56, code: 'HC3', usage: 'commercial', zone: 'R+3', surface: 141, status: 'available' },
    { num: 57, code: 'HC3', usage: 'commercial', zone: 'R+3', surface: 141, status: 'available' },
    { num: 58, code: 'HC3', usage: 'commercial', zone: 'R+3', surface: 141, status: 'available' },
    { num: 59, code: 'HC3', usage: 'commercial', zone: 'R+3', surface: 141, status: 'available' },
    // ZONE R+4 - HE4 (residential) - 2 parcelles
    { num: 30, code: 'HE4', usage: 'residential', zone: 'R+4', surface: 254, status: 'available' },
    { num: 86, code: 'HE4', usage: 'residential', zone: 'R+4', surface: 870, status: 'available' },
    // ZONE R+4 - HC4 (commercial) - 29 parcelles
    { num: 28, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 214, status: 'available' },
    { num: 29, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 233, status: 'available' },
    { num: 31, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 243, status: 'available' },
    { num: 60, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 212, status: 'available' },
    { num: 61, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 212, status: 'sold' },
    { num: 62, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 211, status: 'available' },
    { num: 63, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 211, status: 'available' },
    { num: 64, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 210, status: 'available' },
    { num: 65, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 209, status: 'available' },
    { num: 66, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 259, status: 'available' },
    { num: 67, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 386, status: 'available' },
    { num: 68, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 286, status: 'available' },
    { num: 69, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 246, status: 'available' },
    { num: 70, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 292, status: 'available' },
    { num: 71, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 245, status: 'available' },
    { num: 72, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 200, status: 'available' },
    { num: 73, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 200, status: 'available' },
    { num: 74, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 200, status: 'available' },
    { num: 75, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 244, status: 'available' },
    { num: 76, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 249, status: 'available' },
    { num: 77, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 257, status: 'available' },
    { num: 78, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 200, status: 'available' },
    { num: 79, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 200, status: 'available' },
    { num: 80, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 200, status: 'sold' },
    { num: 81, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 250, status: 'available' },
    { num: 82, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 241, status: 'available' },
    { num: 83, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 240, status: 'available' },
    { num: 84, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 201, status: 'available' },
    { num: 85, code: 'HC4', usage: 'commercial', zone: 'R+4', surface: 200, status: 'available' },
  ]

  await prisma.parcel.createMany({
    data: parcelData.map(p => ({
      projectId: najma.id,
      parcelNumber: p.num,
      parcelCode: p.code,
      usageType: p.usage,
      zoneType: p.zone,
      surface: p.surface,
      status: p.status,
    })),
    skipDuplicates: true,
  })

  console.log('✅ Najma parcels created')

  // Create Gelmim Building and Apartments
  const gelmim = projects.find(p => p.slug === 'gelmim')!
  const gelmimBuilding = await prisma.building.upsert({
    where: { id: 5 },
    update: {},
    create: {
      projectId: gelmim.id,
      name: 'A',
      floorsCount: 4,
      apartmentsPerFloor: 2,
      totalSurface: 560,
    },
  })

  // Gelmim apartments - only units 1 on floors 0,1,2 are available
  const gelmimApartments = []
  for (let floor = 0; floor < 4; floor++) {
    for (let unit = 1; unit <= 2; unit++) {
      let status = 'sold'
      // Available: floor 0 unit 1, floor 1 unit 1, floor 2 unit 1
      if (unit === 1 && floor <= 2) {
        status = 'available'
      }
      gelmimApartments.push({
        buildingId: gelmimBuilding.id,
        floor,
        unitNumber: unit,
        rooms: 2,
        salons: 1,
        kitchens: 1,
        bathrooms: 2,
        surface: 70,
        status,
      })
    }
  }

  await prisma.apartment.createMany({
    data: gelmimApartments,
    skipDuplicates: true,
  })

  console.log('✅ Gelmim apartments created')

  // Create Ain Zarqa Building and Apartments (mixed commercial/residential)
  const ainZarqa = projects.find(p => p.slug === 'ain-zarqa')!
  const ainZarqaBuilding = await prisma.building.upsert({
    where: { id: 6 },
    update: {},
    create: {
      projectId: ainZarqa.id,
      name: 'A',
      floorsCount: 3,
      apartmentsPerFloor: 3, // RDC: 3 commercial, Floor 1-2: 2 residential each
      totalSurface: 120,
    },
  })

  // Ain Zarqa - all sold
  const ainZarqaApartments = []
  for (let floor = 0; floor < 3; floor++) {
    const unitsPerFloor = floor === 0 ? 3 : 2
    for (let unit = 1; unit <= unitsPerFloor; unit++) {
      ainZarqaApartments.push({
        buildingId: ainZarqaBuilding.id,
        floor,
        unitNumber: unit,
        rooms: floor === 0 ? 0 : 2,
        salons: floor === 0 ? 1 : 1,
        kitchens: 1,
        bathrooms: floor === 0 ? 1 : 2,
        surface: floor === 0 ? 40 : 80,
        status: 'sold',
      })
    }
  }

  await prisma.apartment.createMany({
    data: ainZarqaApartments,
    skipDuplicates: true,
  })

  console.log('✅ Ain Zarqa apartments created')

  // Create Tilila Building and Apartments (all sold)
  const tilila = projects.find(p => p.slug === 'tilila')!
  const tililaBuilding = await prisma.building.upsert({
    where: { id: 7 },
    update: {},
    create: {
      projectId: tilila.id,
      name: 'A',
      floorsCount: 3,
      apartmentsPerFloor: 1,
      totalSurface: 240,
    },
  })

  const tililaApartments = []
  for (let floor = 0; floor < 3; floor++) {
    tililaApartments.push({
      buildingId: tililaBuilding.id,
      floor,
      unitNumber: 1,
      rooms: 2,
      salons: 1,
      kitchens: 1,
      bathrooms: 1,
      surface: 80,
      status: 'sold',
    })
  }

  await prisma.apartment.createMany({
    data: tililaApartments,
    skipDuplicates: true,
  })

  console.log('✅ Tilila apartments created')

  // Create Touhmo Building and Apartments
  const touhmo = projects.find(p => p.slug === 'touhmo')!
  const touhmoBuilding = await prisma.building.upsert({
    where: { id: 8 },
    update: {},
    create: {
      projectId: touhmo.id,
      name: 'A',
      floorsCount: 3,
      apartmentsPerFloor: 1,
      totalSurface: 243,
    },
  })

  const touhmoApartments = [
    { floor: 0, unit: 1, status: 'available' },
    { floor: 1, unit: 1, status: 'sold' },
    { floor: 2, unit: 1, status: 'sold' },
  ]

  await prisma.apartment.createMany({
    data: touhmoApartments.map(a => ({
      buildingId: touhmoBuilding.id,
      floor: a.floor,
      unitNumber: a.unit,
      rooms: 2,
      salons: 1,
      kitchens: 1,
      bathrooms: 2,
      surface: 81,
      status: a.status,
    })),
    skipDuplicates: true,
  })

  console.log('✅ Touhmo apartments created')

  // Create Hay Ta9adom Building and Apartments
  const hayTa9adom = projects.find(p => p.slug === 'hay-ta9adom')!
  const hayTa9adomBuilding = await prisma.building.upsert({
    where: { id: 9 },
    update: {},
    create: {
      projectId: hayTa9adom.id,
      name: 'A',
      floorsCount: 2,
      apartmentsPerFloor: 2,
      totalSurface: 162,
    },
  })

  const hayTa9adomApartments = [
    { floor: 0, unit: 1, status: 'available' },
    { floor: 0, unit: 2, status: 'available' },
    { floor: 1, unit: 1, status: 'sold' },
    { floor: 1, unit: 2, status: 'sold' },
  ]

  await prisma.apartment.createMany({
    data: hayTa9adomApartments.map(a => ({
      buildingId: hayTa9adomBuilding.id,
      floor: a.floor,
      unitNumber: a.unit,
      rooms: 2,
      salons: 1,
      kitchens: 1,
      bathrooms: 2,
      surface: 81,
      status: a.status,
    })),
    skipDuplicates: true,
  })

  console.log('✅ Hay Ta9adom apartments created')

  console.log('🎉 Database seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })