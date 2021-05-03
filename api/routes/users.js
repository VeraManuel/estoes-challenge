const { Router } = require("express");
const { getRequestValidations } = require("../middlewares/users");
const { getAllUsers, userById } = require("../controllers/users");

const router = Router();

router.get("/", getAllUsers);

router.get("/:id", getRequestValidations, userById);

module.exports = router;
