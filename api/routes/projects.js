const { Router } = require("express");
const {
  postRequestValidations,
  putRequestValidations,
  deleteRequestValidations,
  getRequestValidations,
} = require("../middlewares/projects");
const {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  projectById,
} = require("../controllers/projects");

const router = Router();

router.get("/", getAllProjects);

router.get("/:id", getRequestValidations, projectById);

router.post("/", postRequestValidations, createProject);

router.put("/:id", putRequestValidations, updateProject);

router.delete("/:id", deleteRequestValidations, deleteProject);

module.exports = router;
