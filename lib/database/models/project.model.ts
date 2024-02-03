import { Schema, model, models } from "mongoose";



const ProjectSchema = new Schema({
    projectname:{type: String},
    projectdetail:{type: String},
    projectlink:{type: String},
    projectstatus:{type: String},
    projectthumbnail:{type: String},
    owner:{type: String},
});


const Project = models.Project || model("Project" , ProjectSchema);

export default Project;