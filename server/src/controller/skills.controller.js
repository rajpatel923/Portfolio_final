import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {Skills} from "../models/skills.model.js"
import {ApiResponse} from "../utils/ApiResponse.js"

const addSkill = asyncHandler(async(req,res,next)=>{
    console.log("you are in add skill function");
})

export {addSkill}