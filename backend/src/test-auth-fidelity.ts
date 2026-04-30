import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://neondb_owner:npg_KF9fhyo3eVuJ@ep-mute-morning-anbgnh7i-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require"
    }
  }
})

async function main() {
  const username = 'admin@tozdaght.ma'
  const password = 'Password2026!'
  
  console.log(`Testing login for [${username}]...`)
  
  const admin = await prisma.admin.findUnique({
    where: { username },
  })

  if (!admin) {
    console.error('❌ User not found')
    return
  }

  console.log('✅ User found. Checking password...')
  const isValid = await bcrypt.compare(password, admin.passwordHash)
  
  if (isValid) {
    console.log('🎉 Password CORRECT!')
  } else {
    console.error('❌ Password INCORRECT. Hash in DB:', admin.passwordHash)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
