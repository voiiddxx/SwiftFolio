import { Schema, model, models } from "mongoose";



const ProjectSchema = new Schema({
    clerkId:{type: String},
    projectname:{type: String},
    projectdetail:{type: String},
    projectlink:{type: String},
    projectstatus:{type: String},
    projectthumbnail:{type: String},
    projectSkill:[
        {skill:{type: String},}
    ],
    owner:{
        type:Schema.Types.ObjectId , ref:'Portfolio'
    },
});


const Project = models.Project || model("Project" , ProjectSchema);

export default Project;