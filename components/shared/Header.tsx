import Image from "next/image"
import { Button } from "../ui/button"
import logo from '../../public/logo.svg'

const Header = () => {
  return (
    <div className="h-20 w-full bg-black flex items-center justify-between pl-20 pr-20 ">
        <Image src={logo} alt="logo" height={150} width={150} />
        <Button size={"lg"} variant={"outline"} className="rounded-xl" >Login</Button>
      
    </div>
  )
}

export default Header
