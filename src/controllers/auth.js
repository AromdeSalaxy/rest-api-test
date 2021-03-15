import {
  resSuccess,
  resError,
  resNotFound,
  resForbidden,
} from "../services/response";
import Users from "../models/users";
import { checkPassword, hashPassword } from "../services/bcrypt";
import { createToken } from "../services/passport";

export const register = async (req, res) => {
  try {
    const { email, first_name, last_name, password } = req.body;

    const user = await Users.create({
      email,
      first_name,
      last_name,
      password: await hashPassword(password),
    });

    return resSuccess({ res, result: user });
  } catch (error) {
    return resError({ res, error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({
      where: {
        email,
      },
    });

    if (user) {
      const psw = await checkPassword(password, user.password);
      if (!psw) {
        return resForbidden({ res, msg: "password not match!" });
      }
    } else {
      return resNotFound({ res });
    }

    const authToken = createToken({
      id: user.id,
      email: user.email,
    });

    delete user.dataValues.password;

    return resSuccess({ res, result: { user, token: `Bearer ${authToken}` } });
  } catch (error) {
    return resError({ res, error });
  }
};
