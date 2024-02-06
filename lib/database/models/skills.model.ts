import { Schema, model, models } from "mongoose";



const SkillSchema = new Schema({
    clerkId: {type: String},
    userSkill: {type : String},
});


const Skill = models.Skill || model("Skill" , SkillSchema);


export default Skill