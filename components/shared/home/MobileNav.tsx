import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Code2, LayoutTemplate, ListVideo, MenuIcon, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
  
const MobileNav = () => {
  return (
    <div>
      <Sheet>
  <SheetTrigger><MenuIcon className="text-violet-700" size={28} /></SheetTrigger>
  <SheetContent>
      <div>
      <div className=" sticky top-0 bg-white flex justify-between px-2 md:hidden border-b" >
      <div  >
      <Image className="h-10 w-10"  src="/logo.svg" height={800} width={800} alt="logo" />
      </div>
      <div className="flex gap-4 items-center" >
      <SignedIn>
            <UserButton   showName={true} afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in" >
        <Button size={"lg"} >Signup</Button>
        </Link>
          </SignedOut>
      </div>
    </div>

    <div className="pb-3 w-[350px] bg-white" >
         {/* row 1 */}
         <div className="h-20 rounded border-b m-2 hover:bg-zinc-100 cursor-pointer" >
            <div className="m-2 h-full w-full flex gap-4 items-center" >
              <div className="h-10 w-12 bg-violet-500 bg-opacity-10 rounded-[10px] flex justify-center items-center border-[1px] border-violet-200" >
                <ListVideo className="text-violet-700" />
              </div>
             <div>
             <h1 className="text-zinc-900 font-medium" >SwiftFolio Tour</h1>
              
             </div>
            </div>
          </div>
         {/* row 2 */}
         <div className="h-20  rounded border-b m-2 hover:bg-zinc-100 cursor-pointer" >
            <div className="m-2 h-full w-full flex gap-4 items-center" >
              <div className="h-10 w-10 bg-violet-500 bg-opacity-10 rounded-[10px] flex justify-center items-center border-[1px] border-violet-200" >
                <LayoutTemplate className="text-violet-700" />
              </div>
             <div>
             <h1 className="text-zinc-900 font-medium" >Minimal Design</h1>
           
             </div>
            </div>
          </div>
         {/* row3 */}
         <div className="h-20  rounded border-b m-2 hover:bg-zinc-100 cursor-pointer" >
            <div className="m-2 h-full w-full flex gap-4 items-center" >
              <div className="h-10 w-10 bg-violet-500 bg-opacity-10 rounded-[10px] flex justify-center items-center border-[1px] border-violet-200" >
                <Code2 className="text-violet-700" />
              </div>
             <div>
             <h1 className="text-zinc-900 font-medium" >Customization</h1>
            
             </div>
            </div>
          </div>
         {/* row 4 */}
         <div className="h-20  rounded border-b m-2 hover:bg-zinc-100 cursor-pointer" >
            <div className="m-2 h-full w-full flex gap-4 items-center" >
              <div className="h-10 w-10 bg-violet-500 bg-opacity-10 rounded-[10px] flex justify-center items-center border-[1px] border-violet-200" >
                <Sparkles className="text-violet-700" />
              </div>
             <div>
             <h1 className="text-zinc-900 font-medium" >Swiftfolio AI</h1>
             
             </div>
            </div>
          </div>
        </div>
      </div>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default MobileNav
