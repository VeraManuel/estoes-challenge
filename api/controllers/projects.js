const express = require("express");
const projectsServices = require("../services/projectsServices");
const Success = require("../handlers/successHandler");

const createProject = async (req, res, next) => {
  const { name, description, project_manager, userId, status } = req.body;
  try {
    const newProject = await projectsServices.create(
      name,
      description,
      project_manager,
      userId,
      status
    );

    res.json(new Success(newProject));
  } catch (error) {
    next();
  }
};

const getAllProjects = async (req, res, next) => {
  const name = req.query.name;
  try {
    const projects = await projectsServices.getAll(name);

    res.json(new Success(projects));
  } catch (error) {
    next();
  }
};

const updateProject = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, project_manager, userId, status } = req.body;
  try {
    const response = await projectsServices.update(
      id,
      name,
      description,
      project_manager,
      userId,
      status
    );

    return res.json(new Success(response));
  } catch (error) {
    next();
  }
};

const deleteProject = async (req, res, next) => {
  const { id } = req.params;
  try {
    await projectsServices.deleteById(id);

    res.json(new Success(`Project with id ${id} successfully deleted!`));
  } catch (error) {
    next();
  }
};

const projectById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await projectsServices.findProjectById(id);

    res.json(new Success(response));
  } catch (error) {
    next();
  }
};

module.exports = {
  createProject,
  getAllProjects,
  updateProject,
  deleteProject,
  projectById,
};
