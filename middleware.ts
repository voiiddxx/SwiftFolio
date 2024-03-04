import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
    publicRoutes:[
        '/',
        '/themes/darkpremium/:id',
        '/themes/whitecreative/:id',
        '/themes/linkedin/:id',
        '/api/webhook/clerk'
    ],
    ignoredRoutes:[
        '/',
        '/api/webhook/clerk'
    ]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
