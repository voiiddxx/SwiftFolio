import LinkedinHero from '@/components/themecomponents/linkedinComp/LinkedinHero'
import { getAcheivemtUSingClerkid } from '@/lib/actions/achivement.action';
import { getCustomSection } from '@/lib/actions/custom.action';
import { getCollegeasPerClerkId } from '@/lib/actions/education.action';
import { getPortfolioBasedonuserClerkId } from '@/lib/actions/portfolio.action';
import { getProjectByclerkId } from '@/lib/actions/project.action';
import { getSchoolasperClerkId } from '@/lib/actions/school.action';
import { getWorkExperinceAsPerclerkId } from '@/lib/actions/work.action';
import React from 'react'

const page = async ({
  params:{ id },
} : {params:{
  id : string
}}) => {


  
  // const user = await currentUser();

  const portfolio = await getPortfolioBasedonuserClerkId(id);
  const projects = await getProjectByclerkId(id);
  const achivements = await getAcheivemtUSingClerkid(id);
  const customData = await getCustomSection(id);
  // const skills = await getSkillUsingclerkId(id);
  const schooling = await getSchoolasperClerkId(id);
  const college = await getCollegeasPerClerkId(id);
  const work = await getWorkExperinceAsPerclerkId(id);

  
  // const admin = portfolio[0].clerkId===user?.id;

  





  return (
    <div>
      <LinkedinHero persenolData={portfolio[0]} school={schooling} college={college} work={work}  achivement={achivements} custom={customData} project={projects} />
    </div>
  )
}

export default page
