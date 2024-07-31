import mongoose, {Schema} from "mongoose";

const AboutmeSchema = new Schema({
    titleHeader:{
        type:String
    },
    titleDesp:{
        type:String
    },
    numberOfProjects:{
        type:String
    },
    yearsOfExp:{
        type:String
    },
    profileImage:{
        type:String
    },
    specializedFields:[{
        fieldTitle:{
            type:String
        },
        fieldDesp:{
            type:String
        }
    }]

},{timestamps:true})

export const Aboutme = mongoose.model('Aboutme',AboutmeSchema)
