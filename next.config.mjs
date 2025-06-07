/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: {
    allowedDevOrigins: ['http://192.168.1.60'],
  },
  images: {
    domains: ['ywc20.ywc.in.th'], // ✅ เพิ่ม hostname นี้
  },
};



export default nextConfig;
