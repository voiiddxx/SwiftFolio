import Image from "next/image"
import { Button } from "../ui/button"
import logo from '../../public/logo.svg'
import { User } from "lucide-react"
import Link from "next/link"

const Header = () => {
  return (
    <div className="w-full py-4 md:px-32 flex items-center justify-between border-b border-zinc-200 bg-white text-white" >
      <Image className="md:h-16 h-12" src={`/logo.svg`} height={500} width={200} alt="logo"/>
      <div className="md:mr-24 mr-8" >
        <div className="px-3 py-3 rounded-sm bg-violet-700  flex justify-center items-center" >
         <Link href="/portfolio/create" >
         <p className="flex gap-2 items-center text-[12px] " ><User size={20} /> Login/Signup</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Header
