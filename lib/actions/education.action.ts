"use server"

import { DeletCollegeParams, addCollegeParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import College from "../database/models/education.model";

export const addCollege =  async ({college , clerkId} : addCollegeParams) => {
    try {
        await connectToDatabase();
       const isCollege = await College.find({clerkId:clerkId});
       if(isCollege.length < 1){
        const savedCollege = await College.create({clerkId:clerkId});
        await savedCollege.college.push({...college});
        await savedCollege.save();
       }
       else
       {
        await isCollege[0].college.push({...college});
        await isCollege[0].save();
       }
        


    } catch (error) {
        console.log(error);
        
        throw new Error(error as string);
    }
}

export const getCollegeasPerClerkId = async ( clerkId:string) =>{
    try {
        await connectToDatabase();
        const userCollege = await College.find({clerkId:clerkId});
        return JSON.parse(JSON.stringify(userCollege));
        
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}

export const DeleteCollegeAsPerId = async ({collegeId , college} : DeletCollegeParams) =>{
    try {
        console.log(collegeId);
        
        await connectToDatabase();
        
        const allCollege = await College.findById(collegeId)
        console.log("this is data for all college " , allCollege);
        


    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}