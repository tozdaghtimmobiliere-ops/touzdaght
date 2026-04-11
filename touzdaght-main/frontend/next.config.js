/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/:path*`,
      },
    ]
  },
}

module.exports = nextConfig





































// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
    
//   },
//   images: {
//     domains: ['res.cloudinary.com', 'localhost'],
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         pathname: '/**',
//       },
//     ],
//   },
//   i18n: {
//     locales: ['ar', 'fr', 'en'],
//     defaultLocale: 'ar',
//     localeDetection: false,
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/:path*`,
//       },
//     ]
//   },
// }

// module.exports = nextConfig
