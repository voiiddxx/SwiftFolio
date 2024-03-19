
import DeleteSection from '@/components/shared/delete/DeleteSection'
import Addproject from '@/components/shared/projects/Addproject'
import { DeleteProject } from '@/lib/actions/project.action'
import { currentUser } from '@clerk/nextjs'
import {  Edit, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


type projectstypeProps = {
  data: any
  adminData : boolean
}


const DarkProject = ({data , adminData} : projectstypeProps) => {

  

  
  return (
   <>
   {
    data.length < 1 ? <div></div> :  
     <div className='w-full bg-heroBgImage pb-16 pt-8 flex justify-center items-center flex-col'>
       <div className='h-20 w-full flex flex-col mt-12 items-center justify-center' >
        <h1 className='text-2xl font-medium text-green-300'> Checkout the Projects</h1>
        <p className='font-normal text-zinc-500 text-sm' >All the projects out there with deployed links</p>
        </div>

        <div className='h-auto w-full flex items-start flex-wrap justify-center gap-5 mt-6'>
          {
            data.map((curr : any) => {
              return  <Link href={curr.projectlink} ><div className='max-h-[400px] w-[350px] bg-zinc-800 bg-opacity-60 rounded-lg border-[1px] border-zinc-700' >
              <div className='h-[180px] w-full bg-red-50 rounded-t-lg'>
              <Image className='h-[180px] w-full rounded-t-md object-cover' src={curr.projectthumbnail} height={180} width={450} alt="logo" />
              </div>
              <div className='p-2'>
                 <div className='h-10 w-full flex justify-between items-center '>
                 <h1 className='text-teal-300 font-medium text-xl' >{curr.projectname}</h1>
                 <div className='bg-zinc-700 rounded-2xl bg-opacity-35'>
                  <p className='text-[11px] py-[2px] px-2 text-orange-300'>Deployed</p>
                 </div>
                 </div>
                  <p className='font-normal text-zinc-300 text-[12px] leading-5'> {curr.projectdetail} </p>
              </div>
              <div className='h-3 w-full'></div>
              </div></Link>
            })
          }
        </div>
      </div>
    
   }
   </>
  )
}

export default DarkProject

