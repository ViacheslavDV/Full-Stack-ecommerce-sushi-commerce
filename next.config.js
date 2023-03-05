/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true,
 async redirects() {
  return [
   //  {
   //   source: "/",
   //   destination: "/",
   //   permanent: true,
   //  },
   {
    source: "/uploads/:name",
    destination: `http://localhost:4200/uploads/:name`,
    permanent: true,
   },
  ];
 },
};

module.exports = nextConfig;
