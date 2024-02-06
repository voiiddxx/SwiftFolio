"use server"

import { AddAchivementParams } from "@/types";
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