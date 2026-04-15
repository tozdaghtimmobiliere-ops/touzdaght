import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: Request,
  { params }: { params: { path: string[] } }
) {
  const dirPath = params.path.join('/')
  const fullPath = path.join(process.cwd(), 'public', dirPath)

  try {
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ success: false, error: 'Directory not found' }, { status: 404 })
    }

    const files = fs.readdirSync(fullPath)
    const images = files.filter(file => 
      ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(path.extname(file).toLowerCase())
    ).map(file => `/${dirPath}/${encodeURIComponent(file)}`)

    return NextResponse.json({ success: true, images })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to read directory' }, { status: 500 })
  }
}
