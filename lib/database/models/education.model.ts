import { Schema, model, models } from "mongoose";



const CollegeSchema = new Schema({
    clerkId:{
        type: String
    },
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
});


const College = models.College || model("College" , CollegeSchema);

export default College;
