"use server"

import { createPortfolioparams, updatePortFolioParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import Portfolio from "../database/models/portfolio.model";
import { sendMail } from "../mail";





export const createPortfolio = async ({portfolio} : createPortfolioparams) => {
    try {           
        await connectToDatabase();
        const newPortfolio = await Portfolio.create({...portfolio});
            if(newPortfolio){
                await sendMail({
                    name:'SwiftFolio',
                    to:portfolio.mailurl,
                    subject:'Welcome to SwiftFolio',
          
                    body:`
                    <h1>Hello Nikhil Welcome to the swiftfolio</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora sint accusantium, ipsum vitae sed adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestias commodi corporis totam minus, doloribus debitis ea inventore excepturi sapiente architecto atque iure aperiam magnam cupiditate, distinctio reprehenderit rem. Ea.</p>`
                  });
            }

        return JSON.parse(JSON.stringify(newPortfolio));
    } catch (error) {
        console.log(error);
        throw new Error("Error caught in action for creating poertfolio");
        
    }
}


export const getPortfolioBasedonuserClerkId = async (clerkId : string) => {
    try {
        await connectToDatabase();
        
        const portFolio = await Portfolio.find({clerkId});
    
        return JSON.parse(JSON.stringify(portFolio));
        
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}



//   SERVER ACTION FOR UPDATING THE PORTFOLIO DATA 
export const updatePortFolio = async({clerkId , updateData} : updatePortFolioParams)=>{
    try {
        await connectToDatabase();

        const filter = {clerkId:clerkId};
        const UpdatedUser = await Portfolio.findOneAndUpdate(filter , {...updateData} , {
            new:true
        });

        
        if(!UpdatedUser){
            return JSON.parse(JSON.stringify({message:"Some issue occured"}));
        }
        return JSON.parse(JSON.stringify(UpdatedUser));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}