"use server"
import DarkpremHero from "@/components/themecomponents/darkpremium/DarkpremHero"
import { getPortfolioBasedonuserClerkId } from "@/lib/actions/portfolio.action"
import { currentUser } from "@clerk/nextjs";

const page = async () => {

  const user = await currentUser();

  const portfolio = await getPortfolioBasedonuserClerkId(user?.id as string);

  return (
    <div>
      <DarkpremHero/>
      
    </div>
  )
}

export default page
