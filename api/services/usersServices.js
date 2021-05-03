const { User } = require("../models");
const logger = require("../loaders/logger");
const AppError = require("../errors/appError");

const getUsers = async () => {
  try {
    const findUsers = await User.findAll();

    return findUsers;
  } catch (err) {
    throw new AppError();
  }
};

const findUserById = async (id) => {
  try {
    const findUser = await User.findByPk(id);

    if (!findUser) {
      throw new AppError();
    }

    return findUser;
  } catch (err) {
    throw new AppError();
  }
};

module.exports = {
  getUsers,
  findUserById,
};
