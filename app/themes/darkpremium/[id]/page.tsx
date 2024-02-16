
import DarkAbout from "@/components/themecomponents/darkpremium/DarkAbout"
import DarkCustom from "@/components/themecomponents/darkpremium/DarkCustom"
import DarkProject from "@/components/themecomponents/darkpremium/DarkProject"
import DarkQualification from "@/components/themecomponents/darkpremium/DarkQualification"
import DarkSkill from "@/components/themecomponents/darkpremium/DarkSkill"
import Darkachivement from "@/components/themecomponents/darkpremium/Darkachivement"
import Darkfooter from "@/components/themecomponents/darkpremium/Darkfooter"
import DarkpremHero from "@/components/themecomponents/darkpremium/DarkpremHero"
import { getAcheivemtUSingClerkid } from "@/lib/actions/achivement.action"
import { getCustomSection } from "@/lib/actions/custom.action"
import { getPortfolioBasedonuserClerkId } from "@/lib/actions/portfolio.action"
import { getProjectByclerkId } from "@/lib/actions/project.action"
import { getSkillUsingclerkId } from "@/lib/actions/skill.action"
import { getWorkExperinceAsPerclerkId } from "@/lib/actions/work.action"
import { currentUser } from "@clerk/nextjs"



const page = async ({
  params:{ id },
} : {params:{
  id : string
}}) => {


  const user = await currentUser();

  const portfolio = await getPortfolioBasedonuserClerkId(id);
  const projects = await getProjectByclerkId(id);
  const works = await getWorkExperinceAsPerclerkId(id);
  const achivements = await getAcheivemtUSingClerkid(id);
  const customData = await getCustomSection(id);
  const skills = await getSkillUsingclerkId(id);
  

  
  
  

  
  
  const admin = portfolio[0].clerkId===user?.id;
  


  
  return (
    <div>
      <DarkpremHero data={portfolio[0]} adminData={admin} />
      <DarkAbout/>
      <DarkQualification userwork={works}/>
      <DarkProject  data={projects} adminData={admin} />
      <Darkachivement achivements={achivements} IsAdmin={admin} />
      <DarkCustom customData={customData} IsAdmin={admin} />
      <DarkSkill skills={skills}/>
      <Darkfooter data={portfolio[0]} />
      
    </div>

  )
}

export default page
