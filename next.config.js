module.exports = {
  images: {
    domains: ['www.thetravelcoach.com'], 
    domains: ['images.ctfassets.net'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96],
    imageFiletypes: ['JPEG', 'PNG', 'WEBP'],
  },
  target: 'serverless',
  compression: true,
  browserCache: true,
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  
module.exports = withBundleAnalyzer({
  //...
});