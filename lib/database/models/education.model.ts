import { Schema, model, models , Document } from "mongoose";

export interface ICollege extends Document {
    _id:string,
    degree:string
    batchStartDate:string
    batchEndDate:string
    instituteName:string
    extraDetail:string
}

const CollegeSchema = new Schema({
    clerkId:{
        type: String
    },
   college:[
    {
        degree:{
            type : String
        },
        batchStartDate:{
            type : String,
        },
        batchEndDate:{
            type: String
        },
        instituteName:{
            type:String
        },
        extraDetail:{
            type: String,
        }
    }
   ]
});


const College = models.College || model("College" , CollegeSchema);

export default College;
