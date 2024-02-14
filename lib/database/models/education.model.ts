import { Schema, model, models } from "mongoose";
import { string } from "zod";



const CollegeSchema = new Schema({
    clerkId:{
        type: string
    },
    degree:{
        type : String
    },
    batchStartDate:{
        type : string,
    },
    batchEndDate:{
        type: string
    },
    instituteName:{
        type:string
    },
    extraDetail:{
        type: string,
    }
});


const College = models.College || model("College" , CollegeSchema);

export default College;
