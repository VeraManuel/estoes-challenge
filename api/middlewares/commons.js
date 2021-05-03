const { validationResult } = require("express-validator");
const AppError = require("../errors/appError");

const validResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new AppError("Validation Erros", 400, errors.mapped());
  }
  next();
};

module.exports = {
  validationResult: validResult,
};
