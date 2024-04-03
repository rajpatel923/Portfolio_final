import mongoose, {Schema} from "mongoose";

const projectDataSchema = new Schema({
    title:{
        type: String,
        require: true,
        unique: true,
    },
    description:{
        type: String,
        require: true
    },
    relatedSkills:{
        type: [String],
        require: true
    },
    projectImageUrl:{
        type: String,
        require:true
    }
})
export const ProjectData = mongoose.model("ProjectData", projectDataSchema);