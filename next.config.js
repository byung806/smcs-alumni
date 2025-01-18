/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: "/smcs-alumni",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: { unoptimized: true }
};

module.exports = nextConfig;
