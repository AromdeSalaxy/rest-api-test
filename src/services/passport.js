import passport from "passport";
import passportJWT from "passport-jwt";
import jwt from "jsonwebtoken";
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    (jwtPayload, cb) => {
      try {
        if (jwtPayload) {
          return cb(null, jwtPayload);
        } else {
          return cb(null, false);
        }
      } catch (error) {
        return cb(error, false);
      }
    }
  )
);

export const createToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

export const auth = passport.authenticate("jwt", { session: false });
