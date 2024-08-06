import { Router } from "express";
import { addProjectData } from "../controller/projectData.controller.js";
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

router.route("/projectData").post(addProjectData);
router.route("/aboutMe").post(aboutmeEdit);
router.route("/aboutMe").get(getAboutmeContent);
router.route("/skillDetail").get(getSkillsData);
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
