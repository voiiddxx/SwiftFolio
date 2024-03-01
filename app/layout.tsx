import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { dark, neobrutalism } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider"
const kanit = Poppins({ 
  subsets: ["latin"],
  weight:["300" ,  "400" , "500" , "700" , "900"]
   });

export const metadata: Metadata = {
  title: "SwiftFolio",
  description: "A Platform for Building portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
        baseTheme: dark
    }} >
      <html lang="en">
      <body className={kanit.className}>
        <ThemeProvider attribute="class"
            defaultTheme="dark" >
        {children}
        </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
