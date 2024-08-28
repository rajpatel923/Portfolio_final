import epxress from "express";
import { AuthenticateUser } from "../middlerware/passport.Auth.middleware.js";
("../middlerware/passport.Auth.middleware.js");

const userRouter2 = epxress.Router();

userRouter2.route("/api/user").get((req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ error: "User not authenticated" });
  }
});

export { userRouter2 };
