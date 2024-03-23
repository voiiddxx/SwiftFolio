import ConversionAbout from '@/components/themecomponents/conversionflow/ConversionAbout'
import ConversionCustom from '@/components/themecomponents/conversionflow/ConversionCustom'
import ConversionFooter from '@/components/themecomponents/conversionflow/ConversionFooter'
import ConversionHero from '@/components/themecomponents/conversionflow/ConversionHero'
import ConversionProject from '@/components/themecomponents/conversionflow/ConversionProject'
import ConversionSkill from '@/components/themecomponents/conversionflow/ConversionSkill'
import Conversionachivement from '@/components/themecomponents/conversionflow/Conversionachivement'
import CoversionQualification from '@/components/themecomponents/conversionflow/CoversionQualification'
import { Button } from '@/components/ui/button'
import { getAcheivemtUSingClerkid } from "@/lib/actions/achivement.action"
import { getCustomSection } from "@/lib/actions/custom.action"
import { getCollegeasPerClerkId } from "@/lib/actions/education.action"
import { getPortfolioBasedonuserClerkId } from "@/lib/actions/portfolio.action"
import { getProjectByclerkId } from "@/lib/actions/project.action"
import { getSchoolasperClerkId } from "@/lib/actions/school.action"
import { getSkillUsingclerkId } from "@/lib/actions/skill.action"
import { getWorkExperinceAsPerclerkId } from "@/lib/actions/work.action"
import { currentUser } from "@clerk/nextjs"
import Image from 'next/image'
import Link from 'next/link'
const page = async ({
  params:{ id },
} : {params:{
  id : string
}}) => {


  const user = await currentUser();

  const portfolio = await getPortfolioBasedonuserClerkId(id);
  
    if(portfolio.length == 0){
      return <div className=" min-h-screen w-full bg-white flex flex-col justify-center items-center px-10 ">
       <div className="h-[450px] w-[450px] object-cover" >
       <Image className="w-full h-full object-cover" src="https://res.cloudinary.com/dwkmxsthr/image/upload/v1710736851/sfnlandxnafe2lr448be.jpg" height={1000} width={1000} alt="error image" />
       </div>
       <div className=" flex justify-center items-center flex-col" >  
      <h1 className="text-4xl font-semibold text-violet-700" >Opps!</h1>
      <p className="text-xl font-normal text-center mt-2 text-zinc-600" >Seems Like Your Haven't Crrated Your Portfolio</p>
      <div className=" flex gap-2 mt-4" >
        <Link href="/" ><Button size={"lg"} variant={"outline"} >Go to Home Page</Button></Link>
        <Link href="/portfolio/create" ><Button size={"lg"}  >Create Your Portfolio</Button></Link>
      </div>

       </div>
        
      </div>
    }


  const schools = await getSchoolasperClerkId(id);
  const colleges= await getCollegeasPerClerkId(id);
  const projects = await getProjectByclerkId(id);
  const works = await getWorkExperinceAsPerclerkId(id);
  const achivements = await getAcheivemtUSingClerkid(id);
  const customData = await getCustomSection(id);
  const skills = await getSkillUsingclerkId(id);


  

  

  const admin = portfolio[0].clerkId===user?.id;
  
  return (
    <div>
      <ConversionHero data={portfolio[0]} admin={admin} />
      <CoversionQualification admin={admin} college={colleges} school={schools} work={works}/>
      <ConversionProject admin={admin} projects={projects} />
      <Conversionachivement achivement={achivements} admin={admin} />
      <ConversionAbout data={portfolio[0]}/>
      <ConversionCustom admin={admin} custom={customData} />
      <ConversionSkill skill={skills}/>
      <ConversionFooter data={portfolio[0]}/>
    </div>
  )
}

export default page
