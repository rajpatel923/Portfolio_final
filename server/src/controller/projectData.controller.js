import { ProjectData } from "../models/projectData.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { upLoadFileOnCloudinary } from "../utils/cloudinary.js";

const addProjectData = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    relatedSkills,
    category,
    completedDate,
    link,
    problemDesp,
    solutionDesp,
    resultDesp,
  } = req.body;

  if (
    [title, link, completedDate, category].some((field) => {
      return field?.trim() === "" || field === undefined;
    })
  ) {
    throw new ApiError(
      401,
      `Some field are need to register the project like title, link, category, completedDate, and projectImage. This are must need fields`
    );
  }

  const projectExist = await ProjectData.find({
    title,
  });

  if (!projectExist) {
    throw new ApiError(
      401,
      "The project is alreay present in dbs with the same tilte"
    );
  }
  const projectImageLocalPath = req.files?.projectImage[0]?.path;
  const problemImageLocalPath = req.files?.problemImage[0]?.path;
  const solutionImageLocalPath = req.files?.solutionImage[0]?.path;
  const resultImageLocalPath = req.files?.resultImage[0]?.path;

  if (
    [
      projectImageLocalPath,
      problemImageLocalPath,
      solutionImageLocalPath,
      resultImageLocalPath,
    ].some((field) => {
      return field === "" || field === undefined;
    })
  ) {
    throw new ApiError(
      401,
      "The project image is need for registraring project"
    );
  }

  const projectImage = await upLoadFileOnCloudinary(projectImageLocalPath);
  const problemImage = await upLoadFileOnCloudinary(problemImageLocalPath);
  const solutionImage = await upLoadFileOnCloudinary(solutionImageLocalPath);
  const resultImage = await upLoadFileOnCloudinary(resultImageLocalPath);

  if (!projectImage) {
    throw new ApiError(501, "Project image fail to upload on cloudinary");
  }
  const projectDBResp = await ProjectData.create({
    title: title,
    description,
    category,
    relatedSkills: relatedSkills?.length() ? relatedSkills : [],
    completedDate,
    link,
    projectImage: projectImage.url,
    problemDesp: problemDesp ? problemDesp : "",
    problemImage: problemImage.url,
    solutionDesp: solutionDesp ? solutionDesp : "",
    solutionImage: solutionImage.url,
    resultDesp: resultDesp ? resultDesp : "",
    resultImage: resultImage.url,
  });

  if (!projectDBResp) {
    throw new ApiError(501, "Error while creating the project into the dbs");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        projectDBResp,
        "Project is register in the dbs successfully"
      )
    );
});

const getProjectsName = asyncHandler(async (req, res) => {
  const projectTags = await ProjectData.find({}, "title projectImage");

  if (!projectTags) {
    throw new ApiError(501, "unable to fetch data from the dbs");
  }
  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        projectTags,
        "successfully fetch project names from the dbs"
      )
    );
});

export { addProjectData, getProjectsName };
