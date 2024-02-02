import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const Editbutton = () => {
  return (
    <div>
      <DropdownMenu>
  <DropdownMenuTrigger className='text-teal-400 border-[0.5px]  border-teal-400 p-2 rounded-lg' >Update Portfolio</DropdownMenuTrigger>
  <DropdownMenuContent className='bg-zinc-900 text-white' >
    <DropdownMenuLabel>Portfolio</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Add Projects</DropdownMenuItem>
    <DropdownMenuItem>Add Skills</DropdownMenuItem>
    <DropdownMenuItem>Add Acheivements</DropdownMenuItem>
    <DropdownMenuItem>Add Custom Section</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}

export default Editbutton
