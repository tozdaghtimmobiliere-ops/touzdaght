import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

async function test() {
  const users = await prisma.admin.findMany()
  console.log('Database users:', users.map(u => u.username))
  
  const targetUser = 'rachid@touzdght'
  const targetPass = 'rachidtouzdght2026'
  
  const admin = await prisma.admin.findUnique({ where: { username: targetUser } })
  if (!admin) {
    console.log(`User ${targetUser} not found in DB!`)
    return
  }
  
  const isMatch = await bcrypt.compare(targetPass, admin.passwordHash)
  console.log(`Password match for ${targetUser}:`, isMatch)
  
  const targetUser2 = 'nezha@touzdght'
  const targetPass2 = 'nezhatouzdght2026'
  const admin2 = await prisma.admin.findUnique({ where: { username: targetUser2 } })
  if (admin2) {
    const isMatch2 = await bcrypt.compare(targetPass2, admin2.passwordHash)
    console.log(`Password match for ${targetUser2}:`, isMatch2)
  }
}

test().catch(console.error).finally(() => prisma.$disconnect())
