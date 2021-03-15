import {
  resSuccess,
  resError,
  resNotFound,
  resForbidden,
} from "../services/response";
import Users from "../models/users";

export const getProfile = async (req, res) => {
  try {
    const user = await Users.findOne({ where: { id: req.user.id } });
    delete user.dataValues.password;

    return resSuccess({ res, result: user });
  } catch (error) {
    return resError({ res, error });
  }
};
