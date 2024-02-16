import { Schema, model, models } from "mongoose";


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
