import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {Skills} from "../models/skills.model.js"
import {ApiResponse} from "../utils/ApiResponse.js"

const addSkill = asyncHandler(async(req,res)=>{
   const {skillName} = req.body

   if(skillName ===""){
        throw new ApiError(400, "For adding skill a skill is must!")
    }
    const skillExist = await Skills.findOne({skillName})
})

export {addSkill}