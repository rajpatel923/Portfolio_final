import {Router} from "express"
import {addSkill, getAllSkills} from "../controller/skills.controller.js"
import { addProjectData } from "../controller/projectData.controller.js";

const router = Router();
router.route("/skills").post(addSkill)
router.route("/projectData").post(addProjectData)
router.route("/skills").get(getAllSkills)

export default router