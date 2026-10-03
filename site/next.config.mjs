/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Single-process webpack workers: the sandbox's shared host deadlocks the
  // SWC minify worker pool with multiple concurrent `next build` runs.
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
};

export default nextConfig;
