import { Schema, model, models } from "mongoose";



const customSchema = new Schema({
    clerkId:{type: String},
    heading:{
        type : String,
    },
    data:[
        {
            customTitle:{type: String,},
            customLink: {type: String},
            customImage:{type: String},

        }
    ]
});


const Custom = models.Custom || model("Custom" , customSchema);

export default Custom;
