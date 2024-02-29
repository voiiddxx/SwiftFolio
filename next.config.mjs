/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['res.cloudinary.com' , 'oaidalleapiprodscus.blob.core.windows.net'],
        remotePatterns:[
            {
                protocol:'https',
                hostname:'res.cloudinary.com'
            },
            {
                protocol:'https',
                hostname:'oaidalleapiprodscus.blob.core.windows.net'
            }
        ]
    }
};

export default nextConfig;
