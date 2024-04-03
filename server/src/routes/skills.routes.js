import {Router} from "express"
import {addSkill} from "../controller/skills.controller.js"

const router = Router();
router.route("/addingSkill").post(addSkill)

export default router