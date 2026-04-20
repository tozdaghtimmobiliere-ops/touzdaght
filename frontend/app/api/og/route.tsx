import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Tozdaght | Ultra-Premium Real Estate'
    const subtitle = searchParams.get('subtitle') || 'Bespoke Architectural Excellence'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0A1628',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #1A2E4A 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1A2E4A 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px',
              border: '2px solid #C9A84C',
              backgroundColor: 'rgba(10, 22, 40, 0.8)',
              borderRadius: '24px',
            }}
          >
            <h1
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: '32px',
                color: '#C9A84C',
                textAlign: 'center',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    return new Response(`Failed to generate image`, { status: 500 })
  }
}
