"use server"

import { addProjectParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import Project from "../database/models/project.model";




export const getProjectByclerkId = async (clerkId : string) => {
    try {
        await connectToDatabase();
        const projects = await Project.find({clerkId});
        console.log(projects);
        return JSON.parse(JSON.stringify(projects));
        
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}

export const addProjecttoDatabase =  async({project , ownerId}:addProjectParams) => {

    console.log(project);
    
    try {
        await connectToDatabase();    
        const newProject = await Project.create({...project , owner:ownerId});
        return JSON.parse(JSON.stringify(newProject));
        
        
    } catch (error) {
        console.log(error);
        throw new Error(error as string)   
    }
}





