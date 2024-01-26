import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
const kanit = Roboto({ 
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
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
