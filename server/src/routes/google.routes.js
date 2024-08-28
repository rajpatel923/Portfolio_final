import express from "express";
import passport from "passport";

const googleRouter = express.Router();

import {
  loginFail,
  loginSucess,
  logout,
} from "../controller/googleAuth.controller.js";

googleRouter.route("/login/success").get(loginSucess);
googleRouter.route("/login/failed").get(loginFail);
googleRouter.route("/auth/logout").get(logout);
googleRouter.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
googleRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/login/success",
    failureRedirect: "/login/failed",
  })
);

export { googleRouter };
