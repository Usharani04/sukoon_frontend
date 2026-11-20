/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.sukoonhealth.com' },
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'http', hostname: '127.0.0.1' },
      // NEW for the therapists page
      { protocol: 'https', hostname: 'sukoon-irrz.onrender.com', pathname: '/uploads/**' }, // Strapi on Render (local uploads)
      { protocol: 'https', hostname: 'res.cloudinary.com' },             // if you move uploads to Cloudinary
      { protocol: 'https', hostname: 'i.ytimg.com', pathname: '/vi/**' }, // YouTube thumbnails
    ],
  },
};

module.exports = nextConfig;
