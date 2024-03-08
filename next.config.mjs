/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['res.cloudinary.com' , 'oaidalleapiprodscus.blob.core.windows.net' , 'asset.cloudinary.com' , 'aceternity.com'],
        remotePatterns:[
            {
                protocol:'https',
                hostname:'res.cloudinary.com'
            },
            {
                protocol:'https',
                hostname:'oaidalleapiprodscus.blob.core.windows.net'
            },
            {
                protocol:'https',
                hostname:'asset.cloudinary.com'
            },
            {
                protocol:'https',
                hostname:'aceternity.com'
            },
        ]
    }
};

export default nextConfig;
