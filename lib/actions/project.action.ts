"use server"

import { addProjectParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import Project from "../database/models/project.model";


export const addProjecttoDatabase =  async({project , ownerId}:addProjectParams) => {
    try {
        await connectToDatabase();    
        const newProject = await Project.create({...project , owner:ownerId});
        console.log("this is posted project");
        
        console.log(newProject);
        
        
    } catch (error) {
        console.log(error);
        throw new Error(error as string)
        
    }
}


