import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start items-center mt-28">
      <h1 className="text-white font-bold text-6xl text-center leading-normal ">Create Your personol Website <br /> <span className="text-blue-500" >With SwiftFolio</span></h1>
      <p className="text-gray-400 text-center mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum voluptatem sapiente <br /> consectetur officia natus eveniet delectus reiciendis sequi aperiam cupiditate.</p>
      <div className="mt-5 flex gap-3" >
        <Button className="bg-white text-black">Create Now</Button>
        <Button className="bg-transparent border-[0.5px] border-blue-500 text-blue-300">Give a Star on Github</Button>
      </div>

    </div>
  );
}
