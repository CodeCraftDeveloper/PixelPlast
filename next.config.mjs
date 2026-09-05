/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/manufacturing",
        destination: "/capabilities",
        permanent: true,
      },
      {
        source: "/injection-moulding",
        destination: "/capabilities",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
