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
                    <p>Thankyou for choosing us!,</p>
                    <p>Now create your portfolio with new minimal and clean ui and boost your resume and other socials with your portfolio links, and don't worry we are adding more design in future </p>
                    <p>For any Queries please contact at nikhildesign00@gmail.com , you can ping this mail whenever you want , we are 24/7 available for your queries </p>
                    `
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