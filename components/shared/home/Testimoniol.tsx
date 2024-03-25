import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import React from 'react'

export const Testimoniol = () => {
     
const testimonials = [
    {
      quote:
        "I was blown away by how easy it was to create my portfolio using this platform. The customizable templates made it simple to showcase my work exactly how I envisioned it. Highly recommend!",
      name: "Neha",
      title: "CSE'21",
    },
    {
      quote:
        "This platform exceeded all my expectations. Not only was it easy to use, but the customer support team was incredibly helpful and responsive whenever I had questions. I couldn't be happier with my portfolio",
      name: "Void",
      title: "CSE'21",
    },
    {
      quote: "As someone with no coding experience, I was amazed at how professional my portfolio looked after just a few clicks. The AI-powered features really took my portfolio to the next level!",
      name: "Somyaaa",
      title: "",
    },
    {
      quote:
        "Thanks to this platform, I was able to create a stunning portfolio that helped me land my dream job. The feedback and analytics features were invaluable in tracking my progress and refining my portfolio for maximum impact.",
      name: "Pankaj",
      title: "Mech'21",
    },
    {
      quote:
        "I've tried other portfolio builders before, but none compare to this one. The minimalist designs are perfect for highlighting my work, and the intuitive interface made the whole process a breeze.",
      name: "Rajeev",
      title: "MBA",
    },
  ];
  return (
    <div>
      {/* TESTIMONIO HEADING */}
      <div></div>
      {/* TESTMONIOL INFINITE CARDS */}
      <div className="h-[65rem] md:px-32 pr-8  flex flex-col antialiased bg-violet-700 dark:bg-grid-white/[0.05] items-start justify-center relative overflow-hidden">
       {/* HEADING */}
       <div className='ml-4 my-10' >
        <h1 className='md:text-3xl text-xl text-white font-semibold' >Testimonials of our clients,</h1>
        <h1 className='md:text-3xl text-xl font-semibold text-white' >prove why you need them from yours</h1>

       </div>
        
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>  
     
    </div>
  )
}

export default Testimoniol
