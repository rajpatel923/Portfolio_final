import mongoose, { Schema } from "mongoose";

const projectDataSchema = new Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
    require: true,
  },
  relatedSkills: {
    type: [String],
  },
  category: {
    type: String,
  },
  completedDate: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
  projectImage: {
    type: String,
    require: true,
  },
  problemDesp: {
    type: String,
  },
  problemImage: {
    type: String,
  },
  solutionDesp: {
    type: String,
  },
  solutionImage: {
    type: String,
  },
  resultDesp: {
    type: String,
  },
  resultImage: {
    type: String,
  },
});
export const ProjectData = mongoose.model("ProjectData", projectDataSchema);
