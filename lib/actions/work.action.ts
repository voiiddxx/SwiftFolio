"use server"

import { AddWorkParams, DeleteWorkParams } from "@/types";
import connectToDatabase from "../database/mongodb"
import Work from "../database/models/work.model";


export const AddWorkExperince =  async ({work , clerkId} : AddWorkParams) => {
    try {
        await connectToDatabase();
        const isWork = await Work.find({clerkId : clerkId});
        if(isWork.length < 1){
            const createdWork = await Work.create({clerkId:clerkId});
            await createdWork.work.push({...work});
            createdWork.save();
        }
        else{
         await isWork[0].work.push({...work});
         await isWork[0].save();
        }
    } catch (error) {
        throw new Error(error as string);
    }
}


export const getWorkExperinceAsPerclerkId = async (clerkId: string) => {
    try {
        await connectToDatabase();
        const userWorkExperince = await Work.find({clerkId: clerkId});
        if(!userWorkExperince){
            return JSON.parse(JSON.stringify({message: " User work not found"}));
        }

        return JSON.parse(JSON.stringify(userWorkExperince));
        
    } catch (error) {
        throw new Error(error as string);
    }
}


export const deleteWorkById = async ({ workId , deleteId} : DeleteWorkParams) =>{
    try {
        await connectToDatabase();
        const deleteWork = await Work.findByIdAndUpdate({
            '_id' : workId

        } , {
            $pull:{
                'work':{
                    '_id':deleteId
                }
            },
            'multi':false
        });
        
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}