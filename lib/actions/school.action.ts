"use server"

import { AddSchoolingParams, UpdateSchoolParams, deletSchoolParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import School from "../database/models/school.model";


export const addSchooling =  async ({school , clerkId} : AddSchoolingParams) => {
    try {
        await connectToDatabase();

        const isSchool = await School.find({clerkId:clerkId});
        if(isSchool.length < 1){
            const savedSchool = await School.create({clerkId:clerkId});
            await savedSchool.school.push({schoolName:school.schoolName , schoolClass:school.schoolClass , finalYear:school.finalYear , extraDetail:school.extraDetail});
            await savedSchool.save();
        } else{
            isSchool[0].school.push({...school});
        await isSchool[0].save();
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


export const deletSchoolWithId = async ({deleteId , schoolId} : deletSchoolParams)=>{

    
    try {
        await connectToDatabase();
        const deletedData = await School.findByIdAndUpdate({
            '_id':schoolId,
        } , 
        {
            $pull:{
                'school':{
                    '_id':deleteId
                }
            },
            'multi':false
        });

        return JSON.parse(JSON.stringify({message:"OK"}));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}


//  SERVER ACTION FOR UPDATING THE SCHOOL DATA

export const updateSchoolData = async ({  school , updateId  , schoolId}:UpdateSchoolParams)=>{


    console.log(schoolId , updateId);
    
    try {
        await connectToDatabase();
        
        const updatedData = await School.findByIdAndUpdate(
            {'school._id':updateId},
            {$set:{'school.$':school}},
            {new:true},
        );

        if(!updatedData){
            return JSON.parse(JSON.stringify({message:"We got some error"}));
        }
        return JSON.parse(JSON.stringify(updatedData));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}