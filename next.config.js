/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config, { isServer }) => {
    //     if (!isServer) {
    //         config.node = {
    //             net: 'empty'
    //         };
    //     }

    //     return config;
    // },
    // webpack: (config, { isServer }) => {
    //     if (isServer) config.node = { net: 'empty' }
    //     return config
    // },
    reactStrictMode: true,
    images: {
        domains: ['madeappliance.com'],
    },
    output: 'standalone',
}

module.exports = nextConfig
