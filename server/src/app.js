import express from "express";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import "./utils/passportConfig.js";
import path from "path";

const app = express();

const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, "/dist")));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URL,
      ttl: 12 * 60 * 60,
    }),
    cookie: { maxAge: 12 * 60 * 60 * 1000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
); //for configurating url: (chaning some text in the url);
app.use(express.static("public")); //for storing files and anything into local server: link on public

import userRouter from "./routes/skills.routes.js";
import contactRouter from "./routes/contact.routes.js";
import { googleRouter } from "./routes/google.routes.js";
import { AdminRouter } from "./routes/user.routes.js";
import { BlogRoutes } from "./routes/blogs.routes.js";
app.use("/api/v1/users", userRouter);
app.use("/api/v1/contactMe", contactRouter);
app.use("/", googleRouter);
app.use("/api/v1", AdminRouter);
app.use("/api/v1", BlogRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "dist", "index.html"));
});

export { app };
