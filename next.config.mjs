/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: {
        appIsrStatus: false,
        buildActivity: false,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
