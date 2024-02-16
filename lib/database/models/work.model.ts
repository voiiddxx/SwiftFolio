import { Schema, model, models } from "mongoose";


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
