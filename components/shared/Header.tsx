import Image from "next/image"
import { Button } from "../ui/button"
import logo from '../../public/logo.svg'
import { ArrowRight, Code2, Dices, Flame, Gem, LayoutTemplate, ListVideo, Menu, MenuIcon, Play, Shapes, Sparkles, User, View, Workflow } from "lucide-react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


const Header = () => {

  
  return (
    <>
    <div className="h-10 w-full flex justify-center items-center bg-violet-700" >
    <Flame className="text-white mr-1" size={10} />
      <p className="text-[12px] text-white" >
        Free access to all template to our first 50 coustomer</p>
    </div>
    {/* MobileNav */}
    <div className=" flex justify-between px-6 md:hidden" >
      <div  >
      <Image className="h-20 w-32"  src="/logo.svg" height={800} width={800} alt="logo" />
      </div>
      <div className="flex gap-4 items-center" >
        <Button size={"lg"} >Signup</Button>
        <MenuIcon className="text-violet-700" size={28} />
      </div>

    </div>
    <div className=" sticky top-0 w-full h-20 py-4 md:px-32  items-center justify-between  border-zinc-200 bg-white text-white z-50 hidden md:flex" > 
    <div>
      <Image className="h-40 w-40"  src="/logo.svg" height={800} width={800} alt="logo" />
     
    </div>
    <div className="flex" >
   
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
       <div className="flex items-center" >
        <Shapes className="mr-2 text-violet-700"  size={15} />
       <p className="text-black font-medium tect-lg" >Getting Started</p>
       </div>
        </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="pb-3 w-[500px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]" >
         {/* row 1 */}
         <div className="h-20  rounded border-b m-2 hover:bg-zinc-100 cursor-pointer" >
            <div className="m-2 h-full w-full flex gap-4 items-center" >
              <div className="h-14 w-14 bg-violet-500 bg-opacity-10 rounded-sm flex justify-center items-center border-[1px] border-violet-200" >
                <ListVideo className="text-violet-700" />
              </div>
             <div>
             <h1 className="text-zinc-900 font-medium" >SwiftFolio Tour</h1>
              <p className="text-sm font-medium text-zinc-500" >An overview of the swiftfolio for what we offer</p>
             </div>
            </div>
          </div>
         {/* row 2 */}
         <div className="h-20  rounded border-b m-2 hover:bg-zinc-100 cursor-pointer" >
            <div className="m-2 h-full w-full flex gap-4 items-center" >
              <div className="h-14 w-14 bg-violet-500 bg-opacity-10 rounded-sm flex justify-center items-center border-[1px] border-violet-200" >
                <LayoutTemplate className="text-violet-700" />
              </div>
             <div>
             <h1 className="text-zinc-900 font-medium" >Minimal Design</h1>
              <p className="text-sm font-medium text-zinc-500" >Get Large varity of creative and minimal designs </p>
             </div>
            </div>
          </div>
         {/* row3 */}
         <div className="h-20  rounded border-b m-2 hover:bg-zinc-100 cursor-pointer" >
            <div className="m-2 h-full w-full flex gap-4 items-center" >
              <div className="h-14 w-14 bg-violet-500 bg-opacity-10 rounded-sm flex justify-center items-center border-[1px] border-violet-200" >
                <Code2 className="text-violet-700" />
              </div>
             <div>
             <h1 className="text-zinc-900 font-medium" >Customization</h1>
              <p className="text-sm font-medium text-zinc-500" >An overview of the swiftfolio for what we offer</p>
             </div>
            </div>
          </div>
         {/* row 4 */}
         <div className="h-20  rounded border-b m-2 hover:bg-zinc-100 cursor-pointer" >
            <div className="m-2 h-full w-full flex gap-4 items-center" >
              <div className="h-14 w-14 bg-violet-500 bg-opacity-10 rounded-sm flex justify-center items-center border-[1px] border-violet-200" >
                <Sparkles className="text-violet-700" />
              </div>
             <div>
             <h1 className="text-zinc-900 font-medium" >Swiftfolio AI</h1>
              <p className="text-sm font-medium text-zinc-500" >Genreate cool and creative details about project , about , anything</p>
             </div>
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
      <div className="flex items-center" >
        <Gem className="mr-2 text-violet-700"  size={15} />
       <p className="text-black font-medium tect-lg" >Pricing</p>
       </div>
        </NavigationMenuTrigger>
      <NavigationMenuContent>
        {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
      <div className="flex items-center" >
        <Workflow className="mr-2 text-violet-700"  size={15} />
       <p className="text-black font-medium tect-lg" >Workflow</p>
       </div>
        </NavigationMenuTrigger>
      <NavigationMenuContent>
       
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
    </div>
    <div className="flex gap-2" >
    <Button size={"lg"} variant={"outline"} className="text-zinc-800"  >Login Now</Button>
    <Button className="bg-violet-700" size={"lg"} >Get Started For Free <ArrowRight className="ml-1"  strokeWidth={1.5} color="white" /> </Button>
    </div>
    </div>
    </>
  )
}

export default Header
