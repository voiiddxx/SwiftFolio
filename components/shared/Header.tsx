import Image from "next/image"
import { Button } from "../ui/button"
import logo from '../../public/logo.svg'
import { User } from "lucide-react"
import Link from "next/link"

const Header = () => {
  return (
    <div className="h-24 w-full py-2 flex items-center justify-between border-b border-zinc-200 bg-white" >
      <Image className="h-16" src={`/logo.svg`} height={500} width={500} alt="logo"/>
      <div className="mr-24" >
        <div className="px-3 py-3 rounded-sm bg-violet-700  flex justify-center items-center" >

         <Link href="/portfolio/create" >
         <p className="flex gap-2 items-center" ><User size={20} /> Create Your Account </p></Link>
        </div>
      </div>
    </div>
  )
}

export default Header
