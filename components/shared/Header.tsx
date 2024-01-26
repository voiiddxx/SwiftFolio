import { Button } from "../ui/button"


const Header = () => {
  return (
    <div className="h-20 w-full bg-transparent flex items-center justify-between pl-20 pr-20">
        <h1 className="text-white font-semibold text-2xl">SwiftFolio</h1>
        <Button size={"lg"} variant={"outline"} className="rounded-xl" >Login</Button>
      
    </div>
  )
}

export default Header
