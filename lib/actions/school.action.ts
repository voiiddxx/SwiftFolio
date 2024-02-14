"use server"

import { AddSchoolingParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import School from "../database/models/school.model";


export const addSchooling =  async ({school , clerkId} : AddSchoolingParams) => {
    try {
        await connectToDatabase();
        const savedschool = await School.create({...school , clerkId:clerkId});
        return JSON.parse(JSON.stringify(savedschool));
    } catch (error) {
        console.log(error);
        
        throw new Error(error as string);
    }
}