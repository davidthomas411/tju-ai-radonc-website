/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gruc9opbjll8ofcl.public.blob.vercel-storage.com",
      },
    ],
  },
}

export default nextConfig
