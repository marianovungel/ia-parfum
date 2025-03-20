/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'th.bing.com',
            },
            {
                protocol: 'https',
                hostname: 'kenperfume.com',
            },
            {
                protocol: 'https',
                hostname: 'fimgs.net',
            },
            {
                protocol: 'https',
                hostname: 'www.sephora.fr',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ]
    }
};

export default nextConfig;
