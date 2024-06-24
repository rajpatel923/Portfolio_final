import { ProjectData } from "../models/projectData.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addProjectData = asyncHandler(async(req,res)=>{
    const {title, description, projectImageUrl, relatedSkills} = req.body

    if(title=="" || description =="" || relatedSkills =="" || projectImageUrl==""){
        throw new ApiError(400, "None of the fields should be Empty!")
    }

    const projectAlreadyExist = await ProjectData.findOne({title})

    if(projectAlreadyExist?.title == title){
        throw new ApiError(401, "The project is already there in the dbs!")
    }
    const projectDataSuccess = await ProjectData.create({title,description,relatedSkills, projectImageUrl})

    return res.status(201).json(
        new ApiResponse(200, projectDataSuccess, "Project is succesfully added in the DBS!")
    )
    
})
export {addProjectData}