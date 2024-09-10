import epxress from "express";
import { AuthenticateUser } from "../middlerware/passport.Auth.middleware.js";
import { ApiError } from "../utils/ApiError.js";
import { error } from "console";
("../middlerware/passport.Auth.middleware.js");

const AdminRouter = epxress.Router();

AdminRouter.route("/api/user").get((req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    throw new ApiError(401, "Not authenticated", "Try again");
  }
});

export { AdminRouter };
