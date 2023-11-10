/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath:
        process.env.NEXT_PUBLIC_DEPLOYMENT === "GREEN"
            ? process.env.GREEN_URL
            : process.env.BLUE_URL,
    distDir: "dist",
    output: "export",
};

module.exports = nextConfig;
