import mongoose, { Schema } from "mongoose";

const skillSchema = new Schema({
    skillName :{
        type: String,
        require: true,
        unique : true,
    }
}, {timestamps:true})

export const Skills = mongoose.model("Skills",skillSchema);