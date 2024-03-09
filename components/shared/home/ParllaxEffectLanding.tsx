import { HeroParallax } from '@/components/ui/hero-parallax';
import React from 'react'

const ParllaxEffectLanding = () => {
    const products = [
      {
        title: "Cursor",
        link: "https://cursor.so",
        thumbnail:
        "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709357308/gahaczixumnwll3d61jx.svg",
      },
      {
        title: "Editorially",
        link: "https://editorially.org",
        thumbnail:
          "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709310672/x26ifr18ce7ybvmidspe.svg",
      },
      
      {
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail:
          "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709991441/ftslpxlsisccqndbpuvv.svg",
      },
      {
        title: "Rogue",
        link: "https://userogue.com",
        thumbnail:
        "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709311050/hirrtbrwatnemw4uvv0w.svg",
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
          title: "Rogue",
          link: "https://userogue.com",
          thumbnail:
          "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709311050/hirrtbrwatnemw4uvv0w.svg",
        },
        {
          title: "Cursor",
          link: "https://cursor.so",
          thumbnail:
          "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709357308/gahaczixumnwll3d61jx.svg",
        },
        {
          title: "Editorially",
          link: "https://editorially.org",
          thumbnail:
            "https://res.cloudinary.com/dwkmxsthr/image/upload/v1709310672/x26ifr18ce7ybvmidspe.svg",
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
       
        
      ];
  return (
    <div>
       <HeroParallax products={products} />
    </div>
  )
}

export default ParllaxEffectLanding
