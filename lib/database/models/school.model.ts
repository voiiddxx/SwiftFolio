import { Schema, model, models , Document } from "mongoose";


    export interface ISchool extends Document  {
        _id:string
        schoolClass:string
        schoolName:string
        finalYear:string
        extraDetail:string
    }

const SchoolSchema = new Schema({
    clerkId:{
        type:String
    },
   school:[
    {
        schoolClass:{
            type:String
        },
        schoolName:{
            type:String,
        },
        finalYear:{
            type: String,
        },
        extraDetail:{
            type:String,
        }
    }
   ]
});

const School = models.School || model("School" , SchoolSchema);

export default School;
