import {Router} from "express"
import { addProjectData } from "../controller/projectData.controller.js";
import { aboutmeEdit, getAboutmeContent, getSpecializedFields } from "../controller/aboutme.controller.js";
import { getSkillsData, skillsRegister } from "../controller/skills.controller.js";

const router = Router();

router.route("/projectData").post(addProjectData)
router.route("/aboutMe").post(aboutmeEdit)
router.route("/aboutMe").get(getAboutmeContent)
router.route("/skillDetail").get(getSkillsData)
router.route("/skillDetail").post(skillsRegister)
router.route("/specializedFields").get(getSpecializedFields)

export default router