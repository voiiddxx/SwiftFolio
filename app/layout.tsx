import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const kanit = Kanit({ 
  subsets: ["latin"],
  weight:["300" , "400" , "500" , "600" , "700" ,  "800" ,  "900"]
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
