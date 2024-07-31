import { skills } from "../models/skills.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const skillsRegister = asyncHandler(async(req,res)=>{
    const {skillImage,skillTitle,skillDesp,skillBodyImage,usageDesp,whyIlike} = req.body
    const skillsDBResp = await skills.create({skillImage,skillTitle,skillDesp,skillBodyImage,usageDesp,whyIlike})
    return res.status(200).json(
        new ApiResponse(200, skillsDBResp, "skills data is saved on the dbs")
    )
})

const getSkillsData = asyncHandler(async(req,res)=>{
    const {skillTitle} = req.body
    await skills.findOne({skillTitle}).then((skillData)=>{
        return res.status(200).json(
            new ApiResponse(200,skillData,"Return skills detail data from dbs")
        )
    }).catch((err)=>{
        return res.status(501).json(
            new ApiError(501, "Error return in the getSkillsData from db",err)
        )
    })
})

export {getSkillsData, skillsRegister}