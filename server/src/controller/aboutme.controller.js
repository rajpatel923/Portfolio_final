import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { Aboutme } from "../models/Aboutme.model.js"
import { ApiError } from "../utils/ApiError.js"

const aboutmeEdit = asyncHandler(async(req,res)=>{

    const {titleHeader,titleDesp,numberOfProjects,yearsOfExp,profileImage,specializedFields} = req.body
    const aboutmesaveResp = await Aboutme.create({titleHeader, titleDesp, numberOfProjects,yearsOfExp,profileImage,specializedFields})
    return res.status(201).json(
        new ApiResponse(200, aboutmesaveResp, "Successfully added to the dbs")
    )
})

const getAboutmeContent = asyncHandler(async(req,res)=>{
    //TODO edit the condition to findOne
    await Aboutme.findOne({numberOfProjects:'15'}).then((user)=>{
        return res.status(201).json(
            new ApiResponse(200,user,"Return aboutMe from the dbs")
        )
    }).catch((err)=>{
        return res.status(501).json(
            new ApiError(501,"Error return the aboutMeData",err)
        )
    })
})

export {aboutmeEdit, getAboutmeContent}

