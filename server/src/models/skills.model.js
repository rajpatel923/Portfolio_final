import mongoose, {Schema} from "mongoose";
const skillsSchema = new mongoose.Schema({
    skillImage:{
        type:String
    },
    skillTitle:{
        type:String
    },
    skillDesp:{
        type:String
    },
    skillBodyImage:{
        type:String
    },
    usageDesp:{
        type:String
    },
    whyIlike:{
        type:String
    }
})

export const skills = mongoose.model("skills", skillsSchema)