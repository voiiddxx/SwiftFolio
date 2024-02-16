import { Schema, model, models , Document } from "mongoose";


export interface IWork extends Document {
        _id:string,
        companyName:string,
        role:string,
        contribution:string,
        startDate:string,
        endDate:string
}


const workSchema = new Schema({
    clerkId:{
        type : String,
    },
    work: [
        {
            companyName:{
                type : String,
            },
            role:{
                type : String,
            },
            contribution:{
                type: String,
            },
            startDate:{
                type: String,
            },
            
            endDate:{
                type: String,
            }
        }
    ]
});

const Work = models.Work || model("Work" , workSchema);

export default Work;
