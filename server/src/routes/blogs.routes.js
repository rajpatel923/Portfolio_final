import express from "express";
import { addBlog, getBlogs } from "../controller/blog.controller.js";
import { upload } from "../middlerware/multer.middleware.js";
const BlogRoutes = express.Router();

BlogRoutes.route("/addBlog").post(upload.fields([]), addBlog);
BlogRoutes.route("/getBlogs").get(getBlogs);

export { BlogRoutes };
