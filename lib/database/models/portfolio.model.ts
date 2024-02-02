import { Schema, model, models , Document } from "mongoose";



export interface Iportfolio extends Document {
    _id: string;
    name:string;
    heading:string;
    linkedinurl:string;
    githuburl:string;
    mailurl:string;
    extraurl:string;
    avatar:string;
    resume:string;
}

const portfoliSchema = new Schema({
    clerkId:{type:String},
    name:{type: String},
    heading:{type: String},
    about:{type : String},
    linkedinurl:{type: String},
    githuburl:{type: String},
    mailurl:{type: String},
    extraurl:{type: String},
    avatar:{type: String},
    resume:{type: String},
});


const Portfolio = models.Portfolio || model('Portfolio' , portfoliSchema);

export default Portfolio;
