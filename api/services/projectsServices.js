const { Project } = require("../models");
const db = require("../models");
const Op = db.Sequelize.Op;
const logger = require("../loaders/logger");
const AppError = require("../errors/appError");

const create = async (name, description, project_manager, userId, status) => {
  try {
    const newProject = await Project.create({
      name,
      description,
      project_manager,
      userId,
      status,
    });

    return newProject;
  } catch (err) {
    throw new AppError();
  }
};

const getAll = async (name) => {
  let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  try {
    const projects = await Project.findAll({ where: condition, include: db.User });

    return projects;
  } catch (err) {
    console.log(err);
    throw new AppError();
  }
};

const update = async (
  id,
  name,
  description,
  project_manager,
  userId,
  status
) => {
  try {
    const findProject = await Project.findByPk(id);

    if (!findProject) {
      throw new AppError("Project not found!", 404);
    }

    findProject.name = name;
    findProject.description = description;
    findProject.project_manager = project_manager;
    findProject.userId = userId;
    findProject.status = status;

    return await findProject.save();
  } catch (err) {
    throw new AppError();
  }
};

const deleteById = async (id) => {
  try {
    const findProject = await Project.findByPk(id);

    return await findProject.destroy();
  } catch (err) {
    throw new AppError();
  }
};

const findProjectById = async (id) => {
  try {
    const findProject = await Project.findByPk(id);

    if (!findProject) {
      throw new AppError();
    }

    return findProject;
  } catch (err) {
    throw new AppError();
  }
};

module.exports = {
  create,
  getAll,
  update,
  deleteById,
  findProjectById,
};
