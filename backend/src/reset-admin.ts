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
  const hashedPassword = await bcrypt.hash(password, 12)

  await prisma.admin.upsert({
    where: { username },
    update: { passwordHash: hashedPassword },
    create: {
      username,
      passwordHash: hashedPassword,
      role: 'super_admin'
    }
  })

  console.log('✅ Admin account created/updated:')
  console.log('User:', username)
  console.log('Pass:', password)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
