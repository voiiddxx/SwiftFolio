import { Loader } from "lucide-react";

export default function Loading(){
    return  <div className="min-h-screen w-full flex justify-center items-center flex-col" >
    <div className='flex justify-center items-center gap-2' >
        <Loader className='animate-spin text-violet-700' size={19} />
        <p className='text-violet-700 animate-pulse font-medium' >Please Wait Your Portfolio is Rendering</p>
    </div>
</div>
}