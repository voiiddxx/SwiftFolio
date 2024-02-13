import WhiteAchivement from '@/components/themecomponents/whiteCreative/WhiteAchivement';
import WhiteHero from '@/components/themecomponents/whiteCreative/WhiteHero'
import WhiteProject from '@/components/themecomponents/whiteCreative/WhiteProject';
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
    </div>
  )
}

export default page
