/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
    //... existing config
    env: {
      MONGO_URI: process.env.MONGO_URI,
    },
  };