import { Router } from "express";
import {
  addProjectData,
  getProjectsName,
} from "../controller/projectData.controller.js";
import {
  aboutmeEdit,
  getAboutmeContent,
  getSpecializedFields,
} from "../controller/aboutme.controller.js";
import {
  getSkillsData,
  getSkillsName,
  skillsRegister,
} from "../controller/skills.controller.js";
import { upload } from "../middlerware/multer.middleware.js";

const router = Router();

router.route("/aboutMe").post(aboutmeEdit);
router.route("/aboutMe").get(getAboutmeContent);

router.route("/getProjectsName").get(getProjectsName);
router.route("/projectData").post(
  upload.fields([
    {
      name: "projectImage",
      maxCount: 1,
    },
    {
      name: "problemImage",
      maxCount: 1,
    },
    {
      name: "solutionImage",
      maxCount: 1,
    },
    {
      name: "resultImage",
      maxCount: 1,
    },
  ]),
  addProjectData
);

//adding skills to the dbs
router.route("/skillDetail").post(
  upload.fields([
    {
      name: "skillImage",
      maxCount: 1,
    },
    {
      name: "skillBodyImage",
      maxCount: 1,
    },
  ]),
  skillsRegister
);
//get the data from the dbs
router.route("/specializedFields").get(getSpecializedFields);

router.route("/getSkillTitle").get(getSkillsName);

export default router;
