import { cookies } from "next/headers.js";
import { skills } from "../models/skills.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { upLoadFileOnCloudinary } from "../utils/cloudinary.js";

const skillsRegister = asyncHandler(async (req, res) => {
  const { skillTitle, skillDesp, usageDesp, whyIlike, bgCoustomeColor } =
    req.body;

  if (
    [skillTitle, skillDesp, usageDesp, whyIlike, bgCoustomeColor].some(
      (Field) => {
        return Field?.trim() === "" || Field === undefined;
      }
    )
  ) {
    throw new ApiError(401, "Filed should not be empty or undefine");
  }
  const skillsExist = await skills.find({ skillTitle });

  if (!skillsExist) {
    throw new ApiError(401, "The skill already exist in the dbs");
  }
  const skillImageLocalPath = req.files?.skillImage[0]?.path;
  const skillBodyImageLocalPath = req.files?.skillBodyImage[0]?.path;
  if (!skillBodyImageLocalPath || !skillImageLocalPath) {
    throw new ApiError(401, "SkillImage and Body image is must");
  }

  const skillImage = await upLoadFileOnCloudinary(skillImageLocalPath);
  const skillBodyImage = await upLoadFileOnCloudinary(skillBodyImageLocalPath);

  if (!skillImage || !skillBodyImage) {
    throw new ApiError(501, "Error while uploading images on cloudinary");
  }

  const skillsDBResp = await skills.create({
    skillImage: skillImage.url,
    skillTitle,
    skillDesp,
    skillBodyImage: skillBodyImage.url,
    usageDesp,
    whyIlike,
    bgCoustomeColor,
  });
  if (!skillsDBResp) {
    throw new ApiError(501, "Error while saving the skills data on the dbs");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(200, skillsDBResp, "skills data is saved on the dbs")
    );
});

const getSkillsData = asyncHandler(async (req, res) => {
  const { skillTitle } = req.body;
  await skills
    .findOne({ skillTitle })
    .then((skillData) => {
      if (!skillData) {
        throw new ApiError(400, "Skill not found in db");
      }
      return res
        .status(200)
        .json(
          new ApiResponse(200, skillData, "Return skills detail data from dbs")
        );
    })
    .catch((err) => {
      return res
        .status(501)
        .json(
          new ApiError(501, "Error return in the getSkillsData from db", err)
        );
    });
});

const getSkillsName = asyncHandler(async (req, res) => {
  const skillTags = await skills.find(
    {},
    "skillImage skillTitle bgCoustomeColor"
  );
  if (!skillTags) {
    throw new ApiError(501, "unable to fecth data from dbs");
  }
  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        skillTags,
        "successfully fetched skillImage and skillTitle"
      )
    );
});

export { getSkillsData, skillsRegister, getSkillsName };
