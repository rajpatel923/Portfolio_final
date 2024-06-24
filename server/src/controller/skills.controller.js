import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {Skills} from "../models/skills.model.js"
import {ApiResponse} from "../utils/ApiResponse.js"

const addSkill = asyncHandler(async(req,res)=>{
    //need the skill Name
    
   const {skillName} = req.body

   if(skillName === ""){
        throw new ApiError(400, "For adding skill a skill is must!")
    }
    const skillExist = await Skills.findOne({skillName})
    
    if(skillExist?.skillName == skillName){
        throw new ApiError(401, "The skill is already in the dbs")
    }
    await Skills.create({skillName})

    return res.status(201).json(
        new ApiResponse(200,skillName,"Successfull in adding New Skill")
    )
})

const getAllSkills = asyncHandler(async(req,res)=>{
    try {
        const allSkillsFromDB = await Skills.find({})
        return res.status(201).json(
            new ApiResponse(200,allSkillsFromDB)
        )
        
    } catch (error) {
        return new ApiError(401, error?.message() | "getAllSkills threw some error")
        
    }

})

export {addSkill,getAllSkills}