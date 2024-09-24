module.exports = {
  images: {
    domains: ['www.thetravelcoach.com'],
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