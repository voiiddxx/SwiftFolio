import CustomFieldform from "@/components/shared/custom/CustomFieldform"
import DeleteSection from "@/components/shared/delete/DeleteSection"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

type customDataprops = {
    IsAdmin: boolean
    customData: any
}
const WhiteCustom = ({customData , IsAdmin} : customDataprops) => {
  return (
        <div className="w-full pb-8 bg-whiteCreativeBGImage">
            {
                customData.map((curr : any)=> {
                    return <div className="md:pl-52 px-10">
                        <div>
                            <h1 className="text-xl text-black font-bold">{curr.heading}</h1>
                            <p className="text-zinc-600 font-normal" >Checkout the {curr.heading} all of them are mentioned below</p>
                        </div>
                        <div className="w-full flex gap-5 flex-wrap" >
                            {
                                curr.data.map((card : any)=>{
                                    return <div>
                                        <div className="w-[400px] min-h-[200px] border-[1px] border-zinc-300 rounded-lg mt-6 flex justify-center items-center p-4 relative">
                                            {
                                                IsAdmin == true ? <div>
                                                     <div className='h-8 w-8 bg-white absolute top-8 right-8 rounded-md flex justify-center items-center pt-1' >
                                <CustomFieldform customId={curr._id} type='EDIT' useridclerk="550"  />
                              </div>
                              <div className='h-8 w-8 bg-white absolute top-8 right-[70px] rounded-md flex justify-center items-center pt-1' >
                                <DeleteSection deleteId={curr._id}  additionsId={card._id} type='CUSTOM'/>
                              </div>
                                                </div> : <div></div>
                                            }
                                    <Image className="h-[300px] w-[380px] object-cover rounded-md" src={card.customImage} height={500} width={500} alt="customsectionimage" />
                                    </div>
                                   <div className="w-full  flex justify-between items-center pr-5 pl-2" >
                                   <h1 className="text-blue-600 font-normal mt-5">{card.customTitle}</h1>
                                   <ArrowRight className="mt-3 text-blue-600" />
                                   </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                })
            }
        </div>
  )
}

export default WhiteCustom
