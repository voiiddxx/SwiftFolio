import ConversionAbout from '@/components/themecomponents/conversionflow/ConversionAbout'
import ConversionCustom from '@/components/themecomponents/conversionflow/ConversionCustom'
import ConversionFooter from '@/components/themecomponents/conversionflow/ConversionFooter'
import ConversionHero from '@/components/themecomponents/conversionflow/ConversionHero'
import ConversionProject from '@/components/themecomponents/conversionflow/ConversionProject'
import ConversionSkill from '@/components/themecomponents/conversionflow/ConversionSkill'
import Conversionachivement from '@/components/themecomponents/conversionflow/Conversionachivement'
import CoversionQualification from '@/components/themecomponents/conversionflow/CoversionQualification'
import { getAcheivemtUSingClerkid } from "@/lib/actions/achivement.action"
import { getCustomSection } from "@/lib/actions/custom.action"
import { getCollegeasPerClerkId } from "@/lib/actions/education.action"
import { getPortfolioBasedonuserClerkId } from "@/lib/actions/portfolio.action"
import { getProjectByclerkId } from "@/lib/actions/project.action"
import { getSchoolasperClerkId } from "@/lib/actions/school.action"
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
