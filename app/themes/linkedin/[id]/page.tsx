import LinkedinHero from '@/components/themecomponents/linkedinComp/LinkedinHero'
import React from 'react'

const page = ({
  params:{ id },
} : {params:{
  id : string
}}) => {


  
  // const user = await currentUser();

  // const portfolio = await getPortfolioBasedonuserClerkId(id);
  // const projects = await getProjectByclerkId(id);
  // const achivements = await getAcheivemtUSingClerkid(id);
  // const customData = await getCustomSection(id);
  // const skills = await getSkillUsingclerkId(id);
  // const schooling = await getSchoolasperClerkId(id);
  // const college = await getCollegeasPerClerkId(id);
  // const work = await getWorkExperinceAsPerclerkId(id);

  
  // const admin = portfolio[0].clerkId===user?.id;

  





  return (
    <div>
      <LinkedinHero/>
    </div>
  )
}

export default page
