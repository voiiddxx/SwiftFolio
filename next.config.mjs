/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['res.cloudinary.com' , 'oaidalleapiprodscus.blob.core.windows.net' , 'asset.cloudinary.com'],
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
        ]
    }
};

export default nextConfig;
