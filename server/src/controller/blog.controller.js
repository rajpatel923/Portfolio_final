import { blog } from "../models/Blog.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addBlog = asyncHandler(async (req, res) => {
  const { title, category } = req.body;
  const date = Date.now();

  if (
    title === "" ||
    category === "" ||
    title == undefined ||
    category == undefined
  ) {
    throw new ApiError(401, "You need to add title and category");
  }

  const _blog = blog.findOne({ title });

  if (!_blog) {
    throw new ApiError(401, "Blog with the same still is avaible in the Db");
  }

  const addBlog = blog.create({
    title,
    category,
    date,
  });

  if (!addBlog) {
    throw new ApiError(501, "Had error while saving data to the DB");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, addBlog, "Blog is successfully added to the Db")
    );
});

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await blog.find({});

  if (!blogs) {
    throw new ApiError(501, "Unable to get data from DB");
  }
  res.status(200).json(new ApiResponse(200, blogs, "Successful to get data"));
});
export { addBlog, getBlogs };
