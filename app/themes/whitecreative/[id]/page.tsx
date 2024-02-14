import WhiteAchivement from '@/components/themecomponents/whiteCreative/WhiteAchivement';
import WhiteCustom from '@/components/themecomponents/whiteCreative/WhiteCustom';
import WhiteHero from '@/components/themecomponents/whiteCreative/WhiteHero'
import WhiteProject from '@/components/themecomponents/whiteCreative/WhiteProject';
import WhiteSkill from '@/components/themecomponents/whiteCreative/WhiteSkill';
import { getAcheivemtUSingClerkid } from '@/lib/actions/achivement.action';
import { getCustomSection } from '@/lib/actions/custom.action';
import { getPortfolioBasedonuserClerkId } from '@/lib/actions/portfolio.action';
import { getProjectByclerkId } from '@/lib/actions/project.action';
import { getSkillUsingclerkId } from '@/lib/actions/skill.action';
import { currentUser } from '@clerk/nextjs';
import React from 'react'

const page = async ({
  params:{ id },
} : {params:{
  id : string
}}) => {


  const user = await currentUser();

  const portfolio = await getPortfolioBasedonuserClerkId(id);
  const projects = await getProjectByclerkId(id);
  const achivements = await getAcheivemtUSingClerkid(id);
  const customData = await getCustomSection(id);
  const skills = await getSkillUsingclerkId(id);

  
  

  
  const admin = portfolio[0].clerkId===user?.id;

  return (
    <div >
        <WhiteHero data={portfolio[0]} adminData={admin} />
        <WhiteProject data={projects} adminData={admin}/>
        <WhiteAchivement achivements={achivements} adminData={admin}  />
        <WhiteCustom customData={customData}/>
        <WhiteSkill skills={skills}/>
    </div>
  )
}

export default page
