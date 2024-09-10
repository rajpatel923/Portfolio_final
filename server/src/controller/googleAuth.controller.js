import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import { User } from "../models/User.model.js";

const loginSucess = asyncHandler(async (req, res) => {
  if (req.user) {
    const findUser = await User.findOne({ email: req.user.email });
    if (findUser) {
      //todo below code finds the user and send the info to the fontend
      //todo to send infomation to the frontend, send it with token with cookie or in the header
      res.redirect(`${process.env.FRONTEND_HOME_PAGE}admin/dashboard`);
    }
  } else {
    throw new Error("Something when wrong!");
  }
});

const loginFail = asyncHandler(async (req, res) => {
  res.status(401).json({
    status: false,
    message: "Login failed",
  });
});

const logout = asyncHandler(async (req, res) => {
  req.logout((err) => {
    console.log("Logged out");
    if (err) return next(err);
  });
  res.redirect("/");
});

export { loginFail, loginSucess, logout };
