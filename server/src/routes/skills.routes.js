import {Router} from "express"
import {addSkill, getAllSkills} from "../controller/skills.controller.js"
import { addProjectData } from "../controller/projectData.controller.js";

const router = Router();
router.route("/addingSkill").post(addSkill)
router.route("/addingProjectData").post(addProjectData)
router.route("/getAllSkills").get(getAllSkills)

export default router