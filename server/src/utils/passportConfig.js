import googleAuth from "passport-google-oauth2";
const GoogleStrategy = googleAuth.Strategy;
import { User } from "../models/User.model.js";
import passport from "passport";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_AUTH_REDIRECT,
      passReqToCallback: true,
      scope: ["profile", "email"],
    },
    async function (req, accessToken, refreshToken, profile, done) {
      try {
        const data = profile?._json;
        const user = await User.findOne({ email: data.email });

        if (!user) {
          const newUser = await User.create({
            firstname: data.given_name,
            lastname: data.family_name,
            user_image: data.picture,
            email: data.email,
          });
          return done(null, newUser);
        }
        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
