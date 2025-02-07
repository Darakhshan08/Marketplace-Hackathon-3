/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "s3-alpha-sig.figma.com",
        },
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
      
      ],
    },
 };

export default nextConfig;
