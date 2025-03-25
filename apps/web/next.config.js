/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "@repo/tokens", "@repo/config"],
  reactStrictMode: true
};

export default nextConfig;
