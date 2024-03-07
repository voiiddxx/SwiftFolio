import Image from "next/image"
import { Button } from "../ui/button"
import logo from '../../public/logo.svg'
import { Dices, Flame, User } from "lucide-react"
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
    <Flame className="text-white mr-1" size={15} />
      <p className="text-[12px] text-white" >
        Free access to all template to our first 50 coustomer</p>
    </div>
    <div className=" sticky top-0 w-full h-20 py-4 md:px-32 flex items-center justify-between border-b border-zinc-200 bg-white text-white" > 
    <div>
      <Image className="h-40 w-40"  src="/logo.svg" height={800} width={800} alt="logo" />
     
    </div>
    <div>
      <h1>Hello</h1>
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <p className="text-black font-medium tect-lg" >Getting Started</p>
        </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="h-[300px] w-[500px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]" >
          <div className="h-20 bg-red-300 m-2" >
            <div className="m-2" ></div>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <p className="text-black font-medium tect-lg" >Getting Started</p>
        </NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <p className="text-black font-medium tect-lg" >Getting Started</p>
        </NavigationMenuTrigger>
      <NavigationMenuContent>
       
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

    </div>
      
      {/* <Image className="md:h-16 h-12" src={`/logo.svg`} height={500} width={200} alt="logo"/>
      <div className="md:mr-24 mr-8" >
        <div className="px-3 py-3 rounded-sm bg-violet-700  flex justify-center items-center" >
         <Link href="/template" >
         <p className="flex gap-2 items-center text-[12px] " ><Dices size={20} /> Templates</p></Link>
        </div>
      </div> */}
    </div>
    </>
  )
}

export default Header
