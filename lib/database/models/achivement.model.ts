import { Schema, model, models } from "mongoose";


const acheivementSchema = new Schema({
    clerkId:{type: String},
    acaption:{type: String},
    aimage:{type: String},
});


const Achivement = models.Achivement || model("Achivement" , acheivementSchema);

export default Achivement;
