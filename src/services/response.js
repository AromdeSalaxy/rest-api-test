import { logger } from "./logger";

export const resSuccess = ({ res, result, msg, opt }) => {
  return res.status(200).json({
    code: 1,
    result: result,
    message: msg || `successfuly`,
    ...opt,
  });
};

export const resCreated = ({ res, result, msg, opt }) => {
  return res.status(201).json({
    code: 1,
    result: result,
    message: msg || `created`,
    ...opt,
  });
};

export const resUpdated = ({ res, result, msg, opt, prefix }) => {
  return res.status(200).json({
    code: 1,
    result: result,
    message: msg || `updated`,
    ...opt,
  });
};

export const resDeleted = ({ res, result, msg, opt, prefix }) => {
  return res.status(200).json({
    code: 1,
    result: result,
    message: msg || `deleted`,
    ...opt,
  });
};

export const resNotFound = ({ res, result, msg, opt, error }) => {
  return res.status(404).json({
    code: 0,
    error: error?.message || error,
    result: result,
    message: msg || "not found",
    ...opt,
  });
};

export const resForbidden = ({ res, error, msg }) => {
  return res.status(403).json({
    code: 0,
    error: error?.message || error,
    message: msg || RESPONSE.FAILGURE,
  });
};

export const resError = ({ res, error, msg }) => {
  logger.error(error);
  return res.status(400).json({
    code: 0,
    error: error?.message || error,
    message: msg || "error",
  });
};
