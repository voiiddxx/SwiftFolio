import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Questions = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col px-10' >
            <h1 className='text-2xl font-semibold mt-20' >Answers of all your <span className='text-violet-700' >queries</span> </h1>
            <p className='text-gray-700 mt-2 text-center' >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className='md:w-[500px] min-w-[300px] mt-10 mx-10' >
        <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
    </div>
  )
}

export default Questions
