"use server"

import { addCustomFieldParams, createCustomParams } from "@/types";
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


export const addCustomFieldtoDatabase = async ({custom} : addCustomFieldParams) => {
    try {
        console.log(custom);
        await connectToDatabase();

        let section = await Custom.findById(custom.customId);
        await section.data.push({customTitle:custom.customTitle , customLink:custom.customLink , customImage: custom.customImage});
        await section.save();
        console.log(section);
    } catch (error) {
        throw new Error(error as string);
    }
}