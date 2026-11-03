/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/trang-chu",
        permanent: true, // Chuyển hướng vĩnh viễn (308 redirect)
      },
    ];
  },
};

export default nextConfig;