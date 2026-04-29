import { blog } from "../models/Blog.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { upLoadFileOnCloudinary } from "../utils/cloudinary.js";

const addBlog = asyncHandler(async (req, res) => {
  const { title, category, content } = req.body;
  const date = Date.now();

  if (
    title === "" ||
    category === "" ||
    title == undefined ||
    category == undefined
  ) {
    throw new ApiError(401, "You need to add title and category");
  }

  const _blog = await blog.findOne({ title });

  if (_blog) {
    throw new ApiError(401, "Blog with the same title is already in the DB");
  }

  const coverImageBuffer = req.files?.coverImage?.[0]?.buffer;
  let coverImageUrl;
  if (coverImageBuffer) {
    const uploaded = await upLoadFileOnCloudinary(coverImageBuffer);
    if (!uploaded) {
      throw new ApiError(501, "Error uploading cover image to Cloudinary");
    }
    coverImageUrl = uploaded.url;
  }

  const newBlog = await blog.create({
    title,
    category,
    date,
    content,
    ...(coverImageUrl && { coverImage: coverImageUrl }),
  });

  if (!newBlog) {
    throw new ApiError(501, "Had error while saving data to the DB");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, newBlog, "Blog is successfully added to the Db")
    );
});

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await blog.find({});

  if (!blogs) {
    throw new ApiError(501, "Unable to get data from DB");
  }
  res.status(200).json(new ApiResponse(200, blogs, "Successful to get data"));
});

const getBlogById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const foundBlog = await blog.findById(id);
  if (!foundBlog) {
    throw new ApiError(404, "Blog not found");
  }
  res.status(200).json(new ApiResponse(200, foundBlog, "Blog fetched successfully"));
});

export { addBlog, getBlogs, getBlogById };
