const { check } = require("express-validator");
const AppError = require("../../errors/appError");
const userService = require("../../services/usersServices");
const { validationResult } = require("../commons");

const _idRequired = check("id", "Id is required").not().isEmpty();
const _idExist = check("id").custom(async (id = "") => {
  const idFound = await userService.findUserById(id);
  if (!idFound) {
    throw new AppError("The project does not exist in DB", 400);
  }
});

const getRequestValidations = [_idRequired, _idExist, validationResult];

module.exports = {
  getRequestValidations,
};
