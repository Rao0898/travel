/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['yourdomain.com'], // Add any external domains if using remote images
      formats: ['image/avif', 'image/webp'], // Add image formats if required
    },
  };
  
  export default nextConfig;
  