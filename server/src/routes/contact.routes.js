import express from "express";
import { sendMail } from "../controller/sendMail.controller.js";
const router = express.Router();

router.route("/sendMail").post(sendMail);

export default router;
