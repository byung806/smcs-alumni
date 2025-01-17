/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

const nextConfig = {
    basePath: "",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: { unoptimized: true },
};

export default nextConfig;
