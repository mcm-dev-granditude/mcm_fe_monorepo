/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "@repo/tokens", "@repo/config", "@repo/content"],
  reactStrictMode: true
};

export default nextConfig;
