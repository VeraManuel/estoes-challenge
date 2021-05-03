const express = require("express");
const userServices = require("../services/usersServices");
const Success = require("../handlers/successHandler");

const getAllUsers = async (req, res, next) => {
  try {
    const response = await userServices.getUsers();

    res.json(new Success(response));
  } catch (error) {
    next();
  }
};

const userById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userServices.findUserById(id);

    res.json(new Success(user));
  } catch (error) {
    next();
  }
};

module.exports = {
  getAllUsers,
  userById,
};
