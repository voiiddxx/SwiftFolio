import { HeroParallax } from '@/components/ui/hero-parallax';
import React from 'react'

const ParllaxEffectLanding = () => {
    const products = [
        {
          title: "Moonbeam",
          link: "https://gomoonbeam.com",
          thumbnail:
            "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709655664/zblnv8zceydice96ztqw.svg",
        },
        {
          title: "Cursor",
          link: "https://cursor.so",
          thumbnail:
            "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709655664/zblnv8zceydice96ztqw.svg",
        },
        {
          title: "Rogue",
          link: "https://userogue.com",
          thumbnail:
            "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709655664/zblnv8zceydice96ztqw.svg",
        },
       
        {
          title: "Editorially",
          link: "https://editorially.org",
          thumbnail:
            "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709655664/zblnv8zceydice96ztqw.svg",
        },
        {
          title: "Editrix AI",
          link: "https://editrix.ai",
          thumbnail:
            "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709655664/zblnv8zceydice96ztqw.svg",
        },
        {
          title: "Pixel Perfect",
          link: "https://app.pixelperfect.quest",
          thumbnail:
            "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709655664/zblnv8zceydice96ztqw.svg",
        },
       
        {
          title: "Algochurn",
          link: "https://algochurn.com",
          thumbnail:
            "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709655664/zblnv8zceydice96ztqw.svg",
        },
        {
          title: "Aceternity UI",
          link: "https://ui.aceternity.com",
          thumbnail:
            "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709655664/zblnv8zceydice96ztqw.svg",
        },
        {
          title: "Tailwind Master Kit",
          link: "https://tailwindmasterkit.com",
          thumbnail:
            "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709655664/zblnv8zceydice96ztqw.svg",
        },
        {
          title: "SmartBridge",
          link: "https://smartbridgetech.com",
          thumbnail:
            "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709655664/zblnv8zceydice96ztqw.svg",
        },
        {
          title: "Renderwork Studio",
          link: "https://renderwork.studio",
          thumbnail:
            "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709655664/zblnv8zceydice96ztqw.svg",
        },
       
        {
          title: "Creme Digital",
          link: "https://cremedigital.com",
          thumbnail:
            "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709655664/zblnv8zceydice96ztqw.svg",
        },
        {
          title: "Golden Bells Academy",
          link: "https://goldenbellsacademy.com",
          thumbnail:
            "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709655664/zblnv8zceydice96ztqw.svg",
        },
        {
          title: "Invoker Labs",
          link: "https://invoker.lol",
          thumbnail:
            "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709655664/zblnv8zceydice96ztqw.svg",
        },
        {
          title: "E Free Invoice",
          link: "https://efreeinvoice.com",
          thumbnail:
            "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709655664/zblnv8zceydice96ztqw.svg",
        },
      ];
  return (
    <div>
       <HeroParallax products={products} />
    </div>
  )
}

export default ParllaxEffectLanding
