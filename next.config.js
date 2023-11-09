/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['madeappliance.com'],
    },
    output: 'standalone',
}

module.exports = nextConfig
