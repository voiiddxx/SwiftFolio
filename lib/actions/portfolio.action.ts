"use server"

import { createPortfolioparams, updatePortFolioParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import Portfolio from "../database/models/portfolio.model";





export const createPortfolio = async ({portfolio} : createPortfolioparams) => {
    try {           
        await connectToDatabase();
        const newPortfolio = await Portfolio.create({...portfolio});
        console.log("this is new ",newPortfolio);
        
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