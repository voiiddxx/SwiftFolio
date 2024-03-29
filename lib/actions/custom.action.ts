"use server"

import { addCustomFieldParams, createCustomParams, updatingcustomSectionParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import Custom from "../database/models/custom.model";


export const createCustomSection = async ({clerkId , customSection} : createCustomParams) => {
    try {
        await connectToDatabase();
        const custom = await Custom.create({clerkId:clerkId , heading:customSection.heading});
        return JSON.parse(JSON.stringify(custom));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
}



// CREATING SERVER ACTION FOR UPDATING THE CUSTOM SECTION HEADING
    export const UpdateCustomSectionHeadingAsperclerkId = async ({data} : updatingcustomSectionParams)=>{
        try {
            await connectToDatabase();
            const customData = await Custom.findByIdAndUpdate(data.customid , {
                heading:data.heading
            });
            return JSON.parse(JSON.stringify(customData));
        } catch (error) {
            console.log(error);
            throw new Error(error as string);
            
        }
    }


//  CREATING SERVER ACTON FOR DELETING THE SERVER ACTION BASED AS PER CLERK ID 

export const deleteCompleteCustomasperclerkid = async  (clerkId:string)=>{
        try {
            await connectToDatabase();
            const deleted = await Custom.findByIdAndDelete(clerkId);
            if(!deleted){
                return JSON.parse(JSON.stringify({message:"Some issue occured while deletion"}));
            }
            return JSON.parse(JSON.stringify({message:"OK"}));

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
        return JSON.parse(JSON.stringify(section));
    
    } catch (error) {
        throw new Error(error as string);
    }
}


export const deleteCustomSection = async (deleteId: string , cardId: string)=>{
    try {
        await connectToDatabase();
        const deleteSec = await Custom.findById(deleteId);
        for(let i =0;i<deleteSec.data.length;i++){
            if(deleteSec.data[i]._id==cardId){
                deleteSec.data.splice(i , 1);
                await deleteSec.save();
                
            } else{
                console.log("no data found");
                
            }
        }

        
    } catch (error) {
        console.log(error);
        
        throw Error(error as string);
    }
}