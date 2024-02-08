
import DarkAbout from "@/components/themecomponents/darkpremium/DarkAbout"
import DarkProject from "@/components/themecomponents/darkpremium/DarkProject"
import Darkachivement from "@/components/themecomponents/darkpremium/Darkachivement"
import DarkpremHero from "@/components/themecomponents/darkpremium/DarkpremHero"
import { getAcheivemtUSingClerkid } from "@/lib/actions/achivement.action"
import { getPortfolioBasedonuserClerkId } from "@/lib/actions/portfolio.action"
import { getProjectByclerkId } from "@/lib/actions/project.action"
import { currentUser } from "@clerk/nextjs"



const page = async ({
  params:{ id },
} : {params:{
  id : string
}}) => {


  const user = await currentUser();

  const portfolio = await getPortfolioBasedonuserClerkId(id);
  const projects = await getProjectByclerkId(id);
  const achivements = await getAcheivemtUSingClerkid(id);
  

  
  
  const admin = portfolio[0].clerkId===user?.id;
  


  
  return (
    <div>
      <DarkpremHero data={portfolio[0]} adminData={admin} />
      <DarkAbout/>
      <DarkProject data={projects}/>
      <Darkachivement achivements={achivements} />
      
    </div>

  )
}

export default page
