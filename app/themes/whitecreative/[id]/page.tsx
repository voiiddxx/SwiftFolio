import WhiteAchivement from '@/components/themecomponents/whiteCreative/WhiteAchivement';
import WhiteCustom from '@/components/themecomponents/whiteCreative/WhiteCustom';
import WhiteFooter from '@/components/themecomponents/whiteCreative/WhiteFooter';
import WhiteHero from '@/components/themecomponents/whiteCreative/WhiteHero'
import WhiteProject from '@/components/themecomponents/whiteCreative/WhiteProject';
import WhiteQulalification from '@/components/themecomponents/whiteCreative/WhiteQulalification';
import WhiteSkill from '@/components/themecomponents/whiteCreative/WhiteSkill';
import { getAcheivemtUSingClerkid } from '@/lib/actions/achivement.action';
import { getCustomSection } from '@/lib/actions/custom.action';
import { getCollegeasPerClerkId } from '@/lib/actions/education.action';
import { getPortfolioBasedonuserClerkId } from '@/lib/actions/portfolio.action';
import { getProjectByclerkId } from '@/lib/actions/project.action';
import { getSchoolasperClerkId } from '@/lib/actions/school.action';
import { getSkillUsingclerkId } from '@/lib/actions/skill.action';
import { getWorkExperinceAsPerclerkId } from '@/lib/actions/work.action';
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
  const schooling = await getSchoolasperClerkId(id);
  const college = await getCollegeasPerClerkId(id);
  const work = await getWorkExperinceAsPerclerkId(id);

  
  

  
  const admin = portfolio[0].clerkId===user?.id;

  return (
    <div >
        <WhiteHero data={portfolio[0]} adminData={admin} />
        <WhiteQulalification userSchool={schooling} userCollege={college} userWork={work} />
        <WhiteProject data={projects} adminData={admin}/>
        <WhiteAchivement achivements={achivements} adminData={admin}  />
        <WhiteCustom customData={customData} IsAdmin={admin}/>
        <WhiteSkill skills={skills} />
        <WhiteFooter data={portfolio[0]}  />
    </div>
  )
}

export default page
