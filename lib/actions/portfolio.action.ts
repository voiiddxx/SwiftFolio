"use server"

import { createPortfolioparams } from "@/types";
import connectToDatabase from "../database/mongodb";
import Portfolio from "../database/models/portfolio.model";





export const createPortfolio = async ({portfolio} : createPortfolioparams) => {
    try {           
        await connectToDatabase();
        const newPortfolio = await Portfolio.create({...portfolio});
     
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