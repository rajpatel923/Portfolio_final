import express from "express";
import { addBlog, getBlogs, getBlogById } from "../controller/blog.controller.js";
import { upload } from "../middlerware/multer.middleware.js";
import { isAdmin } from "../middlerware/isAdmin.middleware.js";
const BlogRoutes = express.Router();

BlogRoutes.route("/addBlog").post(
  isAdmin,
  upload.fields([{ name: "coverImage", maxCount: 1 }]),
  addBlog
);
BlogRoutes.route("/getBlogs").get(getBlogs);
BlogRoutes.route("/getBlogs/:id").get(getBlogById);

export { BlogRoutes };
