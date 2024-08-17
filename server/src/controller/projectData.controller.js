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
  const projectImageLocalPathFirst = req.files?.projectImage[0]?.path;

  const projectImageLocalPathSecond = req.files?.projectImage[1]?.path;

  const problemImageLocalPath = req.files?.problemImage[0]?.path;
  const solutionImageLocalPath = req.files?.solutionImage[0]?.path;
  const resultImageLocalPath = req.files?.resultImage[0]?.path;

  if (
    [
      projectImageLocalPathFirst,
      problemImageLocalPath,
      solutionImageLocalPath,
      resultImageLocalPath,
      projectImageLocalPathSecond,
    ].some((field) => {
      return field === "" || field === undefined;
    })
  ) {
    throw new ApiError(
      401,
      "The project image is need for registraring project"
    );
  }

  const projectImageFirst = await upLoadFileOnCloudinary(
    projectImageLocalPathFirst
  );

  const projectImageSecond = await upLoadFileOnCloudinary(
    projectImageLocalPathSecond
  );
  const problemImage = await upLoadFileOnCloudinary(problemImageLocalPath);
  const solutionImage = await upLoadFileOnCloudinary(solutionImageLocalPath);
  const resultImage = await upLoadFileOnCloudinary(resultImageLocalPath);

  if (!projectImageFirst || !projectImageSecond) {
    throw new ApiError(501, "Project image fail to upload on cloudinary");
  }
  const projectDBResp = await ProjectData.create({
    title: title,
    description,
    category,
    relatedSkills: relatedSkills?.length() ? relatedSkills : [],
    completedDate,
    link,
    projectImage: [projectImageFirst.url, projectImageSecond.url],
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

const getProjectDetails = asyncHandler(async (req, res) => {
  const { projectTitle } = req.query;

  if (!projectTitle) {
    throw new ApiError(
      401,
      "Project File is required for projectDetial lookup"
    );
  }
  await ProjectData.find({ title: projectTitle })
    .then((project) => {
      if (!project) {
        throw new ApiError("Error getting the project from dbs");
      }
      res
        .status(200)
        .json(
          new ApiResponse(
            200,
            project,
            "Successfully fetch the project details"
          )
        );
    })
    .catch((error) => {
      throw new ApiError(401, "project does'nt exist in the dbs");
    });
});

export { addProjectData, getProjectsName, getProjectDetails };
