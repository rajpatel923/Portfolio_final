import { asyncHandler } from "../utils/asyncHandler.js";

import { User } from "../models/User.model.js";

const loginSucess = asyncHandler(async (req, res) => {
  if (req.user) {
    console.log(req.user);
    const findUser = await User.findOne({ email: req.user.email });
    if (findUser) {
      return res.status(200).json({
        status: true,
        message: "Login Successful",
        username: findUser?.firstname + " " + findUser?.lastname,
        user_image: findUser?.user_image,
        auth: "google",
      });
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
