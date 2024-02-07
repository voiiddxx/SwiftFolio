"use server"

import { createCustomParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import Custom from "../database/models/custom.model";


export const createCustomSection = async ({clerkId , customSection} : createCustomParams) => {
    try {
        await connectToDatabase();
        const custom = await Custom.create({clerkId:clerkId , heading:customSection.heading});
        console.log("Section Created");
        console.log(custom);
        
        

        
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
}



export const getCustomSection = async (clerkId : any) => {
    try {
        await connectToDatabase();
        const customsection = await Custom.find({clerkId: clerkId});
        return JSON.parse(JSON.stringify(customsection));       

    } catch (error) {
        throw new Error(error as string);
    }
}