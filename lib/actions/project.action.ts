"use server"

import { addProjectParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import Project from "../database/models/project.model";


const addProject =  async({project}:addProjectParams) => {
    try {
        await connectToDatabase();
        Project.create({...project , })
        
    } catch (error) {
        console.log(error);
        throw new Error(error as string)
        
    }
}