const { check } = require("express-validator");
const AppError = require("../../errors/appError");
const projectService = require("../../services/projectsServices");
const userService = require("../../services/usersServices");
const { validationResult } = require("../commons");

const _nameRequired = check("name", "Name is required").not().isEmpty();
const _nameValid = check("name", "Name must is invalid").optional().isString();
const _descriptionRequired = check("description", "Description is required")
  .not()
  .isEmpty();
const _descriptionValid = check("description", "Description is invalid")
  .optional()
  .isString();
const _idRequired = check("id").not().isEmpty();
const _idExist = check("id").custom(async (id = "") => {
  const idFound = await projectService.findProjectById(id);
  if (!idFound) {
    throw new AppError("The project does not exist in DB", 400);
  }
});
const _projectManagerRequired = check(
  "project_manager",
  "Project Manager is required"
)
  .not()
  .isEmpty();
const _projectManagerValid = check(
  "project_manager",
  "Project Manager is invalid"
).optional();
const _userIdRequired = check("userId", "UserId is required").not().isEmpty();
const _userIdExist = check("userId").custom(async (id = "") => {
  const idFound = await userService.findUserById(id);
  if (!idFound) {
    throw new AppError("The user does not exist in DB", 400);
  }
});
const _userIdValid = check("userId", "UserId is invalid").optional();
const _statusRequired = check("status", "Status is required")
  .isBoolean()
  .not()
  .isEmpty();
const _statusValid = check("status", "Status is invalid")
  .optional()
  .isBoolean();

const postRequestValidations = [
  _nameRequired,
  _descriptionRequired,
  _projectManagerRequired,
  _userIdRequired,
  _userIdExist,
  _statusRequired,
  validationResult,
];

const putRequestValidations = [
  _idRequired,
  _idExist,
  _nameValid,
  _descriptionValid,
  _projectManagerValid,
  _userIdExist,
  _userIdValid,
  _statusValid,
  validationResult,
];

const deleteRequestValidations = [_idRequired, _idExist, validationResult];

const getRequestValidations = [_idRequired, _idExist, validationResult];

module.exports = {
  postRequestValidations,
  putRequestValidations,
  deleteRequestValidations,
  getRequestValidations,
};
