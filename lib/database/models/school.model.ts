import { Schema, model, models } from "mongoose";
import { string } from "zod";


const SchoolSchema = new Schema({
    schoolClass:{
        type:string
    },
    schoolName:{
        type:string,
    },
    finalYear:{
        type: string,
    },
    extraDetail:{
        type:string,
    }
});

const School = models.School || model("School" , SchoolSchema);

export default School;
