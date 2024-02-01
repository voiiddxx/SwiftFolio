import PortfolioForm from "@/components/shared/PortfolioForm"
import { currentUser } from "@clerk/nextjs";


const page = async () => {
    const user = await currentUser();
    const userId = user?.id;
    
    return (

    <PortfolioForm userId={userId}/>

    )
}

export default page
