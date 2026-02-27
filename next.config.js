/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable SWC minification for faster builds and smaller bundle sizes
  swcMinify: true,

  // Optimize static generation
  staticPageGenerationTimeout: 60,

  // Enable React strict mode for better error detection
  reactStrictMode: true,

  // Compression for better performance
  compress: true,

  // Generate ETag headers
  generateEtags: true,

  // PoweredBy header
  poweredByHeader: false,

  // Headers configuration
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      },
      {
        source: '/_not-found',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600'
          }
        ]
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
