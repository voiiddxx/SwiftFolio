"use server"

import { addCollegeParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import College from "../database/models/education.model";

export const addCollege =  async ({college , clerkId} : addCollegeParams) => {
    try {
        await connectToDatabase();
        const savedCollege = await College.create({...college , clerkId:clerkId});
        console.log(savedCollege);
        return JSON.parse(JSON.stringify(savedCollege));
        


    } catch (error) {
        console.log(error);
        
        throw new Error(error as string);
    }
}