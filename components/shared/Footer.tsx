import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <div className=" w-full bg-transparent flex items-center justify-center" >
      <div className="flex flex-col items-center justify-center pb-16">
     
        <div className="" >
          
      <Image className="h-16 rounded-md" src={`/logo.svg`} height={500} width={500} alt="logo"/>
        </div>
        <p className="text-zinc-800 font-medium mt-4" >Created By Nikhil Kumar 💚</p>
        <div className="flex gap-10 mt-9" >
          <Github className="text-red-500" size={20} />
          <Linkedin className="text-indigo-500" size={20} />
          <Mail className="text-orange-500" size={20} />
        </div>
      </div>
    </div>
  )
}

export default Footer
