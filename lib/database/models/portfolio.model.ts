import { Schema, model, models } from "mongoose";



const portfoliSchema = new Schema({
    name:{type: String},
    heading:{type: String},
    about:{type : String},
    linkedinurl:{type: String},
    githuburl:{type: String},
    mailurl:{type: String},
    extraurl:{type: String},
    avatar:{type: String},
    resume:{type: String},
    projects:[],
    acheivements:[],



});


const Portfolio = models.Portfolio || model('Portfolio' , portfoliSchema);

export default Portfolio;
