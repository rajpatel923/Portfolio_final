import epxress from "express";
import { AuthenticateUser } from "../middlerware/passport.Auth.middleware.js";
("../middlerware/passport.Auth.middleware.js");

const AdminRouter = epxress.Router();

AdminRouter.route("/api/user").get((req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ error: "User not authenticated" });
  }
});

export { AdminRouter };
