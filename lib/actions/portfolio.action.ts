"use server"

import { createPortfolioparams } from "@/types";
import connectToDatabase from "../database/mongodb";
import Portfolio from "../database/models/portfolio.model";




export const createPortfolio = async ({portfolio} : createPortfolioparams) => {
    try {           
        console.log(portfolio);
        
        await connectToDatabase();
        const newPortfolio = await Portfolio.create({...portfolio});
        console.log(newPortfolio);
        return JSON.parse(JSON.stringify(newPortfolio));
    } catch (error) {
        console.log(error);
        throw new Error("Error caught in action for creating poertfolio");
        
    }
}