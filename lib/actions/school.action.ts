"use server"

import { AddSchoolingParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import School from "../database/models/school.model";


export const addSchooling =  async ({school , clerkId} : AddSchoolingParams) => {
    try {
        await connectToDatabase();

        const isSchool = await School.find({clerkId:clerkId});
        if(isSchool.length < 1){
            const savedSchool = await School.create({clerkId:clerkId});
            await savedSchool.school.push({
                ...School
            });
            await savedSchool.save();
            console.log(savedSchool);
            
        } else{
            isSchool[0].school.push({...school});
        await isSchool[0].save();
        console.log(isSchool);
        }
        
        
        return JSON.parse(JSON.stringify(isSchool));
    } catch (error) {
        console.log(error);
        
        throw new Error(error as string);
    }
}


export const getSchoolasperClerkId = async (clerkId : string) => {
    try {
        await connectToDatabase();
        const userSchool = await School.find({clerkId:clerkId});
        return JSON.parse(JSON.stringify(userSchool));
        
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}