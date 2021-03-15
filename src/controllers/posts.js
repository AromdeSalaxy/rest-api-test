import {
  resSuccess,
  resError,
  resNotFound,
  resForbidden,
  resCreated,
  resUpdated,
  resDeleted,
} from "../services/response";
import Users from "../models/users";
import Posts from "../models/posts";

export const create = async (req, res) => {
  try {
    const { title, message } = req.body;
    const post = await Posts.create({
      user_id: req.user.id,
      title,
      message,
    });

    return resCreated({ res, result: post });
  } catch (error) {
    return resError({ res, error });
  }
};

export const update = async (req, res) => {
  try {
    const { title, message, post_id } = req.body;
    const post = await Posts.update(
      { title, message },
      {
        where: { id: post_id },
        returning: true,
      }
    );

    if (post[[1]].length < 1) {
      return resNotFound({ res });
    }

    return resUpdated({ res, result: post[[1]] });
  } catch (error) {
    return resError({ res, error });
  }
};

export const destroy = async (req, res) => {
  try {
    const { post_id } = req.body;
    await Posts.destroy({
      where: { id: post_id },
    });

    return resDeleted({ res });
  } catch (error) {
    return resError({ res, error });
  }
};

export const getAll = async (req, res) => {
  try {
    const posts = await Posts.findAll();

    return resCreated({ res, result: posts });
  } catch (error) {
    return resError({ res, error });
  }
};

export const getById = async (req, res) => {
  try {
    const { post_id } = req.params;
    const post = await Posts.findOne({ where: { id: post_id } });

    return resCreated({ res, result: post });
  } catch (error) {
    return resError({ res, error });
  }
};
