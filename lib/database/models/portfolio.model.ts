import { Schema, model, models } from "mongoose";



const portfoliSchema = new Schema({
    name:{type: String},
    heading:{type: String},
});


const Portfolio = models.Portfolio || model('Portfolio' , portfoliSchema);

export default Portfolio;
