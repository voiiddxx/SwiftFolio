"use server"

import { AddAchivementParams, updateAchivementParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import Achivement from "../database/models/achivement.model";
import { log } from "console";



export const addAchevementtoDatabase = async ({achivement} : AddAchivementParams) => {
    try {
        
        await connectToDatabase();
        const achevements = await Achivement.create({...achivement});
        return JSON.parse(JSON.stringify(achevements));
    } catch (error) {
        console.log(error);
        throw new Error(error as string)
        
    }
}

export const getAcheivemtUSingClerkid =  async ( clerkId:  string) => {
    try {
        await connectToDatabase();
        const res = await Achivement.find({clerkId});
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
        throw new Error(error as string)
        
    }
}

export const updateAchivementSection = async ( {achivement , achivementId } : updateAchivementParams) => {

    try {
        await connectToDatabase();
        const updatedAchivement = await Achivement.findByIdAndUpdate(achivementId , {...achivement} , {new:true});
        return JSON.parse(JSON.stringify(updatedAchivement));

    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
}


export const delteAchivement =  async ( deleteId: string) => {
    try {
        await connectToDatabase();
        const deletedProject = await Achivement.findByIdAndDelete(deleteId);
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}