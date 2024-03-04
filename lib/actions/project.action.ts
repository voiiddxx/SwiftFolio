"use server"

import { UpdateProjectParams, addProjectParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import Project from "../database/models/project.model";




export const getProjectByclerkId = async (clerkId : string) => {
    try {
        await connectToDatabase();
        const projects = await Project.find({clerkId});
        return JSON.parse(JSON.stringify(projects));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}

export const addProjecttoDatabase =  async({project }:addProjectParams) => {

    console.log(project);
    
    try {
        await connectToDatabase();    
        const newProject = await Project.create({...project });
        return JSON.parse(JSON.stringify(newProject));
        
        
    } catch (error) {
        console.log(error);
        throw new Error(error as string)   
    }
}

export const updateProject = async({project , projectId} : UpdateProjectParams) => {
    try {
        await connectToDatabase();
        const projectForUpdate = await Project.findByIdAndUpdate(projectId , {...project} , {new:true});
        return JSON.parse(JSON.stringify(projectForUpdate));
    } catch (error) {
        throw new Error(error as string);
    }
}


export const DeleteProject = async (projectId : string) => {
    try {
        await connectToDatabase();
        const deleted = await Project.findByIdAndDelete(projectId);
    } catch (error) {
        throw new Error(error as string);

    }
}



