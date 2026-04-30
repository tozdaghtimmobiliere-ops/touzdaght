import bcrypt from 'bcryptjs'

const hash = '$2a$12$...' // I should get the actual hash from the DB if I can

async function test() {
    const pass = 'nezhatouzdght2026'
    // I can't easily get the hash without running another script, 
    // but I can just hash it now and compare.
    const newHash = await bcrypt.hash(pass, 12)
    const result = await bcrypt.compare(pass, newHash)
    console.log('Bcrypt test:', result)
}

test()
