/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.crunchbase.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "admin.competition.cerebry.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.igef.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.bennett.edu.in",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.uifaces.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.easyfrontend.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
