import Editbutton from '@/components/shared/edit/Editbutton'
import { MenuIcon, MessageSquare, MessagesSquare } from 'lucide-react'
import React from 'react'

  type conversionHeaderProps = {
    data:any,
    admin:any
  }

const ConversionHeader = ({data ,admin} : conversionHeaderProps) => {
  return (
    <div className='w-full  flex items-center py-8 md:px-20 px-8 justify-between' >
        <div><h1 className='text-zinc-800 font-semibold text-xl font' >{data.name}</h1></div>
      
        <div>
           {
            admin==true && (
              <div>
                <Editbutton  portfolioId={data._id} />
              </div>
            )
           }
           {
            admin==false && (
              <div>
                <div>
           <MessagesSquare strokeWidth={1.5} />
           </div>
              </div>
            )
           }
        </div>
    </div>
  )
}

export default ConversionHeader
